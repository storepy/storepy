import React, { useContext } from "react";
import { SharedDataCtx } from "@miq/contexts";
import { ClosePageRender } from "@miq/adminjs";
// import { Jumbotron } from "@miq/components";

const Navbar = (props) => {
  return <div className="">Navbar</div>;
};

const SearchInput = (props) => {
  return <div className="">Search</div>;
};

export default function ShopPublicIndexView(props) {
  return null;

  const ctx = useContext(SharedDataCtx);

  if (!ctx.isLoaded) {
    return null;
  }

  const { page = {} } = ctx;

  // console.log(page);

  const src = "http://127.0.0.1:8000/media/images/getonerd/Ouidah_Output_90_3XxWhtT.jpg";
  const src_mobile = "http://127.0.0.1:8000/media/images/getonerd/Manu_Output_183_CXdnMWM.jpg";
  const ct_image_data = { src, src_mobile };
  const data = { ct_title: "A title", ct_text: "A text", ct_image_data };
  // return null;

  return (
    <div className="">
      <Navbar {...props} context={ctx} />
      <SearchInput {...props} context={ctx} />
      <ClosePageRender {...data} />
      {/* <Jumbotron /> */}
    </div>
  );
}
