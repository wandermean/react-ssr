import React from "react";
import Header from "../../components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <div>home1</div>
      <button
        onClick={() => {
          alert("click12");
        }}
      />
    </div>
  );
};

export default Home;
