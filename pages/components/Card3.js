import React from 'react';

const nomTitulo = "Unexpected Surprises from my first air ballon trip.";
const cantidad= "3 min";

class Card3 extends React.Component {
  render(){
    return(
    <div
      style={{
        minWidth: "296px",
        maxWidth: "296px",
        minHeight: "336px",
        maxHeight: "336px",
        padding: "30px"
      }}
    >
      
      <div //Imagen
      style={{
        width: "288px",
        height: "312px",
        borderTopLeftRadius: "15px",
        borderTopRightRadius: "15px",
        borderBottomLeftRadius: "15px",
        borderBottomRightRadius: "15px",
        backgroundImage: `url("https://images.unsplash.com/photo-1618176728882-61e7b2e4b656?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=milad-b-fakurian-Dkvmsxdnsgs-unsplash.jpg")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        boxShadow: "0px -1px 15px 8px #f7f7f7"
        }}>

        <div style={{
          padding: "230px 36px 22px 25px",
          color: ""
          
        }}>
          <h3 //Titulo
            style={{
              padding: "0px 0px 8px 0px",
              width: "235px",
              height: "40px",
              maxWidth: "235px",
              maxHeight: "40px",
              margin: "0px",
              border: "0px",
              fontSize: "16px", 
              fontWeight: "bold",
              overflow: "hidden",
              textAlign: "Justify",
              lineHeight : "normal"
              }}
            >
            {nomTitulo}
          </h3>

          <h4
          style={{//Cantidad
            width: "78px",
            height: "16px",
            maxWidth: "78px",
            maxHeight: "16px",
            margin: "0px",
            border: "0px",
            fontSize: "16px",
            overflow: "hidden",
            textAlign: "Justify"
          }}> 
            {cantidad}
          </h4>
        </div>
        
      </div>

    </div>
    )
   }
  }
export default Card3;