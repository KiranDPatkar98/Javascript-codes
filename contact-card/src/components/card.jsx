import React from "react";
import Avatar from "./avatar";
import Details from "./details";
function Card(props){
    return(
        <div className="str">
            <div className="main">
                <section>
            <h1>{props.name}</h1>
            
           <Avatar  img={props.img}/>
             
          </section>
          <div className="divend">
            <Details 
           detailsinfo= {props.telpho}
            />
            <Details 
           detailsinfo= {props.email}
            />

            </div>
            </div>
        </div>
    );

}
export default Card;