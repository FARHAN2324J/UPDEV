"use client";

export default function Error({
    reset,
}: {
    reset: () => void;
}) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center gap-4">
            <p className="text-text-muted">
                Something went wrong.
            </p>

            <button
                onClick={reset}
                className="rounded-lg bg-card border border-line px-4 py-2 cursor-pointer hover:bg-line transition-colors"
            >
                Try again
            </button>
        </main>
    );
}