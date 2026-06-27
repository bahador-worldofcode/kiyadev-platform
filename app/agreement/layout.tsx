import { Metadata } from "next";

// این کد به صورت قطعی به موتورهای جستجو دستور میده که این صفحه و لینک‌های داخلش رو ایندکس نکنند
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function AgreementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}