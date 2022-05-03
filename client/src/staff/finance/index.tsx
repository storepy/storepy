import { Button, Table } from '@miq/componentjs';
import Staff from '@miq/staffjs';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

export default function FinanceRoutes() {
  return (
    <Staff.View title="Accounting">
      <Routes>
        <Route index element={<FinanceIndexView />} />
      </Routes>
    </Staff.View>
  );
}

type TExpense = {
  slug?: string;
};

const FinanceIndexView = () => {
  const [items, setItems] = React.useState<TExpense[]>([]);

  return (
    <Staff.View
      title="Expenses"
      actions={
        <div>
          <Button className="btn-primary">Add expense</Button>
        </div>
      }
    >
      <Table
        items={items}
        renderItem={(item) => {
          return <Table.Td key={item?.slug}></Table.Td>;
        }}
      />
    </Staff.View>
  );
};
