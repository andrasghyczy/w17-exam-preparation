import React, { useState } from "react";

function Character(props) {
  const { name, details } = props;

  //------------ useState for show more -----
  const [clickShowMore, setClickShowMore] = useState(false);

  //------------- useState for button text ----
  const [buttonText, setButtonText] = useState("Show more");

  //------------ click handler function for show more button
  function handleShowMoreClick() {
    if (!clickShowMore) {
      setClickShowMore(true);
      setButtonText("Show less");
    } else {
      setClickShowMore(false);
      setButtonText("Show more");
    }
  }

  return (
    <>
      <div>{name}</div>
      {clickShowMore && <p>{details}</p>}
      <button className="show-more-button" onClick={handleShowMoreClick}>
        {buttonText}
      </button>
    </>
  );
}

export default Character;
