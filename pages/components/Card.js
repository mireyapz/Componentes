import React from 'react';

const nomTitulo = "Card Heading";
const textSubtitulo = "A small text description followed by a call to action button. A small text description followed by a call to action button. A small text description followed by a call to action button. A small text description followed by a call to action button. A small text description followed by a call to action button. ";
const textButton = "Go Somewhere";

class Card extends React.Component {
  render(){
    return(
    <div
      style={{
        minWidth: "280px",
        maxWidth: "280px",
        minHeight: "389px",
        maxHeight: "389px",
        padding: "30px"
        
      }}
    >
      
      <div //Imagen
      style={{
        width: "280px",
        height: "184px",
        borderTopLeftRadius: "11px",
        borderTopRightRadius: "11px",
        backgroundImage: `url("https://images.unsplash.com/photo-1618176728882-61e7b2e4b656?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=milad-b-fakurian-Dkvmsxdnsgs-unsplash.jpg")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        boxShadow: "0px -5px 6px 7px #9E9E9E",     
        }}>
        
      </div>

      <div //Contenedor de abajo
        style={{
          backgroundColor: "#fff",
          padding: "0px",
          margin: "0px",
          border: "0px",
          width: "280px",
          height: "205px",
          borderBottomLeftRadius: "11px",
          borderBottomRightRadius: "11px",
          boxShadow: "0px 7px 6px 7px #9E9E9E"
        }}
      >
      <div>
        <h3 
        style={{
          height: "10px",
          padding: "35px 32px 15px",
          margin: "0px",
          border: "0px",
          fontSize: "17px",
          fontWeight: "bold",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
          }}
        >
        {nomTitulo}
        </h3>
      
        <h4 //Descripción
          style={{
            height: "45px",
            padding: "0px 32px",
            textAlign: "Justify",
            fontSize: "16px",
            lineHeight : "25px",
            overflow: "hidden",
            textOverflow: "ellipsis"
          }}
          >
          {textSubtitulo}
        </h4>
      </div>

      <div
      style={{
        textAlign: "center",
        padding:"32px"
      }}>
            <button
            style={{
              appearance: "none",
              borderColor: "#E1E5E8",
              borderRadius: "5px",
              background: "#fff",
              color: "#4d5d77",
              padding: "13px 35px",
              fontSize: "16px",
              width:"216px"
            }}>
            {textButton}
            </button>
      </div>
    </div>
  </div>
          )
    }
  }
export default Card;