import type { Metadata } from 'next';
import Breadcrumb from './Breadcrumb';

export const metadata: Metadata = {
  title: {
    template: '%s – blog', 
    default: 'blog',
  },
  description: 'personal blog posts',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen px-6 py-10 mx-auto max-w-3xl">
      <header className="mb-10">
        <Breadcrumb />
      </header>

      <article className="prose dark:prose-invert max-w-none">{children}</article>
    </div>
  );
}