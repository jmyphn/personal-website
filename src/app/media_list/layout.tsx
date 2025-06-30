import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    template: "%s – media list",
    default: "media list",
  },
  description: "things i am consuming.",
};

export default function MediaListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen px-6 py-10 mx-auto max-w-3xl">
      <header className="mb-10 text-sm font-mono">
        <Link href="/" className="text-blue-600 hover:underline">
          home
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span>media list</span>
      </header>

      {children}
    </div>
  );
}
