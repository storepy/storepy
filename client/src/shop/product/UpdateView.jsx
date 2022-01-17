import { useContext, useEffect, useState } from 'react';

import { AdminView } from '@miq/adminjs';
import Form, { useForm } from '@miq/form';
import { getClassName } from '@miq/utils';
import { ToastCtx, Button, Img, ImgDeleteIconButton } from '@miq/components';

import { SupplierData } from '../orders/components';

import { productServices } from './utils';
import { ProductImageAltTextInput, ProductImageUploadButton } from './components';
import { AttributeCreateForm, AttributeUpdateForm } from './Attribute';
import { ProductQuickUpdateForm, ProductForm } from './forms';
import { SHOP_MSGS, SHOP_PATHS } from '../constants';

export const productFormDefaultValues = {
  name: '',
  description: '',
  category: '',
  retail_price: 0.0,
  is_pre_sale: false,
  is_pre_sale_text: '',
  sale_price: 0.0,
  is_on_sale: false,
  //
  title: '',
  slug_public: '',
};

export default function ProductUpdateStaffView(props) {
  const { prodSlug } = props.match.params;

  const [product, setProduct] = useState({});
  const [tab, setTab] = useState('info');

  const form = useForm(productFormDefaultValues);
  const { setValues } = form;

  useEffect(() => {
    productServices
      .detail(prodSlug)
      .then((data) => {
        setProduct(data);
        setValues({
          name: data.name || '',
          description: data.description || '',
          category: data.category || '',
          retail_price: data?.retail_price || 0.0,
          // PRESALE
          is_pre_sale: data.is_pre_sale || false,
          is_pre_sale_text: data.is_pre_sale_text || '',
          // SALE
          is_on_sale: data.is_on_sale || false,
          sale_price: data?.sale_price || 0.0,
          // SEO
          title: data.page.title || '',
          slug_public: data?.page?.slug_public || '',
        });
      })
      .catch((err) => {
        if (err.response) {
          // toast.error({ message: "Something went wrong" });
          console.log(err.response);
          if (err.response.status === 404) {
            return;
          }
        }
      });
  }, [prodSlug, setValues]);

  if (!product) return null;

  return (
    <AdminView back={props?.back} className="miq-container-1024 product-update-view">
      <div className="my-2">
        <div className="d-flex justify-content-center mb-3">
          <div className="d-flex align-items-center">
            <Button
              onClick={() => setTab('info')}
              className={getClassName(['me-1', tab === 'info' && 'btn-primary-3'])}
            >
              Info
            </Button>
            <Button
              onClick={() => setTab('inventory')}
              className={getClassName(['me-1', tab === 'inventory' && 'btn-primary-3'])}
            >
              Inventory
            </Button>
            <Button
              onClick={() => setTab('imgs')}
              className={getClassName(['me-1', tab === 'imgs' && 'btn-primary-3'])}
            >
              Images
            </Button>
            <Button onClick={() => setTab('setting')} className={getClassName([tab === 'setting' && 'btn-primary-3'])}>
              Settings
            </Button>
          </div>
        </div>
      </div>
    </AdminView>
  );
}
