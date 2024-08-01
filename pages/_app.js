import { useState } from "react";
import GlobalStyle from "../styles";

export default function App({ Component, pageProps }) {
  function moveVocableup(vocable) {
    getSetNumber();
  }

  const [setsOfTheDay, setSetsOfTheDay] = useState([]);

  function getSetsOfTheDay() {
    const today = new Date();
    const setsOfTheDay = sets.map((set) => set.revisions.includes(today));
    return setsOfTheDay;
  }
  // täglich automatisch ausführen:
  setSetsOfTheDay(getSetsOfTheDay());

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} setsOfTheDay={setsOfTheDay} />
    </>
  );
}
