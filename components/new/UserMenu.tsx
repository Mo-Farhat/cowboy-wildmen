"use client";

import { useAuth } from "@/context/AuthContext";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const UserMenu = () => {
    const { user, logout } = useAuth();

    if (!user) {
        return (
            <Link
                href="/signin"
                className="text-white hover:text-brandAmber transition-colors"
            >
                <User className="w-5 h-5" />
            </Link>
        );
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
                <div className="w-9 h-9 rounded-sm border-2 border-white/10 overflow-hidden relative hover:border-brandAmber transition-colors">
                    {user.photoURL ? (
                        <Image
                            src={user.photoURL}
                            alt={user.displayName || "User"}
                            fill
                            className="object-cover"
                        />
                    ) : (
                        <div className="w-full h-full bg-brandCharcoal flex items-center justify-center text-brandAmber text-xs font-black uppercase">
                            {user.displayName?.charAt(0) || user.email?.charAt(0)}
                        </div>
                    )}
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64 bg-brandCharcoal border-white/5 p-2 shadow-2xl backdrop-blur-xl">
                <DropdownMenuLabel className="p-4">
                    <div className="flex flex-col space-y-1">
                        <p className="text-[10px] font-black uppercase tracking-widest text-white">
                            {user.displayName || "Member"}
                        </p>
                        <p className="text-[9px] font-black uppercase tracking-widest text-zinc-500">
                            {user.email}
                        </p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-white/5 mx-2" />
                <DropdownMenuItem asChild className="p-3 cursor-pointer focus:bg-white/5 focus:text-brandAmber text-zinc-400 font-black uppercase tracking-widest text-[10px] transition-all">
                    <Link href="/orders">My Orders</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-white/5 mx-2" />
                <DropdownMenuItem
                    onClick={logout}
                    className="p-3 cursor-pointer text-red-500/80 focus:bg-red-500/10 focus:text-red-500 font-black uppercase tracking-widest text-[10px] transition-all"
                >
                    Log Out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserMenu;
