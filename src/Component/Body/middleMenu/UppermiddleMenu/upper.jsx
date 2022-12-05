import uppercss from "./upper.module.css"
import bodyProfilePic from "../../../../assets/lowerseconddivprofilepic.png"
import noticeboardprofilepic from "../../../../assets/HR.png"
import headingLine from "../../../../assets/heading lines.png"
import $ from "jquery"
import OwlCarousel from "react-owl-carousel"
import "owl.carousel/dist/assets/owl.carousel.min.css"
import "owl.carousel/dist/assets/owl.theme.default.min.css"

function UpperMiddleMenu() {
    return (
        <>

            <div className="col-lg-4">

                <div className={uppercss.secondlowerdiv}>
                    <div className={uppercss.secondlowerouter}>
                        <div className={uppercss.secondlowerinner}>
                            <div className={uppercss.profilewrapper}>
                                <div className={uppercss.profilebackground}></div>
                                <div className={uppercss.profileouterdiv}>
                                    <div className={uppercss.secondlowerprofileicon}>
                                        <img src={bodyProfilePic} />
                                    </div>
                                    <div className={uppercss.profileinfo}>
                                        <h5>S. Osama Ali</h5>
                                        <p>Sr. UI/UX Designer</p>
                                        <progress id="file" value="82" max="100"> </progress>
                                        <div className={uppercss.progressLabel}>
                                            <label>complete Your Profile</label>
                                            <label>82%</label>
                                        </div>
                                    </div>
                                </div>
                                <div className={uppercss.profileschedulemain}>
                                    <div className={uppercss.profileschedulemainouter}>
                                        <div className={uppercss.profilescheduleinner}>
                                            <ul className={uppercss.profilescheduleinnerUl1}>
                                                <li><a href="#">
                                                    <div className={uppercss.profileschedulemenu}>
                                                        <div className={uppercss.profileschedulemenuicon}>
                                                            <i className="ri-time-line"></i>
                                                        </div>
                                                        <div className={uppercss.profileschedulemenutime}>
                                                            <div className={uppercss.profileschedulemenushift}>
                                                                Shift
                                                            </div>
                                                            <div className={uppercss.profileschedulemenuevening}>
                                                                Evening
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a></li>
                                                <li><a href="#">
                                                    <div className={uppercss.profileschedulemenu}>
                                                        <div className={uppercss.profileschedulemenuicon}>
                                                            <i className="ri-bank-card-2-line"></i>
                                                        </div>
                                                        <div className={uppercss.profileschedulemenutime}>
                                                            <div className={uppercss.profileschedulemenushift}>
                                                                Employee
                                                                ID</div>
                                                            <div className={uppercss.profileschedulemenuevening}>
                                                                15333
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a></li>
                                                <li><a href="#">
                                                    <div className={uppercss.profileschedulemenu}>
                                                        <div className={uppercss.profileschedulemenuicon}>
                                                            <i className="ri-calendar-2-line"></i>
                                                        </div>
                                                        <div className={uppercss.profileschedulemenutime}>
                                                            <div className={uppercss.profileschedulemenushift}>
                                                                Date of
                                                                Joining</div>
                                                            <div className={uppercss.profileschedulemenuevening}>
                                                                04-02-2022</div>
                                                        </div>
                                                    </div>
                                                </a></li>

                                            </ul>
                                            <ul className={uppercss.profilescheduleinnerUl2}>
                                                <li><a href="#">
                                                    <div className={uppercss.profileschedulemenu}>
                                                        <div className={uppercss.profileschedulemenuicon}>
                                                            <i className="ri-clockwise-line"></i>
                                                        </div>
                                                        <div className={uppercss.profileschedulemenutime}>
                                                            <div className={uppercss.profileschedulemenushift}>
                                                                Extension
                                                            </div>
                                                            <div className={uppercss.profileschedulemenuevening}>
                                                                2603
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a></li>
                                                <li><a href="#">
                                                    <div className={uppercss.profileschedulemenu}>
                                                        <div className={uppercss.profileschedulemenuicon}>
                                                            <i className="ri-time-line"></i>
                                                        </div>
                                                        <div className={uppercss.profileschedulemenutime}>
                                                            <div className={uppercss.profileschedulemenushift}>
                                                                Employement
                                                            </div>
                                                            <div className={uppercss.profileschedulemenuevening}>
                                                                1 Year 11 Months 19 Days (Permanent)
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="col-lg-8">

                <div className={`row ${uppercss.Noticesboard}`}>
                    <div className={uppercss.Noticesboardinner}>
                        <div className={uppercss.noticeboardwrapper}>
                            <div className={uppercss.mergeheadings}>
                                <h5>Notice Board</h5>
                                <img src={headingLine} alt="heading"></img>
                            </div>
                            <div className={uppercss.notificationbarouter}>
                                <div className={uppercss.notificationbarinner}>
                                    <div className={uppercss.innerbars}>
                                        <OwlCarousel
                                            className="owl-theme"
                                            items="2"
                                            nav
                                            margin={10}
                                        >
                                            <div className={` item  ${uppercss.notificationbar}`}>
                                                <div className={uppercss.notificationBarprofile}>
                                                    <img src={noticeboardprofilepic} />
                                                </div>
                                                <div className={uppercss.notificationBarmessage}>
                                                    <h5>Important</h5>
                                                    <p>It long is established fact that a reader
                                                        will be
                                                        distracted
                                                        by
                                                    </p>
                                                </div>
                                            </div>
                                            <div className={` item  ${uppercss.notificationbar}`}>
                                                <div className={uppercss.notificationBarprofile}>
                                                    <img src={noticeboardprofilepic} />
                                                </div>
                                                <div className={uppercss.notificationBarmessage}>
                                                    <h5>Important</h5>
                                                    <p>It long is established fact that a reader
                                                        will be
                                                        distracted
                                                        by
                                                    </p>
                                                </div>
                                            </div>
                                            <div className={` item  ${uppercss.notificationbar}`}>
                                                <div className={uppercss.notificationBarprofile}>
                                                    <img src={noticeboardprofilepic} />
                                                </div>
                                                <div className={uppercss.notificationBarmessage}>
                                                    <h5>Important</h5>
                                                    <p>It long is established fact that a reader
                                                        will be
                                                        distracted
                                                        by
                                                    </p>
                                                </div>
                                            </div>
                                        </OwlCarousel>



                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}

export default UpperMiddleMenu;