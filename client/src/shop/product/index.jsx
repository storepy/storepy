import React, { lazy, useState, useContext, useEffect } from 'react';
import { Switch, Link } from 'react-router-dom';

import './index.scss';

import { SharedDataCtx } from '@miq/contexts';
import { AdminRoute, AdminNavLink, AdminView, hasPerms, PublishedStatusSpan } from '@miq/adminjs';
import { addForwardSlash } from '@miq/utils';
import { Table, ItemTable, ImgSquare, Loading, Button } from '@miq/components';

import { productServices } from './utils';

const StaffProductAddView = lazy(() => import('./AddView'));
const StaffProductUpdateView = lazy(() => import('./UpdateView/'));
const StaffProduct_UpdateView = lazy(() => import('./UpdateView'));

const StaffProductIndexView = (props) => {
  const [data, setData] = useState({ count: 0 });
  const [status, setStatus] = useState('pending');
  const [filter, setFilter] = useState(true);
  const { perms } = useContext(SharedDataCtx);

  const { search } = props.location;
  useEffect(() => {
    // setStatus("pending");
    let params = new URLSearchParams(search);
    if (![...params.values()].filter((i) => i).length) {
      params = null;
    }

    productServices
      .list(params)
      .then((data) => {
        setData(data);
        setStatus('success');
      })
      .catch((err) => {
        setStatus('failed');
      });
  }, [search]);

  const canAdd = hasPerms(perms.perms, ['shop.add_product']);

  if (status === 'pending') return <Loading />;
  if (status === 'failed') return <div>Something went wrong. Please reload the page!</div>;

  const query = new URLSearchParams(search);

  // console.log(data.categories);

  function pushQuery() {
    const path = new URL(window.location.href);
    props.history.push(`${path.pathname}?${query}`);
  }

  return (
    <AdminView
      title={`Products (${data.count})`}
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
      <AdminView.Section actions={<Button onClick={() => setFilter(!filter)}>Filter</Button>}>
        {filter && (
          <form action="." method="GET">
            <div className="d-flex p-2">
              <input
                type={'checkbox'}
                className="miq-checkbox"
                id="published"
                className="me-2"
                onChange={({ target }) => {
                  const { checked } = target;
                  if (!checked) {
                    query.delete('status');
                  } else {
                    query.set('status', 'published');
                  }
                  // query.set("published", !value);
                  pushQuery();
                }}
                checked={Boolean(query.get('status')) || false}
              />
              <label htmlFor="published">Published</label>
            </div>

            <select
              className="miq-select ms-1"
              value={query.get('cat') || 'all'}
              onChange={(e) => {
                const { value } = e.target;
                if (!value || value === 'all') {
                  query.delete('cat');
                } else {
                  query.set('cat', value);
                }
                pushQuery();
              }}
            >
              <option value="all">All categories</option>
              {data?.categories?.items?.map((cat) => (
                <option value={cat.value} key={cat.slug}>
                  {cat.label}
                </option>
              ))}
            </select>
          </form>
        )}
      </AdminView.Section>

      {data?.results && (
        <AdminView.Section className="product-table mb-3">
          <ItemTable
            className="w-100"
            items={data.results}
            headers={['', '', 'Add to carts', 'Price (CFA)', 'Status']}
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

                  <Table.Td className="d-none d-md-table-cell text-sm text-center">{prod.add_to_cart_count}</Table.Td>

                  <Table.Td className="text-center">
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
              onPreviousClick: () => {
                if (!data || !data.previous) return;
                setStatus('pending');
                return productServices
                  .get(data.previous)
                  .then((newData) => {
                    setData(newData);
                    return setStatus('succcess');
                  })
                  .catch((err) => setStatus('failed'));
              },
              onNextClick: () => {
                if (!data || !data.next) return;
                setStatus('pending');
                return productServices
                  .get(data.next)
                  .then((newData) => {
                    setData(newData);
                    return setStatus('succcess');
                  })
                  .catch((err) => setStatus('failed'));
              },
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
        requiredPerms={['shop.add_product']}
      />
      <AdminRoute
        path={`${path}old/:prodSlug/`}
        render={(args) => <StaffProduct_UpdateView back={addForwardSlash(url)} {...args} />}
        requiredPerms={['shop.change_product']}
      />

      <AdminRoute
        requiredPerms={['shop.view_product']}
        render={(args) => <StaffProductListView {...args} back={props.back} />}
      />
    </Switch>
  );
}

const StaffProductListView = (props) => {
  const { path, url } = props.match;
  const [QState, setQState] = useState({ loading: true, data: null, error: null });

  const { search } = props.location;
  const query = new URLSearchParams(search);
  const cat = query.get('cat') || 'all';

  useEffect(() => {
    // let params = new URLSearchParams(search);
    // if (![...params.values()].filter((i) => i).length) {
    //   params = null;
    // }
    console.log('requst list');
    productServices
      .list(cat)
      // .list(params)
      .then((data) => {
        setQState({ loading: false, data, error: null });
      })
      .catch((error) => {
        setQState({ loading: false, data: null, error });
      });
  }, [cat]);

  return (
    <Switch>
      <AdminRoute
        path={`${path}:prodSlug/`}
        render={(args) => <StaffProductUpdateView back={addForwardSlash(url)} {...args} {...{ QState, setQState }} />}
        requiredPerms={['shop.change_product']}
      />
      <AdminRoute
        requiredPerms={['shop.view_product']}
        render={(args) => <StaffProductIndexView {...args} back={props.back} />}
      />
    </Switch>
  );
};
