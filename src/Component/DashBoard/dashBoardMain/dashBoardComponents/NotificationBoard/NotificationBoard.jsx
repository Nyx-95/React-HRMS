import React from 'react'
import notificationPic from '../../../../../assets/notifcationbar2.png'
import notificationPic2 from '../../../../../assets/HR.png'
import notificationBoardCss from "./NotificationBoard.module.css"
import heading from '../../../../../assets/heading lines.png'
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
      991:{
        items: 1,
      },
      1200: {
        items: 2,
  
      }
    },
  };

const NotificationBoard = () => {
  return (
    <>
      <div className={`row ${notificationBoardCss.Noticesboard}`}>
                    <div className={notificationBoardCss.Noticesboardinner}>
                      <div className={notificationBoardCss.noticeboardwrapper}>
                        <div className={notificationBoardCss.mergeheadings}>
                          <h5>Notice Board</h5>
                          <img src={heading} alt="heading"></img>
                        </div>
                        <div className={notificationBoardCss.notificationbarouter}>
                          <div className={notificationBoardCss.notificationbarinner}>
                            <div className={notificationBoardCss.innerbars}>
                              <OwlCarousel className="owl-theme" {...options}>
                                <div className={` item  ${notificationBoardCss.notificationbar}`}>
                                  <div className={notificationBoardCss.notificationBarprofile}>
                                    <img src={notificationPic} />
                                  </div>
                                  <div className={notificationBoardCss.notificationBarmessage}>
                                    <h5>Important</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum rem ab ullam. Consectetur sapiente itaque alias excepturi? Animi ea adipisci, voluptates quas perspiciatis quis deleniti qui consequuntur voluptatem corrupti praesentium cum facilis. In cupiditate voluptate officiis eligendi, saepe obcaecati ad esse possimus. Velit, cum sint ipsa reiciendis alias, rem ipsam illo id voluptates maiores ea placeat debitis totam provident! Iste a ipsa dignissimos consectetur minus, eum vero quisquam perferendis commodi tempore cumque iusto asperiores quam totam aliquid quaerat nostrum modi tenetur maiores nemo ullam optio unde! Non, ab ducimus maiores praesentium nobis eaque, minus dolor magnam incidunt fuga autem!
                                    </p>
                                  </div>
                                </div>
                                <div className={` item  ${notificationBoardCss.notificationbar}`}>
                                  <div className={notificationBoardCss.notificationBarprofile}>
                                    <img src={notificationPic} />
                                  </div>
                                  <div className={notificationBoardCss.notificationBarmessage}>
                                    <h5>Important</h5>
                                    <p>It long is established fact that a reader
                                      will be
                                      distracted
                                      by
                                    </p>
                                  </div>
                                </div>
                                <div className={` item  ${notificationBoardCss.notificationbar}`}>
                                  <div className={notificationBoardCss.notificationBarprofile}>
                                    <img src={notificationPic} />
                                  </div>
                                  <div className={notificationBoardCss.notificationBarmessage}>
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