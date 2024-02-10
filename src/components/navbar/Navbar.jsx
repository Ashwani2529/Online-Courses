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
               <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {/* <select className="select select-success w-full max-w-xs" onChange={changeUserHandler}>
                            {users.map((singleUser, singleIndex) => {
                                return (<option key={singleIndex} value={singleUser}>{singleUser}</option>)
                            })}
                        </select> */}
                        <span className="flex flex-col gap-2 mt-2">
                            <Link to="/" className="btn">Home</Link>
                            <Link to="/courses" className="btn">All Courses</Link>
                            <Link to="/dashboard" className="btn">Dashboard</Link>
                        </span>
                    </ul>
                </div>
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