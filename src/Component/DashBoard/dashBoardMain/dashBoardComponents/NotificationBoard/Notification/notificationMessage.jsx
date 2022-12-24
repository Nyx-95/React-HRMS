import React, { useState } from 'react'
import notificationPic from '../../../../../../assets/notifcationbar2.png'
import notificationPic1 from '../../../../../../assets/hrPic.png'
import notificationBoardCss from "../NotificationBoard.module.css"
import Modal from 'react-modal';

const NotificationMessage = () => {
  const [breakModal, setBreakModal] = useState(false)
  return (
    <>
      <Modal
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
            backgroundColor: 'rgba(255, 255, 255, 0.75)',
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
        
        <div className={notificationBoardCss.notificationModal1} >
          <div className={notificationBoardCss.notificationModal1Image}>
            <img src={notificationPic1}></img>
          </div>
          <div className={notificationBoardCss.notificationModal1Heading}>
            Dear Employee
          </div>
          <div className={notificationBoardCss.notificationModal1Body}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia omnis sapiente soluta saepe corrupti eligendi doloremque perspiciatis? Aliquam odit laudantium, nihil voluptas natus dicta voluptates earum voluptatum, provident sequi unde et. Deserunt?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ipsam omnis perspiciatis dolores, doloremque accusamus!
            </p>
          </div>
          <div className={notificationBoardCss.notificationModal1Footer}>
            <p>hr@arraydigital.com</p>
            <p>best regards</p>
            <p>human resource</p>
          </div>
        </div>
      </Modal>
      <button className={` item  ${notificationBoardCss.notificationbar}`} onClick={() => setBreakModal(true)}>
        <div className={notificationBoardCss.notificationBarprofile}>
          <img src={notificationPic} />
        </div>
        <div className={notificationBoardCss.notificationBarmessage}>
          <h5>Important</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum rem ab ullam. Consectetur sapiente itaque alias excepturi? Animi ea adipisci, voluptates quas perspiciatis quis deleniti qui consequuntur voluptatem corrupti praesentium cum facilis. In cupiditate voluptate officiis eligendi, saepe obcaecati ad esse possimus. Velit, cum sint ipsa reiciendis alias, rem ipsam illo id voluptates maiores ea placeat debitis totam provident! Iste a ipsa dignissimos consectetur minus, eum vero quisquam perferendis commodi tempore cumque iusto asperiores quam totam aliquid quaerat nostrum modi tenetur maiores nemo ullam optio unde! Non, ab ducimus maiores praesentium nobis eaque, minus dolor magnam incidunt fuga autem!
          </p>
        </div>
      </button>

    </>
  )
}

export default NotificationMessage