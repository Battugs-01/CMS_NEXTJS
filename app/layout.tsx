import { ModalProvider } from "@/providers/modal-providers";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { ToasterProvider } from "@/providers/toast-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <div>
            <ToasterProvider />
            <ModalProvider />
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
