import { useEffect, useState } from "react"
import { HttpConsultas } from "../../Api/HttpConsultas"

export const FilterTienda = ({ filter, idFilter, filterNull }) => {

  const [categorias, setcategorias] = useState([])

  useEffect(()=> {

    HttpConsultas.Categorias()
      .then((response)=> {
        if(response.status === 200){
          setcategorias(response.data.categorys)
        }else{
          setcategorias([])
        }
      })

  },[])

  return (
    <div className="w-full">
      {
        !idFilter ?
        (<></>)
        :
        (<p onClick={filterNull} className='text-bold text-green-500 cursor-pointer'>
          Eliminar Filtro
        </p>)
      }
      <h4 className='font-bold text-xl mb-2'>
        Categorias
      </h4>
      {categorias.length > 0 ? (
        categorias.map((e)=>
          <p onClick={() => filter(e.id) } key={e.id} className='mb-1 cursor-pointer font-semibold hover:text-green-500'>{e.name}</p>
        )
      ) : (
        <p>No hay categorías disponibles.</p>
      )}
    </div>
  )

}