import React from "react";
let year=new Date().getFullYear();
function Footer(){
    
    return (
        <footer>
        <p>
            <b>
            copyright Ⓒ {year}
            </b>
            </p>
            </footer>
    )
}
export default Footer;