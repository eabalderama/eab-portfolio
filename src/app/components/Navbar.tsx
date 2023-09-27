import Link from 'next/link';
import { FaLinkedin, FaGithub, FaGoogle } from 'react-icons/fa6';

export default function Navbar() {
  return (
    <nav className="fixed w-full flex z-50 backdrop-blur-md border-b border-gray-900 px-2">
      <div className="w-full py-3 flex justify-between gap-6 items-center max-w-2xl mx-auto ">
        <Link
          className="border-b-2 border-transparent hover:border-white"
          href="/"
        >
          E.A.B
        </Link>
        <div className="flex justify-center items-center gap-4">
          <Link
            href="https://www.linkedin.com/in/edgar-alan-balderama-266630166/"
            target="_blank"
          >
            <FaLinkedin className="w-6 h-6" />
          </Link>
          <Link href="https://github.com/eabalderama" target="_blank">
            <FaGithub className="w-6 h-6" />
          </Link>
          <Link href="mailto:eabalderama@gmail.com">
            <FaGoogle className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
