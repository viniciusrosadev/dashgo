import { Flex, Box, Avatar, Text } from "@chakra-ui/react"

interface ProfileProps {
    showProfileData?: boolean
}

export function Profile({ showProfileData }: ProfileProps) {
    return (
        <Flex align="center">
            {showProfileData && (<Box mr="4" textAlign="right">
                <Text>Vinicius Rosa</Text>
                <Text color="gray.300" fontSize="small">
                    teste@teste.com
                </Text>
            </Box>)}

            <Avatar size="md" name="Vinicius Rosa" />
        </Flex>
    )
}
