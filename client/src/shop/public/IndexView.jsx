import React, { useContext } from "react";
import { SharedDataCtx } from "@miq/contexts";
import { Jumbotron } from "@miq/components";

const Navbar = (props) => {
  return <div className="">Navbar</div>;
};

const SearchInput = (props) => {
  return <div className="">Search</div>;
};

export default function ShopPublicIndexView(props) {
  const ctx = useContext(SharedDataCtx);

  if (!ctx.isLoaded) {
    return null;
  }

  const { page = {} } = ctx;

  console.log(page);

  const url = "http://127.0.0.1:8000/media/images/getonerd/Ouidah_Output_90_3XxWhtT.jpg";
  return null;

  return (
    <div className="">
      <Navbar {...props} context={ctx} />
      <SearchInput {...props} context={ctx} />

      <div
        className="close-template"
        style={{
          backgroundImage: `url(${url})`,
        }}
      >
        <div className="close-template-inner">
          <div className="text-center p-3">
            <h1 className="close-template-title mb-1">lorem</h1>
            <h3 className="close-template-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos reiciendis harum nam nobis deleniti,
              sunt eveniet voluptatum vero illum aperiam eius at nostrum dicta, maxime accusamus officia voluptas iure.
            </h3>
          </div>
        </div>
      </div>

      <Jumbotron />
    </div>
  );
}
