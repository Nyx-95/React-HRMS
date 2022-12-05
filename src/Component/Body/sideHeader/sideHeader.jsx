import sideHeadercss from "./sideHeader.module.css";
import leftBarProfilePic from "../../../assets/leftbarprofilepic.png"


function sideHeader() {
    return ( 
        <>
        
        <nav className={`${sideHeadercss.mainMenu} ${sideHeadercss.mobilesidenav}`}>
                    <div className={sideHeadercss.profileicon}>
                        <div className={sideHeadercss.profileicontab}>
                            <a href="#">
                                <img src={leftBarProfilePic}/>
                                <span>S. Osama Ali</span>
                            </a>
                        </div>
                    </div>
                    <ul>
                        <li>
                            <a href="#">
                            <i className="ri-dashboard-line"></i>                      
                                <span className="navText">
                                    Dashboard
                                </span>
                            </a>

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
                <div className="mobilesidenavbutton">
                    <div className="mobilesidenavouter">
                        <button className="btn btn-primary movilesidenavbuttonouterbtn shadow-none">Side Bar</button>
                    </div>
                </div>

        </>
     );
}

export default sideHeader;



