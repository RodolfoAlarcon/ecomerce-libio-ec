import { useState } from "react"
import { TbShoppingCart } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { useCartStore, useUIStore } from "../../Store";


export const ProductGridItem = ({ imgs, name, price, id, precioOferta }) => {

    const navigate = useNavigate();

    const addProductToCart = useCartStore( state => state.addProductTocart )
    const openMenu = useUIStore(state => state.openSideMenu)

    const [iconCar, setIconCar] = useState(false)

    const handleSubmit = () => {
        const data = {
            imgs,
            name,
            price,
            id,
            qty: 1
        } 
        addProductToCart(data)
        openMenu()
    }

    return (
        <div className="overflow-hidden fade-in"
        onMouseEnter={() => setIconCar(true)}
        onMouseLeave={() => setIconCar(false)}
        >
            <div
                className="rounded-custom bg-custom-gray w-full h-[270px] overflow-hidden flex items-center justify-center relative"
            >
                <div
                    onClick={() => navigate(`/product/${id}`)}
                >
                    <img
                        src={imgs}
                        alt="img"
                        className="w-full object-cover cursor-pointer"
                        width={270}
                        height={270}
                    />
                </div>
                {
                    iconCar ? (
                        <button className="btn-primary flex absolute bottom-2 z-10" onClick={handleSubmit}>
                            <TbShoppingCart className="w-5 h-5 text-white me-2" /> Añadir
                        </button>
                    )
                        :
                        <></>
                }
            </div>
            <div className="p-3.5 flex flex-col">
                <div
                    onClick={() => navigate(`/product/${id}`)}
                    className="text-center font-bold hover:text-green-500 cusror-pointer"
                >
                    {name}
                </div>
                <div className="text-center">
                    {
                        precioOferta != null ?
                            (<span className="font-bold mr-1 text-gray-400 line-through cursor-pointer">
                                ${price}
                            </span>)
                            :
                            (<span className="text-green-500 font-bold cursor-pointer">
                                ${price}
                            </span>)
                    }
                    {
                        precioOferta == null ?
                            (<></>)
                            :
                            (<span className="text-green-500 font-bold cursor-pointer">
                                ${precioOferta}
                            </span>)
                    }
                </div>
            </div>
        </div>
    )
}