import sideHeadercss from "./sideHeader.module.css";
import leftBarProfilePic from "../../assets/leftbarprofilepic.png";
import {useEffect, useState, useRef} from 'react';
import $ from 'jquery';
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../Utils/routes";


function SideHeader() {
    const sideNavRef= useRef(null)
    const [isMobile, setIsMobile] = useState(false)
    const [isNav, setIsNav] = useState(false)
    const [navWidth,setNavWidth] = useState(0)

    const sideBarButton = (isOpen) =>{
        setIsNav(isOpen)
    }
    useEffect(()=>{
        setNavWidth(sideNavRef.current.offsetWidth)
    },[isNav])

    // const onNavClick = () =>{
    //     $(".movilesidenavbuttonouterbtn").css("left", `${$(".mobilesidenav").width() - 32}px`);
    // }

    useEffect(() => {
        let screenWidth = window.innerWidth;
        setIsMobile(screenWidth <= 991)
    },[]);
    return (
        <>
            <nav className={`mobilesidenav ${sideHeadercss.mainMenu} ${(!isMobile || isNav) ? '' : sideHeadercss.isHidden}`} ref={sideNavRef}>
                <div className={sideHeadercss.profileicon}>
                    <div className={sideHeadercss.profileicontab}>
                        <NavLink to={ROUTES.USER_PROFILE}>
                            <img src={leftBarProfilePic} />
                            <span>S. Osama Ali</span>
                        </NavLink>
                    </div>
                </div>
                <ul>
                    <li>
                        <NavLink to={ROUTES.DASHBOARD}>
                            <i className="ri-dashboard-line"></i>
                            <span className="navText">
                                Dashboard
                            </span>
                        </NavLink>

                    </li>
                    <li className="has-subnav">
                        <a href="#">
                            <i className="ri-numbers-line"></i>
                            <span className="navText">
                                Career Scale
                            </span>
                        </a>

                    </li>
                    <li className="has-subnav">
                        <NavLink to={ROUTES.USER_BODY}>
                            <i className="ri-user-3-line"></i>
                            <span className="navText">
                                Users
                            </span>
                        </NavLink>

                    </li>
                    <li className="has-subnav">
                        <a href="#">
                            <i className="ri-calendar-line"></i>
                            <span className="navText">
                                Attendance
                            </span>
                        </a>

                    </li>
                    <li className="has-subnav">
                        <a href="#">
                            <i className="ri-wifi-line"></i>

                            <span className="navText">
                                Wifi Access
                            </span>
                        </a>

                    </li>
                    <li>
                        <a href="#">
                            <i className="ri-bank-card-line"></i>

                            <span className="navText">
                                Payments
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="ri-file-list-3-line"></i>
                            <span className="navText">
                                Policies
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="ri-file-paper-line"></i>
                            <span className="navText">
                                My Financials
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="ri-team-line"></i>
                            <span className="navText">
                                My Team
                            </span>
                        </a>
                    </li>

                </ul>
            </nav>


            {isMobile && <div className={`mobilesidenavbutton ${sideHeadercss.mobilesidenavbtn}`}>
                <div className={sideHeadercss.mobilesidenavouter}>
                    <button className={`btn btn-primary shadow-none movilesidenavbuttonouterbtn ${sideHeadercss.movilesidenavbuttonouterbutton}`} onClick={()=> sideBarButton(!isNav)} style={{left:`${isNav ? `${ navWidth - 32}px`: "-35px"}`}}>Side Bar</button>
                </div>
            </div>}

        </>
    );
}

export default SideHeader;



