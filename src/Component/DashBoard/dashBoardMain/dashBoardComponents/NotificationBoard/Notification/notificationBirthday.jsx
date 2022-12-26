import React, {useState} from 'react'
import notificationPic from '../../../../../../assets/notifcationbar2.png'
import notificationBoardCss from "../NotificationBoard.module.css"
import Modal from 'react-modal';
import notificationPic1 from '../../../../../../assets/hrPic.png'
import shootingStar from '../../../../../../assets/shootingStar.png'

const NotificationBirthday = () => {
    const [breakModal, setBreakModal] = useState(false)
    return (
        <>    <Modal
        isOpen={breakModal}
        onRequestClose={() => setBreakModal(false)}
        className={notificationBoardCss.noticemodal}
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex:3000,
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
          },
          content: {
            position: 'absolute',
            top: '120px',
            left: '30%',
            right: '70%',
            bottom: '40px',
            border: '1px solid #ccc',
            width: '561px',
            height: '429px',
            background: '#fff',
            borderRadius: '35px',
            outline: 'none',
            padding: '0px'
          }
        }}
      >
        
        <div className={notificationBoardCss.notificationModal2} >
          <div className={notificationBoardCss.notificationModal1Button} onClick={() => setBreakModal(false)}>
            <button><i className="ri-close-line"></i></button>
          </div>
          <div className={notificationBoardCss.notificationModal1Image}>
            <img src={notificationPic1}></img>
          </div>
          <div className={notificationBoardCss.notificationModal1Para}>
            <p>Happy Birthday</p>
          </div>
          <div className={notificationBoardCss.notificationModal1Heading}>
            Arsanal
          </div>
          <div className={notificationBoardCss.notificationModal1Body}>
          <textarea type='text' placeholder="Type Something..."></textarea>
          </div>
          <div className={notificationBoardCss.notificationModal1Btn}>
              <button> Send Wishes <img src={shootingStar}/> </button>
          </div>
        </div>
      </Modal>
      
                <button className={` item  ${notificationBoardCss.notificationbar}`} onClick={() => setBreakModal(true)}>
                    <div className={notificationBoardCss.notificationBarprofile}>
                        <img src={notificationPic} />
                    </div>
                    <div className={notificationBoardCss.notificationBarmessage}>
                        <h5>Birthday</h5>
                        <p> Today is <label>"Osama's birthday"</label> <br /> <label>Send Wishes</label>  </p>

                    </div>
                </button>
       
        </>
    )
}

export default NotificationBirthday