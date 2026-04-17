import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Final Time (ACU Classroom Game)",
  description:
    "Final Time is a retro 2D side-scrolling educational game concept for Arizona Christian University classrooms."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
