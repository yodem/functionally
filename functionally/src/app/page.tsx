import Link from 'next/link';
import './globals.css';
export default function Home() {
  return (
    <>
      <h1 className="text-6xl font-bold">Welcome to Functionally</h1>
      <div>
        <Link href="/cards">view all cards</Link>
      </div>
    </>
  );
}
