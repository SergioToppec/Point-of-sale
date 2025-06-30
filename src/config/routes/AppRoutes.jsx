import { Routes, Route} from 'react-router-dom';
import PrefixScreen from '@/ui/startup/PrefixScreen';
import Login from '@/ui/auth/Login';
import Dashboard from '@/ui/dashboard/Dashboard';

export default function AppRoutes() {
    return(

            <Routes>
                <Route path="/" element={<PrefixScreen />} />  
                <Route path="/login" element={<Login/>} /> 
                <Route path="/dashboard" element={<Dashboard/>} /> 
            </Routes>

    )
}