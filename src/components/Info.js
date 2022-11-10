import React from 'react'
import { RecArray } from './RecArray';
import FullRecipes from './FullRecipesCard';
import {Box}from '@chakra-ui/react';

function Ingredients() {
	
	return (
	<div>	
	 <Box className='design '/>
       {RecArray.map((items) => (
         <FullRecipes pic={items.pic}  name={items.name} Ingred={items.Ingred}  Dire={items.Dire}  NF={items.NF}/> 
       ))}

	</div>
	);
}

export default Ingredients