import Link from 'next/link';
import { Metadata } from 'next';

// TODO: replace this array with a real data source later
const posts = [
  {
    slug: 'hello-world',
    title: 'hello world',
    date: '2025-05-24',
    description: 'very first blog post',
  },
  // { slug: 'another-post', title: 'Another Post', date: '2025-06-01', description: '…' },
];

export const metadata: Metadata = {
  title: 'Blog',
  description: 'All posts',
};

export default function BlogIndexPage() {
  return (
    <>
      <h1 className="mb-6 text-3xl font-bold font-mono">blog</h1>

      <ul className="space-y-6">
        {posts.map(({ slug, title, date, description }) => (
          <li key={slug}>
            <h2 className="text-xl font-semibold font-mono">
              <Link
                href={`/blogs/${slug}`}
                className="text-blue-600 hover:underline"
              >
                {title}
              </Link>
            </h2>

            <p className="mt-1 text-sm text-gray-500 font-mono">{date}</p>
            <p className="mt-2">{description}</p>
          </li>
        ))}
      </ul>

      <p className="mt-10 font-mono">
        <Link href="/" className="text-blue-600 hover:underline">
          back to home
        </Link>
      </p>
    </>
  );
}
