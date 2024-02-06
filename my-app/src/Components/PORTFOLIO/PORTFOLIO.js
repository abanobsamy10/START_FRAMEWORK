import { Component } from "react";
import "./portfolio.Module.css";
export default class PORTFOLIO extends Component
{
    state={}
    render()
    {
        return <>
        <div className="zeft">
        </div>
        <div className="d-flex ttt flex-column justify-content-start align-items-center">
            <h2 className="fw-bolder fs-1 text-color m-3">PORTFOLIO COMPONENT</h2>
            <i className="fa fa-star cc text-color position-relative my-2"></i>
            <div className="container">
                <div class="row row-cols-1 row-cols-md-3 g-5 mb-5">
                    <div class="col">
                        <div class="card">
                            <div className="cover position-relative">
                                <div className="lay position-absolute d-flex justify-content-center align-items-center fs-1">
                                    <i className="text-white fa fa-plus"></i>
                                </div>
                                <img src="https://routeegy.github.io/startFramework/assets/images/poert1.png" class="card-img-top" alt="..."/>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <div className="cover position-relative">
                                <div className="lay position-absolute d-flex justify-content-center align-items-center fs-1">
                                    <i className="text-white fa fa-plus"></i>
                                </div>
                                <img src="https://routeegy.github.io/startFramework/assets/images/port2.png" class="card-img-top" alt="..."/>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <div className="cover position-relative">
                                <div className="lay position-absolute d-flex justify-content-center align-items-center fs-1">
                                    <i className="text-white fa fa-plus"></i>
                                </div>
                                <img src="https://routeegy.github.io/startFramework/assets/images/port3.png" class="card-img-top" alt="..."/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row row-cols-1 row-cols-md-3 g-5 mb-5">
                    <div class="col">
                        <div class="card">
                            <div className="cover position-relative">
                                <div className="lay position-absolute d-flex justify-content-center align-items-center fs-1">
                                    <i className="text-white fa fa-plus"></i>
                                </div>
                                <img src="https://routeegy.github.io/startFramework/assets/images/poert1.png" class="card-img-top" alt="..."/>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <div className="cover position-relative">
                                <div className="lay position-absolute d-flex justify-content-center align-items-center fs-1">
                                    <i className="text-white fa fa-plus"></i>
                                </div>
                                <img src="https://routeegy.github.io/startFramework/assets/images/port2.png" class="card-img-top" alt="..."/>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <div className="cover position-relative">
                                <div className="lay position-absolute d-flex justify-content-center align-items-center fs-1">
                                    <i className="text-white fa fa-plus"></i>
                                </div>
                                <img src="https://routeegy.github.io/startFramework/assets/images/port3.png" class="card-img-top" alt="..."/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    }
}