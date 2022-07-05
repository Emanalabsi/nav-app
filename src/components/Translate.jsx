// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
import React, { useState } from "react";
import { Dropdown } from "./Dropdown";
import { Convert } from "./Convert";
const options = [
  {
    label: "Aricans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
];
const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");
  return (
    <div>
      <div className="ui form">
        <label> Enter a text:</label>
        <input
          className="input"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <Dropdown
        options={options}
        selected={language}
        onSelectedchange={setLanguage}
      />
      <hr />
      <h3 className="ui header"> output</h3>
      <Convert text={text} language={language} />
    </div>
  );
};
export { Translate };
