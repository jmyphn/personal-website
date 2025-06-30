import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "media list",
  description: "collection of media.",
};

export default function MediaListPage() {
  return (
    <section className="prose dark:prose-invert max-w-none">
      <h1 className="text-4xl font-bold font-mono mb-4">media list</h1>
      
      <p>
        what i&apos;m consuming.
      </p>
      <br />

      <h2 className="mb-2 text-2xl font-semibold font-mono">books</h2>
        <li>
          <Link href="https://a.cp/d/7TcQGqt" className="text-blue-600 hover:underline">
            <em>Minor Feelings</em> - Cathy Park Hong
          </Link>
        </li>
        <li>
          <Link href="https://a.co/d/cAzRaud" className="text-blue-600 hover:underline">
            <em>No Longer Human</em> - Osamu Dazai
          </Link>
        </li>
      <br />

      <h2 className="mb-2 text-2xl font-semibold font-mono">papers</h2>
        <li>
          <Link href="https://lamport.azurewebsites.net/pubs/lamport-paxos.pdf" className="text-blue-600 hover:underline">
            <em>The Part-Time Parliament</em> - Leslie Lamport
          </Link>
        </li>
        <li>
          <Link href="https://lamport.azurewebsites.net/pubs/paxos-simple.pdf" className="text-blue-600 hover:underline">
            <em>Paxos Made Simple</em> - Leslie Lamport
          </Link>
        </li>
        <li>
          <Link href="https://www.cs.cornell.edu/home/rvr/Paxos/paxos.pdf" className="text-blue-600 hover:underline">
            <em>Paxos Made Moderately Complex</em> - Robert van Renesse
          </Link>
        </li>
        <li>
          <Link href="https://raft.github.io/raft.pdf" className="text-blue-600 hover:underline">
            <em>In Search of an Understandable Consensus Algorithm</em> - Diego Ongaro and John Ousterhout
          </Link>
        </li>
        <li>
          <Link href="https://dspace.mit.edu/handle/1721.1/71763" className="text-blue-600 hover:underline">
            <em>Viewstamped Replication Revisited</em> - Barbara Liskov and James Cowling
          </Link>
        </li>
        <li>
          <Link href="https://groups.csail.mit.edu/tds/papers/Lynch/jacm85.pdf" className="text-blue-600 hover:underline">
            <em>Impossibility of Distributed Consensus with One Faulty Process (FLP Theorem)</em> - Nancy Lynch, Marshall Pease, and Richard Shostak
          </Link>
        </li>
      <br />
      
      <h2 className="mb-2 text-2xl font-semibold font-mono">music</h2>
        <li><em>Vanisher</em> - Quadeca (2025)</li>
        <li><em>Ever-Shifting, Continual Blossoming</em> - Chance Peña (2024)</li>
        <li><em>ten days</em> - Fred again.. (2024)</li>
        <li><em>SCRAPYARD</em> - Quadeca (2024)</li>
        <li><em>Two Star & the Dream Police</em> - Mk.gee (2024)</li>
        <li><em>Stick Season (Forever)</em> - Noah Kahan (2024)</li>
        <li><em>Actual Life 3 (January 1 - September 9 2022)</em> - Fred again.. (2022)</li>
        <li><em>Actual Life 2 (February 2 - October 15 2021)</em> - Fred again.. (2021)</li>
        <li><em>Absolutely</em> - Dijon (2021)</li>
        <li><em>Actual Life (April 14 - December 17 2020)</em> - Fred again.. (2021)</li>
        <li><em>Cape Elizabeth</em> - Noah Kahan (2020)</li>
        <li><em>Circles</em> - Mac Miller (2020)</li>
        <li><em>When We Were Friends</em> - The Backseat Lovers (2019)</li>
        <li><em>Swimming</em> - Mac Miller (2018)</li>
        <li><em>Blonde</em> - Frank Ocean (2016)</li>
      
      <br />
      <hr />
      <p className="mt-10 font-mono">
        <Link href="/" className="text-blue-600 hover:underline">
          back to home
        </Link>
      </p>
    </section>
  );
}