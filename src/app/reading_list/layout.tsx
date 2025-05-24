import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    template: "%s – reading list",
    default: "reading list",
  },
  description: "things i am reading/have read/will read.",
};

export default function ReadingListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen px-6 py-10 mx-auto max-w-3xl">
      <header className="mb-10 text-sm font-mono">
        <Link href="/" className="text-blue-600 hover:underline">
          &gt; home
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span>reading&nbsp;list</span>
      </header>

      {children}
    </div>
  );
}
