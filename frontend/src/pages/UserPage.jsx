import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";

const UserPage = () => {
  return (
    <>
      <UserHeader />

      <UserPost
        likes="1353"
        replies="434"
        postImg="/post1.png"
        postTitle="Let's talk about threads."
      />
      <UserPost
        likes="3421"
        replies="1134"
        postImg="/post2.png"
        postTitle="This is second post"
      />
      <UserPost
        likes="153"
        replies="34"
        postImg="/post3.png"
        postTitle="Third post."
      />
      <UserPost
        likes="753"
        replies="54"
        postTitle="This is thread post with out img."
      />
    </>
  );
};

export default UserPage;
