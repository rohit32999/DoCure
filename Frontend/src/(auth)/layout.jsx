import React from "react";
import { ClerkProvider } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
    publishableKey={process.env.REACT_APP_CLERK_PUBLISHABLE_KEY}
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body className={`${inter.className} bg-dark-1`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
