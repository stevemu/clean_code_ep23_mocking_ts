import { CssBaseline } from '@repo/mui/CssBaseLine';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <CssBaseline />
      <body>{children}</body>
    </html>
  );
}
