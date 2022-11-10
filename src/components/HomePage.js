import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Image,
  } from '@chakra-ui/react';
  
  export default function HomePage() {
    return (
      <Container maxW={'7xl'}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 0 }}
          direction={{ base: 'column', md: 'row' }}>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
              // mt={'-40'}
              mt={'-180'}
              color={'#729B79'}
              fontFamily='Marker Felt, fantasy'>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: '30%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: '#fff1da',
                  zIndex: -1,
                  color:'#fff1da'
                }}>
                Spoony
              </Text> 
            </Heading>
            <Text className='hptext' color={'#729B79'} fontFamily='Marker Felt, fantasy' >
            we have intered to the right place!
            <br></br>
           <br></br>
           Spoony is a site for preparing easy and quick recipes with the mother and the child to spend a fun and useful time in the kitchen
</Text>
            
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
            <Box className='HPDesign '/>
           <Image
                alt={'Hero Image'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                mt={'-330'}
                mr={'-190'}
                src={'./picspoony.png'}
                zIndex={'-1'}
              />
          <Box className='HPDesign2 '/>

          {/* <Box className='boxGroup'>
          <Box className='try1'/>
          <Box className='try2'/>
          <Box className='try3'/>
          </Box> */}
          

          </Flex>
        </Stack>
      </Container>
    );
  }
