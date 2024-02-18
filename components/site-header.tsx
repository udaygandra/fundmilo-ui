"use client";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { siteConfig } from "@/config/site";
import { Button, buttonVariants } from "@/components/ui/button";
import { UserAccountNav } from "@/components/user-account-nav";
import { Icons } from "@/components/icons";
import { MainNav } from "@/components/main-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { PostCreateButton } from "./post-create-button";

export function SiteHeader() {
  const { data: session } = useSession();
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <div className="sticky m-10">
            {/* <PostCreateButton/> */}
            </div>
            {!session && (
              <Link href="/login">
                {" "}
                <Button variant="default" size="sm">
                  Login
                </Button>
              </Link>
            )}
          {session && <UserAccountNav
            user={{
              name: session?.user.name,
              image: session?.user.image,
              email: session?.user.email,
            }}
          />}
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
