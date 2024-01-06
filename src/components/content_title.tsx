export default function ContentTitle({
  children,
}: {
  children?: React.ReactNode
}) {
  if (children) {
    return <h2 className='content-title text-center'>{children}</h2>
  }
  return <></>
}
