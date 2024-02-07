import {
  Avatar,
  Box,
  Button,
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { BsInstagram } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";
import { useRecoilValue } from "recoil";
import userAtom from "../atoms/userAtom";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import useShowToast from "../hooks/useShowToast";

const UserHeader = ({ user }) => {
  const toast = useToast();
  let currentUser = useRecoilValue(userAtom); // Logged in user
  if (currentUser.user) currentUser = currentUser.user;
  const [following, setFollowing] = useState(
    user?.follows?.includes(currentUser?._id)
  );
  const showToast = useShowToast();
  const [updating, setUpdating] = useState(false);

  const copyURL = () => {
    const currentURL = window.location.href;
    navigator.clipboard.writeText(currentURL).then(() => {
      toast({
        title: "Copied",
        description: "Profile link copied to clipboard",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    });
  };

  const handleFollowUnfollow = async () => {
    if (!currentUser) {
      showToast("Error", "Please login to follow", "error");
      return;
    }

    if (updating) return;

    setUpdating(true);
    try {
      const res = await fetch(`/api/users/follow/${user?._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (data.error) {
        showToast("Error", data.error, "error");
        return;
      }

      if (following) {
        showToast("Success", `Unfollowed ${user?.name}`, "success");
        user.followers.pop(); // this is just to simulate removing from followers and it is only for client side
      } else {
        showToast("Success", `Followed ${user?.name}`, "success");
        user.followers.push(currentUser?._id); // this is just to simulate adding to followers and it is only for client side
      }

      setFollowing(!following);
    } catch (error) {
      showToast("Error", error, "error");
    } finally {
      setUpdating(false);
    }
  };

  return (
    <VStack gap={4} alignItems={"start"}>
      <Flex justifyContent={"space-between"} w={"full"}>
        <Box>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            {user?.name}
          </Text>
          <Flex gap={2} alignItems={"center"}>
            <Text fontSize={"sm"}>{user?.username}</Text>
            <Text
              fontSize={"xs"}
              bg={"gray.dark"}
              color={"gary.light"}
              p={1}
              borderRadius={"full"}
            >
              threads.net
            </Text>
          </Flex>
        </Box>
        <Box>
          <Avatar
            name={user?.name}
            src={user?.profilePic || "https://bit.ly/broken-link"}
            size={{ base: "md", md: "xl" }}
          />
        </Box>
      </Flex>
      <Text>{user?.bio}</Text>

      {currentUser?._id === user?._id ? (
        <Link as={RouterLink} to="/update">
          <Button size="sm">Update Profile</Button>
        </Link>
      ) : (
        <Button size="sm" onClick={handleFollowUnfollow} isLoading={updating}>
          {following ? "Unfollow" : "Follow"}
        </Button>
      )}
      <Flex w={"full"} justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text color={"gray.light"}>{user?.followers.length} followers</Text>
          <Text bg={"gray.light"} w="1" h="1" borderRadius="full"></Text>
          <Link color={"gray.light"}>instagram.com</Link>
        </Flex>
        <Flex gap={2} alignItems={"center"}>
          <Box className="icon-container">
            <BsInstagram size="24" cursor="pointer" />
          </Box>
          <Box className="icon-container">
            <Menu>
              <MenuButton>
                <CgMoreO size="24" cursor="pointer" />
              </MenuButton>
              <Portal>
                <MenuList bg="gray.dark">
                  <MenuItem bg="gray.dark" onClick={copyURL}>
                    Copy link
                  </MenuItem>
                </MenuList>
              </Portal>
            </Menu>
          </Box>
        </Flex>
      </Flex>
      <Flex w="full">
        <Flex
          flex="1"
          borderBottom="1.5px solid white"
          justifyContent="center"
          pb="3"
          cursor="pointer"
        >
          <Text fontWeight="bold">Threads</Text>
        </Flex>
        <Flex
          flex="1"
          borderBottom="1px solid gray"
          justifyContent="center"
          pb="3"
          color="gray.light"
          cursor="pointer"
        >
          <Text fontWeight="bold">Replies</Text>
        </Flex>
      </Flex>
    </VStack>
  );
};

export default UserHeader;
