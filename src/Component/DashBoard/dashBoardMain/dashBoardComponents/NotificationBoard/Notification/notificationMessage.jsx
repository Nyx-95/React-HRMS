import React from 'react'
import notificationPic from '../../../../../../assets/notifcationbar2.png'
import notificationBoardCss from "../NotificationBoard.module.css"

const notificationMessage = () => {
    return (
        <>

            <button className={` item  ${notificationBoardCss.notificationbar}`}>
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

export default notificationMessage