import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "reading list",
  description: "collection of text.",
};

export default function ReadingListPage() {
  return (
    <section className="prose dark:prose-invert max-w-none">
      <h1>reading list</h1>
      <p>
        collection of things i am reading/have read/will read. i&apos;ll update this soon.
      </p>
    </section>
  );
}