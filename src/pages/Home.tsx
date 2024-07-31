import React from "react";
import { PageTitle } from "../components/PageTitle";
import { HeroSection } from "../components/HeroSection";
import { Photos } from "../components/Photos";
import { Videos } from "../components/Videos";
import NewLetter from "../components/NewLetter";

export const Home = () => {
  return (
    <div>
      <PageTitle title="Home" />
      <HeroSection />
      <Photos />
      <Videos />
      <NewLetter />
    </div>
  );
};
