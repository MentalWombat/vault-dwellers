import { Grid } from '@chakra-ui/react';
import { type Metadata } from 'next';

import Footer from '@/components/footer';
import Header from '@/components/header';
import { doto } from '@/components/ui/fonts';
import { Provider } from '@/components/ui/provider';

export const metadata: Metadata = {
  title: 'Vault Dwellers 1.0'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={doto.className}>
        <Provider>
          <Grid minHeight="100vh" templateRows="auto 1fr auto">
            <Header />
            {children}
            <Footer />
          </Grid>
        </Provider>
      </body>
    </html>
  );
}
