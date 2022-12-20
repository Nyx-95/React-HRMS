import lowercss from "./lower.module.css"
import headingLine from "../../../../assets/heading lines.png"
import profilePicDiv from "../../../../assets/employeediv1profileicon.png"
import graphbar1 from "../../../../assets/graphbar1.png"
import graphbar2 from "../../../../assets/graphbar2.png"
import graphbar3 from "../../../../assets/graphbar3.png"
import graphbar4 from "../../../../assets/graphbar4.png"
import graphbar5 from "../../../../assets/graphbar5.png"
import graphbar6 from "../../../../assets/graphbar6.png"
import { ResponsiveContainer, AreaChart, Area, CartesianGrid, XAxis, Tooltip } from 'recharts';


function LowerMiddleMenu() {

    const data = [
        { name: '0', uv: 0, pv: 0, amt: 0 },
        { name: 'Mon', uv: 8, pv: 2400, amt: 2400 },
        { name: 'Tues', uv: 4, pv: 2400, amt: 2400 },
        { name: 'Wed', uv: 6, pv: 2400, amt: 2400 },
        { name: 'Thurs', uv: 8, pv: 2400, amt: 2400 },
        { name: 'Fri', uv: 7, pv: 2400, amt: 2400 },



    ];
    const renderLineChart = (
        <ResponsiveContainer width="110%" height="100%">
            <AreaChart data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8503c8" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="white" stopOpacity={0.1} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" />

                <Tooltip />
                <Area type="monotone" dataKey="uv" stroke="#8606c8" fillOpacity={1} fill="url(#colorUv)" />
            </AreaChart>
        </ResponsiveContainer>
    );

    return (

        <>

            <div className="col-lg-3">

                <div className={lowercss.fourthlowerdiv}>
                    <div className={lowercss.Employee}>
                        <div className={lowercss.Employeeouter}>
                            <div className={lowercss.Employeeinner}>
                                <div className={lowercss.Employeewrapper}>
                                    <div className={lowercss.mergeheadings}>
                                        <div className={lowercss.mergeheadinginner}>
                                            <h5>Employees</h5>
                                            <i className="fa-solid fa-ellipsis"></i>
                                        </div>
                                        <img src={headingLine} alt="heading"></img>
                                    </div>

                                    <div className={lowercss.employeelistouter}>
                                        <div className={lowercss.employeelistinner}>
                                            <div className={lowercss.employeelisting}>
                                                <ul>
                                                    <li>
                                                        <div className={lowercss.employeeprofilestatus}>
                                                            <div className={lowercss.employeeprofileinner}>
                                                                <div className={lowercss.employeeprofilepicture}>
                                                                    <img
                                                                        src={profilePicDiv} />
                                                                </div>
                                                                <div className={lowercss.employeeprofileNameOuter}>
                                                                    <div className={lowercss.employenamediv}>
                                                                        <p>Hassan</p>
                                                                    </div>
                                                                    <div>
                                                                        Seo
                                                                    </div>
                                                                </div>
                                                                <div className={lowercss.employeMessageIcon}>
                                                                    <a href="#">
                                                                        <i className="ri-mail-line"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className={lowercss.employeeprofilestatus}>
                                                            <div className={lowercss.employeeprofileinner}>
                                                                <div className={lowercss.employeeprofilepicture}>
                                                                    <img
                                                                        src={profilePicDiv} />
                                                                </div>
                                                                <div className={lowercss.employeeprofileNameOuter}>
                                                                    <div className={lowercss.employenamediv}>
                                                                        <p>Hassan Jawad</p>
                                                                    </div>
                                                                    <div>
                                                                        Seo
                                                                    </div>
                                                                </div>
                                                                <div className={lowercss.employeMessageIcon}>
                                                                    <a href="#">
                                                                        <i className="ri-mail-line"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className={lowercss.employeeprofilestatus}>
                                                            <div className={lowercss.employeeprofileinner}>
                                                                <div className={lowercss.employeeprofilepicture}>
                                                                    <img
                                                                        src={profilePicDiv} />
                                                                </div>
                                                                <div className={lowercss.employeeprofileNameOuter}>
                                                                    <div className={lowercss.employenamediv}>
                                                                        <p>Rehan</p>
                                                                    </div>
                                                                    <div>
                                                                        Seo
                                                                    </div>
                                                                </div>
                                                                <div className={lowercss.employeMessageIcon}>
                                                                    <a href="#">
                                                                        <i className="ri-mail-line"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className={lowercss.employeeprofilestatus}>
                                                            <div className={lowercss.employeeprofileinner}>
                                                                <div className={lowercss.employeeprofilepicture}>
                                                                    <img
                                                                        src={profilePicDiv} />
                                                                </div>
                                                                <div className={lowercss.employeeprofileNameOuter}>
                                                                    <div className={lowercss.employenamediv}>
                                                                        <p>Mehwish</p>
                                                                    </div>
                                                                    <div>
                                                                        Seo
                                                                    </div>
                                                                </div>
                                                                <div className={lowercss.employeMessageIcon}>
                                                                    <a href="#">
                                                                        <i className="ri-mail-line"></i>
                                                                    </a>
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
            <div className="col-lg-4">

                <div className={lowercss.thirdlowerdiv}>
                    <div className={lowercss.timetrackingoutter}>
                        <div className={lowercss.timetrackinginner}>
                            <div className={lowercss.timetrackingwrapper}>
                                <div className={lowercss.timetrackingoutterdiv}>
                                    <div className={lowercss.timetrackingdiv}>
                                        <div className={lowercss.mergeheadings}>
                                            <h5>My Time Tracking</h5>
                                        </div>

                                    </div>
                                    <img src={headingLine} alt="heading"></img>
                                </div>
                                <div id={lowercss.chartContainer}>
                                    {renderLineChart}
                                </div>
                                <div className={lowercss.timetrackingmain}>
                                    <div className={lowercss.timetrackingouter}>
                                        <div className={lowercss.weeklyreport}>
                                            <p className={lowercss.p1}>Avg Working Hours</p>
                                            <p className={lowercss.p2}>Nov 07 - Nov 11 (4 days left)</p>
                                        </div>
                                        <div className={lowercss.timetrackingtime}>
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
            <div className="col-lg-5">

                <div className={lowercss.EmployeData}>
                    <div className={lowercss.EmployeDataOuter}>
                        <div className={lowercss.EmployeDataInner}>

                            <div className="row">
                                <div className="col-lg-4 col-6">
                                    <div className={lowercss.EmplpoyeeWrapper}>
                                        <div className={lowercss.EmplpoyeeWrapperInner}>
                                            <img src={graphbar1}></img>
                                            <h5>02</h5>
                                            <label>Absent</label>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-4 col-6">
                                    <div className={lowercss.EmplpoyeeWrapper}>
                                        <div className={lowercss.EmplpoyeeWrapperInner}>
                                            <img src={graphbar2}></img>
                                            <h5>18</h5>
                                            <label>Attendance</label>
                                        </div>

                                    </div>
                                </div>
                                <div className={`col-lg-4 col-12 ${lowercss.employeeColumn}`}>
                                    <div className={lowercss.EmplpoyeeWrapper}>
                                        <div className={lowercss.EmplpoyeeWrapperInner}>
                                            <img src={graphbar3}></img>
                                            <h5>36 mins</h5>
                                            <label>Break Log</label>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className={`row ${lowercss.lowerThirdContainer}`}>
                                <div className="col-lg-4 col-6">
                                    <div className={lowercss.EmplpoyeeWrapper}>
                                        <div className={lowercss.EmplpoyeeWrapperInner}>
                                            <img src={graphbar4}></img>
                                            <h5>06</h5>
                                            <label>Late</label>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-4 col-6">
                                    <div className={lowercss.EmplpoyeeWrapper}>
                                        <div className={lowercss.EmplpoyeeWrapperInner}>
                                            <img src={graphbar5}></img>
                                            <h5>03</h5>
                                            <label>Discrepancy</label>
                                        </div>

                                    </div>
                                </div>
                                <div className={`col-lg-4 col-12 ${lowercss.employeeColumn}`}>
                                    <div className={lowercss.EmplpoyeeWrapper}>
                                        <div className={lowercss.EmplpoyeeWrapperInner}>
                                            <img src={graphbar6}></img>
                                            <h5>02</h5>
                                            <label>Leave Approve</label>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}

export default LowerMiddleMenu;