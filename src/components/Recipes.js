import React, { useState } from 'react'
import { RecArray } from './RecArray';
import Cards from './RecCards';
import {Box , Input}from '@chakra-ui/react';



function Recipes() {
    const [name, setName] = useState("");
	const result = RecArray.filter(items => items.name.toLowerCase().includes(name.toLowerCase()));
	return (

		<div >
			<Box className='designRec '/>

		<div className='Search'>
		<Input placeholder='Search ...' 
          backgroundColor={'white'} mt={0} w={300}
         onChange={(e)=> setName(e.target.value)}/>
		 </div>
	<div className="cards-container">
        {result.map((items) => (
        <Cards pic={items.pic} eTime={items.eTime} name={items.name} /> 
        ))}

	</div>
	</div>
	);
}
export default Recipes