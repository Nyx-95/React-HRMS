import React from 'react'
import workPlaceCss from "./WorkPlace.module.css"
import heading from '../../../../../assets/heading lines.png'
import OwlCarousel from "react-owl-carousel"
import "owl.carousel/dist/assets/owl.carousel.min.css"
import "owl.carousel/dist/assets/owl.theme.default.min.css"
import trello from '../../../../../assets/workspace1.png'
import skype from '../../../../../assets/workspace2.png'
import slack from '../../../../../assets/workspace3.png'
import thunderBird from '../../../../../assets/workspace4.png'

const options1 = {
    margin: 20,
    responsiveClass: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 2,
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
     <div className={`row ${workPlaceCss.myworkspace}`}>
                    <div className={workPlaceCss.myworkspaceinner}>
                      <div className={workPlaceCss.workspacewrapper}>
                        <div className={workPlaceCss.mergeheadings}>
                          <h5>My Work Space</h5>
                          <img src={heading} alt="heading"></img>
                        </div>
                        <OwlCarousel className={`owl-theme ${workPlaceCss.myworkspaceNotificationbarOuter} `} {...options1}>
                          <div className={`item ${workPlaceCss.myworkspaceNotificationbar}`}
                            id={workPlaceCss.myworkspaceNotificationbar1}>
                            <div className={workPlaceCss.myworkspaceNotificationBarProfile}><img
                              src={trello} />
                            </div>
                            <div className={workPlaceCss.myworkspacenotificationIcons}>
                              <h5>Trello</h5>
                              <p>Design Unit</p>
                            </div>
                          </div>
                          <div className={`item ${workPlaceCss.myworkspaceNotificationbar}`}
                            id={workPlaceCss.myworkspaceNotificationbar2}>
                            <div className={workPlaceCss.myworkspaceNotificationBarProfile}><img
                              src={slack} /></div>
                            <div className={workPlaceCss.myworkspacenotificationIcons}>
                              <h5>Slack</h5>
                              <p>Design Team</p>
                            </div>
                          </div>
                          <div className={`item ${workPlaceCss.myworkspaceNotificationbar}`}
                            id={workPlaceCss.myworkspaceNotificationbar3}>
                            <div className={workPlaceCss.myworkspaceNotificationBarProfile}><img
                              src={thunderBird} /></div>
                            <div className={workPlaceCss.myworkspacenotificationIcons}>
                              <h5>ThunderBird</h5>
                              <p>All Units</p>
                            </div>
                          </div>
                          <div className={`item ${workPlaceCss.myworkspaceNotificationbar}`}
                            id={workPlaceCss.myworkspaceNotificationbar4}>
                            <div className={workPlaceCss.myworkspaceNotificationBarProfile}>
                              <img
                                src={skype} /></div>
                            <div className={workPlaceCss.myworkspacenotificationIcons}>
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