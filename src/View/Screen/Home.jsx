import { useEffect, useState } from "react"
import { SliderHome, ProductGrid } from "../../Components"
import { HttpConsultas } from "../../Api/HttpConsultas"
import { useProductStore } from "../../Store"

export const Home = () => {

    const addProductToProducts = useProductStore(state => state.addProductToProducts)

    const [data, setdata] = useState([])
    const [loading, setloading] = useState(false)

    useEffect(() => {

        setloading(true)

        HttpConsultas.Productos()
            .then((response) => {
                if(response.status === 200){
                    const arrayData = response.data.data
                    const firstFiveProducts = arrayData.slice(0, 8);
                    setdata(firstFiveProducts)
                    addProductToProducts(arrayData)
                }else{
                    setdata([])
                }
            })
            .finally(()=>{
                setloading(false)
            })

        return () => {
            setdata([])
        }
    }, [addProductToProducts])

    

    return(
        <div>
            <SliderHome />
            <div className="mx-auto px-3.5 max-w-7xl md:max-w-3xl xl:max-w-6xl w-full">
                <div className="grid grid-cols-2 gap-8 mt-10 mb-5">
                    <div>
                        <div className="h-72 m-auto p-4 md:p-6 lg:p-10 bg-custom-gray rounded-custom flex items-center justify-between">
                            <div className='max-w-[220px] flex flex-col'>
                                <span className='font-bold text-green-500 text-2xl mb-4'>
                                    Nombre Categoria
                                </span>
                                <button className='btn-primary'>
                                    Entrar
                                </button>
                            </div>
                            <div>
                                <div className='max-w-[175px]'>
                                    <img src="https://minimalin-demo.myshopify.com/cdn/shop/files/watch_600x.png?v=1692459788" alt="" className='object-cover w-auto' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="h-72 m-auto p-4 md:p-6 lg:p-10 bg-custom-gray rounded-custom flex items-center justify-between">
                            <div className='max-w-[220px] flex flex-col'>
                                <span className='font-bold text-green-500 text-2xl mb-4'>
                                    Nombre Categoria
                                </span>
                                <button className='btn-primary'>
                                    Entrar
                                </button>
                            </div>
                            <div>
                                <div className='max-w-[175px]'>
                                    <img src="https://minimalin-demo.myshopify.com/cdn/shop/files/blueshoe_2_600x.png?v=1692626014" alt="" className='object-cover w-auto' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className='text-3xl text-center font-bold mb-10'>Productos Populares</h1>
                <div className="w-full mb-10">
                    <ProductGrid quantityGrid={4} data={data} loading={loading} />
                </div>
            </div>
        </div>
    )
}