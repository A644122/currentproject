import React from "react";

const New = (props) => {
  return (
    <>
      <div className="news">
        <div className="newsone">
          <div className="news_img">
            <img
              className="imageUrl"
              src={props.Newss.urlToImage}
              alt="someimage"
            />
          </div>

          <div className="inner_new">
            <h3>{props.Newss.content}</h3>
            <h3>{props.Newss.publishedAt}</h3>

            <a href="#" className="aref">
              {" "}
              Explore More
            </a>
          </div>
        </div>

        <div className="source">
          <p>{props.Newss.author}</p>
          <p>{props.Newss.title}</p>
        </div>
      </div>
    </>
  );
};

export default New;
