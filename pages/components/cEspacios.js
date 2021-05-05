//import { Tag } from 'carbon-components-react';
import React from 'react';

const nomEspacio = "Ciudad Bugambilias";
const cantidad = "3";
const uniMedida = "min";

class Espacios extends React.Component {
  render(){
    return(
    <div
      style={{
        minWidth: "300px",
        maxWidth: "300px",
        minHeight: "400px",
        maxHeight: "400px",
      }}
    >
      <div //Imagen
      style={{
        width: "300px",
        height: "335px",
        backgroundImage: `url("https://images.unsplash.com/photo-1618176728882-61e7b2e4b656?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=milad-b-fakurian-Dkvmsxdnsgs-unsplash.jpg")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        }}>
          
      </div>

      <div //Contenedor de abajo
        style={{
          backgroundColor: "#ffffff",
          margin: "0px",
          border: "0px",
          width: "300px",
          height: "65px",
          display: "inline-flex"
        }}
      >
        <div
        style={{ //Separacion izq
          
          width:"64px",
          height: "64px",
        }}>

          <div style={{
            fontFamily: "IBM Plex Sans",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "28px",
            lineHeight: "36px",
            justifyContent: "center",
            display: "flex"
          }}>
            {cantidad}
          </div>

          <div style={{
            fontFamily: "IBM Plex Sans",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "20px",
            lineHeight: "26px",
            justifyContent: "center",
            display: "flex"

          }}>
            {uniMedida}
          </div>

        </div>

        <div style={{ //Derecha Nombre
          width: "236px",
          height:"65px",
          fontFamily: "IBM Plex Sans",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: "16px",
          lineHeight: "22px",
          alignItems: "center",
          display: "flex",
          margin: "0px",
          borderLeft: "1px solid #000000",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          justifyContent: "center",
        }}>
          
          {nomEspacio}
          
        </div>

      </div>

    </div>
    )
   }
  }
export default Espacios;