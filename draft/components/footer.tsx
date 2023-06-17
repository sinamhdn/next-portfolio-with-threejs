import { Box, Center } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box opacity={0.4} fontSize="sm">
      <Center>
        &copy; {new Date().getFullYear()} Sina Mohammadian. All Rights Reserved.
      </Center>
    </Box>
  )
}

export default Footer
