import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { FaArrowRightLong, FaChevronDown } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import { Input } from "@/components/ui/input";
import Footer from "@/components/Footer";
import {
    Sheet,
    SheetTrigger,
    SheetContent,
} from "@/components/ui/sheet";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";


const categories = ["Custom Apparel", "Custom Drinkware", "Candies", "Nuts", "Popcorn", "Snacks", "Organizational Merchandise"];
const filters = ["Organization", "General", "Music", "Occupational", "Basketball", "Baseball", "Cheer", "Dance", "Football", "Soccer", "Softball", "Flag_Football", "Lacrosse", "Tennis", "Track_Field"];
const products = new Array(8).fill({
    name: "Santa Margarita",
    price: 30.0,
    image: "/card image.png"
});
const presetAmounts = [10, 15, 25, 50, 75, 100, 150, 200];


export default function HomeHeaderSection() {
    const [selectedTab, setSelectedTab] = useState("top-sales");

    const leaderboardData = [
        { name: "Justin Hover", amount: 190, img: "/pexels-olia-danilevich-4762755 1.png" },
        { name: "Justin Hover", amount: 110, img: "/pexels-brett-sayles-1073097 1.png" },
        { name: "Justin Hover", amount: 85, img: "/pexels-football-wife-577822-1618042 2.png" },
        { name: "Samantha Lee", amount: 70, img: "/pexels-olia-danilevich-4762755 1.png" },
        { name: "Ava Smith", amount: 65, img: "/pexels-brett-sayles-1073097 1.png" },
        { name: "Liam Johnson", amount: 55, img: "/pexels-football-wife-577822-1618042 2.png" },
    ];

    // 
    const [selectedFilters, setSelectedFilters] = useState<string[]>(["Basketball"]);
    const toggleFilter = (filter: string) => {
        setSelectedFilters((prev) =>
            prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]
        );
    };

    // 

    const [selected, setSelected] = useState<number | null>(null);
    const [custom, setCustom] = useState("");

    //   

    const [timeLeft, setTimeLeft] = useState({
        days: 32,
        hours: 13,
        minutes: 29,
        seconds: 44,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((prev) => {
                let { days, hours, minutes, seconds } = prev;
                if (seconds > 0) {
                    seconds--;
                } else {
                    seconds = 59;
                    if (minutes > 0) {
                        minutes--;
                    } else {
                        minutes = 59;
                        if (hours > 0) {
                            hours--;
                        } else {
                            hours = 23;
                            if (days > 0) days--;
                        }
                    }
                }
                return { days, hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    return (

        <>        <div
            className="w-full font-sans bg-[#0C5D53] text-white bg-cover bg-center bg-no-repeat "
            style={{ backgroundImage: "url('/hero%20bg%20image.png')" }}
        >

            <header className="">
                <div className="container mx-auto flex items-center justify-between py-5 px-4 md:px-8">
                    <a href="/" className="shrink-0">
                        <img src="/MaMF logo.png" alt="MaMF" className="h-8 w-auto" />
                    </a>

                    <nav className="hidden lg:flex gap-8 text-white text-base font-medium">
                        <a href="#" className="hover:underline underline-offset-4">Home&nbsp;page</a>
                        <a href="#" className="hover:underline underline-offset-4">About&nbsp;us</a>
                        <a href="#" className="hover:underline underline-offset-4">Contact&nbsp;us</a>
                        <a href="#" className="hover:underline underline-offset-4">FAQ</a>
                    </nav>

                    <div className="flex items-center gap-8">
                        <button className="relative shrink-0" aria-label="Cart">
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-semibold w-5 h-5 flex items-center justify-center rounded-full">
                                3
                            </span>
                            <img src="/shopping-cart-01.svg" alt="Cart" className="h-6 w-6" />
                        </button>

                        <div className="hidden lg:flex items-center gap-8">
                            <button className="text-white text-base font-medium hover:underline">Log&nbsp;in</button>
                            <Button className="text-[#2D2D2D] bg-white hover:bg-white rounded-full px-6 py-2 text-base font-medium">
                                Sign&nbsp;up
                            </Button>
                        </div>

                        <Sheet>
                            <SheetTrigger asChild>
                                <button className="lg:hidden ml-2" aria-label="Open menu">
                                    <img src="/menu-01.png" alt="Menu" className="h-6 w-6" />
                                </button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[260px] px-6 py-8 bg-[#004C3E] text-white flex flex-col justify-between">
                                <nav className="space-y-6 text-lg font-medium">
                                    <a href="#" className="block hover:underline">Home page</a>
                                    <a href="#" className="block hover:underline">About us</a>
                                    <a href="#" className="block hover:underline">Contact us</a>
                                    <a href="#" className="block hover:underline">FAQ</a>
                                </nav>

                                <div className="mt-10 flex flex-col gap-4">
                                    <button className="w-full py-2 text-white text-base font-medium border border-white rounded-full hover:bg-white hover:text-[#2D2D2D] transition-colors">
                                        Log in
                                    </button>
                                    <Button className="w-full py-2 text-[#2D2D2D] bg-white hover:bg-white rounded-full text-base font-medium">
                                        Sign up
                                    </Button>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="container pt-4 lg:pt-20 pb-16 md:pb-20 flex flex-col xl:flex-row items-stretch justify-between gap-8">
                {/* Left Card */}
                <div className="flex-1 flex">
                    <Card className="bg-[#F1FADA] rounded-2xl w-full flex flex-col justify-between min-h-full">
                        <CardContent className="flex flex-col md:flex-row gap-10 items-center md:items-start p-6 max-md:p-4 flex-1">
                            <img
                                src="/hore sec image.png"
                                alt="Profile"
                                className="w-full md:w-80 rounded-xl object-cover"
                            />
                            <div className="w-full">
                                <h2 className="text-3xl text-[#0C5D53] md:text-5xl font-title font-bold">
                                    Jordan Mitchell
                                </h2>
                                <p className="text-lg pt-2 text-[#2D2D2D]">Santa Margarita Pop Warner</p>
                                <p className="text-xl py-3 mb-2 text-[#2D2D2D]">
                                    I’m raising funds to help cover my travel and participation fees for upcoming cheer competitions this
                                    season. <span className="font-bold text-[#0C5D53]">Your support means the world!</span>
                                </p>

                                {/* Progress bar */}
                                <div className="mt-4">
                                    <div className="h-3 bg-[#0C5D5329] rounded-full overflow-hidden">
                                        <div className="h-full bg-[#0C5D53] rounded-full" style={{ width: "76%" }}></div>
                                    </div>
                                    <div className="flex justify-between items-center text-sm text-[#6C6C6C]">
                                        <span className="text-[#2D2D2D] font-bold pt-2 text-base max-md:text-sm max-xl:text-xl min-[1280px]:text-xl min-[1536px]:text-3xl">
                                            <span className="text-[#0C5D53]">$19,025.01</span> Raised
                                        </span>
                                        <span className="text-[#969696] text-xs lg:text-base font-bold">
                                            Goal: <strong>$25,000</strong>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-wrap sm:flex-row gap-4 mt-0 px-6 max-md:p-4 pb-4">
                            <button className="flex rounded-lg gap-2 px-6 py-4 bg-[#0C5D53] w-maxflex sm:flex-row sm:w-max w-full justify-center items-center rounded-lg gap-2 px-6 py-4 bg-[#0C5D53]">
                                <img src="/copy-01.svg" />
                                <span className="text-white text-base font-semibold whitespace-nowrap">Copy Link</span>
                            </button>
                            <button className="flex rounded-lg gap-2 border border-[#0C5D53] px-6 py-4 justify-center">
                                <img src="/share-07.svg" />
                                <span className="text-[#0C5D53] text-base font-semibold">Share</span>
                            </button>
                        </div>
                    </Card>
                </div>

                <div className="flex-1 flex w-full xl:max-w-md">
                    <Card className="bg-white rounded-2xl p-6 max-md:p-4 w-full h-full flex flex-col justify-between min-h-full">
                        <h3 className="text-3xl font-bold text-[#2D2D2D] text-center mb-4 font-title">Leaderboard</h3>

                        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full flex-1">

                            {/* Mobile Dropdown */}
                            <div className="md:hidden mb-4">
                                <Select value={selectedTab} onValueChange={setSelectedTab}>
                                    <SelectTrigger className="w-full border border-gray-300 rounded-md px-4 py-6 text-sm text-[#2D2D2D] focus:outline-none focus:ring-1 focus:ring-[#0C5D53]">
                                        <SelectValue placeholder="--Select--" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="top-sales">Top Sales</SelectItem>
                                            <SelectItem value="recent">Recent Supporters</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Desktop Tabs */}
                            <div className="hidden md:block">
                                <TabsList className="bg-white mb-4 flex gap-4">
                                    <TabsTrigger
                                        value="top-sales"
                                        className="rounded-lg px-6 py-2 bg-[#0C5D53] text-base font-semibold text-white data-[state=active]:bg-[#0C5D53] data-[state=active]:text-white transition"
                                    >
                                        Top Sales
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="recent"
                                        className="rounded-lg px-6 py-2 text-base font-semibold text-[#0C5D53] border border-[#0C5D53] bg-white data-[state=active]:bg-[#0C5D53] data-[state=active]:text-white transition"
                                    >
                                        Recent Supporters
                                    </TabsTrigger>
                                </TabsList>
                            </div>

                            {/* Top Sales Content */}
                            <TabsContent value="top-sales" className="flex-1">
                                <ScrollArea className="h-[15rem] pr-2">
                                    <div className="space-y-2 pr-2">
                                        {leaderboardData.map((item, idx) => (
                                            <div key={idx} className="flex justify-between items-center py-2 border-b">
                                                <div className="flex items-center gap-3">
                                                    <span className="text-2xl font-bold text-[#0C5D53] w-5">{idx + 1}</span>
                                                    <img
                                                        src={item.img}
                                                        alt={item.name}
                                                        className="w-10 h-10 rounded-full object-cover"
                                                    />
                                                    <span className="text-base text-[#2D2D2D] font-bold">{item.name}</span>
                                                </div>
                                                <div className="text-right">
                                                    <span className="text-base text-[#6C6C6C] block">Raised</span>
                                                    <span className="text-[#0C5D53] font-bold text-2xl">${item.amount}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </ScrollArea>
                            </TabsContent>

                            {/* Recent Supporters Content */}
                            <TabsContent value="recent">
                                <p className="text-sm text-center text-muted-foreground">No data available.</p>
                            </TabsContent>

                        </Tabs>

                        <p className="text-xs text-center text-[#6C6C6C] mt-4">
                            *Donations are not prize eligible.
                        </p>
                    </Card>
                </div>
            </section>
        </div>

            <section className="w-full bg-[#C8F169] py-8">
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 max-lg:gap-4 text-center">
                    <div className="text-[#2D2D2D] text-2xl font-semibold max-md:text-xl">
                        Time Left <br className="hidden lg:block" /> to Support
                    </div>
                    <div className="flex gap-8">
                        {[
                            { label: "Days", value: timeLeft.days },
                            { label: "Hours", value: timeLeft.hours },
                            { label: "Minutes", value: timeLeft.minutes },
                            { label: "Seconds", value: timeLeft.seconds },
                        ].map((item, idx) => (
                            <div key={idx} className="text-center">
                                <div className="text-4xl font-bold text-[#0C5D53] font-title">
                                    {String(item.value).padStart(2, "0")}
                                </div>
                                <div className="text-[#2D2D2D] text-base mt-1">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Shop Section */}

            <section className="container mx-auto px-4 py-16 ">
                <h2 className="text-2xl md:text-5xl max-md:text-2xl font-bold text-center mb-12 max-lg:mb-8">
                    Shop to <span className="text-[#005C53]">Support</span>
                </h2>

                {/* Category Tabs */}

                <div>
                    <div className="hidden md:block">
                        <div className="flex flex-wrap justify-center gap-3 mb-8 ">
                            {categories.map((cat, i) => (
                                <Button
                                    key={i}
                                    variant="outline"
                                    className={cn(
                                        "rounded-md border text-base py-8 px-8 min-w-32 font-semibold text-[#005C53] hover:bg-[#005C53] hover:text-white flex items-center gap-2",
                                        i === 0 && "bg-[#005C53] text-white"
                                    )}
                                >
                                    {cat}
                                    {(i === 0 || i === 1) && <FaChevronDown className="w-4 h-4" />}
                                </Button>
                            ))}
                        </div>
                    </div>
                    <div className="md:hidden pb-5">
                        <Select value={selectedTab} onValueChange={setSelectedTab}>
                            <SelectTrigger className="w-full border border-gray-300 rounded-md px-4 py-6 text-sm text-[#2D2D2D] focus:outline-none focus:ring-1 focus:ring-[#0C5D53]">
                                <SelectValue placeholder="--Select--" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="top-sales">Top Sales</SelectItem>
                                    <SelectItem value="recent">Recent Supporters</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                </div>

                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold">Custom Hoodies</h3>
                    <button className="lg:hidden text-[#0C5D53]">
                        <img src="/filter icon.svg" />
                    </button>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar */}
                    <aside className="w-full lg:w-2/12 hidden lg:block">
                        <p className="text-xl font-bold text-[#2D2D2D] pb-4">Design Category</p>
                        <div className="flex flex-col gap-3">
                            {filters.map((filter) => (
                                <label
                                    key={filter}
                                    className="flex items-center gap-2 py-1 text-base text-[#000] cursor-pointer"
                                >
                                    <span className="relative inline-block h-5 w-5 flex items-center justify-center">
                                        <input
                                            type="checkbox"
                                            checked={selectedFilters.includes(filter)}
                                            onChange={() => toggleFilter(filter)}
                                            className="peer appearance-none h-5 w-5 border-2 border-[#0C5D53] bg-white rounded focus:outline-none checked:bg-[#0C5D53] checked:border-[#0C5D53]"
                                        />
                                        <svg
                                            className="absolute w-4 h-4 text-white opacity-0 peer-checked:opacity-100 pointer-events-none"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </span>
                                    <span className="leading-none">{filter.replace("_", " ")}</span>
                                </label>

                            ))}
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="w-full lg:w-10/12">
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {products.map((item, i) => (
                                <Card key={i} className="flex flex-col gap-4 items-center text-center border-0">
                                    <div className="bg-[#FAFAFA] rounded-2xl p-6 w-full text-center m-auto">
                                        <img src={item.image} alt={item.name} className="w-full object-contain m-auto" />
                                    </div>
                                    <div className="flex flex-col md:flex-row justify-between items-start w-full text-base md:text-xl text-[#2D2D2D] font-bold mb-2">
                                        <span>{item.name}</span>
                                        <span className="font-normal">${item.price.toFixed(2)}</span>
                                    </div>
                                    <Button className="w-full bg-[#005C53] text-sm md:text-base font-semibold text-white hover:bg-[#00443f] rounded-md">
                                        Customize Now
                                    </Button>
                                </Card>
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="flex justify-center items-center gap-2 mt-10 text-sm">
                            <Button variant="ghost" className="text-[#969696] bg-white text-base font-semibold rounded-full max-md:bg-[#FAFAFA]" disabled>
                                <GoArrowLeft /> <span className="hidden md:block">Previous</span>
                            </Button>

                            {[1, 2, 3, "...", 7, 8, 9].map((page, i) => (
                                <Button
                                    key={i}
                                    variant={page === 1 ? "default" : "ghost"}
                                    className={cn(
                                        "h-8 w-8 px-0 text-base font-normal rounded-full hover:bg-[#0C5D5314]",
                                        page === 1 && "bg-[#0C5D5314] text-[#000000]"
                                    )}
                                >
                                    {page}
                                </Button>
                            ))}

                            <Button variant="ghost" size="icon" className="text-[#0C5D53] font-semibold text-base rounded-full max-md:bg-[#0c5d53] max-md:text-white">
                                <GoArrowRight /> <span className="hidden md:block">Next</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Donation Section */}

            <div className="bg-[#FAFAFA] py-16 px-4 lg:px-20 flex flex-col md:flex-row items-center justify-center gap-16">
                {/* Left Text Content */}
                <div className="text-center md:text-left max-w-md ">
                    <h2 className="font-title text-5xl max-md:text-3xl font-bold">
                        Just Want <br className="block max-md:hidden" /> <span className="text-[#0C5D53]">to Help?</span>
                    </h2>
                    <p className="mt-3 text-xl max-md:text-base text-[#2D2D2D] font-body">
                        Even if you’re not shopping today, your support means the world to us. Make a direct donation!
                    </p>
                </div>

                {/* Right Donation Box */}
                <div className="bg-white border border-[#0C5D5329] rounded-2xl p-8 max-md:p-6 w-full max-w-md shadow-sm">
                    <div className="grid grid-cols-4 gap-5 mb-4 max-md:grid-cols-3">
                        {presetAmounts.map((amount) => (
                            <Button
                                key={amount}
                                variant="outline"
                                className={cn(
                                    "text-base bg-[#0C5D530A] py-5 max-md:py-6",
                                    selected === amount && "bg-[#0C5D53] text-white hover:bg-[#0C5D53] hover:text-white"
                                )}
                                onClick={() => {
                                    setSelected(amount);
                                    setCustom("");
                                }}
                            >
                                ${amount}
                            </Button>
                        ))}
                    </div>

                    <div className="text-base mb-2 text-[#2D2D2D]">Or Enter Custom Amount:</div>
                    <Input
                        type="number"
                        placeholder="Enter amount"
                        className="rounded-s-lg px-4 py-6 text-base"
                        value={custom}
                        onChange={(e) => {
                            setCustom(e.target.value);
                            setSelected(null);
                        }}
                    />
                    <Button className="mt-4 w-full py-6 text-base font-semibold bg-[#0C5D53] hover:bg-[#0C5D53]">
                        Add Donation to Cart
                    </Button>
                </div>
            </div>
            <Footer />
        </>

    );
}
