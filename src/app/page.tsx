import { Text } from '@chakra-ui/react';

import { sixtyfour } from '@/components/ui/fonts';

export default function Page() {
  return (
    <main>
      <Text className={sixtyfour.className} p="6" textStyle="4xl">
        Welcome back, Overseer!
      </Text>
    </main>
  );
}
