import "./globals.css";
import Navbar from "../app/components/navbar";
import Footer from "../app/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <div className=" bg-black">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
