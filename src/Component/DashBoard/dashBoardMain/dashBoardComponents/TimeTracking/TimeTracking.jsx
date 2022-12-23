import React from 'react'
import timeTrackingCss from "./TimeTracking.module.css"
import heading from '../../../../../assets/heading lines.png'
import { ResponsiveContainer, AreaChart, Area, CartesianGrid, XAxis, Tooltip } from 'recharts';


const TimeTracking = () => {
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
      <div className={timeTrackingCss.thirdlowerdiv}>
        <div className={timeTrackingCss.timetrackingoutter}>
          <div className={timeTrackingCss.timetrackinginner}>
            <div className={timeTrackingCss.timetrackingwrapper}>
              <div className={timeTrackingCss.timetrackingoutterdiv}>
                <div className={timeTrackingCss.timetrackingdiv}>
                  <div className={timeTrackingCss.mergeheadings}>
                    <h5>Time Tracking</h5>
                  </div>
                  <div className={timeTrackingCss.mergeheadingButton}>
                    <button type="button" className="btn btn-secondary  dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span className="sr-only"></span>
                    </button>
                    
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">Monthly hrs</a>
                      <a className="dropdown-item" href="#">Weekly hrs</a>
                      <a className="dropdown-item" href="#">Daily hrs</a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">Separated link</a>
                    </div>
                  </div>

                </div>
                <img src={heading} alt="heading"></img>
              </div>
              <div id={timeTrackingCss.chartContainer}>
                {renderLineChart}
              </div>
              <div className={timeTrackingCss.timetrackingmain}>
                <div className={timeTrackingCss.timetrackingouter}>
                  <div className={timeTrackingCss.weeklyreport}>
                    <p className={timeTrackingCss.p1}>Avg Working Hours</p>
                    <p className={timeTrackingCss.p2}>Nov 07 - Nov 11 (4 days left)</p>
                  </div>
                  <div className={timeTrackingCss.timetrackingtime}>
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
    </>
  )
}

export default TimeTracking