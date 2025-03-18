import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoCamera } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import Car from "../assets/car.png"
import dayjs from 'dayjs';

const Dashboard = () => {
    const [alerts, setAlerts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAlerts = async () => {
            try {
                const response = await fetch("https://maxima-server-9a86ea84e980.herokuapp.com/api/alerts");
                const data = await response.json();

                if (data.length > 0) {
                    setAlerts(previousAlerts => [...data, ...previousAlerts]);
                }
            } catch (error) {
                console.log("Error Fetching Alerts: ", error);
            }
        }

        const interval = setInterval(fetchAlerts, 5000);
        
        return () => {
            clearInterval(interval);
        }
    }, [])

    return (
        <main className='flex flex-col gap-5 p-5 w-full h-full overflow-auto'>
            {/* TITLE */}
            <h1 className='font-bold text-xl'> My Cars </h1>

            {/* CARDS */}
            <div className='flex md:flex-row flex-col gap-5 w-full'>
                {/* CAR */}
                <div className='bg-white p-5 rounded-lg w-full'>
                    <h2 className='font-medium text-xl'> 2015 Audi S3</h2>
                    <img src={Car}/>
                </div>

                {/* DEVICES */}
                <div className='flex flex-col gap-5 bg-white p-5 rounded-lg w-full lg:max-w-[300px]'>
                    <h2 className='font-medium text-xl'> Devices </h2>
                    
                    <div className="flex flex-col justify-center items-center bg-gray-100 rounded-md h-[100px] hover:cursor-pointer" onClick={() => navigate("/2015-audi-s3/camera1")}>
                        <IoCamera size={32}/>
                        <p> Camera 1</p>
                    </div>
                </div>
            </div>

            {/* ALERTS CARD */}
            <div className='flex flex-col gap-5 bg-white p-5 rounded-lg w-full h-full'>
                <h2 className='font-medium text-xl'> Alerts </h2>
                
                <div className="flex flex-col gap-5">
                    {alerts.length > 0 ? (
                        <>
                            {alerts.map((alert, index) => (
                                <div key={index} className="flex items-center gap-2 bg-red-500 p-5 rounded-md hover:cursor-pointer">
                                    <IoIosNotifications color="#FFFFFF" size={28} className="min-w-fit" />
                                    <p className="text-white">
                                        Camera 1 - Detected {alert.prediction} Activity (Confidence: {alert.confidence}%) on {dayjs(alert.timestamp * 1000).format('dddd, MMMM D')} at {dayjs(alert.timestamp * 1000).format('h:mm A')}
                                    </p>
                                </div>
                            ))}
                        </>
                    ): (
                        <p> No alerts </p>
                    )}
                </div>
            </div>
        </main>
    ) 
}

export default Dashboard
