import Link from "next/link";

export default function MainMenu() {
  return (
    <div className="flex gap-4 bg-blue-200 p-4">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </div>
  );
}
