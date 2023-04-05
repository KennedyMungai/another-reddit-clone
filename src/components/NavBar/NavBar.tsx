import { Flex, Image } from '@chakra-ui/react'
import React from 'react'

type Props = {}

const NavBar = (props: Props) =>
{
    return (
        <Flex
            bg='white'
            border="1px solid red"
            height='44px'
            padding='6px 12px'
        >
            <Flex>
                <Image
                    src='/images/redditFace.svg'
                    height='30px'
                />
                <Image src='/images/redditText.svg' />
            </Flex>
        </Flex>
    )
}

export default NavBar