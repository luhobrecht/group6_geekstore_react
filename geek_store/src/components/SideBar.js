import React from "react";

function SideBar() {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                <div className="sidebar-brand-icon">
                    <img className="fas fa-chart-line" src="/assets/img/logo.png" width={100}></img>                
                </div>
                <div className="sidebar-brand-text mx-3"></div>
            </a>

            <hr className="sidebar-divider my-0"/>
            
			<li className="nav-item active">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span></a>
                </li>
			<hr className="sidebar-divider"/>
			<div className="sidebar-heading">Actions</div>

			<li className="nav-item">
                <a className="nav-link collapsed" href="http://localhost:3000/">
                    <i className="fas fa-home"></i>
                    <span>Home</span>
                </a>
            </li>

			<li className="nav-item">
                <a className="nav-link" href="/">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Gráficos</span>
                </a>
            </li>

			<li className="nav-item">
                <a className="nav-link" href="http://localhost:3000/productos/">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Productos</span>
                </a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="http://localhost:3000/usuarios/">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Usuarios</span>
                </a>
            </li>

			<hr className="sidebar-divider d-none d-md-block" />
		</ul>
    )
}



export default SideBar;