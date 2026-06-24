export default function Logo({ size = 44 }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
      <img src="/logo-cajatacna.svg" height={size} alt="Caja Tacna" style={{ display: 'block' }} />
    </span>
  )
}
