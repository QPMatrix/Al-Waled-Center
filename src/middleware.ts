import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["ar", "he"],

  defaultLocale: "he",
});

export const config = {
  matcher: ["/", "/(he|ar)/:path*"],
};
