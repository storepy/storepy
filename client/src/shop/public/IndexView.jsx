import React, { useContext } from "react";
import { SharedDataCtx } from "@miq/contexts";

export default function IndexView(props) {
  const ctx = useContext(SharedDataCtx);

  // console.log(ctx);

  return (
    <div className="index-close">
      <h1>Notre site se refait une beauté</h1>
      <h3>Veuillez repasser plus tard.</h3>
    </div>
  );
}
