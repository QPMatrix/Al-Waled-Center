import createMiddleware from "next-intl/middleware";
import { authMiddleware } from "@clerk/nextjs";
const intlMiddleware = createMiddleware({
  locales: ["ar", "he"],

  defaultLocale: "he",
});
export default authMiddleware({
  beforeAuth: (req) => {
    if (!req.url.includes("/admin")) {
      return intlMiddleware(req);
    }
  },
  publicRoutes: (req) => !req.url.includes("/admin"),
});
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next|favicon.ico).*)", "/", "/(api|trpc)(.*)"],
};
