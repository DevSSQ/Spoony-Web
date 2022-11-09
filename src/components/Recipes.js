import React from 'react'
import { RecArray } from './RecArray';
import Cards from './RecCards';
import {Box}from '@chakra-ui/react';

function Recipes() {
	
	return (
		<div >
			<Box className='design '/>
	<div className="cards-container">	
       {RecArray.map((items) => (
         <Cards pic={items.pic} eTime={items.eTime} name={items.name} /> 
       ))}

	</div>
	</div>
	);
}

export default Recipes