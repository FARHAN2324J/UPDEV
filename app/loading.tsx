import Hero from "@/components/Hero";

export default function Loading() {
    return (
        <main>
            <Hero />

            <div className="flex items-center justify-center py-20">
                <p className="text-muted font-medium">
                    Loading...
                </p>
            </div>
        </main>
    );
}