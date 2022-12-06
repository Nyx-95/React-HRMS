import headercss from "./header.module.css";
import Logo from "../../assets/logo.png"
import Menuicon1 from "../../assets/menuicon1.png"
import Menuicon2 from "../../assets/menuicon2.png"
import Menuicon3 from "../../assets/menuicon3.png"
import Menuicon4 from "../../assets/menuicon4.png"
import { useState, useEffect } from 'react';
import * as React from 'react';
import $ from 'jquery'







function Header() {
    useEffect(() => {
        let screenWidth = window.innerWidth;
        screenWidth <= 992 ? $(".monitornav").hide() : $(".monitornav").show();
        screenWidth <= 992 ? $(".mobilenav").show() : $(".mobilenav").hide();
    });



    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);

    return (

        <>

            <div className={` row ${headercss.headerrow}`}>
                <div className="col-lg-2 col-sm-3 col-4">
                    <div className={headercss.headerimage}>
                        <img src={Logo}></img>
                    </div>
                </div>
                <div className="col-lg-5 col-sm-7 col-6">
                    <div className={headercss.headersearch}>
                        <div className={headercss.headersearchinner}>
                            <button type="submit"><i className="ri-search-line"></i></button>
                            <input type="text" className="form-control shadow-none " id={headercss.searchinput} aria-label="Search"
                                aria-describedby="addon-wrapping" placeholder="Search" />

                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-0 col-0 monitornav">
                    <div className={headercss.headertime}>
                        <div className={headercss.thirdinnerdiv}>
                            <div className={headercss.Timeindiv}> <label>Time In</label> </div>
                            <div className={headercss.switch}>
                                <button type="button" className="btn btn-outline-primary shadow-none"
                                    data-bs-toggle="button" autoComplete="off"> <label>Check Out</label></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-sm-0 col-0 monitornav">
                    <div className={headercss.headermenu}>
                        <ul className={headercss.headermenuUl}>
                            <li className={headercss.menuiconli}><a href="#"><img src={Menuicon1} /></a> </li>
                            <li className={headercss.menuiconli}> <a href="#"><img src={Menuicon2} /></a> </li>
                            <li className={headercss.menuiconli}> <a href="#"><img src={Menuicon3} /></a> </li>
                            <li className={headercss.menuiconli}> <a href="#"><img src={Menuicon4} /> </a> </li>
                        </ul>
                    </div>
                </div>

                <div className="col-sm-2 col-2 mobilenav">

                    <div className="dropDownContainer">
                        <div onClick={toggling} className={headercss.dropDownHeader}><i className="ri-menu-line"></i></div>
                        {isOpen && (
                            <div className={headercss.dropDownListContainer}>
                                <div className={headercss.DropDownList}>
                                    <div className={headercss.ListItem}>
                                        <div className={headercss.headertime}>
                                            <div className={headercss.thirdinnerdiv}>
                                                <div className={headercss.Timeindiv}> <label>Time In</label> </div>
                                                <div className={headercss.switch}>
                                                    <button type="button" className="btn btn-outline-primary shadow-none"
                                                        data-bs-toggle="button" autoComplete="off"> <label>Check Out</label></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={headercss.ListItem}>
                                        <a href="#">
                                            <div className={headercss.menuIconName}><img src={Menuicon1} />
                                                <span>Menu</span></div>
                                        </a>
                                    </div>
                                    <div className={headercss.ListItem}>
                                        <a href="#">
                                            <div className={headercss.menuIconName}><img src={Menuicon2} />
                                                <span>Chat</span></div>
                                        </a>
                                    </div>
                                    <div className={headercss.ListItem}>
                                        <a href="#">
                                            <div className={headercss.menuIconName}><img src={Menuicon3} />
                                                <span>Notification</span></div>
                                        </a>
                                    </div>
                                    <div className={headercss.ListItem}>
                                        <a href="#">
                                            <div className={headercss.menuIconName}><img src={Menuicon4} />
                                                <span>Settings</span></div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                </div>


            </div>

        </>
    );
}

export default Header;





