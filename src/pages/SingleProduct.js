import { useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {

    const [product, setProduct] = useState({});
    const params = useParams();
    console.log(params);

    return (
        <div className="container mx-auto mt-12">
           <button className="mb-12 font-bold">Back</button>
           <div className="flex">
               <img className="w : 5 " src="/images/peproni.png" alt="" />
               <div className="ml-16">
                   <h1 className="text-xl font-bold">Havana Special</h1>
                   <div className="text-md">small</div>
                   <div className="font-bold mt-2">₹ 400</div>
                   <div className="bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4">Add to your cart</div>
               </div>
           </div>
        </div>
    )
}

export default SingleProduct
