import React from 'react'
import { RecArray } from './RecArray';
import FullRecipes from './FullRecipesCard';

function Ingredients() {
	
	return (
	<div>	
       {RecArray.map((items) => (
         <FullRecipes pic={items.pic} eTime={items.eTime} name={items.name} /> 
       ))}

	</div>
	);
}

export default Ingredients