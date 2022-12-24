import React, {useState} from 'react'
import notificationPic from '../../../../../../assets/notifcationbar2.png'
import notificationBoardCss from "../NotificationBoard.module.css"
import Modal from 'react-modal';

const NotificationBirthday = () => {
    const [breakModal, setBreakModal] = useState(false)
    return (
        <>    <Modal 
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
            hey2
       </Modal>
      
                <button className={` item  ${notificationBoardCss.notificationbar}`} onClick={() => setBreakModal(true)}>
                    <div className={notificationBoardCss.notificationBarprofile}>
                        <img src={notificationPic} />
                    </div>
                    <div className={notificationBoardCss.notificationBarmessage}>
                        <h5>Birthday</h5>
                        <p> Today is <label>"Osama's birthday"</label> <br /> <label>Send Wishes</label> </p>

                    </div>
                </button>
       
        </>
    )
}

export default NotificationBirthday