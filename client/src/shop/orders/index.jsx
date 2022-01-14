import React, { lazy, useContext, useEffect, useState } from 'react';
import { Switch, Link } from 'react-router-dom';

import { SharedDataCtx } from '@miq/contexts';
import { AdminRoute, AdminView, hasPerms } from '@miq/adminjs';
import { Table, ItemTable, Button } from '@miq/components';
import { supOrderServices } from './utils';
import { addForwardSlash } from '@miq/utils';
import { SHOP_PATHS } from '../constants';

import './orders.scss';

const SupplierOrderStaffUpdateView = lazy(() => import('./UpdateView'));

const SupplierOrderStaffIndexView = (props) => {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const { perms } = useContext(SharedDataCtx);

  useEffect(() => {
    supOrderServices
      .list()
      .then((data) => {
        setLoading(false);
        setData(data);
      })
      .catch((err) => {
        setLoading(true);
        // console.log(err);
      });
  }, []);

  const canAdd = hasPerms(perms.perms, ['shop.add_supplierorder']);

  if (isLoading) return null;

  return (
    <AdminView
      title={`Supplier Orders (${data.count})`}
      back={props.back}
      actions={
        <Button
          onClick={() => {
            supOrderServices
              .post({})
              .then((data) => {
                return props.history.push(`${addForwardSlash(props.match.url)}${data.slug}/`);
              })
              .catch((err) => {
                // console.log(err);
              });
          }}
          disabled={!canAdd}
          className="btn-primary-3"
          title={canAdd ? 'Add a new order' : 'You cannot perform this action'}
        >
          Add order
        </Button>
      }
    >
      {data?.results && (
        <AdminView.Section className="category-table mb-3">
          <ItemTable
            className="w-100"
            items={data.results}
            renderItem={(order) => {
              return (
                <Table.Tr className="border-bottom" key={order.slug}>
                  <Table.Td className="">
                    <Link to={SHOP_PATHS.orderUpdate(order.slug)}>{order.slug}</Link>
                  </Table.Td>
                  <Table.Td className="d-none d-md-table-cell text-sm text-center">2</Table.Td>
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

export default function SupplierOrderStaffRoutes(props) {
  const { path, url } = props.match;

  return (
    <Switch>
      <AdminRoute
        path={`${path}:sOrderSlug/`}
        render={(args) => <SupplierOrderStaffUpdateView {...args} back={addForwardSlash(url)} />}
        requiredPerms={['shop.change_supplierorder']}
      />
      <AdminRoute
        requiredPerms={['shop.view_supplierorder']}
        render={(args) => <SupplierOrderStaffIndexView {...args} back={props.back} />}
      />
    </Switch>
  );
}
