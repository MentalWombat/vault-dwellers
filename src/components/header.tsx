import { HStack, StackSeparator } from '@chakra-ui/react';

import Link from './ui/link';

export default function Header() {
  return (
    <header>
      <nav>
        <HStack p="6" separator={<StackSeparator />}>
          <Link href="/">WELCOME</Link>
          <Link href="/dwellers">DWELLERS</Link>
        </HStack>
      </nav>
    </header>
  );
}
