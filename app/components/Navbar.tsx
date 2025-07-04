'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/app/components/auth-context';

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { isAuthenticated, signOut } = useAuth();

  const navItems = [
    { href: '/', label: 'HOME' },
    { href: '/about', label: 'ABOUT' },
    { href: '/services', label: 'SERVICES' },
    { href: '/booking', label: 'BOOK NOW' },
    { href: '/reviews', label: 'REVIEWS' },
    { href: '/contact', label: 'CONTACT US' },
  ];

  const handleSignOut = async () => {
    await signOut();
    router.push('/');
  };

  return (
    <nav className="w-full flex flex-wrap justify-center gap-4 text-lg font-semibold p-4 bg-white z-50 shadow-md">
      {navItems.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`${
            pathname === href ? 'text-orange-500' : 'text-black'
          } hover:text-orange-500 transition-colors duration-300`}
        >
          {label}
        </Link>
      ))}

      {isAuthenticated ? (
        <>
          <Link
            href="/my_account"
            className={`${
              pathname === '/my_account' ? 'text-orange-500' : 'text-black'
            } hover:text-orange-500 transition-colors duration-300`}
          >
            MY ACCOUNT
          </Link>
          <button
            onClick={handleSignOut}
            className="text-black hover:text-orange-500 transition-colors duration-300"
          >
            SIGN OUT
          </button>
        </>
      ) : (
        <>
          <Link
            href="/signin"
            className={`${
              pathname === '/signin' ? 'text-orange-500' : 'text-black'
            } hover:text-orange-500 transition-colors duration-300`}
          >
            SIGN IN
          </Link>
          <Link
            href="/signup"
            className={`${
              pathname === '/signup' ? 'text-orange-500' : 'text-black'
            } hover:text-orange-500 transition-colors duration-300`}
          >
            REGISTER
          </Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;










