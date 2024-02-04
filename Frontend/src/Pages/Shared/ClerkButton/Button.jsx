import { SignInButton, SignedOut } from "@clerk/clerk-react";

const ClerkBtn = () => {
  return (
    <>
      <SignedOut>
          <SignInButton redirectUrl='/' />
      </SignedOut>
    </>
  );
};

export default ClerkBtn;