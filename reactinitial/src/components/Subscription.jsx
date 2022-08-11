import React, { useState } from "react";
import LoadingMask from "./LoadingMask";

function Subscription(props) {
  const { isSent, setIsSent } = props;

  const [emailValue, setEmailValue] = useState("");

  // ----- useState for post request state -----
  const [isPending, setIsPending] = useState(false);

  // ----- click handler for subscribtion -----
  const handleSubscription = async (e) => {
    e.preventDefault();

    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    // ----- EMAIL ADDRESS VALIDATION -----
    if (emailValue === "") {
      alert("Please enter your email address");
    } else if (emailValue.match(validRegex)) {
      //content of body
      const emailObj = {
        email: emailValue,
      };

      //endpoint
      const url = "https://demoapi.com/api/series/newsletter";

      //fetch object
      const fetchObj = {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(emailObj),
      };

      setIsPending(true);

      const response = await fetch(url, fetchObj);
      const responseJson = await response.json();

      setIsPending(false);
      setIsSent(responseJson);
    } else {
      alert("Invalid email address!");
    }
  };

  return (
    <>
      {isSent ? (
        <div>Subscribed</div>
      ) : (
        <>
          <h1>Subscribe to our newsletter</h1>
          {isPending ? (
            <LoadingMask />
          ) : (
            <form>
              <input
                type="text"
                name="email"
                onChange={(e) => setEmailValue(e.target.value)}
              />
              <button onClick={handleSubscription}>Subscribe</button>
            </form>
          )}
        </>
      )}
    </>
  );
}

export default Subscription;
