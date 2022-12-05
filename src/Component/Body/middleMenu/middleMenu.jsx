import Upper from "./UppermiddleMenu/upper"
import Lower from "./LowermiddleMenu/lower"
import middleMenucss from "./middleMenu.module.css"

function MiddleMenu() {
    return ( 

        <>
            <div className={`row ${middleMenucss.upperrow}`}> <Upper></Upper> </div>
            <div className={`row ${middleMenucss.lowerrow}`}> <Lower></Lower> </div>
        </>

     );
}

export default MiddleMenu;