import { NextResponse, type NextRequest } from "next/server"

const CANONICAL_HOST = "developerstech.space"

/**
 * The deployment answers on several hostnames: the custom domain, the old
 * vercel.app subdomain, and the auto generated project URLs. Google treats
 * each of those as a separate site serving identical content, which is what
 * "Duplicate without user-selected canonical" reports.
 *
 * Every production request on a non canonical host is permanently redirected
 * to the custom domain, path and query preserved. Preview deployments are
 * left alone so branch testing still works.
 */
export function middleware(request: NextRequest) {
  if (process.env.VERCEL_ENV !== "production") return NextResponse.next()

  const host = request.headers.get("host") ?? ""
  if (host === CANONICAL_HOST) return NextResponse.next()

  const url = request.nextUrl.clone()
  url.host = CANONICAL_HOST
  url.protocol = "https"
  url.port = ""

  return NextResponse.redirect(url, 308)
}

export const config = {
  matcher: [
    // everything except Next internals, the API, and static asset files
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|txt|xml|webmanifest)$).*)",
  ],
}
