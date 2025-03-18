import React from "react";
import Button from "./Button";

export default function Form({ reqType, setReqType }) {
  return (
    <form className="flex justify-around" onSubmit={(e) => e.preventDefault()}>
      <Button buttonText="users" reqType={reqType} setReqType={setReqType} />
      <Button buttonText="posts" reqType={reqType} setReqType={setReqType} />
      <Button buttonText="comments" reqType={reqType} setReqType={setReqType} />
    </form>
  );
}
