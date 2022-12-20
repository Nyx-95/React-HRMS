/* 
import React from 'react'

const dashBoard = () => {
  return (
    <>
          <div class="middlemenu">
                <div class=" row">
                    <div class="upper">
                        <div class="row">
                            <div class="col-lg-4 ">
                                <div class="firstupperdiv">
                                    <div class="firstupperIn">
                                        <div class="firstupperwrapper">
                                            <div class="firstupperinner">
                                                <div class="upperinfo">
                                                    <div>
                                                        <h2>Hi Syed</h2>
                                                    </div>
                                                    <div class="Morningheading">
                                                        <p> Good Morning</p>
                                                    </div>
                                                    <div class="Morningschedule">
                                                        <p>12:00pm </p>
                                                    </div>
                                                    <div class="Morningschedule">
                                                        <p>04-11-2022</p>
                                                    </div>
                                                    <div class="upperinfobutton"><button type="button"
                                                            class="btn btn-light">View Profile</button>
                                                    </div>
                                                </div>
                                                <div class="firstupperimage"><img src="./assets/Girl.png"
                                                        alt="Girl"></img>
                                                </div>
                                            </div>
                                            <div class="stats">
                                                <div class="statsinnerdiv">
                                                    <div class="statscount" id="statscount1id">
                                                        <div class="statscountimg">
                                                            <img src="./assets/graphbar1.png" alt="Graph Bar"/>
                                                        </div>
                                                        <div class="statscountnumber">
                                                            <p>02</p>
                                                        </div>
                                                        <div class="statscountinfo">
                                                            <p>Absent</p>
                                                        </div>
                                                    </div>
                                                    <div class="statscount" id="statscount2id">
                                                        <div class="statscountimg">
                                                            <img src="./assets/graphbar2.png" alt="Graph Bar"/>
                                                        </div>
                                                        <div class="statscountnumber">
                                                            <p>18</p>
                                                        </div>
                                                        <div class="statscountinfo">
                                                            <p>Attendance</p>
                                                        </div>
                                                    </div>
                                                    <div class="statscount" id="statscount3id">
                                                        <div class="statscountimg">
                                                            <img src="./assets/graphbar3.png" alt="Graph Bar"/>
                                                        </div>
                                                        <div class="statscountnumber">
                                                            <p>06</p>
                                                        </div>
                                                        <div class="statscountinfo">
                                                            <p>Late</p>
                                                        </div>
                                                    </div>
                                                    <div class="statscount" id="statscount4id">
                                                        <div class="statscountbutton">
                                                            <button type="button"
                                                                class="btn btn-primary shadow-none">View
                                                                All</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-5 ">
                                <div class="secondupperdiv">
                                    <div class="Noticesboard row">
                                        <div class="Noticesboardinner">
                                            <div class="noticeboardwrapper">
                                                <div class="mergeheadings">
                                                    <h5>Notice Board</h5>
                                                    <img src="./assets/heading lines.png" alt="heading"></img>
                                                </div>
                                                <div class="notificationbarouter">
                                                    <div class="notificationbarinner ">
                                                        <div class="innerbars owl-carousel">
                                                            <div class="notificationbar item">
                                                                <div class="notificationBarprofile">
                                                                    <img src="./assets/HR.png"/>
                                                                </div>
                                                                <div class="notificationBarmessage">
                                                                    <h5>Important</h5>
                                                                    <p>It long is established fact that a reader
                                                                        will be
                                                                        distracted
                                                                        by
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="notificationbar item">
                                                                <div class="notificationBarprofile"><img
                                                                        src="./assets/notifcationbar2.png"/>
                                                                </div>
                                                                <div class="notificationBarmessage">
                                                                    <h5>Important</h5>
                                                                    <p>It long is established fact that a reader
                                                                        will be
                                                                        distracted
                                                                        by
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="notificationbar item">
                                                                <div class="notificationBarprofile">
                                                                    <img src="./assets/HR.png"/>
                                                                </div>
                                                                <div class="notificationBarmessage">
                                                                    <h5>Important</h5>
                                                                    <p>It long is established fact that a reader
                                                                        will be
                                                                        distracted
                                                                        by
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="notificationbar item">
                                                                <div class="notificationBarprofile"><img
                                                                        src="./assets/notifcationbar2.png"/>
                                                                </div>
                                                                <div class="notificationBarmessage">
                                                                    <h5>Important</h5>
                                                                    <p>It long is established fact that a reader
                                                                        will be
                                                                        distracted
                                                                        by
                                                                    </p>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="myworkspace row">
                                        <div class="myworkspaceinner">
                                            <div class="workspacewrapper">
                                                <div class="mergeheadings">
                                                    <h5>My Work Space</h5>
                                                    <img src="./assets/heading lines.png" alt="heading"></img>
                                                </div>
                                                <div class="myworkspaceNotificationbarOuter owl-carousel">
                                                    <div class="myworkspaceNotificationbar item"
                                                        id="myworkspaceNotificationbar1">
                                                        <div class="myworkspaceNotificationBarProfile"><img
                                                                src="./assets/workspace1.png"/>
                                                        </div>
                                                        <div class="myworkspacenotificationIcons">
                                                            <h5>Trello</h5>
                                                            <p>Design Unit</p>
                                                        </div>
                                                    </div>
                                                    <div class="myworkspaceNotificationbar item"
                                                        id="myworkspaceNotificationbar2">
                                                        <div class="myworkspaceNotificationBarProfile"><img
                                                                src="./assets/workspace2.png"/></div>
                                                        <div class="myworkspacenotificationIcons">
                                                            <h5>Slack</h5>
                                                            <p>Design Team</p>
                                                        </div>
                                                    </div>
                                                    <div class="myworkspaceNotificationbar item"
                                                        id="myworkspaceNotificationbar3">
                                                        <div class="myworkspaceNotificationBarProfile"><img
                                                                src="./assets/workspace3.png"/></div>
                                                        <div class="myworkspacenotificationIcons">
                                                            <h5>ThunderBird</h5>
                                                            <p>All Units</p>
                                                        </div>
                                                    </div>
                                                    <div class="myworkspaceNotificationbar item"
                                                        id="myworkspaceNotificationbar4">
                                                        <div class="myworkspaceNotificationBarProfile"><img
                                                                src="./assets/workspace4.png"/></div>
                                                        <div class="myworkspacenotificationIcons">
                                                            <h5>Skype</h5>
                                                            <p>All Units</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 ">
                                <div class="thirdupperdiv">
                                    <div class="Mytickets">
                                        <div class="myticketsinner">
                                            <div class="ticketwrapper">
                                                <div class="mergeheadings">
                                                    <div class="mergeheadinginner">
                                                        <h5>My Ticketing</h5>
                                                        <i class="fa-solid fa-ellipsis"></i>
                                                    </div>
                                                    <img src="./assets/heading lines.png" alt="heading"></img>
                                                </div>
                                                <div class="listouter ticketlistouter">
                                                    <div class="listinner ticketlistinner">
                                                        <div class="listing ticketlisting">
                                                            <ul>
                                                                <li><a href="#">Create A Ticket</a></li>
                                                                <li><a href="#">My All Tickets</a></li>
                                                                <li><a href="#">My Pending Tickets</a></li>
                                                                <li><a href="#">My completed Tickets</a></li>
                                                                <li><a href="#">Department Tickets</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="lower">
                        <div class="row">

                            <div class="col-lg-3">

                                <div class="firstlowerdiv">
                                    <div class="Generalqueue">
                                        <div class="Generalqueueinner">
                                            <div class="Generalwrapper">
                                                <div class="mergeheadings">
                                                    <div class="mergeheadinginner">
                                                        <h5>General Queries</h5>
                                                        <i class="fa-solid fa-ellipsis"></i>
                                                    </div>
                                                    <img src="./assets/heading lines.png" alt="heading"></img>
                                                </div>
                                                <div class="listouter generallistouter">
                                                    <div class="listinner">
                                                        <div class="listing generallisting">
                                                            <ul>
                                                                <li><a href="#">Feedback Form </a></li>
                                                                <li><a href="#">Leave Form</a></li>
                                                                <li><a href="#">Reimbursement Form</a></li>
                                                                <li><a href="#">Pending Joining Form</a></li>
                                                                <li><a href="#">Grievances Form</a></li>
                                                                <li><a href="#">Service Request Form</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 ">
                                <div class="secondlowerdiv ">
                                    <div class="secondlowerouter">
                                        <div class="secondlowerinner">
                                            <div class="profilewrapper">
                                                <div class="profilebackground"></div>
                                                <div class="profileouterdiv">
                                                    <div class="secondlowerprofileicon">
                                                        <img src="./assets/lowerseconddivprofilepic.png"/>
                                                    </div>
                                                    <div class="profileinfo">
                                                        <h5>S. Osama Ali</h5>
                                                        <p>Sr. UI/UX Designer</p>
                                                        <button type="button" class="btn btn-primary shadow-none">

                                                            <i class="fa-solid fa-mug-hot fa-1x" id="faId"
                                                                aria-hidden="true"></i>
                                                            Mark Break</button>
                                                    </div>
                                                </div>
                                                <div class="profileschedulemain">
                                                    <div class="profileschedulemainouter">
                                                        <div class="profilescheduleinner">
                                                            <ul>
                                                                <li><a href="#">
                                                                        <div class=" profileschedulemenu">
                                                                            <div class="profileschedulemenuicon"><i
                                                                                    class="fa-regular fa-clock fa-1x"></i>
                                                                            </div>
                                                                            <div class="profileschedulemenutime">
                                                                                <div class="profileschedulemenushift">
                                                                                    Shift
                                                                                </div>
                                                                                <div class="profileschedulemenuevening">
                                                                                    Evening
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </a></li>
                                                                <li><a href="#">
                                                                        <div class="d-flex">
                                                                            <div class="profileschedulemenuicon"><i
                                                                                    class="fa-regular fa-credit-card fa-1x"></i>
                                                                            </div>
                                                                            <div class="profileschedulemenutime">
                                                                                <div class="profileschedulemenushift">
                                                                                    Employee
                                                                                    ID</div>
                                                                                <div class="profileschedulemenuevening">
                                                                                    15333
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </a></li>
                                                                <li><a href="#">
                                                                        <div class="d-flex">
                                                                            <div class="profileschedulemenuicon"><i
                                                                                    class="fa-regular fa-calendar-days fa-1x"></i>
                                                                            </div>
                                                                            <div class="profileschedulemenutime">
                                                                                <div class="profileschedulemenushift">
                                                                                    Date of
                                                                                    Joining</div>
                                                                                <div class="profileschedulemenuevening">
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
                            </div>
                            <div class="col-lg-3 ">
                                <div class="thirdlowerdiv ">
                                    <div class="timetrackingoutter">
                                        <div class="timetrackinginner">
                                            <div class="timetrackingwrapper">
                                                <div class="timetrackingoutterdiv">
                                                    <div class="timetrackingdiv">
                                                        <div class="mergeheadings">
                                                            <h5>My Time Tracking</h5>
                                                        </div>
                                                        <div class="dropdown">
                                                            <button class="btn btn-secondary dropdown-toggle"
                                                                type="button" data-bs-toggle="dropdown"
                                                                aria-expanded="false">
                                                                Weekly Hrs
                                                            </button>
                                                            <ul class="dropdown-menu">
                                                                <li><a class="dropdown-item" href="#">Action</a>
                                                                </li>
                                                                <li><a class="dropdown-item" href="#">Another
                                                                        action</a>
                                                                </li>
                                                                <li><a class="dropdown-item" href="#">Something else
                                                                        here</a>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                    </div>
                                                    <img src="./assets/heading lines.png" alt="heading"></img>
                                                </div>
                                                <div id="chartContainer">

                                                </div>
                                                <div class="timetrackingmain">
                                                    <div class="timetrackingouter">
                                                        <div class="weeklyreport">
                                                            <p class="p1">Weekly Time Report</p>
                                                            <p class="p2">Nov 07 - Nov 11 (4 days left)</p>
                                                        </div>
                                                        <div class="timetrackingtime">
                                                            <h5>
                                                                0h 0m 0s
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 ">
                                <div class="fourthlowerdiv ">
                                    <div class="Employee">
                                        <div class="Employeeouter">
                                            <div class="Employeeinner">
                                                <div class="Employeewrapper">
                                                    <div class="mergeheadings">
                                                        <div class="mergeheadinginner">
                                                            <h5>Employees</h5>
                                                            <i class="fa-solid fa-ellipsis"></i>
                                                        </div>
                                                        <img src="./assets/heading lines.png" alt="heading"></img>
                                                    </div>
                                                    <div class="btn-group" id="buttonGroupLfourdiv" role="group"
                                                        aria-label="Basic example">
                                                        <button type="button" class="btn btn-primary">My
                                                            Team</button>
                                                        <button type="button" class="btn btn-primary">All
                                                            Users</button>
                                                    </div>
                                                    <div class="employeelistouter">
                                                        <div class="employeelistinner">
                                                            <div class="employeelisting">
                                                                <ul>
                                                                    <li>
                                                                        <div class="employeeprofilestatus">
                                                                            <div class="employeeprofileinner">
                                                                                <div class="employeeprofilepicture">
                                                                                    <img
                                                                                        src="./assets/employeediv1profileicon.png"/>
                                                                                </div>
                                                                                <div>
                                                                                    <div class="employenamediv">
                                                                                        <p>Hassan</p>
                                                                                    </div>
                                                                                    <div>
                                                                                        online status
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div class="employeeprofilestatus">
                                                                            <div class="employeeprofileinner">
                                                                                <div class="employeeprofilepicture">
                                                                                    <img
                                                                                        src="./assets/employeediv2profileicon.png"/>
                                                                                </div>
                                                                                <div>
                                                                                    <div class="employenamediv">
                                                                                        <p>Hassan Jawad</p>
                                                                                    </div>
                                                                                    <div>
                                                                                        online status
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div class="employeeprofilestatus">
                                                                            <div class="employeeprofileinner">
                                                                                <div class="employeeprofilepicture">
                                                                                    <img
                                                                                        src="./assets/employeediv3profileicon.png"/>
                                                                                </div>
                                                                                <div>
                                                                                    <div class="employenamediv">
                                                                                        <p>Rehan</p>
                                                                                    </div>
                                                                                    <div>
                                                                                        online status
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div class="employeeprofilestatus">
                                                                            <div class="employeeprofileinner">
                                                                                <div class="employeeprofilepicture">
                                                                                    <img
                                                                                        src="./assets/employeediv4profileicon.png"/>
                                                                                </div>
                                                                                <div>
                                                                                    <div class="employenamediv">
                                                                                        <p>Mehwish</p>
                                                                                    </div>
                                                                                    <div>
                                                                                        online status
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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

export default dashBoard*/