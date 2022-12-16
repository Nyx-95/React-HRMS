import React from 'react'
import educationalDetailCss from "./educationalDetail.module.css"
import headingpicture from "../../../assets/AllUserbankDetails/headingLinePicture.png"


const educationalDetail = () => {
    return (
        <>
            <div className={`row ${educationalDetailCss.editDetailMain}`}>
                <div className={`row ${educationalDetailCss.headingMain}`}>
                    <div className={educationalDetailCss.headingInner}>
                        <div className={educationalDetailCss.headingWrapper}>
                            <h4> Educational Details </h4>
                            <img src={headingpicture}></img>
                        </div>

                    </div>
                </div>
                <div className="row">
                        <div className={`${educationalDetailCss.UserDetailsMenuTable} ${educationalDetailCss.DepartmentTable}`}>
                            <div className={educationalDetailCss.UserDetailsMenuTableInner}>
                                <table className="table">
                                    <thead className="thead-dark">
                                        <tr>

                                            <th scope="col">
                                                Qualification
                                            </th>
                                            <th scope="col">
                                                Year
                                            </th>
                                            <th scope="col">
                                            Degree Detail
                                            </th>
                                            <th scope="col">
                                                Subject
                                            </th>
                                            <th scope="col">
                                                Grade
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>

                                            <td>Graduation</td>
                                            <td>2017</td>
                                            <td>Lorem lypsum</td>
                                            <td>Eng - Business</td>
                                            <td>A</td>

                                        </tr>
                                        <tr>

                                        <td>Graduation</td>
                                            <td>2017</td>
                                            <td>Lorem lypsum</td>
                                            <td>Eng - Business</td>
                                            <td>A</td>
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

export default educationalDetail