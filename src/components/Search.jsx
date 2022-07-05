import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("programming");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };
    if (term && !results.length) {
      search();
    } else {
      const timeoutId = setTimeout(() => {
        if (term) {
          search();
        }
      }, 500);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [term]);

  const onFormSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const renderedList = results.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>

        <div className="header">
          {result.title}
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });
  return (
    <React.Fragment>
      <form className="ui form" onSubmit={onFormSubmit}>
        <label>Search Term</label>
        <input className="input" value={term} onChange={handleChange} />
      </form>
      <div className="ui celled list">{renderedList}</div>
    </React.Fragment>
  );
};
export { Search };
