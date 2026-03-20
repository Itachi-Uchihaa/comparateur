import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-gray-900 text-lg">
          Comparateur de caisses
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href="/comparateur"
            className="text-gray-700 hover:text-gray-900 font-medium text-sm"
          >
            Comparateur
          </Link>
          <Link
            href="/blog"
            className="text-gray-700 hover:text-gray-900 font-medium text-sm"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-gray-900 font-medium text-sm"
          >
            Contact
          </Link>

          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-semibold text-sm transition-colors"
          >
            Demander un rappel
          </Link>
        </nav>
      </div>
    </header>
  );
}

