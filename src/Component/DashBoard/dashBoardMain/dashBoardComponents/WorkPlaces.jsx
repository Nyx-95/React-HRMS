import React from 'react'
import dashBoardCss from "../dashBoardMain.module.css"
import heading from '../../../../assets/heading lines.png'
import OwlCarousel from "react-owl-carousel"
import "owl.carousel/dist/assets/owl.carousel.min.css"
import "owl.carousel/dist/assets/owl.theme.default.min.css"
import trello from '../../../../assets/workspace1.png'
import skype from '../../../../assets/workspace2.png'
import slack from '../../../../assets/workspace3.png'
import thunderBird from '../../../../assets/workspace4.png'

const options1 = {
    margin: 40,
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
        items: 3,
  
      }
    },
  };

const WorkPlaces = () => {
  return (
    <>
     <div className={`row ${dashBoardCss.myworkspace}`}>
                    <div className={dashBoardCss.myworkspaceinner}>
                      <div className={dashBoardCss.workspacewrapper}>
                        <div className={dashBoardCss.mergeheadings}>
                          <h5>My Work Space</h5>
                          <img src={heading} alt="heading"></img>
                        </div>
                        <OwlCarousel className={`owl-theme ${dashBoardCss.myworkspaceNotificationbarOuter} `} {...options1}>
                          <div className={`item ${dashBoardCss.myworkspaceNotificationbar}`}
                            id={dashBoardCss.myworkspaceNotificationbar1}>
                            <div className={dashBoardCss.myworkspaceNotificationBarProfile}><img
                              src={trello} />
                            </div>
                            <div className={dashBoardCss.myworkspacenotificationIcons}>
                              <h5>Trello</h5>
                              <p>Design Unit</p>
                            </div>
                          </div>
                          <div className={`item ${dashBoardCss.myworkspaceNotificationbar}`}
                            id={dashBoardCss.myworkspaceNotificationbar2}>
                            <div className={dashBoardCss.myworkspaceNotificationBarProfile}><img
                              src={slack} /></div>
                            <div className={dashBoardCss.myworkspacenotificationIcons}>
                              <h5>Slack</h5>
                              <p>Design Team</p>
                            </div>
                          </div>
                          <div className={`item ${dashBoardCss.myworkspaceNotificationbar}`}
                            id={dashBoardCss.myworkspaceNotificationbar3}>
                            <div className={dashBoardCss.myworkspaceNotificationBarProfile}><img
                              src={thunderBird} /></div>
                            <div className={dashBoardCss.myworkspacenotificationIcons}>
                              <h5>ThunderBird</h5>
                              <p>All Units</p>
                            </div>
                          </div>
                          <div className={`item ${dashBoardCss.myworkspaceNotificationbar}`}
                            id={dashBoardCss.myworkspaceNotificationbar4}>
                            <div className={dashBoardCss.myworkspaceNotificationBarProfile}>
                              <img
                                src={skype} /></div>
                            <div className={dashBoardCss.myworkspacenotificationIcons}>
                              <h5>Skype</h5>
                              <p>All Units</p>
                            </div>
                          </div>
                        </OwlCarousel>
                      </div>
                    </div>
                  </div>
    </>
  )
}

export default WorkPlaces