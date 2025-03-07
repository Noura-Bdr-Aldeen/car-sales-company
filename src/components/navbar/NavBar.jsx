import "./navbar.css"
import { Link } from 'react-router-dom'
import logo from "../../assets/images/logo.avif"
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import { HiOutlineShoppingCart } from "react-icons/hi";

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-black px-5">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/"}><img src={logo} alt="..." /></Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item px-2">
                                <Link to="/cars" className="nav-link text-light text-decoration-none">
                                    All Cars
                                </Link>
                            </li>

                            <li className="nav-item dropdown px-2">
                                <a className="nav-link dropdown-toggle text-light" href="/cars" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    New
                                </a>
                                <ul className="dropdown-menu bg-black">
                                    <li><a className="dropdown-item text-light" href="/cars">New EVs</a></li>
                                    <li><a className="dropdown-item text-light" href="/cars">New SUVs</a></li>
                                    <li><a className="dropdown-item text-light" href="/cars">New Trucks</a></li>
                                    <li><a className="dropdown-item text-light" href="/cars">New Vans</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown px-2">
                                <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Used
                                </a>
                                <ul className="dropdown-menu bg-black">
                                    <li><a className="dropdown-item text-light" href="/cars">Used EVs</a></li>
                                    <li><a className="dropdown-item text-light" href="/cars">Used SUVs</a></li>
                                    <li><a className="dropdown-item text-light" href="/cars">Used Trucks</a></li>
                                    <li><a className="dropdown-item text-light" href="/cars">Used Vans</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown px-2">
                                <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Electric
                                </a>
                                <ul className="dropdown-menu bg-black">
                                    <li><a className="dropdown-item text-light hover-red" href="/cars">EV Hub</a></li>
                                    <li><a className="dropdown-item text-light" href="/cars">New EVs</a></li>
                                    <li><a className="dropdown-item text-light" href="/cars">Used EVs</a></li>
                                    <li><a className="dropdown-item text-light" href="/cars">Used Teslas</a></li>
                                    <li><a className="dropdown-item text-light" href="/cars">EVs Deals</a></li>
                                </ul>
                            </li>
                            <li className="nav-item px-2">
                                <a className="nav-link disabled"
                                    style={{ color: "#D325A6" }}
                                    aria-disabled="true">Sill your car</a>
                            </li>
                        </ul>
                        <Link className="text-info text-decoration-none px-4"
                            to={"/cart"}><HiOutlineShoppingCart size={30} /></Link>
                        <SignedOut>
                            <SignInButton style={{ borderRadius: '20px', padding: "3px 20px", border: "solid 3px #0AA19D " }} />
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
