import React, { useState, useEffect } from 'react';

const Greeting: React.FC = () => {
  const [greeting, setGreeting] = useState<string>('');

  useEffect(() => {
    const hour: number = new Date().getHours();

    if (hour >= 5 && hour < 12) {
      setGreeting('Good Morning!');
    } else if (hour >= 12 && hour < 17) {
      setGreeting('Good Afternoon');
    } else if (hour >= 17 && hour < 21) {
      setGreeting('Good Evening!');
    } else {
      setGreeting('Nighty Night!');
    }
  }, []);

  return <h1>{greeting}</h1>;
};

export default Greeting;