import { TbSquareRoundedX } from "react-icons/tb"
import { useUIStore } from "../../../Store"
import { useNavigate } from "react-router-dom"
import clsx from "clsx";


export const LateralMenu = () => {

    const navigate = useNavigate();

    const isSideMenuOpen = useUIStore(state => state.isSideMenuLateralOpen)
    const closeMenu = useUIStore(state => state.closeSideLateralMenu)

    const handleClose = (item) => {
        if(item === "Login"){
            navigate('/Login')
        }else{
            navigate('/Register')
        }
        return closeMenu();
    }

    return (
        <div>

            {

                isSideMenuOpen && (<div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />)

            }

            {

                isSideMenuOpen && (<div onClick={closeMenu} className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm" />)

            }


            <nav className={
                clsx(
                    "fixed p-5 right-0 top-0 w-[300px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
                    {
                        "translate-x-full": !isSideMenuOpen
                    }
                )
            }>

                <div className="absolute top-4 right-3 cursor-pointer" onClick={closeMenu}>
                    <TbSquareRoundedX className="w-10 h-10 hover:text-green-500" />
                </div>

                <div className="w-full mt-14 px-5 text-center flex flex-col">
                    <div className="font-bold hover:text-green-500 mb-2 cursor-pointer" onClick={() => handleClose("Login")} >
                        Inciar Sesión
                    </div>
                    <div className="font-bold hover:text-green-500 mb-2 cursor-pointer" onClick={() => handleClose("Register")} >
                        Register
                    </div>
                </div>

            </nav>

        </div>
    )
}