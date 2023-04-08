import { authModalState } from "@/atoms/AuthModalAtom";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Flex, Icon, Menu, MenuButton, MenuList, Text } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";
import { TiHome } from "react-icons/ti";

const Directory = () => {
    const setAuthModalState = useSetRecoilState(authModalState);

    return (
        <Menu>
            <MenuButton
                cursor="pointer"
                padding="0px 6px"
                borderRadius={4}
                mr={1}
                _hover={{ outline: "1px solid", outlineColor: "gray.200" }}
            >
                <Flex align="center">
                    <Flex align="center">
                        <Icon as={TiHome} />
                        <Text>Home</Text>
                    </Flex>
                    <ChevronDownIcon />
                </Flex>
            </MenuButton>
            <MenuList></MenuList>
        </Menu>
    );
};

export default Directory;
