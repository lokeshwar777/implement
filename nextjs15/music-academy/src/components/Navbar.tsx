"use client";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn(
                "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",
                className
            )}
        >
            <Menu setActive={setActive}>
                <HoveredLink href="/">
                    <MenuItem setActive={setActive} active={null} item="Home" />
                </HoveredLink>
                <MenuItem
                    setActive={setActive}
                    active={active}
                    item="Our Courses"
                >
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/courses">Our Courses</HoveredLink>
                        <HoveredLink href="/courses">
                            Basic Music Theory
                        </HoveredLink>
                        <HoveredLink href="/courses">
                            Advanced Composition
                        </HoveredLink>
                        <HoveredLink href="/courses">Song Writing</HoveredLink>
                        <HoveredLink href="/courses">
                            Music Production
                        </HoveredLink>
                    </div>
                </MenuItem>

                <HoveredLink href="/contact">
                    <MenuItem
                        setActive={setActive}
                        active={null}
                        item="Contact Us"
                    />
                </HoveredLink>
            </Menu>
        </div>
    );
}
