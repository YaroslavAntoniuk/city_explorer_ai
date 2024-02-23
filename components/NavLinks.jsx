import Link from 'next/link';

const links = [
  { href: '/chat', label: 'Chat' },
  { href: '/tours', label: 'Tours' },
  { href: '/tours/new', label: 'New Tour' },
  { href: '/profile', label: 'Profile' },
];

const NavLinks = () => {
  return (
    <ul className="menu text-base-content">
      {links.map((link) => (
        <li key={link.href}>
          <Link href={link.href} className="menu-item capitalize">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
