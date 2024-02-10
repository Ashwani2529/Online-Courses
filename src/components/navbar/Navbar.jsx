import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import NavbarHandlers from "./NavbarHandlers"

const Navbar = () => {

    const { changeUserHandler } = NavbarHandlers()

    const dashboardState = useSelector(prevState => prevState.dashboard)

    const users = Object.keys(dashboardState.users)

    return (
        <div className="navbar border-b p-5 mb-5 sticky z-20 top-0 bg-slate-100">
            <div className="navbar-start w-[33%]">
              
                <Link to="/" className="btn btn-ghost text-xl hover:bg-black hover:text-white hover:border rounded-md hover:scale-90">Future | Learnings</Link>
            </div>
            
            <div className="max-lg:hidden navbar-end gap-3 w-[36%]">
                <Link to="/" className="btn bg-slate-100 border-none hover:border-dotted text-black hover:bg-white">Home</Link>
                <Link to="/courses" className="btn bg-slate-100 border-none hover:border-dotted text-black hover:bg-white">All Courses</Link>
                <Link to="/dashboard" className="btn bg-slate-100 border-none hover:border-dotted text-black hover:bg-white">Dashboard</Link>
            </div>
        </div>
    )
}

export default Navbar