import React from "react";

type EmojiProps = {
  className: string;
  label: string;
  symbol: number;
};

const Emoji: React.FC<EmojiProps> = React.memo(
  ({ className, label, symbol }) => (
    <span className={className} role="img" aria-label={label}>
      {String.fromCodePoint(symbol)}
    </span>
  )
);

export default Emoji;
