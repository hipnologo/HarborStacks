// app/layout.tsx
// import { Providers } from './providers'
// import { Inter } from 'next/font/google'
// import '@/styles/globals.css'

// const inter = Inter({ subsets: ['latin'] })

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={inter.className}>
//         <Providers>
//           {children}
//         </Providers>
//       </body>
//     </html>
//   )
// }
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css';
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HarborStacks",
  description: "Deploy and manage Docker services with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}