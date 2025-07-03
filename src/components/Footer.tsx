import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";


export default function Footer() {
    return (
        <footer className="bg-[#0C5D53] text-white text-sm leading-relaxed font-body">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
                {/* Top features row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
                    <Feature
                        icon={<img src="/truck-01.svg" alt="Free shipping" className="w-5 h-5 text-[#0C5D53]" />}
                        title={
                            <div className="text-center">
                                <p className="text-[#CDFF59]">Free Shipping</p>
                                <p>on Orders Over $120</p>
                            </div>
                        }
                        description="Excluding donations. Enjoy fast, free delivery when your cart hits $120 or more — no surprise fees at checkout."
                    />

                    <Feature
                        icon={<img src="/lock-01.svg" alt="Secure payments" className="w-5 h-5 text-[#0C5D53]" />}
                        title={
                            <div className="text-center">
                                <p className="text-[#CDFF59]">Safe and Secure</p>
                                <p> Payments</p>
                            </div>
                        }
                        description="All payments are protected and encrypted, so you can give and shop with total confidence."
                    />

                    <Feature
                        icon={<img src="/heart-hand.svg" alt="Real impact" className="w-5 h-5 text-[#0C5D53]" />}
                        title={
                            <div className="text-center">
                                <p className="text-white">Making</p>
                                <p className="text-[#CDFF59]"><span className="text-white">a</span> Real Impact</p>
                            </div>
                        }
                        description="Every dollar you spend supports the fundraiser — no middlemen, just real help for real needs."
                    />
                </div>

                {/* Center message */}
                <Separator className="bg-[#CDFF59]" />
                <h2 className="font-title text-center text-6xl max-md:text-4xl max-lg:text-5xl font-blod">
                    Every donation counts — <span className="text-[#CDFF59] font-bold">thank you!</span>
                </h2>
                <Separator className="bg-[#CDFF59]" />

                {/* Bottom meta area */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-8">
                    {/* Brand & tagline */}
                    <div className="space-y-3 text-center md:text-left">
                        <div className="font-title text-2xl font-bold text-[#CDFF59]">
                            <img src="/MaMF logo.png" className="max-md:m-auto" />
                        </div>
                        <p className="max-w-xs mx-auto md:mx-0 text-white text-base">
                            Custom fundraising made simple for youth teams, schools, and organizations.
                        </p>
                    </div>

                    {/* Links & copyright */}
                    <div className="flex max-xl:flex-col gap-4 justify-between items-center md:items-end space-y-6 md:space-y-2 text-center md:text-right">
                        <nav className="flex max-md:flex-col gap-6">
                            <a href="#contacts" className="hover:underline">
                                Contact Us
                            </a>
                            <a href="#privacy" className="hover:underline">
                                Privacy Policy
                            </a>
                        </nav>
                        <p className="text-white text-base whitespace-nowrap">
                            © 2025 Make a Memory Family. <br className="hidden max-md:block" /> All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

/**
 * Helper component for feature items (icon + text).
 */
interface FeatureProps {
    icon: React.ReactNode;
    title: React.ReactNode;
    description: string;
    className?: string;
}

function Feature({ icon, title, description, className }: FeatureProps) {
    return (
        <div className={cn("flex flex-col items-center", className)}>
            <div className="w-8 h-8 mb-3 flex items-center justify-center rounded shadow bg-white">
                {icon}
            </div>
            <h3 className="font-title font-bold text-3xl max-lg:text-2xl text-center">
                {title}
            </h3>
            <p className="mt-2 text-base text-white text-center">
                {description}
            </p>
        </div>
    );
}
