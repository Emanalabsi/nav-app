import React, { useState } from "react";
import { Accordion } from "./Accordion";
import { Search } from "./Search";
import { Dropdown } from "./Dropdown";
import { Translate } from "./Translate";
import { Convert } from "./Convert";
import { Route } from "./Route";
import { Header } from "./Header";
const options = [
  { label: "The color red", value: "red" },
  { label: "the color Green", value: "green" },
  { label: "THe color yellow", value: "yellow" },
];

const items = [
  {
    title: "What is react?",
    content: "react is  front end javascript framework",
  },

  { title: "why do use react?", content: "it is popular among developers" },

  { title: "how do use react?", content: "by defining components" },
];
const App = () => {
  const [selected, setSelected] = useState(options[1]);
  return (
    <div className="ui container">
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}

      {/* <Dropdown
          options={options}
          selected={selected}
          onSelectedchange={setSelected}
        /> */}
      {/* <Translate /> */}
      {/* <Convert /> */}
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          options={options}
          selected={selected}
          onSelectedchange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export { App };
