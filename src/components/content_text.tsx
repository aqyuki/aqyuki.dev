export default function ContentText({
  children,
}: {
  children?: React.ReactNode
}) {
  if (children) {
    return <p className='w-body'>{children}</p>
  }
  return <></>
}
