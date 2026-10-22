import { NavLink } from "react-router";


const Navbar = () => {
  return (
    <div className="bg-black rouded p-5 flex items-center justify-between text-white">
      <div>Logo</div>
      <div className="flex gap-10 text-xl">
        <NavLink to={"/home"} ><p className="cursor-pointer">Home</p></NavLink>
        <NavLink to={"/product"} ><p className="cursor-pointer">Produts</p></NavLink>
        <NavLink to={"/about"}><p className="cursor-pointer">About</p></NavLink>
      </div>
      <button>Login</button>
    </div>
  )
}

export default Navbar
