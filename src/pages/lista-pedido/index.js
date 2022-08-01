import React from 'react';
import { CardList } from "_organisms";


const ListaPedido = () =>{
  const data =  [{id: 1, nome: 'Pedido 1'}, {id: 2, nome: 'Pedido 2'}];

  return <CardList data={data} />
};


export default ListaPedido;
