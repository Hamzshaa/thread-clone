import {
  Avatar,
  Box,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  Text,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
// import Actions from "./Actions";
import { useState } from "react";

const UserPost = ({ likes, replies, postImg, postTitle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handlePostDots = (e) => {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Link to="/markzuckerberg/post/1">
      <Flex gap="3" mb="4" py="5">
        <Flex flexDirection="column" alignItems="center">
          <Avatar size="md" name="Mark Zuckerberg" src="/zuck-avatar.png" />
          <Box w="1" h="full" bg="gray.light" my="2"></Box>
          <Box position="relative" w="full">
            <Avatar
              size="xs"
              name="Ryan Florence"
              src="https://bit.ly/ryan-florence"
              position="absolute"
              top="0"
              left="15px"
              padding="2px"
            />
            <Avatar
              size="xs"
              name="Ryan Florence"
              src="https://bit.ly/sage-adebayo"
              position="absolute"
              bottom="0"
              right="-5px"
              padding="2px"
            />
            <Avatar
              size="xs"
              name="John Doe"
              src="https://bit.ly/prosper-baba"
              position="absolute"
              bottom="0"
              left="4px"
              padding="2px"
            />
          </Box>
        </Flex>
        <Flex flex="1" flexDirection="column" gap="2">
          <Flex justifyContent="space-between">
            <Flex w="full" alignItems="center">
              <Text fontSize="sm" fontWeight="bold">
                markzuckerberg
              </Text>
              <Image src="/verified.png" w="4" h="4" ml="1" />
            </Flex>
            <Flex gap="4" alignItems="center">
              <Text fontSize="sm" color="gray.light">
                id
              </Text>
              <Menu isOpen={isMenuOpen}>
                <MenuButton onClick={handlePostDots}>
                  <BsThreeDots />
                </MenuButton>
                <Portal>
                  <MenuList>
                    <MenuItem>Share</MenuItem>
                    <MenuItem>Repost</MenuItem>
                    <MenuItem>Save post</MenuItem>
                    <MenuItem>Copy link</MenuItem>
                  </MenuList>
                </Portal>
              </Menu>
            </Flex>
          </Flex>

          <Text fontSize="sm">{postTitle}</Text>
          {postImg && (
            <Box
              borderRadius="6"
              overflow="hidden"
              border="1px solid"
              borderColor="gray.light"
            >
              <Image src={postImg} w="full" />
            </Box>
          )}

          <Flex gap="3" my="1">
            {/* <Actions liked={liked} setLiked={setLiked} /> */}
          </Flex>

          <Flex gap="2" alignItems="center">
            <Text color="gray.light" fontSize="sm">
              {replies} replies
            </Text>
            <Box w="0.5" h="0.5" borderRadius="full" bg="gray.light"></Box>
            <Text color="gray.light" fontSize="sm">
              {likes} likes
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Link>
  );
};

export default UserPost;
