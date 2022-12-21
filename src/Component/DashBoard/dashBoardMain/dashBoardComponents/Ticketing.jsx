import React from 'react'
import dashBoardCss from "../dashBoardMain.module.css"
import heading from '../../../../assets/heading lines.png'

const Ticketing = () => {
  return (
    <>
       <div className={dashBoardCss.thirdupperdiv}>
                  <div className={dashBoardCss.Mytickets}>
                    <div className={dashBoardCss.myticketsinner}>
                      <div className={dashBoardCss.ticketwrapper}>
                        <div className={dashBoardCss.mergeheadings}>
                          <div className={dashBoardCss.mergeheadinginner}>
                            <h5>My Ticketing</h5>
                            <i className="fa-solid fa-ellipsis"></i>
                          </div>
                          <img src={heading} alt="heading"></img>
                        </div>
                        <div className={`listouter ${dashBoardCss.ticketlistouter}`}>
                          <div className={`listinner ${dashBoardCss.ticketlistinner}`}>
                            <div className={`listing ${dashBoardCss.ticketlisting}`}>
                              <ul>
                                <a href="#"> <li>Create A Ticket</li></a>
                                <a href="#"><li>My All Tickets</li></a>
                                <a href="#"><li>My Pending Tickets</li></a>
                                <a href="#"><li>My completed Tickets</li></a>
                                <a href="#"><li>Department Tickets</li></a>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
    </>
  )
}

export default Ticketing