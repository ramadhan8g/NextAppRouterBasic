/* eslint-disable @next/next/no-img-element */


import Link from "next/link";
import { getData } from "../../services/products";

type ProductPageProps = { params: { slug: string[] } };

export default async function ProductPage(props: ProductPageProps) {
  const { params } = props;
  const products = await getData("http://localhost:3000/api/product");
  console.log(products);
  return (
    <div className="grid grid-cols-3 gap-4 mt-5 place-items-center">
      {/* <h1>{params.slug ? "Detail Product Page" : " Product Page"}</h1> */}
      {products.data.length > 0 &&
        products.data.map((product: any) => {
          return (
            <Link
              href={`/product/detail/${product.id}`}
              key={product.id}
              className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <img
                className="rounded-t-lg object-cover w-full h-96"
                src={product.image}
                alt=""
              />

              <div className="px-5 pb-5">
                <h5 className="mb-2 text-center mt-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {product.name}
                </h5>
                <div className="flex items-center justify-between">
                  <span className=" text-white text-2xl inline-flex items-center px-3 py-2 font-medium text-center text-whitefocus:ring-4 focus:outline-none focus:ring-blue-300">
                   $ {product.price}
                  </span>
                  <div className="flex items-center justify-between mt-3">
                    <button
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:right-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
        {
          params.slug && (
            <> 
            <p>  Category : {params.slug}[0]</p>
            <p>  Gender : {params.slug}[1]</p>
            <p>  Id : {params.slug}[2]</p>
            
            </>
          
          )
        }
    </div>
  );
}
