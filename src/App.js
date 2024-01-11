import React, { useEffect, useState } from "react";

import New from "./Components/New";
import "./App.css";
// import Header from './Components/Header';

export const App = () => {
  const [news, setNews] = useState([]);
  const [Category, setCategory] = useState("india");
  // const[Pkistan,setPkistan]=useState('pakistan')
  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=${Category}&from=2023-12-20&apiKey=8691fcffd37c40908f1485686acf3f49`
    )
      .then((res) => res.json())
      .then((news) => {
        setNews(news.articles);
        // setNews(news);
        console.log(news.articles);
      })
      .catch((err) => {
        console.log(`some thing error happen! ${err}`);
      });
  }, [Category]);

  return (
    <>
      <div className="header">
        <h1>News Task</h1>
        <input
          type="text"
          onChange={(ev) => {
            setCategory(ev.target.value);
          }}
          placeholder="search News"
        />
      </div>

      <section className="news_section">
        {news.map((newss, id) => {
          return <New Newss={newss} key={id} />;
        })}
      </section>
    </>
  );
};
export default App;
