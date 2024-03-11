import ProfileCard from "./components/ProfileCard";
import UserPosts from "./components/UserPosts";
import FriendsList from "./components/FriendsList";
import data from "./data"

import "./App.css";

function App() {
  return (
    <>
      <ProfileCard name={data.user.name} age={data.user.age} location={data.user.location} bio={data.user.bio} />
      <UserPosts posts={data.posts} />
      <FriendsList friends={data.friends} />
    </>
  );
}

export default App;
