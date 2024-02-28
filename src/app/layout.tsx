import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { LayoutProvider } from "@/lib/LayoutContext";
import SiteNavigation from "@/components/navigation";

// const inter = Inter({ subsets: ["latin"] });

{
  /* <title>Theodore Zurek-Dunne</title>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<meta name="description" content="I believe in creating awesome accessible, human-centered experiences and writing clean and concise code. I love a good challenge and learning new technologies."/>
<meta name="keywords" content='developer, designer, theodore, zurek, zurek-dunne, theodore zurek, theodore zd'/>

<meta property="og:title" content='Theodore Zurek-Dunne'/>
<meta property="og:description" content='I believe in creating awesome accessible, human-centered experiences and writing clean and concise code. I love a good challenge and learning new technologies.'/>
<meta property="og:type" content="website" />
<meta property="og:image" content='/Kato_CMS.jpg' />
<meta property="og:url" content='https://zurekcreative.com/'/>
<meta name="twitter:card" content="summary_large_image"/>
<meta property="og:site_name" content="Theodore Zurek-Dunne"/>
<link
  rel="apple-touch-icon"
  sizes="180x180"
  href="/apple-touch-icon.png"
/>
<link
  rel="icon"
  type="image/png"
  sizes="32x32"
  href="/favicon-32x32.png"
/>
<link
  rel="icon"
  type="image/png"
  sizes="16x16"
  href="/favicon-16x16.png"
/>
<link rel="manifest" href="/site.webmanifest" />

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link
  rel="preconnect"
  href="https://fonts.gstatic.com"
  crossOrigin="true"
/>
<link
  href="https://fonts.googleapis.com/css2?family=Karla:wght@500;600;700;800;900&family=Roboto+Slab:wght@400;500;600;700;800&display=swap"
  rel="stylesheet"
/>
<script
  src="https://cdn.socket.io/4.4.0/socket.io.min.js"
  integrity="sha384-1fOn6VtTq3PWwfsOrk45LnYcGosJwzMHv+Xh/Jx5303FVOXzEnw0EpLv30mtjmlj"
  crossOrigin="anonymous"
/> */
}

export const metadata: Metadata = {
  title: "Theodore Zurek-Dunne",
  description:
    "I believe in creating awesome accessible, human-centered experiences and writing clean and concise code. I love a good challenge and learning new technologies.",
  keywords:
    "developer,full-stack, toronto, torono, full-stack developer, develoepr, javascript, typescript, react, designer, theodore, zurek, zurek-dunne, theodore zurek, theodore zd",
  // ogTitle: "Theodore Zurek-Dunne",
  // ogDescription:
  //   "I believe in creating awesome accessible, human-centered experiences and writing clean and concise code. I love a good challenge and learning new technologies.",
  // ogType: "website",
  // ogImage: "/Kato_CMS.jpg",
  // ogUrl: "https://zurekcreative.com/",
  // twitterCard: "summary_large_image",
  // ogSiteName: "Theodore Zurek-Dunne",
  // appleTouchIcon: "/apple-touch-icon.png",
  // favicon32: "/favicon-32x32.png",
  // favicon16: "/favicon-16x16.png",
  // siteManifest: "/site.webmanifest",
  // preconnect: "https://fonts.googleapis.com",
  // preconnectCrossOrigin: "https://fonts.gstatic.com",
  // fontLink:
  //   "https://fonts.googleapis.com/css2?family=Karla:wght@500;600;700;800;900&family=Roboto+Slab:wght@400;500;600;700;800&display=swap",
  // socketIo: "https://cdn.socket.io/4.4.0/socket.io.min.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      // className={inter.className}
      >
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  );
}
