"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CATEGORIES } from "@/lib/constants/categories";
import Image from "next/image";

export default function CategoryFilter() {
    const searchParams = useSearchParams();

    const currentCategory =
        searchParams.get("category") || "All";

    return (
        <nav className="navbar">
            <Link
                href="/"
                onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }}
            >
                <Image
                    src="/logo.svg"
                    alt="UPDEV"
                    width={40}
                    height={40}
                    priority
                    className="h-9 w-9 sm:h-10 sm:w-10 mr-8"
                />
            </Link>
            <div className="flex items-center gap-5 mx-auto">
                {CATEGORIES.map((category) => {
                    const isActive = currentCategory === category;

                    const href =
                        category === "All"
                            ? "/"
                            : `/?category=${category}`;

                    return (
                        <Link
                            key={category}
                            href={href}
                            className={`font-medium transition-colors duration-200 md:text-[16px] text-[14px] ${isActive
                                ? "text-text"
                                : "text-text-muted hover:text-text"
                                }`}
                        >
                            {category}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}