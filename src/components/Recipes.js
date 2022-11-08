import React from 'react'
import { RecArray } from './RecArray';
import Cards from './RecCards';

function Recipes() {
	
	return (
	<div className="cards-container">	
       {RecArray.map((items) => (
         <Cards pic={items.pic} eTime={items.eTime} name={items.name} /> 
       ))}

	</div>
	);
}

export default Recipes