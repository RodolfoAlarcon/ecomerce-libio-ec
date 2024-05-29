import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Login = () => {

    const navigate = useNavigate()

    const [errors, setErrors] = useState("")
    const [formData, setFormData] = useState({})


    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrors("");
        console.log(formData)
    }

    return (
        <div className="min-h-[84.2vh] flex justify-center items-center">

            <div className="bg-custom-gray mx-7 w-full max-w-[570px] p-5 rounded-custom">
                <p className='text-4xl font-bold text-green-500 text-center'>
                    Login
                </p>
                <p className='text-lg text-center mt-3'>
                    Please login using account detail bellow.
                </p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        required
                        placeholder="email"
                        className='input-style w-full mt-10'
                        onChange={event =>
                            setFormData(prevFormData => ({ ...prevFormData, email: event.target.value }))
                        }
                    />
                    <input
                        type="password"
                        required
                        placeholder="********"
                        className='input-style w-full'
                        onChange={event =>
                            setFormData(prevFormData => ({ ...prevFormData, password: event.target.value }))
                        }
                    />
                    <button type="submit" className="btn-primary w-full">
                        Entrar
                    </button>
                </form>
                <span className='block text-center mt-2 text-sm text-red-600'>
                    {errors}
                </span>
                <div className="flex justify-center items-center mt-4 hover:text-green-500">
                    <div className="cursor-pointer" onClick={() => navigate('/Register')}>
                      Crear Cuenta
                    </div>
                </div>
            </div>

        </div>
    )
}