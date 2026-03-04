import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>

        {children}

        <div className="fixed bottom-4 right-4 text-sm text-gray-400">
          Created with ❤️ by <span className="text-white font-semibold">Akshit Sinha</span>
        </div>

      </body>
    </html>
  );
}