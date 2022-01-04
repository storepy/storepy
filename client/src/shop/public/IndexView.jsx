import { useContext } from "react";
import { SharedDataCtx } from "@miq/contexts";

export default function ShopPublicIndexView(props) {
  const ctx = useContext(SharedDataCtx);

  if (!ctx.isLoaded) {
    return null;
  }

  return null;
}
