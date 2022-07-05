import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const onTitleClicked = (index) => {
    setActiveIndex(index);
  };

  const renderdItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "null";
    return (
      <React.Fragment key={item.title}>
        <div
          className={`title ${active}`}
          onClick={() => {
            onTitleClicked(index);
          }}
        >
          <i className="dropdown icon"></i>
          {item.content}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return (
    <div className="ui styled accordion">
      {renderdItems}
      {activeIndex}
    </div>
  );
};

export { Accordion };
