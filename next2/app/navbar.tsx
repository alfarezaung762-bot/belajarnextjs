"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center bg-gray-800 py-2 px-5">
      <h1 className="text-white font-semibold text-lg">Navbar</h1>
      <ul className="flex ml-5">
        <li className="mr-3 text-blue-300 hover:text-blue-500 cursor-pointer">
          <Link href="/">Home</Link>
        </li>
        <li className="mr-3 text-blue-300 hover:text-blue-500 cursor-pointer">
          <Link href="/about">About</Link>
        </li>
        <li className="mr-3 text-blue-300 hover:text-blue-500 cursor-pointer">
          <Link href="/about/profile">Profile</Link>
        </li>
      </ul>
    </nav>
  );
}
