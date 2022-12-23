import React from 'react'
import dashBoardCss from "./dashBoardMain.module.css"

import MainFirstComponent from './dashBoardComponents/mainFirstComponent/MainFirstComponent'
import NotificationBoard from './dashBoardComponents/NotificationBoard/NotificationBoard'
import WorkPlaces from './dashBoardComponents/Workplace/WorkPlaces'
import Ticketing from './dashBoardComponents/Ticket/Ticketing'
import GeneralQueries from './dashBoardComponents/GeneralQuery/GeneralQueries'
import ProfileInfo from './dashBoardComponents/ProfileInfo/ProfileInfo'
import TimeTracking from './dashBoardComponents/TimeTracking/TimeTracking'
import EmployeeComponent from './dashBoardComponents/EmployeeDiv/EmployeeComponent'

const dashBoardMain = () => {

 

  return (
    <>
      <div className={dashBoardCss.middlemenu}>
        <div className=" row">
          <div className={dashBoardCss.upper}>
            <div className="row">
              <div className="col-12 col-sm-12 col-lg-4 col-xl-4">
                <MainFirstComponent></MainFirstComponent>
              </div>
              <div className="col-12 col-sm-12 col-lg-5 col-xl-5">
                <div className={dashBoardCss.secondupperdiv}>
                  <NotificationBoard></NotificationBoard>
                  <WorkPlaces></WorkPlaces>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-lg-3 col-xl-3">
                <Ticketing></Ticketing>
              </div>

            </div>
          </div>
        </div>
        <div className="row">
          <div className={dashBoardCss.lower}>
            <div className="row">
              <div className="col-12 col-sm-12 col-lg-3 col-xl-3">
                <GeneralQueries></GeneralQueries>
              </div>
              <div className={`col-12 col-sm-12 col-lg-3 col-xl-3 ${dashBoardCss.profileInfoPadding}`}>
                <ProfileInfo></ProfileInfo>
              </div>
              <div className={`col-12 col-sm-12 col-lg-3 col-xl-3 ${dashBoardCss.TimeTrackingPadding}`}>
               
              <TimeTracking></TimeTracking>

              </div>
              <div className="col-12 col-sm-12 col-lg-3 col-xl-3">
                <EmployeeComponent></EmployeeComponent>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default dashBoardMain