import Link from "next/link";
import Image from "next/image";

export default function Header(): React.JSX.Element {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <nav className="px-6 py-4">
        <div className="container mx-auto max-w-6xl flex items-center justify-between h-full">
          <Link
            href="/"
            className="text-2xl font-bold text-foreground hover:text-accent-primary transition-colors tracking-tighter"
          >
            Nawaz Ahamed KS
          </Link>
          <ul className="flex items-center gap-8 list-none m-0 p-0">
            <li className="m-0 p-0">
              <Link
                href="#home"
                className="text-foreground hover:text-accent-primary transition-colors text-base font-normal"
              >
                Home
              </Link>
            </li>
            <li className="m-0 p-0">
              <Link
                href="#about"
                className="text-foreground hover:text-accent-primary transition-colors text-base font-normal"
              >
                About
              </Link>
            </li>
            <li className="m-0 p-0">
              <Link
                href="#lab"
                className="text-foreground hover:text-accent-primary transition-colors text-base font-normal"
              >
                Lab
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

