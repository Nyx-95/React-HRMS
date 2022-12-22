import React from 'react'
import generalQueryCss from "./GeneralQuery.module.css"
import heading from '../../../../../assets/heading lines.png'

const GeneralQueries = () => {
  return (
    <>
    
    <div className={generalQueryCss.thirdupperdiv}>
                  <div className={generalQueryCss.Mytickets}>
                    <div className={generalQueryCss.myticketsinner}>
                      <div className={generalQueryCss.ticketwrapper2}>
                        <div className={generalQueryCss.mergeheadings}>
                          <div className={generalQueryCss.mergeheadinginner}>
                            <h5>General Queries</h5>
                            <i className="fa-solid fa-ellipsis"></i>
                          </div>
                          <img src={heading} alt="heading"></img>
                        </div>
                        <div className={`listouter ${generalQueryCss.ticketlistouter}`}>
                          <div className={`listinner ${generalQueryCss.ticketlistinner}`}>
                            <div className={`listing ${generalQueryCss.ticketlisting}`}>
                              <ul>
                                <a href="#"> <li>Feedback Form</li></a>
                                <a href="#"><li>Leave Form</li></a>
                                <a href="#"><li>Reimbursement Form</li></a>
                                <a href="#"><li>Pending Joining Form</li></a>
                                <a href="#"><li>Suggestion Form</li></a>
                                <a href="#"><li>Grievances Form</li></a>
                                <a href="#"><li>Service Requests Form</li></a>
              
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

export default GeneralQueries