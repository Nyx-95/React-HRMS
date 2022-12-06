import subHeadercss from "./secondSubHeader.module.css"

function secondSubHeader() {
    return (
        <>

            <div className={subHeadercss.UserMenuTopHeader}>
                <ul>
                    <li><a href=""><div className={subHeadercss.subHeaderLink} ><i className="ri-user-line"></i><p>My Department</p></div></a></li>
                    <li> <a href=""><div className={subHeadercss.subHeaderLink} ><i className="ri-file-list-line"></i><p>Family Details</p></div></a></li>
                    <li><a href=""><div className={subHeadercss.subHeaderLink} ><i className="ri-team-line"></i><p>Work Experience</p></div></a></li>
                    <li><a href=""><div className={subHeadercss.subHeaderLink} ><i className="ri-book-line"></i><p>Educational Details</p></div></a></li>
                    <li><a href=""><div className={subHeadercss.subHeaderLink} ><i className="ri-file-paper-2-line"></i><p>My Document</p></div></a></li>
                    <li><a href=""><div className={subHeadercss.subHeaderLink} ><i className="ri-calendar-event-line"></i><p>My Attendance</p></div></a></li>
                    <li><a href=""><div className={subHeadercss.subHeaderLink} ><i className="ri-edit-line"></i><p>Edit Profile Details</p></div></a></li>

                </ul>
            </div>

        </>
    );
}

export default secondSubHeader;