import React from "react";
import "@reach/dialog/styles.css";
import { useId } from "../src/index";

export let name = "Basic";

export let Example = () => {
  const divId = `div:${useId()}`;
  const buttonId = `div:${useId()}`;
  return (
    <>
      <div id={divId}>
        This element has an ID of <strong>{divId}</strong>
      </div>
      <button id={buttonId} onClick={() => false}>
        This element has an ID of <strong>{buttonId}</strong>
      </button>
    </>
  );
};
