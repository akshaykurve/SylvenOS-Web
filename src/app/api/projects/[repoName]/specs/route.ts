import { NextResponse } from "next/server";
import { Octokit } from "@octokit/rest";

// 1. Next.js Route Revalidation (1 hour default cache)
export const revalidate = 3600;

// Unify env variable check so auth works regardless of PAT naming
const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN || process.env.GITHUB_ACCESS_TOKEN,
});

const ORG_NAME = "sylvenos";

// 2. Extract static fallback to avoid re-allocating memory on every request
const DEFAULT_FALLBACK_SPEC = {
  overview: "System framework utility layer under active architecture design.",
  goals: [
    "Expand unit testing parameters",
    "Expose structured configuration interfaces",
  ],
  features: [
    "Modular runtime configuration settings",
    "Standardized ecosystem logging",
  ],
  architecture: [
    {
      layer: "Core Engine",
      description: "Standard asynchronous execution architecture.",
    },
  ],
  contributionGuide:
    "Standard fork-and-pull workflow applies. Submit PRs against the main staging branch.",
};

// 3. Helper to safely decode Base64 in both Node and Cloudflare Edge runtimes
function decodeBase64Utf8(base64Str: string): string {
  const cleanBase64 = base64Str.replace(/\n/g, "");
  if (typeof Buffer !== "undefined") {
    return Buffer.from(cleanBase64, "base64").toString("utf-8");
  }
  // Edge runtime fallback using Web API
  const binary = atob(cleanBase64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return new TextDecoder().decode(bytes);
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ repoName: string }> }
) {
  const { repoName } = await params;

  try {
    const response = await octokit.rest.repos.getContent({
      owner: ORG_NAME,
      repo: repoName,
      path: ".github/project-spec.json",
    });

    if (!Array.isArray(response.data) && response.data.type === "file") {
      const decodedContent = decodeBase64Utf8(response.data.content);
      const parsedSpec = JSON.parse(decodedContent);

      return NextResponse.json(
        { success: true, spec: parsedSpec },
        {
          headers: {
            // Cache valid responses at Cloudflare Edge for 1 hour
            "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
          },
        }
      );
    }

    throw new Error("Target file path is not structured as a standard flat file context.");
  } catch (error: any) {
    // Clean log handling: 404 is normal for repos without a custom spec file
    if (error.status === 404) {
      console.info(`No custom spec file found for repo '${repoName}'. Using default spec.`);
    } else {
      console.warn(`Spec resolution failed for repo '${repoName}':`, error.message || error);
    }

    // Return default spec with a shorter cache (5 min) so newly committed specs reflect quickly
    return NextResponse.json(
      {
        success: false,
        spec: DEFAULT_FALLBACK_SPEC,
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=300, stale-while-revalidate=3600",
        },
      }
    );
  }
}