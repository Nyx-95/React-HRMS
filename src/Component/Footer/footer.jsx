import footerCss from "./footer.module.css"

function Footer() {
    return (
        <>

            <footer className={footerCss.footer}>
                <div className={footerCss.footer__addr}>
                    <div className={footerCss.legal}>
                        <p className={footerCss.footerfirstdiv}>Copyright © <a href="#"> arraydigitals</a> 2010-2022. All rights reserved.</p>

                        <div className={footerCss.legal__links}>
                            <p className={footerCss.footerseconddiv} >Design By : <a href="#">arraydigitals</a></p>
                        </div>
                    </div>
                </div>
            </footer>


        </>
    );
}

export default Footer;