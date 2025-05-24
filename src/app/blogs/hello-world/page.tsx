// app/blogs/hello-world/page.tsx
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'hello world',
  description: 'my very first blog post',
};

export default function HelloWorldPost() {
  return (
    <article className="prose dark:prose-invert max-w-none">
      <h1 className="text-4xl font-bold font-mono mb-4">hello world</h1>

      <p>
        my very first blog post. i&apos;ll probably write more things later.
      </p>

      <br></br>

      <hr />
      <br></br>
      <p>
        <Link href="../blogs" className="text-blue-600 hover:underline font-mono">back to blogs</Link>
      </p>
    </article>
  );
}
