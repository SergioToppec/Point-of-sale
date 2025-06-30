import { Routes, Route} from 'react-router-dom';
import PrefixScreen from '@/ui/startup/PrefixScreen';
import Login from '@/ui/auth/Login';
import Dashboard from '@/ui/dashboard/Dashboard';

export default function AppRoutes() {
    return(

            <Routes>
                <Route path="/" element={<PrefixScreen />} />  
                <Route path="/Login" element={<Login/>} /> 
                <Route path="/Dashboard" element={<Dashboard/>} /> 
            </Routes>

    )
}