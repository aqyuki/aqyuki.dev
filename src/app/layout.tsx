import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>uwaaa - Student Developer</title>
      <meta name="description" />
      content="学生プログラマーのポートフォリオサイトです。"
      <body>{children}</body>
    </html>
  );
}
