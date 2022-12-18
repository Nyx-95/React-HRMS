import headercss from "./header.module.css";
import Logo from "../../assets/logo.png"
import { useState, useEffect } from 'react';
import * as React from 'react';
import $ from 'jquery'







function Header() {
    useEffect(() => {
        let screenWidth = window.innerWidth;
        screenWidth <= 991 ? $(".monitornav").hide() : $(".monitornav").show();
        screenWidth <= 991 ? $(".mobilenav").show() : $(".mobilenav").hide();
    });

    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);

    return (

        <>

            <div className={` row ${headercss.headerrow}`}>
                <div className="col-xl-3 col-lg-3 col-sm-3 col-4">
                    <div className={headercss.headerimage}>
        
                            <img src={Logo}></img>
                 
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-sm-7 col-6">
                    <div className={headercss.headersearch}>
                        <div className={headercss.headersearchinner}>
                            <button type="submit"><i className="ri-search-line"></i></button>
                            <input type="text" className="form-control shadow-none " id={headercss.searchinput} aria-label="Search"
                                aria-describedby="addon-wrapping" placeholder="Search" />

                        </div>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-sm-0 col-0 monitornav">
                    <div className={headercss.headertime}>
                        <div className={headercss.thirdinnerdiv}>
                            <div className={headercss.Timeindiv}> <label>12:00 pm</label> </div>
                            <div className={headercss.switch}>
                                <button type="button" className="btn btn-outline-primary shadow-none"
                                    data-bs-toggle="button" autoComplete="off"> Check Out </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-sm-0 col-0 monitornav">
                    <div className={headercss.headermenu}>
                        <ul className={headercss.headermenuUl}>
                            <li className={headercss.menuiconli}><a href="#"><i className="ri-function-line"></i></a> </li>
                            <li className={headercss.menuiconli}> <a href="#"><i className="ri-wechat-line"></i></a> </li>
                            <li className={headercss.menuiconli}> <a href="#"><i className="ri-notification-3-line"></i></a> </li>
                            <li className={headercss.menuiconli}> <a href="#"><i className="ri-settings-3-line"></i> </a> </li>
                        </ul>
                    </div>
                </div>

                <div className="col-sm-2 col-2 mobilenav">

                    <div className="dropDownContainer">
                        <div onClick={toggling} className={headercss.dropDownHeader}><i className="ri-menu-line"></i></div>
                        {isOpen && (
                            <div className={`dropDownListContain ${headercss.dropDownListContainer}`}>
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
                                            <div className={headercss.menuIconName}><i className="ri-function-line"></i>
                                                <span>Menu</span></div>
                                        </a>
                                    </div>
                                    <div className={headercss.ListItem}>
                                        <a href="#">
                                            <div className={headercss.menuIconName}><i className="ri-wechat-line"></i>
                                                <span>Chat</span></div>
                                        </a>
                                    </div>
                                    <div className={headercss.ListItem}>
                                        <a href="#">
                                            <div className={headercss.menuIconName}><i className="ri-notification-3-line"></i>
                                                <span>Notification</span></div>
                                        </a>
                                    </div>
                                    <div className={headercss.ListItem}>
                                        <a href="#">
                                            <div className={headercss.menuIconName}><i className="ri-settings-3-line"></i>
                                                <span>Settings</span>
                                            </div>
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





