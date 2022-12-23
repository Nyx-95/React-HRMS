import React, { useState } from 'react'
import profileInfoCss from "./ProfileInfo.module.css"
import lowerProfilePic from '../../../../../assets/lowerseconddivprofilepic.png'
import heading from '../../../../../assets/heading lines.png'
import Modal from 'react-modal';
import onlineWoman from '../../../../../assets/areYouOnlineWoman.png'
import $ from 'jquery'


Modal.setAppElement("#root")
const ProfileInfo = () => {

  const [breakModal, setBreakModal] = useState(false)
  const [breakModalTwo , setBreakModalTwo]  = useState(false)

  const modalButton =()=>{
    setBreakModal(false)
    setBreakModalTwo(true)
  }

  return (
    <>
      <div className={profileInfoCss.secondlowerdiv}>
        <div className={profileInfoCss.secondlowerouter}>
          <div className={profileInfoCss.secondlowerinner}>
            <div className={profileInfoCss.profilewrapper}>
              <div className={profileInfoCss.profilebackground}></div>
              <div className={profileInfoCss.profileouterdiv}>
                <div className={profileInfoCss.secondlowerprofileicon}>
                  <img src={lowerProfilePic} />
                </div>
                <div className={profileInfoCss.profileinfo}>
                  <h5>S. Osama Ali</h5>
                  <p>Sr. UI/UX Designer</p>
                  <button type="button" className={`btn btn-primary shadow-none ${profileInfoCss.profileInfoMarkBreak}`} onClick={() => setBreakModal(true)} >
                    Mark Break
                  </button>

                  <Modal  isOpen={breakModalTwo} 
                  
                  style={{
                    overlay: {
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: 'rgba(255, 255, 255, 0.75)',
                    },
                    content: {
                      position: 'absolute',
                      top: '120px',
                      left: '30%',
                      right: '70%',
                      bottom: '40px',
                      border: '1px solid #ccc',
                      width:'450px',
                      height:'370px',
                      background: '#fff',
                      borderRadius: '15px',
                      outline: 'none',
                      padding: '20px 20px 20px 20px'
                    }
                  }}>
                    <div className={profileInfoCss.modalHeading}>
                      <h5>Are You Online?</h5>
                      <img src={heading} />
                    </div>
                    <div className={profileInfoCss.modalRow}>    
                    <img src={onlineWoman} alt="" />
                    </div>
                    <div className={profileInfoCss.modalRow}>
                      <button type="button" className={`close ${profileInfoCss.modalRowbutton6}`} onClick={()=>setBreakModalTwo(false)} >
                        <div className={profileInfoCss.modalRowInner}>
                          <span>Return From Break?</span>
                        </div>
                      </button>
                    </div>
                  </Modal>
                  <Modal 
                    isOpen={breakModal} 
                    onRequestClose={() => setBreakModal(false)}
                    style={{
                      overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(255, 255, 255, 0.75)',
                      },
                      content: {
                        position: 'absolute',
                        top: '120px',
                        left: '30%',
                        right: '70%',
                        bottom: '40px',
                        border: '1px solid #ccc',
                        width:'600px',
                        height:'370px',
                        background: '#fff',
                        borderRadius: '15px',
                        outline: 'none',
                        padding: '20px 20px 20px 20px'
                      }
                    }}
                    >
                    <div className={profileInfoCss.modalHeading}>
                      <h5>Break Time</h5>
                      <img src={heading} />
                    </div>
                    <div className={profileInfoCss.modalRow}>
                      <button type="button" className={`close ${profileInfoCss.modalRowbutton1}`} onClick={modalButton} >
                        <div className={profileInfoCss.modalRowInner}>
                          <span>Official Break</span>
                        </div>
                      </button>
                      <button type="button" className={`close ${profileInfoCss.modalRowbutton2}`} onClick={modalButton}>
                        <div className={profileInfoCss.modalRowInner}>
                          <span>Launch/Dinner</span>
                        </div>
                      </button>
                      <button type="button" className={`close ${profileInfoCss.modalRowbutton3}`} onClick={modalButton}>
                        <div className={profileInfoCss.modalRowInner}>
                          <span>General Break</span>
                        </div>
                      </button>
                    
                    </div>
                    <div className={profileInfoCss.modalRow}>
                      <button type="button" className={`close ${profileInfoCss.modalRowbutton4}`} onClick={modalButton}>
                        <div className={profileInfoCss.modalRowInner}>
                          <span>Smoke Break</span>
                        </div>
                      </button>
                      <button type="button" className={`close ${profileInfoCss.modalRowbutton5}`} onClick={modalButton}>
                        <div className={profileInfoCss.modalRow1Inner}>
                          <span>Namaz Break</span>
                        </div>
                      </button>
                    </div>
                  </Modal>

                </div>
              </div>
              <div className={profileInfoCss.profileschedulemain}>
                <div className={profileInfoCss.profileschedulemainouter}>
                  <div className={profileInfoCss.profilescheduleinner}>
                    <ul>
                      <li><a href="#">
                        <div className={profileInfoCss.profileschedulemenu}>
                          <div className={profileInfoCss.profileschedulemenuicon}>
                            <i className="ri-time-line"></i>
                          </div>
                          <div className={profileInfoCss.profileschedulemenutime}>
                            <div className={profileInfoCss.profileschedulemenushift}>
                              Shift
                            </div>
                            <div className={profileInfoCss.profileschedulemenuevening}>
                              Evening
                            </div>
                          </div>
                        </div>
                      </a></li>
                      <li><a href="#">
                        <div className="d-flex">
                          <div className={profileInfoCss.profileschedulemenuicon}>
                            <i className="ri-bank-card-line"></i>
                          </div>
                          <div className={profileInfoCss.profileschedulemenutime}>
                            <div className={profileInfoCss.profileschedulemenushift}>
                              Employee
                              ID</div>
                            <div className={profileInfoCss.profileschedulemenuevening}>
                              15333
                            </div>
                          </div>
                        </div>
                      </a></li>
                      <li><a href="#">
                        <div className="d-flex">
                          <div className={profileInfoCss.profileschedulemenuicon}>
                            <i className="ri-calendar-line"></i>
                          </div>
                          <div className={profileInfoCss.profileschedulemenutime}>
                            <div className={profileInfoCss.profileschedulemenushift}>
                              Date of
                              Joining</div>
                            <div className={profileInfoCss.profileschedulemenuevening}>
                              04-02-2022</div>
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
    </>
  )
}

export default ProfileInfo