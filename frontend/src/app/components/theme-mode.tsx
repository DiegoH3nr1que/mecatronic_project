"use client";

import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  UserPlus,
  Moon,
  Sun
} from "lucide-react";
import * as React from "react";
import { useTheme } from "next-themes";
import {
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>
        <UserPlus className="mr-2 h-4 w-4" />
        <span>Theme</span>
      </DropdownMenuSubTrigger>
      <DropdownMenuPortal>
        <DropdownMenuSubContent className="max-h-60 overflow-y-auto">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            <span>Light</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            <span>Dark</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("red")}>
            <span>Red</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("red-dark")}>
            <span>Red Dark</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("green")}>
            <span>Green</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("green-dark")}>
            <span>Green Dark</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("netflix")}>
            <span>Netflix</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("netflix-dark")}>
            <span>Netflix Dark</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("nord")}>
            <span>Nord</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("nord-dark")}>
            <span>Nord Dark</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("nature")}>
            <span>Nature</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("nature-dark")}>
            <span>Nature Dark</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dracula")}>
            <span>Dracula</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dracula-dark")}>
            <span>Dracula Dark</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("laracon-dark")}>
            <span>Laracon Dark</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("gold")}>
            <span>Gold</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("gold-dark")}>
            <span>Gold Dark</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("azarath")}>
            <span>Azarath</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("azarath-dark")}>
            <span>Azarath Dark</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("poimandres")}>
            <span>Poimandres</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("poimandres-dark")}>
            <span>Poimandres Dark</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("discord")}>
            <span>Discord</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("discord-dark")}>
            <span>Discord Dark</span>
          </DropdownMenuItem>
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>
  );
}
