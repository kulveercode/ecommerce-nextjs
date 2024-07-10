import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Wrapper from "../../components/Wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ecommerce nextjs",
  description: "Ecommerce Website by using nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Wrapper>
      <Header />
      {children}
      <Footer />
      </Wrapper>
      </body>
    </html>
  );
}
