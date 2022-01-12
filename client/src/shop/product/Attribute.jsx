import { IBtnSave, ConfirmIconButton, Icons, Button } from '@miq/components'

import Form, { useForm } from '@miq/form'
import { productServices } from './utils'

const AttrNameInput = (props) => (
  <Form.TextInput placeholder="Nom de l'attribut" {...props} required name="name" maxLength={30} minLength={3} />
)

const AttrValueInput = (props) => (
  <Form.TextInput placeholder="Valeur de l'attribut" {...props} required name="value" maxLength={99} minLength={3} />
)

export const AttributeUpdateForm = ({ instance, product, ...props }) => {
  const form = useForm({ name: instance?.name || '', value: instance?.value || '' })

  if (!instance || !instance.slug || !product || !product.slug) return null

  const handleSubmit = (e) => {
    e.preventDefault()

    return productServices
      .patchAttribute(product.slug, instance.slug, form.values)
      .then((data) => {
        return props?.onSuccess(data)
      })
      .catch((err) => {
        return form.handleError(err)
      })
  }

  return (
    <Form context={form} onSubmit={handleSubmit}>
      <div className="d-flex flex-column flex-md-row" style={{ alignItems: 'end' }}>
        <div className="me-md-1">
          <AttrNameInput error={form.errors.name} />
        </div>

        <div className="w-100 me-md-1">
          <AttrValueInput error={form.errors.value} />
        </div>

        <div className="d-flex ms-md-1">
          <ConfirmIconButton
            Icon={Icons.Trash}
            render={(args) => (
              <div className="p-3 w-100 d-flex justify-content-center">
                <div className="w-md-50 d-flex align-items-center justify-content-between">
                  <div>
                    <Button
                      onClick={() =>
                        productServices
                          .deleteAttribute(product.slug, instance.slug)
                          .then((data) => {
                            args?.setOpen(false)
                            return props?.onSuccess(data)
                          })
                          .catch(() => {
                            props?.toast?.error({ message: 'Could not delete attribute.' })
                          })
                      }
                      className="btn-danger"
                    >
                      Supprimer
                    </Button>
                  </div>
                  <div>
                    <Button onClick={() => args?.setOpen(false)}>Annuler</Button>
                  </div>
                </div>
              </div>
            )}
            renderHeader={(args) => {
              return (
                <div className="p-3">
                  <div className="fw-bold">Supprimer l'attribut "{instance.name}"</div>
                </div>
              )
            }}
            className="btn-danger-3 me-1"
          />
          <Form.Submit value="Save" className="btn btn-primary-2" />
        </div>
      </div>
    </Form>
  )
}

export function AttributeCreateForm({ product, ...props }) {
  const initValues = { name: '', value: '' }
  const form = useForm(initValues)

  if (!product || !product.slug) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    // if (form.hasErrors()) return;

    return productServices
      .postAttribute(product.slug, form.values)
      .then((data) => {
        form.setValues(initValues)
        return props?.onSuccess(data)
      })
      .catch((err) => {
        return form.handleError(err)
      })
  }

  // const invalidAttrNames = product?.attributes?.map((at) => at.name) || [];

  return (
    <Form context={form} onSubmit={handleSubmit}>
      <div className="d-flex flex-column flex-md-row" style={{ alignItems: 'end' }}>
        <div className="me-md-1">
          <Form.Label value="Name" />
          <AttrNameInput error={form.errors.name} />
        </div>

        <div className="w-100 me-md-1">
          <Form.Label value="Value" />
          <AttrValueInput error={form.errors.value} />
        </div>

        <div className="ms-md-1">
          <IBtnSave type="submit" className="btn-primary-3" />
        </div>
      </div>
    </Form>
  )
}
