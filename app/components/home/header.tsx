import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from "~/components/ui/resizable-navbar";
import { useState } from "react";

export default function HomeHeader() {
    const navItems = [
        {
            name: "Articles",
            link: "#articles",
        },
        {
            name: "Standings",
            link: "#standings",
        },
        {
            name: "Calendar",
            link: "/calendar",
        },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="relative w-full">
            <Navbar>
                {/* Desktop Navigation */}
                <NavBody>
                    <NavbarLogo />
                    <NavItems items={navItems} />
                </NavBody>

                {/* Mobile Navigation */}
                <MobileNav>
                    <MobileNavHeader>
                        <NavbarLogo />
                        <MobileNavToggle
                            isOpen={isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        />
                    </MobileNavHeader>

                    <MobileNavMenu
                        isOpen={isMobileMenuOpen}
                        onClose={() => setIsMobileMenuOpen(false)}
                    >
                        <div className="flex w-full flex-col gap-2">
                            {navItems.map((item, idx) => (
                                <a
                                    key={`mobile-link-${idx}`}
                                    href={item.link}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex w-full items-center justify-between px-4 py-3 font-medium text-primary transition-colors"
                                >
                                    <span className="block">{item.name}</span>
                                </a>
                            ))}
                        </div>
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>
        </div>
    );
}
