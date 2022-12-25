import sideHeadercss from "./sideHeader.module.css";
import leftBarProfilePic from "../../assets/leftbarprofilepic.png";
import { useEffect, useState, useRef } from 'react';
import $ from 'jquery';
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../Utils/routes";


function SideHeader() {
    const sideNavRef=useRef(null);
    const [isMobile, setIsMobile] = useState(false)
    const [isNav, setIsNav] = useState({isOpen:false, width:null})
   
    const sideBarButton = (isOpen, width) =>{
        console.log(width,'nigga')
       setIsNav({isOpen,width:$(".mobilesidenav").width()})
       console.log($(".mobilesidenav").width() )
        // if(isOpen){
        //     $(".movilesidenavbuttonouterbtn").css("left", `${ sideNavRef.current.offsetWidth - 32}px`);
        // }
        // else{
        //     $(".movilesidenavbuttonouterbtn").css("left", "-35px");
        // }
        // if ($(".mobilesidenav").is(":visible")) {
        //     $(".movilesidenavbuttonouterbtn").css("left", `${$(".mobilesidenav").width() - 32}px`);
        // }
        // else {
        //     $(".movilesidenavbuttonouterbtn").css("left", "-35px");
        // }
    }

    const onNavClick = () =>{
        $(".movilesidenavbuttonouterbtn").css("left", `${$(".mobilesidenav").width() - 32}px`);
    }

    useEffect(() => {
        let screenWidth = window.innerWidth;
        console.log(screenWidth)
        setIsMobile(screenWidth <= 991)
        

        // screenWidth <= 991 ? $(".mobilesidenav").hide() : $(".mobilesidenav").show();
        // screenWidth <= 991 ? $(".mobilesidenavbutton").show() : $(".mobilesidenavbutton").hide();



        // $(".mobilesidenav").on('click', () => {
        //     $(".movilesidenavbuttonouterbtn").css("left", `${$(".mobilesidenav").width() - 32}px`);
        // })

        // $(".movilesidenavbuttonouterbtn").on('click', function () {
        //     $(".mobilesidenav").toggle();
        //     if ($(".mobilesidenav").is(":visible")) {
        //         $(".movilesidenavbuttonouterbtn").css("left", `${$(".mobilesidenav").width() - 32}px`);
        //     }
        //     else {
        //         $(".movilesidenavbuttonouterbtn").css("left", "-35px");
        //     }

        // });

        
        

    },[]);
    return (
        <>
            {(!isMobile || isNav.isOpen) &&
            <nav className={`mobilesidenav ${sideHeadercss.mainMenu} `} onClick={onNavClick} ref={sideNavRef}>
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
                        <a href="#">
                            <i className="ri-user-3-line"></i>
                            <span className="navText">
                                Users
                            </span>
                        </a>

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
}

            {isMobile && <div className={`mobilesidenavbutton ${sideHeadercss.mobilesidenavbtn}`}>
                <div className={sideHeadercss.mobilesidenavouter}>
                    <button className={`btn btn-primary shadow-none movilesidenavbuttonouterbtn ${sideHeadercss.movilesidenavbuttonouterbutton}`} onClick={()=> sideBarButton(!isNav.isOpen)} style={{left:`${isNav.isOpen ? `${ isNav.width - 32}px`: "-35px"}`}}>Side Bar</button>
                </div>
            </div>}

        </>
    );
}

export default SideHeader;



