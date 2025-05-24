'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

export default function Breadcrumb() {
  const segment = useSelectedLayoutSegment();

  return (
    <nav className="flex gap-2 text-sm font-mono">
      <Link href="/" className="text-blue-600 hover:underline">
        home
      </Link>

      <span className="text-gray-400">/</span>

      {segment ? (
        <>
          <Link href="/blogs" className="text-blue-600 hover:underline">
            blog
          </Link>

          <span className="text-gray-400">/</span>

          <span className="font-semibold">
            {decodeURIComponent(segment).replace(/-/g, ' ')}
          </span>
        </>
      ) : (
        // default to "blog" if no segment is selected
        <span>blog</span>
      )}
    </nav>
  );
}