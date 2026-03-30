
const NavBar = () => {
  return (
    <div className="navbar container  w-7xl mx-auto px-4">
      <div className="navbar-start">
        <h1 className="font-bold text-2xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">DigiTools</h1>
      </div>
      <div className="navbar-center">
        <ul className="flex gap-8">
            <li>Products</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Testimonials</li>
            <li>FAQ</li>
        </ul>
      </div>
      <div className="navbar-end gap-6">
        <a href="">Login</a>
        <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full font-semibold text-white">Get Started</button>
      </div>

    </div>
  )
}

export default NavBar
