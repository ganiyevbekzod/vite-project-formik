import React from "react"
import { Link } from "react-router-dom"
export const Header=()=>{
    return(
        <div>
            <header className="bg-dark py-3">
                <div className="container">
                    <div className="d-flex align-items-center">
                        <Link className="fs-4 text-white text-decoration-none" to="/">LOGO</Link>
                        <Link to="/Login" className="ms-auto text-decoration-none btn btn-outline-primary">SIGN IN</Link>
                        <Link to="Register" className="ms-3 text-decoration-none btn btn-outline-warning">SIGN UP</Link>
                    </div>
                </div>
            </header>
        </div>
    )
}