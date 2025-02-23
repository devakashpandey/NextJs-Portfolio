import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Akash Pandey",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <Head>
        <title>Akash Pandey</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      </Head> */}
      <body>{children}</body>
    </html>
  );
}
