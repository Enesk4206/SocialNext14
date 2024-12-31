import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { SignInButton, SignOutButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
    <div className="m-4">

    <SignedOut>
        <SignInButton mode="modal">
          <Button>
            Giriş Yap
          </Button>
        </SignInButton>
    </SignedOut>
    <SignedIn>
        <UserButton/>
      </SignedIn>
      
      <ModeToggle />
    </div>
  );
}
