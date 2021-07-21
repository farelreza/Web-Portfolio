export default function Container({children, className}) {
  return (
    <div className={`px-8 ${className}`}>
      {children}
    </div>
  )
}
