import Link from "next/link";

export default function header() {
  return (
    <header className="flex items-center  justify-between">
      <Link href="" className="text-primary font-semibold text-2xl">
        ST PIZZA
      </Link>
      <nav className="flex items-center gap-8 text-gray-500 font-semibold">
        <Link href={"/"}>Home</Link>
        <Link href={"/menu"}>Menu</Link>
        <Link href={"/#about"}>About</Link>
        <Link href={"/#contact"}>Contact</Link>
      </nav>
      <nav className="flex items-center gap-4 text-gray-500 font-semibold">
        <Link href={"/login"}>Login</Link>
        <Link
          href={"/register"}
          className="bg-primary rounded-full text-white px-8 py-2"
        >
          Register
        </Link>
      </nav>
    </header>
  );
}
