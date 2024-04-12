import React from "react";
import { Sentences } from "../components/sentences/Sentences";
import { SentenceData } from "../data/sentenceData";
import Back from "../components/buttons/back/Back";

export const SentencePage = () => {
  return (
    <div>
      <Back />
      <Sentences sentenceList={SentenceData} />
    </div>
  );
};
