import React, { useEffect, useState } from "react";
import type { PlayerProps } from "@lottiefiles/react-lottie-player";

const LottieNoSSR: React.FC<PlayerProps> = (props) => {
  const [Player, setPlayer] = useState<React.ComponentType<PlayerProps> | null>(null);

  useEffect(() => {
    import("@lottiefiles/react-lottie-player").then((mod) => {
      setPlayer(() => mod.Player);
    });
  }, []);

  if (!Player) return null; // You could render a fallback UI here if needed

  return <Player {...props} />;
};

export default LottieNoSSR;
