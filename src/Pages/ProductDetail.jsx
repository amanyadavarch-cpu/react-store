import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  Star,
  Heart,
  Truck,
  ShieldCheck,
  ShoppingBag,
} from "lucide-react";


const ProductDetail = () => {

    let {id} =  useParams()
    const [singleProductData, setSingleProductData] = useState();
    console.log(singleProductData)


   useEffect(()=>{
   
   let getSingleProductData = async()=>{
      try {
        let res = await axios.get(`https://fakestoreapi.com/products/${id}`)
        setSingleProductData(res.data)
        } catch (error) {
        console.log("Detail api error", error)
      }
    }
    getSingleProductData();
   },[id])

  return (
   
<section className="bg-[#f5f5f7] px-4 py-6 sm:py-8">
      <div className="mx-auto max-w-xl">

        {/* Breadcrumb */}
        <div className="mb-4 flex flex-wrap items-center gap-2 text-xs text-gray-500">
          <span>Home</span>
          <span>/</span>

          <span className="capitalize">
            {singleProductData?.category}
          </span>

          <span>/</span>

          <span className="text-gray-900">Product Details</span>
        </div>

        {/* Main Product Card */}
        <div className="mx-auto max-w-lg overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="grid min-w-0 lg:grid-cols-[0.9fr_1.1fr]">

            {/* Product Image */}
            <div className="relative flex min-h-48 items-center justify-center bg-linear-to-br from-gray-50 to-[#f1f0ed] p-3 sm:min-h-52">

              <span className="absolute left-4 top-4 rounded-full border border-gray-100 bg-white px-3 py-1.5 text-[10px] font-semibold capitalize text-gray-600 shadow-sm">
                {singleProductData?.category}
              </span>

              <button
                type="button"
                aria-label="Add to wishlist"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition hover:border-red-200 hover:text-red-500"
              >
                <Heart size={16} />
              </button>

              <img
                src={singleProductData?.image}
                alt={singleProductData?.title}
                className="h-32 w-full max-w-40 object-contain transition-transform duration-300 hover:scale-105 sm:h-36"
              />

              <span className="absolute bottom-3 text-[9px] tracking-wider text-gray-400">
                PRODUCT NO. {singleProductData?.id}
              </span>
            </div>

            {/* Product Information */}
            <div className="flex min-w-0 flex-col justify-center p-4 sm:p-5">

              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-indigo-600">
                Product Details
              </p>

              <h1 className="mt-2 wrap-break-word text-base font-bold leading-snug text-gray-900">
                {singleProductData?.title}
              </h1>

              {/* Rating */}
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <div className="flex items-center gap-1 rounded-md bg-amber-50 px-2 py-1">
                  <Star
                    size={13}
                    className="fill-amber-400 text-amber-400"
                  />

                  <span className="text-xs font-semibold text-gray-800">
                    {singleProductData?.rating?.rate ?? "N/A"}
                  </span>
                </div>

                <span className="text-xs text-gray-500">
                  {singleProductData?.rating?.count ?? 0} reviews
                </span>
              </div>

              <div className="my-3 h-px bg-gray-100" />

              {/* Price */}
              <div>
                <p className="text-[10px] font-medium uppercase tracking-wider text-gray-400">
                  Price
                </p>

                <p className="mt-1 text-lg font-bold tracking-tight text-gray-900">
                  ${Number(singleProductData?.price).toFixed(2)}
                  <span className="ml-2 text-xs font-normal text-gray-500">
                    USD
                  </span>
                </p>
              </div>

              {/* Description */}
              <div className="mt-3">
                <h2 className="text-xs font-semibold text-gray-900">
                  About this product
                </h2>

                <p className="mt-1.5 line-clamp-3 text-xs leading-5 text-gray-500">
                  {singleProductData?.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-4 flex gap-2">
                <button
                  type="button"
                  onClick={() =>
                    console.log("Add to cart:", singleProductData.id)
                  }
                  className="flex min-w-0 flex-1 items-center justify-center gap-2 rounded-lg bg-gray-900 px-3 py-3 text-xs font-semibold text-white transition hover:bg-indigo-600 active:scale-[0.98]"
                >
                  <ShoppingBag size={16} />
                  Add to Cart
                </button>

                <button
                  type="button"
                  aria-label="Add to wishlist"
                  className="flex h-10 w-11 shrink-0 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition hover:bg-gray-50 hover:text-red-500"
                >
                  <Heart size={16} />
                </button>
              </div>

              {/* Trust Information */}
              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 border-t border-gray-100 pt-3">
                <div className="flex items-center gap-1.5 text-[10px] text-gray-500">
                  <ShieldCheck size={14} className="text-indigo-600" />
                  Secure checkout
                </div>

                <div className="flex items-center gap-1.5 text-[10px] text-gray-500">
                  <Truck size={14} className="text-indigo-600" />
                  Delivery details
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default ProductDetail
