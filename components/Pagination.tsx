"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

type PaginationProps = {
    totalPages: number;
};

export default function Pagination({
    totalPages,
}: PaginationProps) {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const currentPage = Math.max(
        1,
        Number(searchParams.get("page")) || 1
    );

    function createPageURL(page: number) {
        const params = new URLSearchParams(searchParams);

        params.set("page", page.toString());

        return `${pathname}?${params.toString()}`;
    }

    return (
        <nav aria-label="Pagination"
            className="flex items-center justify-center gap-5 py-8">
            {currentPage > 1 && (
                <Link className="text-text-muted" aria-label="Go to previous page" href={createPageURL(currentPage - 1)}>
                    ‹
                </Link>
            )}

            {Array.from(
                { length: totalPages },
                (_, index) => index + 1
            ).map((page) =>
                page === currentPage ? (
                    <span
                        key={page}
                        className="flex h-3 w-3 items-center justify-center rounded-full font-medium text-bg bg-text p-3"
                        aria-current="page"
                    >
                        {page}
                    </span>
                ) : (
                    <Link
                        key={page}
                        href={createPageURL(page)}
                        aria-label={`Go to page ${page}`}
                    >
                        {page}
                    </Link>
                )
            )}

            {currentPage < totalPages && (
                <Link className="text-text-muted" aria-label="Go to next page" href={createPageURL(currentPage + 1)}>
                    ›
                </Link>
            )}
        </nav>
    );
}