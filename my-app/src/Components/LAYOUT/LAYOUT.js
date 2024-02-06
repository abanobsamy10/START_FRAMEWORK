import { Component } from "react";
import './LAYOUT.Module.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "../../../../node_modules/font-awesome/css/font-awesome.min.css"
import { Link, Outlet } from "react-router-dom";
export default class Layout extends Component
{
    state={}
    render()
    {
        return<>
        
        <nav className="navbar navbar-expand-lg background p-4 fixed-top">
        <div className="container ">
          <Link className="navbar-brand fw-bolder text-white fs-2" to="/home ">START FRAMEWORK</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link fw-bolder text-white " aria-current="page" to="about">ABOUT</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bolder text-white" to="PORTFOLIO">PORTFOLIO</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bolder text-white" to="CONTACT">CONTACT</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet/>


     <footer>
      <div className="d-flex background text-white p-4 text-center help justify-content-center align-items-center">
        <div className="row xy">
          <div className="col-md-4 ">
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className="col-md-4 ">
            <h3>AROUND THE WEB</h3>
            <div className="div-of-icons d-flex justify-content-center">
              <i className="fa fa-facebook mx-1 rounded-circle"></i>
              <i className="fa fa-twitter mx-1 rounded-circle"></i>
              <i className="fa fa-linkedin mx-1 rounded-circle"></i>
              <i className="fa fa-globe mx-1 rounded-circle"></i>
            </div>
          </div>
          <div className="col-md-4 ">
            <h3>ABOUT FREELANCER</h3>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
        </div>
      </div>
     <div className=" w-100 text-white p-4 text-center back">
      Copyright © Your Website 2021
      </div >
     </footer>
      </>
    }
}

