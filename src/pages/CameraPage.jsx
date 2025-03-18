import React, { useState } from 'react';

const CameraPage = () => {
    const [isError, setIsError] = useState(false);

    return (
        <div className="flex justify-center items-center bg-gray-100 min-h-screen">
            <div className="bg-white p-4 rounded-lg">
                <h2 className="mb-4 font-semibold text-xl text-center">2015 Audi S3 - Camera 1 </h2>
                
                {isError ? (
                    <div className='text-center'>
                        <p> Failed to load video feed </p>
                    </div>
                ) : (
                    <img
                        src="http://73.206.16.221:5000/video_feed"
                        alt="Raspberry Pi Camera Feed"
                        className="shadow-md border rounded-lg"
                        onError={() => setIsError(true)}
                    />
                )}
            </div>
        </div>
    )
}

export default CameraPage