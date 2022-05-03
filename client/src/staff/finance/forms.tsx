import Form, { useForm } from '@miq/formjs';

export const ExpenseCreateForm = () => {
  const ctx = useForm({});
  return (
    <Form context={ctx}>
      <Form.Field>
        <Form.Text name="title" />
      </Form.Field>
    </Form>
  );
};
