import React from "react";
// marche pas full cancer
// error : Text strings must be rendered within a <Text> component
type EmojiProps = {
  label: string;
  symbol: number;
};

const Emoji: React.FC<EmojiProps> = React.memo(({ label, symbol }) => {
  return (
    <span role="img" aria-label={label}>
      {String.fromCodePoint(symbol)}
    </span>
  );
});

export default Emoji;
