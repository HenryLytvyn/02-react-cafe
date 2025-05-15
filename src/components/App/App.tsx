import CafeInfo from "../CafeInfo/CafeInfo";
import type { Votes, VoteType } from "../../types/votes";
import VoteOptions from "../VoteOptions/VoteOptions";
import { useState } from "react";

import css from "./App.module.css";

const votes: Votes = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export default function App() {
  const [values, setVelues] = useState(votes);

  const handleVote = (type: VoteType) => {
    setVelues({
      ...values,
      [type]: values[type] + 1,
    });
  };

  const resetVotes = () => {
    setVelues({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions onVote={handleVote} onReset={resetVotes} />
    </div>
  );
}
