import type { VoteType } from "../../types/votes";
import css from "./VoteOptions.module.css";

interface VoteOptionsProps {
  onVote: (prop: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}

export default function VoteOptions({
  onVote,
  onReset,
  canReset,
}: VoteOptionsProps) {
  return (
    <div className={css.container}>
      <button
        onClick={() => onVote("good")}
        className={css.button}
        type="button"
        aria-label="rate as good"
      >
        Good
      </button>
      <button
        onClick={() => onVote("neutral")}
        className={css.button}
        type="button"
        aria-label="rate as neutral"
      >
        Neutral
      </button>
      <button
        onClick={() => onVote("bad")}
        className={css.button}
        type="button"
        aria-label="rate as bad"
      >
        Bad
      </button>
      {canReset && (
        <button
          onClick={() => onReset()}
          className={`${css.button} ${css.reset}`}
        >
          Reset
        </button>
      )}
    </div>
  );
}
