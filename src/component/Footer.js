import React from 'react'

export default function Footer() {
    return (
        <div className="invoice-footer" style={{justifyContent: "center"}}>

            <div className="invoice-info" >
                
            	<a href="https://snipesec.com" target="_blank">
            	<button className="btn" style={{width: "100%", marginBottom: "10px",}} onClick="">by <img alt="snipesec" src="https://snipesec.com/images/095cb3ec-268c-44e2-a0ae-5b0bb3071935Ba%C5%9Fl%C4%B1ks%C4%B1z-1.png" height="75"></img></button>
               	</a>
               	<br/>
                <br/>
                <b style={{color: "#000", fontWeight: "700"}}> Stay Home Stay Safe | #CyprusFightsCorona</b>
                <br/>
                <b>Report Errors to <a href="mailto:info@snipenet.net">info@snipenet.com</a></b>
            </div>
        </div>
    )
}
