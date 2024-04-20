import createMiddleware from "next-intl/middleware";
import { authMiddleware } from "@clerk/nextjs";
const intlMiddleware = createMiddleware({
  locales: ["ar", "he"],

  defaultLocale: "he",
});
export default authMiddleware({
  beforeAuth: (req) => {
    return intlMiddleware(req);
  },
  publicRoutes: (req) => !req.url.includes("/admin"),
});
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next|admin).*)", "/", "/(api|trpc)(.*)"],
};
