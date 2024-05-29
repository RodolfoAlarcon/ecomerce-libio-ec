import { useState } from "react";
import { useCartStore, useProductStore } from "../../Store";
import { useParams } from "react-router-dom";
import { QuantitySelector } from "../../Components";

export const Product = () => {

    const { id } = useParams();

    const productsList = useProductStore(state => state.products)
    const addProductToCart = useCartStore(state => state.addProductTocart)

    const [qty, setqty] = useState(1)


    const product = productsList.find(product => product.id === id);

    const handleSubmit = () => {
        if (product) {
            const { img, name, price, id } = product
            const data = {
                imgs: img,
                name,
                price,
                id,
                qty
            }
            addProductToCart(data)
        }
    }

    if (!product) {
        return <p>Producto no encontrado</p>;

    }

    return (
        <div className="mx-auto px-3.5 max-w-7xl md:max-w-3xl xl:max-w-6xl w-full">

            <div className="mt-5 mb-20 grid grid-cols-2 md:grid-cols-2 gap-3">

                <div className="col-span-1">
                    {/*<ProductSlideShow />*/}
                    <div className="w-full h-[500px] bg-custom-gray rounded-custom flex justify-center items-center">
                        <img
                            src={product.img}
                            className="object-cover"
                            style={{ height: 450 }}
                            alt={product.name}
                        />
                    </div>
                </div>
                <div className="col-span-1">
                    <h1 className='antialiased font-bold text-2xl mb-2'>
                        {product.name}
                    </h1>
                    {/*<span className="font-bold mr-1 text-gray-400 line-through text-xl">
                        $21.00
                    </span>*/}
                    <span className="text-green-500 font-bold text-xl">
                        ${product.price}
                    </span>
                    <br />

                    {product.descripcion !== null ? (
                        <p className='text-justify mt-5'>
                            {product.descripcion}
                        </p>
                    )
                        :
                        (<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatibus commodi earum, libero, fuga totam numquam expedita, assumenda enim iste dolorem. Magnam doloremque, ex illum aut vel quas! Corrupti, deserunt.</p>)}
                    <div className="flex flex-wrap justify-start items-center mt-5">
                        <QuantitySelector
                            quantity={qty}
                            setquantity={setqty}
                        />
                        <button className="btn-primary ms-3" onClick={handleSubmit}>
                            Agregar a Carrito
                        </button>
                    </div>
                </div>

            </div>

        </div>
    )
}