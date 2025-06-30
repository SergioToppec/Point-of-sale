import { useNavigate } from "react-router-dom";

export default function Login() {

    const navigate = useNavigate();

    return(
        <>
        <button onClick={()=> navigate ('/')}>Rergresar</button>
        <button className="bg-azulOscuro text-white border border-zinc-500" onClick={() => navigate (-1)}>Go to Dashboard</button>
        </>
    )
}