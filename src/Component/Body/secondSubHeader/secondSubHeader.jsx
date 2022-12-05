import subHeadercss from "./secondSubHeader.module.css"

function secondSubHeader() {
    return (
        <>

            <div className={subHeadercss.UserMenuTopHeader}>
                <ul>
                    <li><a href="">My Family</a></li>
                    <li> <a href="">Family Details</a></li>
                    <li><a href="">Work Experience</a></li>
                    <li><a href="">Educational Details</a></li>
                    <li><a href="">My Document</a></li>
                    <li><a href="">My Attendance</a></li>
                    <li><a href="">Edit Profile Details</a></li>

                </ul>
            </div>

        </>
    );
}

export default secondSubHeader;