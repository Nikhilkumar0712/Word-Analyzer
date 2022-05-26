import React from 'react'
const Nav = (props) => {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Word Analyzer</a>
                    <div className={`form-check form-switch text-${props.mode==="light"?"grey":"light"}`}>
                        <input className="form-check-input" onClick={props.togglemode} type="checkbox" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav