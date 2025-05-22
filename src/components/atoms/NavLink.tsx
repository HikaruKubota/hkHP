import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface Props extends LinkProps {
  children: ReactNode;
}

export default function NavLink({ href, children, ...props }: Props) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      className={`px-3 py-2 ${active ? 'text-blue-600' : 'text-gray-700'} hover:underline`}
      {...props}
    >
      {children}
    </Link>
  );
}
