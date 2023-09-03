import React from "react";
import Section from "../components/Section";
import useAppContext from "../contexts/AppContext.jsx";

import classes from "./HomePage.module.css";

const HomePage = () => {
  const { store } = useAppContext();
  const { isLoading } = store;
  if (isLoading) {
    return <div className={classes.loader}></div>;
  }
  return (
    <main className="container">
      <Section resourceType="people" target="people" />
      <Section resourceType="planets" target="planets" />
      <Section resourceType="starships" target="starships" />
    </main>
  );
};

export default HomePage;
