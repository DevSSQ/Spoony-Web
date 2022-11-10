import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import {
    Flex,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button,
    Link,
  } from '@chakra-ui/react';


 function Login() {
  const navigate = useNavigate();
    const [email, setEmail] = useState()
    const [pass, setPass] = useState()
     let url = "https://6362425566f75177ea2a9ac0.mockapi.io/Todolist"
     const postData = () =>{
     axios.post(url, {
         email,
         pass
     }).then(res => {
       localStorage.setItem(email, "email")
       alert(localStorage.getItem("email"))
     })
     }

      function handleSubmit (e) {
         e.preventDefault();
         navigate("/Home")
       }

       return (
        <Flex width ="full" align="center" justifyContent="space-evenly">
          <Box
           p={8}
           maxWidth="500px"
           borderWidth={1}
           borderRadius={8}
           boxShadow="lg"
          //  margin={'150px'}
           marginRight={'50px'}
           marginTop={'100px'}
           marginBottom={'245px'}
           >
            <Box textColor={"#729B79"} textAlign="center">
            <Heading fontFamily='Marker Felt, fantasy' fontWeight={'600'} >Sign up</Heading>
            </Box>
            <Box my={4} textAlign="left">
             <form onSubmit={handleSubmit}>

                <FormControl isRequired>
                    <FormLabel textColor={"#729B79"}>Email</FormLabel>
                    <Input type="email" onChange={e=>{setEmail(e.target.value)}}/>
                </FormControl>

                <FormControl isRequired>
                    <FormLabel textColor={"#729B79"}>Password</FormLabel>
                    <Input type="password" onChange={e=>{setPass(e.target.value)}}/>
                </FormControl>

           <Link href ="/Home">
            <Button 
            _hover={{bg:"#F0677C", color:"white"}}
             onClick={postData}
             textColor={"#729B79"}
            variantColor="#F0677C"
            variant="outline"
             type="submit"
            width="full"
            mt={4}>
                Sign up
             </Button>
             </Link>
            </form>
           </Box>
          </Box>
          <Box className='loginDesign'/>
          <Box className='loginDesign2'/>
        </Flex>
      )
 }

 export default Login