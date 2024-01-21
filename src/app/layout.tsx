import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>uwaaa - Student Developer</title>
      <meta
        name="description"
        content="学生プログラマーのポートフォリオサイトです。プロフィールや作成したものなどを掲載しています。"
      />
      <body>{children}</body>
    </html>
  );
}
