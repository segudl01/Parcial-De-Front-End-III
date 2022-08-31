import React from 'react'
import Item from './Item'
import data from './data.json'
// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Listado es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.

export default function Listado({addShoppingCart,setTotal}) {
  return (
    <div className="container" >
      {
        
        data?.map(product =>{

          return <Item 
            name= {product.producto.nombre} 
            key={product.id} 
            description={product.producto.descripcion}
            image={product.producto.imagen}
            price={product.producto.precio}
            stock={product.stock}
            setTotal={setTotal}
            addShoppingCart={addShoppingCart}
          />
      })
        }

    </div>
  )
}
