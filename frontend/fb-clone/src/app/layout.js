// import Header from './components/Header';
// "use cilent";
import "./globals.css";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";

const geistSans = localFont({
  src: "./fonts/Geistvf/geist-variablefont_wght-webfont.woff2", // Adjust path as per your file structure
  variable: "--font-geist-sans",
});

const geistMono = localFont({
  src: "./fonts/Geistmonovf/geistmono-variablefont_wght-webfont.woff2", // Adjust path as per your file structure
  variable: "--font-geist-mono",
});

export const metadata = {
  title: "Facebook",
  description: "Making clone of Facebook",
};

export default function RootLayout({ children }) {
  return (
    // <html lang="en">
    //   <body
    //     className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    //   >
    //     {/* <ThemeProvider attribute="class"> */}
    //     <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
    //     {children}
    //     </ThemeProvider>

    //   </body>
    // </html>
    
    <html lang="en" suppressHydrationWarning>
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <ThemeProvider
        attribute="class"
        defaultTheme="light" // Ensure consistent default
        enableSystem={false} // Disable system preference to test stability
      >
        {/* <Header/> */}
        {children}
      </ThemeProvider>
    </body>
  </html>
  );
}
