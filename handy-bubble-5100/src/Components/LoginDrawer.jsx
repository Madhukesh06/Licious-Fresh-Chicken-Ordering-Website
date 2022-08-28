import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input,
    useDisclosure,
    Text,
    Image,
    Box,
    Stack,
    FormLabel,

} from '@chakra-ui/react'
import { useRef } from 'react'
import ToastExample from './Toast'

export default function LoginDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = useRef()

    let handleSubmit = () => {

    }

    return (
        <>

            <Box display="flex" ref={firstField} colorScheme='teal' onClick={onOpen} cursor="pointer">
                <Image width="30px"
                    src="https://m.licious.in/image/rebranding/png/profile-icon-new.png"
                    alt="tag"
                />
                <Text>Login</Text>
            </Box>

            <Drawer
                isOpen={isOpen}
                placement='right'
                initialFocusRef={firstField}
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader borderBottomWidth='1px'>
                        Create a new account
                    </DrawerHeader>

                    <DrawerBody>
                        <Stack spacing='24px'>
                            <Box>
                                <FormLabel htmlFor='username'>Email</FormLabel>
                                <Input
                                    ref={firstField}
                                    id='username'
                                    placeholder='Please enter user email...'
                                />
                            </Box>
                            <Box>
                                <FormLabel htmlFor='username'>Password</FormLabel>
                                <Input
                                    ref={firstField}
                                    id='password'
                                    placeholder='Please enter user Password...'
                                />
                            </Box>
                        </Stack>
                    </DrawerBody>

                    <DrawerFooter borderTopWidth='1px'>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue' onClick={onClose}> < ToastExample /></Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}