import React from 'react'
import img1 from "../img/Yo.png"
// El componente Cabera no tiene componentes hijos.
// ESTADO: Cabecera no tiene estado.
// MÉTODOS: Cabecera no tiene métodos.
// PROPS: Cabecera recibe de su padre la cantidad que va a mostrar dentro del span correpondiente
// Maqueta de Cabecera:
//    h1
//    p > span     (el span mostrará la cantidad recibida por props)

export default function Cabecera({shoppingCart,total}) {
  
  return (
    <header>
      <div className='shopContainer'>
        <h1>Shopping Cart</h1>
          <p> Your Items: <span>{shoppingCart}</span> </p>
          <p>Subtotal:<span>${total}</span></p>
      </div>    
          <div className='imgContainer'>
          <img className='Segu' src={img1} alt="ProfilePicture" />
          <p><a href="https://www.instagram.com/segudellitto/">Segu Del Litto</a></p>
          </div>
    </header>
  )
}
