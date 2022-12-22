import React from 'react'
import ticketingCss from "./Ticketing.module.css"
import heading from '../../../../../assets/heading lines.png'

const Ticketing = () => {
  return (
    <>
       <div className={ticketingCss.thirdupperdiv}>
                  <div className={ticketingCss.Mytickets}>
                    <div className={ticketingCss.myticketsinner}>
                      <div className={ticketingCss.ticketwrapper}>
                        <div className={ticketingCss.mergeheadings}>
                          <div className={ticketingCss.mergeheadinginner}>
                            <h5>My Ticketing</h5>
                            <i className="fa-solid fa-ellipsis"></i>
                          </div>
                          <img src={heading} alt="heading"></img>
                        </div>
                        <div className={`listouter ${ticketingCss.ticketlistouter}`}>
                          <div className={`listinner ${ticketingCss.ticketlistinner}`}>
                            <div className={`listing ${ticketingCss.ticketlisting}`}>
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