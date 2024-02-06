import { Component } from "react";
import "./contact.Module.css"
export default class Contact extends Component
{
    state={}
    render(){
        return <>
        <div className="zeft">
        </div>
        <div className="contact d-flex flex-column justify-content-start align-items-center">
            <h2 className="fw-bolder fs-1 text-color m-3">CONATCT SECTION</h2>
            <i className="fa fa-star cc text-color position-relative my-2"></i>
            <div className="input my-5">
            <input placeholder="UserName" className="h-100 w-100 mt-5 rounded border-bottom border-top-0 border-end-0 border-start-0" type="text"/>
            <input placeholder="UserAge" className="h-100 w-100 mt-5 rounded border-bottom border-top-0 border-end-0 border-start-0 " type="number"/>
            <input placeholder="UserEmail" className="h-100 w-100 mt-5 rounded border-bottom border-top-0 border-end-0 border-start-0 " type="email"/>
            <input placeholder="UserPassword" className="h-100 w-100 mt-5 rounded border-bottom border-top-0 border-end-0 border-start-0 " type="password"/>
            <button className="btn btn-info mt-4">send Message</button>
            </div>
        </div>
        </>
    }
}