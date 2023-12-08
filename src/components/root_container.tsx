export default function RootContainer({
  children,
}: {
  children?: React.ReactNode;
}) {
  if (children) {
    return <div className="root-container">{children}</div>;
  }
  return <></>;
}
