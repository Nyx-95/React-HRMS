import uppercss from "./upper.module.css"
import bodyProfilePic from "../../../../assets/lowerseconddivprofilepic.png"
import noticeboardprofilepic from "../../../../assets/HR.png"
import headingLine from "../../../../assets/heading lines.png"
import $ from "jquery"
import OwlCarousel from "react-owl-carousel"
import "owl.carousel/dist/assets/owl.carousel.min.css"
import "owl.carousel/dist/assets/owl.theme.default.min.css"

const options = {
    margin: 10,
    responsiveClass: true,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 2,
        },
        700: {
            items: 2,
        },
        1000: {
            items: 2,

        }
    },
};





function UpperMiddleMenu() {
    return (
        <>

            <div className="col-lg-4 col-12">

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
                                        <progress id="file" value="82" max="100"/>
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
            <div className="col-lg-8 col-12">

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
                                        <OwlCarousel  className="owl-theme" {...options}>
                                            <div className={` item  ${uppercss.notificationbar}`}>
                                                <div className={uppercss.notificationBarprofile}>
                                                    <img src={noticeboardprofilepic} />
                                                </div>
                                                <div className={uppercss.notificationBarmessage}>
                                                    <h5>Important</h5>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum rem ab ullam. Consectetur sapiente itaque alias excepturi? Animi ea adipisci, voluptates quas perspiciatis quis deleniti qui consequuntur voluptatem corrupti praesentium cum facilis. In cupiditate voluptate officiis eligendi, saepe obcaecati ad esse possimus. Velit, cum sint ipsa reiciendis alias, rem ipsam illo id voluptates maiores ea placeat debitis totam provident! Iste a ipsa dignissimos consectetur minus, eum vero quisquam perferendis commodi tempore cumque iusto asperiores quam totam aliquid quaerat nostrum modi tenetur maiores nemo ullam optio unde! Non, ab ducimus maiores praesentium nobis eaque, minus dolor magnam incidunt fuga autem!
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