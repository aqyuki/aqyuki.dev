export default function ContentContainer({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const class_name: string =
    'content-container ' + (className ? className : '');
  if (children) {
    return <div className={class_name}>{children}</div>;
  }
  return <></>;
}
