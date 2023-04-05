import { Flex, Image } from '@chakra-ui/react'
import React from 'react'
import SearchInput from './SearchInput'

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
            <Flex
                align='center'
            >
                <Image
                    src='/images/redditFace.svg'
                    height='30px'
                />
                <Image
                    src='/images/redditText.svg'
                    height='46px'
                    display={{
                        base: 'none',
                        md: 'unset'
                    }}
                />
                {/* <Directory /> */}
                <SearchInput />
                {/* <RightContent /> */}
            </Flex>
        </Flex>
    )
}

export default NavBar