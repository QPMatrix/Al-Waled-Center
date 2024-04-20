import Navbar from "@/components/navigation/navbar";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider, useMessages } from "next-intl";
import Footer from "@/components/footer/footer";
import { ClerkProvider } from "@clerk/nextjs";
import { heIL, arSA } from "@clerk/localizations";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
  };
}

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();

  unstable_setRequestLocale(locale);

  return (
    <ClerkProvider localization={locale === "he" ? heIL : arSA}>
      <html lang={locale} suppressHydrationWarning>
        <body suppressHydrationWarning className="flex flex-col min-h-screen">
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Navbar locale={locale} />
            <main className="flex-grow">{children}</main>
            <Footer locale={locale} />
          </NextIntlClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
