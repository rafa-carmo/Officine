interface BaseProps {
  children: React.ReactNode
}
export function Base({ children }: BaseProps) {
  return (
    <main>
      <div>Lateral menu</div>
      <div>Menu</div>

      <div>{children}</div>
    </main>
  )
}
