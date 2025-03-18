import React from "react";

export default function Button({ buttonText, reqType, setReqType }) {
  return (
    <>
      <button
        className={`flex-1 dark:border ${
          buttonText === reqType &&
          "border-2 border-purple-50 dark:bg-amber-400 dark:text-amber-900"
        }`}
        type="button"
        onClick={() => setReqType(buttonText)}
      >
        {buttonText}
      </button>
    </>
  );
}
