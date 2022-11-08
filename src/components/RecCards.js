import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Button,
    color
  } from '@chakra-ui/react';
  
 
function Cards(props) {
    return (
      <Center py={12}>
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={props.pic}
            />
          </Box>
           <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500} marginTop ={'10px'} color ="#F4A46C">
              {props.name}
            </Heading>
           <Stack pt={2} align={'center'}>
            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'} >
              {props.eTime}
            </Text>
          </Stack>
          <Button 
            _hover={{bg:"#F0677C", color:"white"}}
            //  onClick={postData}
            variantColor="#F0677C"
            color={'gray.500'}
            variant="outline"
            type="submit"
            width="50"
            mt={4}>
                Go to recipe
             </Button>
        </Box>
      </Center>
    );
  }
  export default Cards