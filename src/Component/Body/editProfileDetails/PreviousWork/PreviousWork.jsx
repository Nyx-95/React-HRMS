import React from 'react'
import previousWorkCss from "./previousWork.module.css"
import headingpicture from "../../../../assets/AllUserbankDetails/headingLinePicture.png"
import PreviousComponent from './PreviousWorkComponent/previousComponent'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {ROUTES} from "../../../../Utils/routes"


const PreviousWork = () => {
    const navigate = useNavigate();

    const [components, setComponents] = useState([""]);

    function addComponent() {
        setComponents([...components, ""])
    }

    const handleServiceDelete =(index) =>{
        const list = [...components]
        list.splice(index,1);
        setComponents(list)
    }

    return (
        <>
            <div className={`row ${previousWorkCss.editProfileMain}`}>
                <div className={`row ${previousWorkCss.headingMain}`}>
                    <div className={previousWorkCss.headingInner}>
                        <div className={previousWorkCss.headingWrapper}>
                            <h4> Previous Work Experience(s)</h4>
                            <img src={headingpicture}></img>
                        </div>
                        <div className={previousWorkCss.addMoreButton}><button className='btn btn-primary' onClick={addComponent}>Add More</button></div>
                    </div>
                </div>

                <div className={`row gx-0 ${previousWorkCss.editProfileMain}`}>

                    {components.map((item, keyid) => (
                        <div  key={keyid}>
                            <PreviousComponent text={item} />
                            <div className={`row gx-0 ${previousWorkCss.editProfileDeleteButton}`}>
                                <div className={previousWorkCss.deleteButton}><button className='btn btn-danger' onClick={handleServiceDelete}>Delete</button></div>
                            </div>
                        </div>
                    ))}

                </div>

                <div className={`row ${previousWorkCss.editProfileDiv4}`}>
                    <div className={`col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 ${previousWorkCss.editProfileDiv4Inner1}`}>
                        <button className='btn btn-primary formBackButton' onClick={()=>navigate(ROUTES.ACADEMIC_DETAIL)}> Back </button>
                    </div>
                    <div className={`col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 ${previousWorkCss.editProfileDiv4Inner2}`}>
                        <button className='btn btn-primary formBackButton' > Save </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PreviousWork