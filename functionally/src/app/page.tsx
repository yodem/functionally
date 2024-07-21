import Link from 'next/link';
import 'katex/dist/katex.min.css';
import './globals.css';
export default function Home() {
  return (
    <div>
      <h1 className="text-6xl font-bold">Welcome to Functionally</h1>
      <div className="flex-col">
        <div>
          <Link href="/cards">view all cards</Link>
        </div>
        <div>
          <Link href="/games">view all games</Link>
        </div>
      </div>
    </div>
  );
}
