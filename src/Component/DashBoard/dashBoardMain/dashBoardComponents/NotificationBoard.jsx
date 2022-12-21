import React from 'react'
import notificationPic from '../../../../assets/notifcationbar2.png'
import notificationPic2 from '../../../../assets/HR.png'
import dashBoardCss from "../dashBoardMain.module.css"
import heading from '../../../../assets/heading lines.png'
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

const NotificationBoard = () => {
  return (
    <>
      <div className={`row ${dashBoardCss.Noticesboard}`}>
                    <div className={dashBoardCss.Noticesboardinner}>
                      <div className={dashBoardCss.noticeboardwrapper}>
                        <div className={dashBoardCss.mergeheadings}>
                          <h5>Notice Board</h5>
                          <img src={heading} alt="heading"></img>
                        </div>
                        <div className={dashBoardCss.notificationbarouter}>
                          <div className={dashBoardCss.notificationbarinner}>
                            <div className={dashBoardCss.innerbars}>
                              <OwlCarousel className="owl-theme" {...options}>
                                <div className={` item  ${dashBoardCss.notificationbar}`}>
                                  <div className={dashBoardCss.notificationBarprofile}>
                                    <img src={notificationPic} />
                                  </div>
                                  <div className={dashBoardCss.notificationBarmessage}>
                                    <h5>Important</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum rem ab ullam. Consectetur sapiente itaque alias excepturi? Animi ea adipisci, voluptates quas perspiciatis quis deleniti qui consequuntur voluptatem corrupti praesentium cum facilis. In cupiditate voluptate officiis eligendi, saepe obcaecati ad esse possimus. Velit, cum sint ipsa reiciendis alias, rem ipsam illo id voluptates maiores ea placeat debitis totam provident! Iste a ipsa dignissimos consectetur minus, eum vero quisquam perferendis commodi tempore cumque iusto asperiores quam totam aliquid quaerat nostrum modi tenetur maiores nemo ullam optio unde! Non, ab ducimus maiores praesentium nobis eaque, minus dolor magnam incidunt fuga autem!
                                    </p>
                                  </div>
                                </div>
                                <div className={` item  ${dashBoardCss.notificationbar}`}>
                                  <div className={dashBoardCss.notificationBarprofile}>
                                    <img src={notificationPic} />
                                  </div>
                                  <div className={dashBoardCss.notificationBarmessage}>
                                    <h5>Important</h5>
                                    <p>It long is established fact that a reader
                                      will be
                                      distracted
                                      by
                                    </p>
                                  </div>
                                </div>
                                <div className={` item  ${dashBoardCss.notificationbar}`}>
                                  <div className={dashBoardCss.notificationBarprofile}>
                                    <img src={notificationPic2} />
                                  </div>
                                  <div className={dashBoardCss.notificationBarmessage}>
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
    </>
  )
}

export default NotificationBoard