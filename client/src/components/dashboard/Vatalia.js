import React, {Fragment} from "react";
import { connect } from "react-redux";
import bicycle from "../../images/bicycle.svg";
import blocks from "../../images/blocks.svg";
import customer from "../../images/customer.svg";
import mechanic from "../../images/mechanic.svg";

const Vatalia = ({auth}) => {

return(
    <Fragment>
        <div className="container-fluid">
            <div className="banner row">
                <div className="col-sm-12">
                    <div>
                        <h1 className="lobster-font lightfont">
                            Vatalia Bikes Co.
                        </h1>
                        <p style={{color:"#DDDFE2"}}>
                            We are all about bikes
                        </p>
                    </div>
                </div>
            </div>

        <div className="container-fluid m-0 p-0">   
            <div className="row">
            
                <div className="col-sm-6 m-0 p-0">
                    <div className="parallax">
                        <p className="para-text p-5">
                            We aim to be the most preferred bicycle store and maintenance provider. With our main goals of delivering high value, high quality, good service and providing customer satisfaction.
                        </p>
                    </div>
                </div>

                <div className="col-sm-6 parallax mx-0 px-0">
                    <div className="row dark-overlay mx-0 px-0">
                        <div className="col-sm-6 p-3">
                            <div className="card" style={{border: "0px"}}>
                            <div className="abtimagecontainer parallax">
                            <div className="dark-overlay">
                                <div className="overlay">
                                    <div className="abttext">No matter what your mechanical issue you have, we can fix it!</div>
                                </div>
                                <img src={bicycle} alt="bicycle" className="abtimage img-50"/>
                            </div>
                            </div>

                                <div className="card-body p-0 parallax" style={{color:"white"}}>
                                    <p className="card-text lobster-font abt-label dark-overlay">
                                    Full Service Shop
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 py-3">
                            <div className="card" style={{border: "0px"}}>
                            <div className="abtimagecontainer parallax">
                            <div className="dark-overlay">
                                <div className="overlay">
                                    <div className="abttext m-0 p-0">With a innovative and creative staff with over 60 plus years of in-shop experience, we can handle whatever you can throw at us. (no sharp objects please!)</div>
                                </div>
                                <img src={mechanic} alt="mechanic" className="abtimage img-50"/>
                            </div>
                            </div>
                                <div className="card-body p-0 parallax" style={{color:"white"}}>
                                    <p className="card-text lobster-font abt-label dark-overlay">
                                    Talented Mechanics
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 py-3">
                            <div className="card" style={{border: "0px"}}>
                            <div className="abtimagecontainer parallax">
                            <div className="dark-overlay">
                                <div className="overlay">
                                    <div className="abttext">Whether you are a professional racer or recreational enthusiast are goal is to make you smile while riding or on the podium.</div>
                                </div>
                                <img src={blocks} alt="blocks" className="abtimage img-50"/>
                            </div>
                            </div>
                                <div className="card-body p-0 parallax" style={{color:"white"}}>
                                    <p className="card-text lobster-font abt-label dark-overlay">
                                    Best Bike Fitting
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 py-3">
                            <div className="card" style={{border: "0px"}}>
                            <div className="abtimagecontainer parallax">
                            <div className="dark-overlay">
                                <div className="overlay">
                                    <div className="abttext">Our customer service specialists strive to make sure your completely satisfied with your cycling experience.</div>
                                </div>
                                <img src={customer} alt="customer" className="abtimage img-50"/>
                            </div>
                            </div>
                                <div className="card-body p-0 parallax" style={{color:"white"}}>
                                    <p className="card-text lobster-font abt-label dark-overlay">
                                    Customer Care
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </Fragment>
    )
};

const mapStateToProps = state => ({
    	auth: state.auth
    })
    
export default connect(mapStateToProps)(Vatalia);