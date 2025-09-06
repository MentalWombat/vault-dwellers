'use client';

import { Link as ChakraLink } from '@chakra-ui/react';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

export default function Link({ children, href }: { children: string; href: string }) {
  const pathname = usePathname();

  return (
    <ChakraLink aria-current={href === pathname ? 'page' : undefined} asChild p="2">
      <NextLink href={href}>{children}</NextLink>
    </ChakraLink>
  );
}
