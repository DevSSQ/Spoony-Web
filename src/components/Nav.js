import { React } from 'react';
import {Link} from 'react-router-dom';
import { RecArray } from './RecArray';
import Cards from './RecCards'
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Input,
  
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon, } from '@chakra-ui/icons';

const Links = [ <Link to ="/homepage">Home Page</Link>  , <Link to ="/recipes">Recipes</Link> , <Link to ="/aboutus">About Us</Link>];

const NavLink =( { children })=> (
  <Link className='navbardesign'
    px={2}
    py={1}
    rounded={'md'}
    color={'#729B79'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('#d9918b'), color:"#fff1da"
    }}
   >
    {children}
  </Link>
);


function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
 

  return (
    <>
      <Box color ='black'bg={useColorModeValue( )} px={4}  variantColor="#729B79" variant="outline">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
          
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack >
            <Box><img className='spoonylogo' src="./Spoonylogo.png"/></Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
        
         <Link to ='/login'> <Button 
            _hover={{bg:"#d9918b", color:"#fff1da"}}
            //  onClick={postData}
            variantColor="#025959"
            color={'#729B79'}
            variant="outline"
            type="submit"
            width="50"
            mt={0}>
            Sign Up
             </Button></Link>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

    </>
  );
}

export default  Nav