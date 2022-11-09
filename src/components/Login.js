import React, {useState} from 'react'
import axios from 'axios'
import {
    Flex,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button
  } from '@chakra-ui/react';


 function Login() {
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
         // navigate("/HomePage")
       }


       return (
        <Flex width ="full" align="center" justifyContent="center">
          <Box
           p={8}
           maxWidth="500px"
           borderWidth={1}
           borderRadius={8}
           boxShadow="lg">
            <Box textColor={"#F4A46C"} textAlign="center">
            <Heading>Sign up</Heading>
            </Box>
            <Box my={4} textAlign="left">
             <form onSubmit={handleSubmit}>


                <FormControl isRequired>
                    <FormLabel textColor={"#F4A46C"}>Email</FormLabel>
                    <Input type="email" onChange={e=>{setEmail(e.target.value)}}/>
                </FormControl>

                <FormControl isRequired>
                    <FormLabel textColor={"#F4A46C"}>Password</FormLabel>
                    <Input type="password" onChange={e=>{setPass(e.target.value)}}/>
                </FormControl>

            <Button 
            _hover={{bg:"#F0677C", color:"white"}}
             onClick={postData}
             textColor={"#F4A46C"}
             variantColor="#F0677C"
            variant="outline"
            type="submit"
            width="full"
            mt={4}>
                Sign up
             </Button>
            </form>
           </Box>
          </Box>
        </Flex>
      )
 }

 export default Login