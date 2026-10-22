import { Star, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router";

const ProductsCard = ({ product }) => {

  let navigate = useNavigate();

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Product Image */}
      <div onClick={()=>navigate(`/detail/${product.id}`)} className="relative flex h-56 items-center justify-center bg-gray-50 p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />

        <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-medium capitalize text-gray-600 shadow-sm">
          {product.category}
        </span>
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col p-4">

        <h2 className="line-clamp-2 min-h-12 text-sm font-semibold leading-6 text-gray-800">
          {product.title}
        </h2>

        <p className="mt-2 line-clamp-2 text-xs leading-5 text-gray-500">
          {product.description}
        </p>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-1">
          <Star size={16} className="fill-amber-400 text-amber-400" />
          <span className="text-sm font-medium text-gray-700">
            {product.rating?.rate ?? "N/A"}
          </span>
          <span className="text-xs text-gray-400">
            ({product.rating?.count ?? 0} reviews)
          </span>
        </div>

        {/* Price and Cart Button */}
        <div className="mt-auto flex items-center justify-between gap-2 pt-4">
          <span className="text-xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>

          <button
            type="button"
            onClick={() => console.log("Added to cart:", product.id)}
            className="flex items-center gap-2 rounded-xl bg-gray-900 px-3 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-600"
          >
            <ShoppingCart size={16} />
            Add
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductsCard;
