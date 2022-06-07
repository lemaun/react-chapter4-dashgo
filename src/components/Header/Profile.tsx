import { Avatar, Box, Flex, Text } from "@chakra-ui/react"

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4">
        <Text textAlign="right">
          Leandro L. Silva
        </Text>
        <Text color="gray.300" textAlign="right" fontSize="small">
          leandro@datacampo.com.br
        </Text>
      </Box>
      <Avatar size="md" name="Leandro L. Silva" src="https://github.com/lemaun.png" />
    </Flex>

    
  )
}