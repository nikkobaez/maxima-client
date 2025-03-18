import Sidebar from "../components/Sidebar"
import Dashboard from "../components/Dashboard"

const HomePage = () => {
    return (
        <main className='flex bg-gray-100 w-screen h-screen'>            
            <Sidebar />
            <Dashboard />
        </main>
    ) 
}

export default HomePage