import React,{useState,useEffect} from "react"
// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")

const Item = ({name,image,description,price,stock,addShoppingCart,setTotal}) => {
        
  const [stockCounter, setStockCounter] = useState()
      useEffect(()=> {
          setStockCounter(stock)
          setTotal(0)
      },[])
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [buttonText,setButtonText] = useState("Buy")
  useEffect(()=>{
    if(stockCounter === 0){
        setButtonDisabled(true)
        setButtonText("Out of stock")
        setStockCounter("0");
    }

  
},[stockCounter])


  const buyClick = () => {
      if(stockCounter !== 0){
        setStockCounter(prevStockCounter => prevStockCounter - 1)
        addShoppingCart();

        setTotal(prevTotal => prevTotal + parseFloat(price))
      }
  } 

  
  


  return (
  <div className='product'>
      <h3>{name}</h3>
      <img src={image} alt="Shoes"/>
      <p>{description}</p>
      <p>${price}</p>
      <h5> In stock: <span>{stockCounter}</span> </h5>
      
      <button onClick={buyClick} disabled={buttonDisabled} > {buttonText}</button>
  </div>
  )
}

export default Item;
