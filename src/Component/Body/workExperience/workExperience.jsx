import React from 'react'
import workExpierenceCss from "./workExperience.module.css"
import headingpicture from "../../../assets/AllUserbankDetails/headingLinePicture.png"

const workExpierence = () => {
  return (
    <>
    <div className={`row ${workExpierenceCss.editDetailMain}`}>
        <div className={`row ${workExpierenceCss.headingMain}`}>
            <div className={workExpierenceCss.headingInner}>
                <div className={workExpierenceCss.headingWrapper}>
                    <h4> Work Experience </h4>
                    <img src={headingpicture}></img>
                </div>

            </div>
        </div>
        <div className="row">
                <div className={`${workExpierenceCss.UserDetailsMenuTable} ${workExpierenceCss.DepartmentTable}`}>
                    <div className={workExpierenceCss.UserDetailsMenuTableInner}>
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>

                                    <th scope="col">
                                        No.
                                    </th>
                                    <th scope="col">
                                        Company Name
                                    </th>
                                    <th scope="col">
                                    Designation
                                    </th>
                                    <th scope="col">
                                        Date Of Joining
                                    </th>
                                    <th scope="col">
                                        Date Of Leaving
                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>

                                    <td>1</td>
                                    <td>XYZ Company</td>
                                    <td>Sr. UI/UX Designer</td>
                                    <td>05-11-2021</td>
                                    <td>06-11-2021</td>

                                </tr>
                                <tr>

                                <td>2</td>
                                    <td>XYZ Company</td>
                                    <td>Sr. UI/UX Designer</td>
                                    <td>05-11-2021</td>
                                    <td>06-11-2021</td>
                                </tr>
                                
                              
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    </div>
</>
  )
}

export default workExpierence