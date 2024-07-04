"use client";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { MenuIcon, Scissors } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import SideMenu from "./side-menu";
import Link from "next/link";

const Header = () => {
  return (
    <Card>
      <CardContent className="p-5 justify-between flex flex-row">
        <Link href="/">
          <div className="flex flex-row items-center ">
            <Scissors size={30} className="text-primary" />
            <h1 className="font-bold md:text-2xl text-lg md:p-0 py-1 text-wrap flex text-secondary-foreground ">
              <p className="font-semi text-primary">Sharpcut</p>z
            </h1>
          </div>
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <MenuIcon size={18} />
            </Button>
          </SheetTrigger>
          <SheetContent className="p-0">
            <SideMenu />
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  );
};

export default Header;
