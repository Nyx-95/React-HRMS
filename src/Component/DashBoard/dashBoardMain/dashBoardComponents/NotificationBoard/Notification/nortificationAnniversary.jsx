import React from 'react'
import notificationPic from '../../../../../../assets/notifcationbar2.png'
import notificationBoardCss from "../NotificationBoard.module.css"

const nortificationAnniversary = () => {
    return (
        <>

                <button className={` item  ${notificationBoardCss.notificationbar}`}>
                    <div className={notificationBoardCss.notificationBarprofile}>
                        <img src={notificationPic} />
                    </div>
                    <div className={notificationBoardCss.notificationBarmessage}>
                        <h5>Anniversary</h5>
                        <p> <label>"Osama's Working Anniversary"</label> <br /> <label>Send Wishes</label> </p>
                    </div>
                </button>
      
        </>
    )
}

export default nortificationAnniversary