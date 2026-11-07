/**
 * GitHub serves avatars at any size via the `s` query param. Without it you
 * download the full-size image (often 400px+) for a 36px circle.
 * Request 2x the CSS size so it stays sharp on high-density screens.
 */
export function avatarSrc(url: string, cssPx: number): string {
  try {
    const u = new URL(url);
    u.searchParams.set("s", String(Math.round(cssPx * 2)));
    return u.toString();
  } catch {
    return url;
  }
}
