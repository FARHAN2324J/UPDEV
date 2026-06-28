"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CATEGORIES } from "@/lib/constants/categories";
import { categoryClass } from "@/lib/utils/categoryStyle";

export default function CategoryFilter() {
    const searchParams = useSearchParams();

    const currentCategory =
        searchParams.get("category") || "All";

    return (
        <div className="flex items-center gap-4 justify-center">
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
                        className={` badge
        ${categoryClass(category)}
       ${isActive
                                ? "brightness-100 saturate-150"
                                : "opacity-50"
                            }
    `}
                    >
                        {category}
                    </Link>
                );
            })}
        </div>
    );
}