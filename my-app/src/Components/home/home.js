import { Component } from "react";
import './home.Module.css';
export default class Home extends Component
{
    state={}
    render(){
        return <>
        <div className="zeft">
        </div>
        <div className=" maindiv d-flex flex-column justify-content-center align-items-center ">
            <img src="https://routeegy.github.io/startFramework/assets/images/avataaars.svg"className="hiiiii mb-5" alt="man"/>
            <h1 className="fw-bolder text-white">START FRAMEWORK</h1>
            <i className="fa fa-star text-white ii position-relative my-2"></i>
            <p className="text-white mb-4 mt-2">Graphic Artist - Web Designer - Illustrator</p>
        </div>
        </>
    }
}