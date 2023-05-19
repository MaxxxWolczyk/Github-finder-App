import React from "react";
import UserResults from "../components/users/UserREsults";
import UserSearch from "../components/users/UserSearch";

function Home() {
  return (
    <div>
      <UserSearch />
      <UserResults />
    </div>
  );
}

export default Home;
