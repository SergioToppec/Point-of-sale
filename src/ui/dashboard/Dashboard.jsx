import { useNavigate } from 'react-router-dom';

export default function Dashboard() {

    const navigate = useNavigate();

    return(
        <><h1 className="text-xl font bold">Dashboard</h1>
        
        <button className="bg-azulOscuro" onClick={() => navigate ('/login')}> regresar</button></>
    )
}