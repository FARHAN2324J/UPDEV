import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-1.5 sm:gap-2"
    >
      <Image
        src="/logo.svg"
        alt="UPDEV"
        width={40}
        height={40}
        priority
        className="h-8 w-8 sm:h-10 sm:w-10"
      />

      <span className="text-base hidden sm:block font-bold tracking-tight sm:text-lg lg:text-xl">
        UPDEV
      </span>
    </Link>
  );
}