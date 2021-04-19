import React from 'react';

const nomTitulo = "Header Clark";

class Card2 extends React.Component {
  render(){
    return(
    <div
      style={{
        minWidth: "288px",
        maxWidth: "288px",
        minHeight: "375px",
        maxHeight: "375px",
        padding: "30px"
        
      }}
    >
      
      <div //Imagen
      style={{
        width: "288px",
        height: "312px",
        borderTopLeftRadius: "15px",
        borderTopRightRadius: "15px",
        backgroundImage: `url("https://images.unsplash.com/photo-1618176728882-61e7b2e4b656?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=milad-b-fakurian-Dkvmsxdnsgs-unsplash.jpg")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        boxShadow: "0px -1px 15px 8px #f7f7f7"
        }}>
        
      </div>

      <div //Contenedor de abajo
        style={{
          backgroundColor: "#fff",
          padding: "0px 1px",
          margin: "0px",
          border: "0px",
          width: "286px",
          height: "63px",
          borderBottomLeftRadius: "15px",
          borderBottomRightRadius: "15px",
          boxShadow: "0px 8px 10px 1px #9E9E9E",
          display: "inline-flex"
        }}
      >
        <div
        style={{ //Separacion para avatar
          padding: "15px 11px 14px 22px"
        }}>

          <div
          style= {{//imagen de avatar
            borderRadius: "50%",
            backgroundImage: "url('https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "34px",
            width: "34px",
          }}
          >
          </div>
        </div>

        <h3 //Titulo
          style={{
            padding: "24px 24px 24px 0px",
            width: "150px",
            maxWidth: "154px",
            margin: "0px",
            border: "0px",
            fontSize: "15px", 
            fontWeight: "bold",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
            }}
          >
          {nomTitulo}
        </h3>

        <div
        style={{//puntos
          padding: "30px 24px 29px 0px",
          backgroundImage: "url('https://image.flaticon.com/icons/png/512/57/57013.png')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain"
        }}>
        </div>

      </div>

    </div>
    )
   }
  }
export default Card2;