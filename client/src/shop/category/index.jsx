import React, { lazy, useContext, useEffect, useState } from 'react'
import { Switch, Link } from 'react-router-dom'

import Form, { useForm } from '@miq/form'
import { SharedDataCtx } from '@miq/contexts'
import { AdminRoute, AdminView, hasPerms, PublishedStatusSpan } from '@miq/adminjs'
import { Table, ItemTable, Button, ImgSquare } from '@miq/components'
import { catServices } from './utils'
import { addForwardSlash } from '@miq/utils'
import { CatNameInput } from './components'

// import "./category.scss";

const StaffCategoryUpdateView = lazy(() => import('./UpdateView'))

const CategoryCreateForm = (props) => {
  const form = useForm({ name: '' })

  const handleSubmit = (e) => {
    if (!props.canAdd) return

    e.preventDefault()

    return catServices
      .post(form.values)
      .then((data = { slug }) => {
        return props.history.push(`${addForwardSlash(props.match?.url)}${data.slug}/`)
      })
      .catch((err) => {
        form.handleError(err)
      })
  }
  return (
    <Form context={form} onSubmit={handleSubmit}>
      <div className="">
        <Form.Label value="Nom de la catégorie" />
        <CatNameInput error={form.errors.name} />
      </div>

      <div className="my-3">
        <Form.Submit value={'Save category'} disabled={!props?.canAdd} className="btn btn-primary" />
      </div>
    </Form>
  )
}

const StaffCategoryIndexView = (props) => {
  const [data, setData] = useState({})
  const [isAdding, setAdding] = useState(false)
  const { perms } = useContext(SharedDataCtx)

  useEffect(() => {
    catServices.list().then((data) => {
      setData(data)
    })
  }, [])

  const canAdd = hasPerms(perms.perms, ['shop.add_category'])

  return (
    <AdminView
      title={`Categories (${data.count})`}
      back={props.back}
      actions={
        <Button
          onClick={() => setAdding(!isAdding)}
          disabled={!canAdd}
          className="btn-primary-3"
          title={canAdd ? 'Add a new category' : 'You cannot perform this action'}
        >
          Add category
        </Button>
      }
    >
      {isAdding && (
        <AdminView.Section title="Add a category">
          <CategoryCreateForm history={props.history} match={props.match} canAdd={canAdd} />
        </AdminView.Section>
      )}

      {data?.results && (
        <AdminView.Section className="category-table mb-3">
          <ItemTable
            className="w-100"
            items={data.results}
            // renderItem={(item) => <CategoryRow {...props} category={item} key={item.slug} />}
            renderItem={(cat) => {
              return (
                <Table.Tr className="border-bottom" key={cat.slug}>
                  <Table.Td className="">
                    <ImgSquare {...cat.cover_data} className="rounded" />
                  </Table.Td>

                  <Table.Td className="w-100">
                    <Link to={`${addForwardSlash(props.match.url)}${cat.slug}/`}>
                      <div className="fw-bold" title={cat.title}>
                        {cat.name}
                      </div>
                    </Link>
                    <div className="text-muted text-sm">
                      <span className="me-1">Products: {cat?.products_count?.total ?? 0}</span>
                      <span>Published: {cat?.products_count?.published ?? 0}</span>
                    </div>
                  </Table.Td>

                  <Table.Td className="d-none d-md-table-cell text-sm text-center">
                    <PublishedStatusSpan is_published={cat?.page?.is_published} pill />
                  </Table.Td>
                </Table.Tr>
              )
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
  )
}

export default function StaffCategoryRoutes(props) {
  const { path, url } = props.match

  return (
    <Switch>
      <AdminRoute
        path={`${path}:catSlug/`}
        render={(args) => <StaffCategoryUpdateView {...args} back={addForwardSlash(url)} />}
        requiredPerms={['shop.change_category']}
      />
      <AdminRoute
        requiredPerms={['shop.view_category']}
        render={(args) => <StaffCategoryIndexView {...args} back={props.back} />}
      />
    </Switch>
  )
}
