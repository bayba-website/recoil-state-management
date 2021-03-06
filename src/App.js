import React, { Suspense } from "react";
import { RecoilRoot } from "recoil";

import Weather from "./pages/Weather";
import SearchBar from "./components/SearchBar";
import "./App.css";

const App = () => {
  return (
    <RecoilRoot>
      <div className="home">
        <SearchBar />
        <div className="weather-container pt-3 pb-3">
          <Suspense fallback={<div className="loading">Loading...</div>}>
            <Weather />
          </Suspense>
        </div>
      </div>
    </RecoilRoot>
  );
};

export default App;
