import { useRouter } from "next/router";
import { useState } from "react";

export default function HomePage() {
  // wann wird ein neues set initialisiert?
  // sobald die erste vokabel von einem set angefangen wird
  // extra-button "start a new set" ???

  function intializeSet(set) {
    const revision0 = new Date();
    // mit loop erstellen
    const revision1 = revision0 + 1;
    const revision2 = revision1 + 2;
    const revision3 = revision2 + 3;
    const revision4 = revision3 + 4;
    const revision5 = revision4 + 5;
    const revision6 = revision5 + 6;
    const revision7 = revision6 + 7;
    set.revisions = [
      revision0,
      revision1,
      revision2,
      revision3,
      revision4,
      revision5,
      revision6,
      revision7,
    ];
    return set;
  }

  // const router = useRouter();

  // const [currentSet, setCurrentSet] = useState({});

  // function startSet() {
  //   router.push("/trainer");
  //   setCurrentSet
  // }

  return (
    <div>
      <button>Start a new set</button>
    </div>
  );
}
