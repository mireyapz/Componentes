import { useState } from "react";
import Imagenes from "./Imagenes";
import React from 'react';

export default function Gallery (){
    
    const [selectedImg, setSelectedImg] = useState(Imagenes[0]);

    const imagen_past = (img, index, totalImg) =>{
        if(totalImg > 5){
            if(index < 4){
                return (
                    <img 
                        style={{
                            height:  "43px",
                            width: "43px",
                            objectFit: "cover",
                            position: "relative",
                            marginRight: "15.7px",
                            border: selectedImg === img ? "1px solid blue": "",
                            }}
                        key= {index} 
                        src= {img} 
                        alt="Imagen"
                        onClick={() => setSelectedImg(img)}
                    />
                );
            }else{
                if(index==5){
                    return(
                        <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="43" height="43" fill="#0138FD"/>
                        <path d="M20.2903 30.016V23.328H14.0503V21.152H20.2903V14.464H22.7223V21.152H28.9623V23.328H22.7223V30.016H20.2903Z" fill="#fff"/>
                        </svg>
                    );
                }
                else{
                    return;
                }
            }
        }else{
            return (
                <img 
                    style={{
                        height:  "43px",
                        width: "43px",
                        objectFit: "cover",
                        position: "relative",
                        marginRight: "15.7px",
                        border: selectedImg === img ? "1px solid blue": "" }}
                    key= {index} 
                    src= {img} 
                    alt="Imagen"
                    onClick={()=> setSelectedImg(img)}
                />
            );
        }
    }

    return(
        <div >
            <div>
                <div>
                    <div style={{
                            display: "flex",
                            paddingBottom: "10px"
                        }}>
                        <img 
                        style={{
                            height:  "280px",
                            width: "280px",
                            objectFit: "cover",
                        }}
                        src= {selectedImg} alt= "Selected" className="selected" />
                    </div>

                    
                    <div
                    style={{
                        display: "flex",
                        alignContent: "center",
                        alignItems: "center",
                    }}>
                            {Imagenes.map((img, index) => (
                            imagen_past(img, index, Imagenes.length)     
                            )
                            )   
                            }
                    </div>
                    
                </div>
            </div>
        </div>
    );
}