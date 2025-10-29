import "./globals.css";

export const metadata = {
  title: "Vedant Enterprises",
  description: "Vedant Enterprises - Your trusted partner",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
