import { Link } from "react-router-dom";

const Product = (props) => {
    // console.log(props);

    const {data} = props;
    return (
       <Link to={`/products/${data.name}`}>
             <div>
                <div>
                    <img className="w : 100%" src={data.image} alt="pizza" />
                    <div className="text-center">
                        <h2 className="text-lg font-bold py-2">{data.name}</h2>
                        <span className="bg-gray-200 py-1 rounded-full text-sm px-4">{data.size}</span>
                    </div>

                    <div className="flex justify-between items-center mt-4">
                            <span>₹ {data.price}</span>
                            <button className="bg-yellow-500 py-1 px-4 rounded-full font-bold">ADD</button>
                    </div>
                </div>
        </div>
       </Link>
    )
}

export default Product;
