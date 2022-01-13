export const SupplierData = ({ product, ...props }) => {
  if (!product) return null;

  return (
    <div className="product-supplier-data">
      <ul>
        <li>
          <span className="">Supplier</span>
          <span className="">{product.supplier_name}</span>
        </li>
        <li>
          <span className="">Item id</span>
          <span className="">{product.supplier_item_id}</span>
        </li>
        <li>
          <span className="">Category</span>
          <span className="">{product.supplier_item_category}</span>
        </li>

        <li>
          <span className="">Item cost</span>
          <span className="">
            {product.supplier_item_cost} ({product.supplier_item_cost_currency})
          </span>
        </li>
        <li>
          <a href={product.supplier_item_url} className="text-underline" target="_blank" rel="noopener noreferrer">
            View supplier page
          </a>
        </li>
      </ul>
    </div>
  );
};
