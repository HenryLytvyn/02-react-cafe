import { useState } from "react";

import CafeInfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import Notification from "../Notification/Notification";
import type { Votes, VoteType } from "../../types/votes";

import css from "./App.module.css";

const initialVotes: Votes = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export default function App() {
  const [values, setValues] = useState<Votes>(initialVotes);

  const handleVote = (type: VoteType) => {
    setValues({
      ...values,
      [type]: values[type] + 1,
    });
  };

  const resetVotes = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalVotes = values.good + values.neutral + values.bad;
  const positiveRate = totalVotes
    ? Math.round((values.good / totalVotes) * 100)
    : 0;

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions
        onVote={handleVote}
        onReset={resetVotes}
        canReset={totalVotes > 0}
      />
      {totalVotes > 0 && (
        <VoteStats
          votes={values}
          totalVotes={totalVotes}
          positiveRate={positiveRate}
        />
      )}

      {totalVotes === 0 && <Notification />}
    </div>
  );
}
