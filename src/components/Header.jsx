import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold bg-main bg-clip-text text-transparent md:text-2xl">
            Shandy Dwi.
          </div>

          <div className="hidden md:flex space-x-8">
            <Link href="#home" text="Home"></Link>
            <Link href="#about" text="About"></Link>
            <Link href="#projects" text="Projects"></Link>
            <Link href="#skills" text="Skills"></Link>
            <Link href="#certifications" text="Certifications"></Link>
            <Link href="#contact" text="Contact"></Link>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col p-2 cursor-pointer"
          >
            <span
              className={`w-7.5 h-1 bg-blacksoft origin-top-left transition duration-300 ease-in-out
              ${menuOpen ? "rotate-45" : ""}
              `}
            />
            <span
              className={`w-5 h-1 my-1.5 bg-blacksoft transition duration-300 ease-in-out
              ${menuOpen ? "scale-0" : ""}
              `}
            />
            <span
              className={`w-7.5 h-1 bg-blacksoft origin-bottom-left transition duration-300 ease-in-out
              ${menuOpen ? "-rotate-45" : ""}
              `}
            />
          </button>
        </div>

        {menuOpen && (
          <div className="mobile-menu fixed top-16 right-0 w-64 h-fit bg-white shadow-lg md:hidden rounded-lg">
            <div className="flex flex-col p-6 space-y-4">
              <Link href="#home" text="Home">
                Home
              </Link>
              <Link href="#about" text="About"></Link>
              <Link href="#projects" text="Projects"></Link>
              <Link href="#skills" text="Skills"></Link>
              <Link href="#certifications" text="Certifications"></Link>
              <Link href="#contact" text="Contact"></Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

function Link({ href, text }) {
  return (
    <a
      href={href}
      className="hover-underline text-blacksoft hover:text-main transition-colors"
    >
      {text}
    </a>
  );
}
