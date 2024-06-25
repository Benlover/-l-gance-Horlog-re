import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo section */}
        <Link href="/" className="flex items-center text-white text-2xl font-bold">
          <img src="assets/Montre-mécanique.jpg" alt="Élégance Horlogère" className="h-8 w-8 mr-2" />
          <span className="font-serif tracking-wide">Élégance Horlogère</span>
        </Link>
        {/* Navigation menu */}
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="text-white hover:text-gray-400 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" className="text-white hover:text-gray-400 transition duration-300">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-gray-400 transition duration-300">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
