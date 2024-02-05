import { Button } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";
import userAtom from "../atoms/userAtom";
import useShowToast from "../hooks/useShowToast";
import { FiLogOut } from "react-icons/fi";

const LogoutButton = () => {
  const setUser = useSetRecoilState(userAtom);
  const showToast = useShowToast();
  const handleLogout = async () => {
    try {
      // Remove the cookie
      const res = await fetch("/api/users/logout", {
        method: "POST",
        headers: {
          "Content-Type": "applicatio/json",
        },
      });
      const data = await res.json();

      if (data.error) {
        showToast("Error", data.error, "error");
        return;
      }

      // Remove from local storage
      localStorage.removeItem("user-threads");

      // Remove from the setUser
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button
      position="fixed"
      top="30px"
      right="30px"
      size="sm"
      onClick={handleLogout}
    >
      <FiLogOut size="20" />
    </Button>
  );
};

export default LogoutButton;
