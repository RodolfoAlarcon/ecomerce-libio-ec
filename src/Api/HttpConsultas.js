import { Config } from "./Config";

const url = Config.api.local

export const HttpConsultas = {

    Buscar: async ( data ) => {
        try{
            const headers = new Headers()
            headers.append('Content-Type', 'application/json');
            let consultaLogin = await fetch(`${url}getProductos`,{mode:'cors', method: 'POST', headers: headers, body:JSON.stringify(data)})
            let resconsultaLogin = await consultaLogin.json()
            return resconsultaLogin
        }catch(err){
            console.log('error', err)
            return {error: 'Error de servidor'}
        }
    },

    Productos: async () => {
        try{
            const headers = new Headers()
            headers.append('Content-Type', 'application/json');
            let consultaProductos = await fetch(`${url}getAllProducts`,{
                mode:'cors', 
                method: 'GET'
            })
            let resconsultaProductos = await consultaProductos.json();
            let consultaFinal = {
                status: consultaProductos.status,
                data: resconsultaProductos
            }
            return consultaFinal;
        }catch(err){
            console.log('error', err)
            return {error: 'Error de servidor'}
        }
    },

    Categorias: async () => {
        try{
            const headers = new Headers()
            headers.append('Content-Type', 'application/json');
            let consultaProductos = await fetch(`${url}getAllCategories`,{
                mode:'cors', 
                method: 'GET'
            })
            let resconsultaProductos = await consultaProductos.json();
            let consultaFinal = {
                status: consultaProductos.status,
                data: resconsultaProductos
            }
            return consultaFinal;
        }catch(err){
            console.log('error', err)
            return {error: 'Error de servidor'}
        }
    },

}