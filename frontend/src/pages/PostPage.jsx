import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import Comment from "../components/Comment";

const PostPage = () => {
  const [liked, setLiked] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handlePostDots = (e) => {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <Flex>
        <Flex w="full" alignItems="center" gap="3">
          <Avatar src="/zuck-avatar.png" size="md" name="Mark Zuckerberg" />
          <Flex>
            <Text fontSize="sm" fontWeight="bold">
              markzuckerberg
            </Text>
            <Image src="/verified.png" w="4" h="4" ml="4" />
          </Flex>
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

      <Text my="3">Let&apos;s talk about Threads.</Text>
      <Box
        borderRadius="6"
        overflow="hidden"
        border="1px solid"
        borderColor="gray.light"
      >
        <Image src={"/post1.png"} w="full" />
      </Box>

      <Flex gap="3" my="3">
        {/* <Actions liked={liked} setLiked={setLiked} /> */}
      </Flex>

      <Flex gap="2" alignItems="center">
        <Text color="gray.light" fontSize="sm">
          238 replies
        </Text>
        <Box w="0.5" h="0.5" bg="gray.light" borderRadius="full"></Box>
        <Text color="gray.light" fontSize="sm">
          {200 + (liked ? 1 : 0)} likes
        </Text>
      </Flex>

      <Divider my="4" />
      <Flex justifyContent="space-between">
        <Flex gap="2" alignItems="center">
          <Text fontSize="2xl">👋</Text>
          <Text color="gray.light">Get the app to like, reply and post.</Text>
        </Flex>
        <Button>Get</Button>
      </Flex>

      <Divider my="4" />
      <Comment
        comment="Looks really good!"
        createdAt="2d"
        likes="123"
        username="kemalmohammed"
        userAvatar="https://bit.ly/ryan-florence"
      />
      <Comment
        comment="It is awesome"
        createdAt="2d"
        likes="13"
        username="meyuumohammed"
        userAvatar="https://bit.ly/sage-adebayo"
      />
      <Comment
        comment="Wow!"
        createdAt="3d"
        likes="1"
        username="trident123"
        userAvatar="https://bit.ly/prosper-baba"
      />
    </>
  );
};

export default PostPage;
