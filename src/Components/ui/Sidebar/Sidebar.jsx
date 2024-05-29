import clsx from "clsx"
import { useCartStore, useUIStore } from "../../../Store"
import { TbSquareRoundedX } from "react-icons/tb"
import { useState } from "react"

export const Sidebar = () => {

  const removeAllProduct = useCartStore( state => state.removeAllProduct )
  const isSideMenuOpen = useUIStore(state => state.isSideMenuOpen)
  const closeMenu = useUIStore(state => state.closeSideMenu)
  const productsInCart = useCartStore(state => state.cart)

  const total = productsInCart.reduce((acc, product) => acc + (product.price * product.qty), 0)

  const [showModal, setShowModal] = useState(false);
  const [dataFinal, setdataFinal] = useState({});


  return (
    <div>

      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-filter backdrop-blur-sm"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 shadow-lg relative flex flex-col w-full  bg-custom-gray outline-none focus:outline-none rounded-custom">
                {/*header*/}
                {/*body*/}
                <div className="relative px-6 flex-auto">
                  <div className="grid gap-3 sm:grid-cols-2 pt-5">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Nombre"
                        className='input-style w-full mb-0'                      
                        />
                    </div>
                    <div>
                      <input
                        type="number"
                        required
                        placeholder="Teléfono"
                        className='input-style w-full mb-0'
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        required
                        placeholder="Correo Electrónico"
                        className='input-style w-full mb-0'
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="provincia"
                        className='input-style w-full mb-0'
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="ciudad"
                        className='input-style w-full mb-0'
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="dirección"
                        className='input-style w-full mb-0'
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="referencia"
                        className='input-style w-full mb-0 min-w-[250px]'                      
                        />
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cerrar
                  </button>
                  <button
                    className="bg-green-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    //onClick={() =>  fetchComprar(dataFinal)}
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      {

        isSideMenuOpen && (<div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />)

      }

      {

        isSideMenuOpen && (<div onClick={closeMenu} className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm" />)

      }


      <nav className={
        clsx(
          "fixed p-5 right-0 top-0 w-[400px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
          {
            "translate-x-full": !isSideMenuOpen
          }
        )
      }>

        <div className="absolute top-4 right-4 cursor-pointer" onClick={closeMenu}>
          <TbSquareRoundedX className="w-10 h-10 hover:text-green-500" />
        </div>

        {
          productsInCart.length !== 0 ? (<div className="w-full mt-10 px-5">
            {/* <ProductsSidebar data={productsInCart} />
            <TotalSidebar total={total} setComprar={setComprar} /> */}
          </div>)
            :
            (<div className="w-full mt-10 px-5">
              <span className='text-center block font-bold text-xl'>
                No hay Productos
              </span>
            </div>)
        }

      </nav>

    </div>
  )
}