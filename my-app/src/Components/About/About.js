import { Component } from "react";
import  './about.Module.css';
export default class About extends Component
{
    state={}
    render()
    {
        return <>
        <div className="zeft">
        </div>
        <div className=" maindiv d-flex flex-column justify-content-center align-items-center ">
            <h1 className="fw-bolder text-white ">ABOUT COMPONENT</h1>
            <i className="fa fa-star text-white yy position-relative my-2"></i>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="text-white col-md-5 mx-1">
                        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                    <div className="col-md-5 text-white mx-1">
                        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    }
}