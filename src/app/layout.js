import { Inter } from "next/font/google";
import Head from "next/head"; // Import Head component
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PG-AGI",
  description: "At PGAGI, we believe in a future where AI and human intelligence coexist in harmony, creating a world that is smarter, faster, and better. We are not just building AI. we are shaping a future where AI is a fundamental and positive force for businesses.",
  tag: "hello2"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <link rel="icon" href="/images/pgagi.png" /> {/* Link to the favicon */}
        <meta name="description" content={metadata.description} />
        <meta name="tag" content={metadata.tag} />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
