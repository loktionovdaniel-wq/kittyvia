import Image from 'next/image';
import Link from 'next/link';

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="brand" aria-label="Kitty Via home">
      <Image src="/logo-mark.svg" alt="" width={compact ? 34 : 40} height={compact ? 34 : 40} />
      <span className="brand__text">Kitty Via</span>
    </Link>
  );
}
