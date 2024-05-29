import { useEffect, useState  } from "react"
import { FilterTienda, ProductGrid } from "../../Components"
import { useProductStore } from "../../Store";
import { HttpConsultas } from "../../Api/HttpConsultas";

export const Products = () => {

    const addProductToProducts = useProductStore( state => state.addProductToProducts )

    const [data, setdata] = useState([])
    const [dataFinal, setdataFinal] = useState([])
    const [loading, setloading] = useState(false)
    const [idFilter, setidFilter] = useState(false)

    useEffect(() => {

        setloading(true)
    
        HttpConsultas.Productos()
            .then((response)=> {
                if(response.status === 200){
                    setdata(response.data.data)
                    setdataFinal(response.data.data)
                    addProductToProducts(response.data.data)
                } else {
                    setdata([])
                }
            })
            .finally(()=>{
                setloading(false)
            })
    
        return () => {
          setdata([])
        }
      }, [])

 

    const filter = (id) => {
        setdataFinal(data.filter(product => product.categorys_id === id))
        setidFilter(true)
    }
    const filterNull = () => {
        setdataFinal(data)
        setidFilter(false)
    }

    return (
        <div className="mx-auto px-3.5 max-w-7xl md:max-w-3xl xl:max-w-6xl w-full">
            <div className="flex flex-wrap w-full">
                <div className="w-full md:w-1/4 p-2">
                    <FilterTienda filter={filter} idFilter={idFilter} filterNull={filterNull} />
                </div>
                <div className="w-full md:w-3/4 p-2 mb-10">
                    <ProductGrid quantityGrid={3} data={dataFinal} loading={loading} />
                </div>
            </div>
        </div>
    )
}