import React, { useEffect, useState } from "react";
import New from "./New";

const Container = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=microsoft&from=2023-12-20&apiKey=8691fcffd37c40908f1485686acf3f49"
    )
      .then((res) => res.json())
      .then((news) => {
        console.log(news);
        setNews(news.articles);
        // setNews(news);
      })
      .catch((err) => {
        console.log(`some thing error happen! ${err}`);
      });
  }, []);
  return (
    <>
      {/* <New/> */}
      {news.map((newss, id) => {
        return <New />;
      })}
    </>
  );
};

export default Container;
