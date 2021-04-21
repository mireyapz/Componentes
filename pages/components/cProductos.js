import React from 'react';

const nombre = "ALBERCA INFLABLE RECTANGULAR 450 L PARA 3 NIÑOS 201 X 150 CM";
const precio = "$4999.00";
const marca = "Home Depot";
const tag = "palabra, palabra";

class Productos extends React.Component {
  render(){
    return(
    <div
      style={{
        minWidth: "286px",
        maxWidth: "286px",
        minHeight: "409px",
        maxHeight: "409px",
        border:"2px solid #000000",
        margin:"10px",
      }}
    >
      
      <div //Imagen
      style={{
        width: "286px",
        height: "233px",
        backgroundImage: `url("https://images.unsplash.com/photo-1618176728882-61e7b2e4b656?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=milad-b-fakurian-Dkvmsxdnsgs-unsplash.jpg")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover" 
        }}>
        
      </div>

      <div //Contenedor de abajo
        style={{
          backgroundColor: "#fff",
          margin: "0px",
          border: "0px",
          width: "286px",
          height: "176px",
        }}
      >
        <div style={{//Contenedor texto 1
            width: "258px",
            height: "76px",
            padding: "14px",
            margin: "0px"
        }}>
            <h3 
            style={{//Nombre
              height: "52px",
              maxHeight: "52px",
              width: "258px",
              margin: "0px",
              border: "0px",
              overflow: "hidden",
              textAlign: "Justify",
              paddingBottom: "8px"
            }}
            >
            {nombre}
            </h3>

            <h4 style={{//Marca
              width: "129px",
              height: "16px",
              maxHeight: "16px",
              margin: "0px",
              border: "0px",
              overflow: "hidden",
              textAlign: "Justify",
            }}>
              {marca}
            </h4>

            <div style={{//Linea
              borderBottom: "1px solid #000",
              height: "1",
              width: "258px",
              paddingTop: "14px"
            }}/>
        </div>

        <div style={{//Contenedor texto 2
            display: "flex",
            padding: "14px",
            width: "258px",
            height: "40px"
          }}>
            <div style={{ //Tag
              padding: "8px 0px",
              maxWidth: "129px",
              justifyContent: "left"
              }}>
                {tag}
            </div>

            <div style={{ //Precio
            width: "",
            height: "",
            justifyContent: "right"
            }}>
              {precio}
            </div>
        </div>
          
      </div>

      </div>
          
      
      )
    }
  }
export default Productos;