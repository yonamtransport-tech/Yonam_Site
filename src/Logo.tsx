function Logo({ light = false }: { light?: boolean }) {
  return (
    <>
      <img src="/logo-yonam.png" alt="" className="logo-icon" width={40} height={40} />
      <span className="logo-text" style={light ? { color: '#fff' } : undefined}>Yonam</span>
    </>
  )
}

export default Logo
