import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    metadataBase: new URL("http://localhost:3000"),
    title: {
        template: "%s | シンプルなコーポレートサイト",
        default: "シンプルなコーポレートサイト",
    },
    description: "testDesc",
    openGraph: {
        title: "シンプルなコーポレートサイト",
        description: "ogpTestDesc",
        images: ["/ogp.png"],
    },
    alternates: {
        canonical: "http://localhost:3000",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
