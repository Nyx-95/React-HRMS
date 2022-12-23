import React from 'react'
import notificationPic from '../../../../../../assets/notifcationbar2.png'
import notificationBoardCss from "../NotificationBoard.module.css"

const notificationBirthday = () => {
    return (
        <>
      
                <button className={` item  ${notificationBoardCss.notificationbar}`}>
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

export default notificationBirthday