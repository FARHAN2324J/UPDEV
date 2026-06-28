"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CATEGORIES } from "@/lib/constants/categories";

export default function CategoryFilter() {
    const searchParams = useSearchParams();

    const currentCategory =
        searchParams.get("category") || "All";

    return (
        <nav className="flex items-center gap-4">
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
        </nav>
    );
}