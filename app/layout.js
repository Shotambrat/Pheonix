import "@/app/globals.css"
import Header from  "@/app/_components/Header/Header"
// import Footer from "@/app/_components/Footer"

export const metadata = {
  title: {
    template: "%s",
    default: "Yuma Bio"
  },
  description: "Yuma Bio - Экология"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}