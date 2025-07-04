import { useNavigate } from "react-router-dom";

export default function Login() {

    const navigate = useNavigate();

    return(
        <>
        <button >Hola</button>
        <button className="bg-azulOscuro text-white border border-zinc-500" onClick={() => navigate ("/prefixscreen")}>Prefijo</button>
        </>
    )
}