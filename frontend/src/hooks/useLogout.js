import { useSetRecoilState } from "recoil";
import userAtom from "../atoms/userAtom";
import useShowToast from "./useShowToast";

const useLogout = () => {
  const setUser = useSetRecoilState(userAtom);
  const showToast = useShowToast();
  const logout = async () => {
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
  return logout;
};

export default useLogout;
