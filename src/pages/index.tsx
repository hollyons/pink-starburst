import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import App from "../components/App";
import { TimeOfDayProvider } from "../context/TimeOfDayContext";
import { WeatherProvider } from "../context/WeatherContext";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <TimeOfDayProvider>
        <WeatherProvider>
              <App />
        </WeatherProvider>
    </TimeOfDayProvider>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
