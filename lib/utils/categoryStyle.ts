export function categoryClass(category: string) {
  const styles: Record<string, string> = {
    "Next.js": "bg-[#bf7aef]/15 text-[#bf7aef] border-[#bf7aef]/15",
    Tailwind: "bg-[#06b6d4]/10 text-[#06b6d4] border-[#06b6d4]/20",
    React: "bg-[#0ea5e9]/10 text-[#0ea5e9] border-[#0ea5e9]/20",
  };

  return (
    styles[category] ||
    "text-text border-text"
  );
}