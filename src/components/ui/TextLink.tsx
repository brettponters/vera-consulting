import Link from 'next/link';

interface TextLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Link with a drawable underline on hover.
 * Uses background-image gradient pattern: background-size 0% 1px → 100% 1px.
 * Internal paths use Next.js <Link>; external URLs use <a>.
 */
export function TextLink({ href, children, className = '' }: TextLinkProps) {
  const isExternal = href.startsWith('http://') || href.startsWith('https://') || href.startsWith('//');

  const baseClass = [
    'inline-flex items-center gap-1 group',
    'text-fg-muted transition-colors duration-200 hover:text-accent',
    'bg-[length:0%_1px] hover:bg-[length:100%_1px]',
    'bg-no-repeat [background-position:0_100%]',
    '[background-image:linear-gradient(currentColor,currentColor)]',
    '[transition:color_0.2s_ease,background-size_0.35s_ease]',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (isExternal) {
    return (
      <a href={href} className={baseClass} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={baseClass}>
      {children}
    </Link>
  );
}
