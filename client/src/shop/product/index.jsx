import React, { lazy, useState, useContext, useEffect } from "react";
import { Switch, Link } from "react-router-dom";

import "./index.scss";

import { SharedDataCtx } from "@miq/contexts";
import { AdminRoute, AdminNavLink, AdminView, hasPerms, PublishedStatusSpan } from "@miq/adminjs";
import { addForwardSlash } from "@miq/utils";
import { Table, ItemTable, Button, ImgSquare } from "@miq/components";

import { productServices } from "./utils";

const StaffProductAddView = lazy(() => import("./AddView"));
const StaffProductUpdateView = lazy(() => import("./UpdateView"));

const StaffProductIndexView = (props) => {
  const [data, setData] = useState({});
  const { perms } = useContext(SharedDataCtx);

  const { search } = props.location;
  useEffect(() => {
    let params = new URLSearchParams(search);
    if (![...params.values()].filter((i) => i).length) {
      params = null;
    }

    productServices
      .list(params)
      .then((data) => {
        setData(data);
      })
      .catch((err) => {});
  }, [search]);

  const canAdd = hasPerms(perms.perms, ["shop.add_product"]);

  return (
    <AdminView
      title="Products"
      back={props.back}
      actions={
        <AdminNavLink
          label="Add product"
          to={`${addForwardSlash(props.match.url)}new/`}
          disabled={!canAdd}
          className="btn-primary"
        />
      }
    >
      {data?.results && (
        <AdminView.Section className="product-table mb-3">
          <ItemTable
            className="w-100"
            items={data.results}
            renderItem={(prod) => {
              return (
                <Table.Tr className="border-bottom" key={prod.slug}>
                  <Table.Td className="">
                    <ImgSquare {...prod.cover_data} className="rounded" />
                  </Table.Td>

                  <Table.Td className="">
                    <Link to={`${addForwardSlash(props.match.url)}${prod.slug}/`}>
                      <div className="fw-bold" title={prod.name}>
                        {prod.name}
                      </div>
                    </Link>
                    <div className="text-muted text-sm">
                      {prod.category_data && <span className="me-1">{prod.category_data.name}</span>}
                      {prod.is_pre_sale && <span className="me-1">Pre sale</span>}
                    </div>
                  </Table.Td>

                  <Table.Td className="d-none d-md-table-cell text-sm text-center"></Table.Td>

                  <Table.Td className="">
                    {prod.is_on_sale ? (
                      <span className="text-danger">{prod.sale_price}</span>
                    ) : (
                      <span className="">{prod.retail_price}</span>
                    )}
                  </Table.Td>

                  <Table.Td className="d-none d-md-table-cell text-sm text-center">
                    <PublishedStatusSpan is_published={prod?.page?.is_published} pill />
                  </Table.Td>
                </Table.Tr>
              );
            }}
            pagination={{
              count: data.count,
              next: data.next,
              previous: data.previous,
              // onPreviousClick: handlePreviousClick,
              // onNextClick: handleNextClick,
            }}
          />
        </AdminView.Section>
      )}
    </AdminView>
  );
};

export default function StaffProductRoutes(props) {
  const { path, url } = props.match;

  return (
    <Switch>
      <AdminRoute
        path={`${path}new/`}
        render={(args) => <StaffProductAddView back={addForwardSlash(url)} {...args} />}
        requiredPerms={["shop.add_product"]}
      />
      <AdminRoute
        path={`${path}:prodSlug/`}
        render={(args) => <StaffProductUpdateView back={addForwardSlash(url)} {...args} />}
        requiredPerms={["shop.change_product"]}
      />
      <AdminRoute
        requiredPerms={["shop.view_product"]}
        render={(args) => <StaffProductIndexView {...args} back={props.back} />}
      />
    </Switch>
  );
}
