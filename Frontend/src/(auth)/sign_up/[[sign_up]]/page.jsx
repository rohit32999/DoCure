import { SignUp } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";
export default function Page() {
  return (
    <div className="flex items-center justify-center pt-20 pb-20">
      <SignUp appearance={{ baseTheme: dark }}/>
    </div>
  );
}