import { type Metadata } from 'next';

import { Provider } from '@/components/ui/provider';

export const metadata: Metadata = {
  title: 'Vault Dwellers 1.0'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
