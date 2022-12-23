import React from 'react'
import notificationPic from '../../../../../assets/notifcationbar2.png'
import notificationPic2 from '../../../../../assets/HR.png'
import notificationBoardCss from "./NotificationBoard.module.css"
import heading from '../../../../../assets/heading lines.png'
import OwlCarousel from "react-owl-carousel"
import "owl.carousel/dist/assets/owl.carousel.min.css"
import "owl.carousel/dist/assets/owl.theme.default.min.css"
import NotificationMessage from './Notification/notificationMessage'
import NotificationBirthday from './Notification/notificationBirthday'
import NortificationAnniversary from './Notification/nortificationAnniversary'

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
                               <NotificationMessage></NotificationMessage>
                                <NotificationBirthday></NotificationBirthday>
                                <NortificationAnniversary></NortificationAnniversary>
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