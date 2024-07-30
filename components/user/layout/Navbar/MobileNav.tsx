"use client";

import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/user/ui/sheet";
import { ModeToggle } from "../Mode-Toggle";
import { Menu } from "lucide-react";
import { buttonVariants } from "@/components/user/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { RouteProps } from "@/lib/types";

interface IMobileNavProps {
  routeList: RouteProps[];
}

const MobileNav = ({ routeList }: IMobileNavProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  return (
    <>
      {/* mobile */}
      <span className="flex md:hidden">
        <ModeToggle />

        <Sheet open={isOpen} onOpenChange={handleOpenChange}>
          <SheetTrigger className="px-2">
            <Menu className="flex md:hidden h-5 w-5" />
          </SheetTrigger>

          <SheetContent side={"left"}>
            <SheetHeader>
              <SheetTitle className="font-bold text-xl">
                Shadcn/React
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col justify-center items-center gap-2 mt-4">
              {routeList.map(({ href, label }: RouteProps) => (
                <a
                  rel="noreferrer noopener"
                  key={label}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={buttonVariants({ variant: "ghost" })}
                >
                  {label}
                </a>
              ))}
              <a
                rel="noreferrer noopener"
                href="https://github.com/leoMirandaa/shadcn-landing-page.git"
                target="_blank"
                className={`w-[110px] border ${buttonVariants({
                  variant: "secondary",
                })}`}
              >
                <GitHubLogoIcon className="mr-2 w-5 h-5" />
                Github
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </span>
    </>
  );
};

export default MobileNav;
