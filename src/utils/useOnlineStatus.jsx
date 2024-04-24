import { useState, useEffect } from 'react';

function useOnlineStatus() {
    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(() => {
        const handleOnline = () => {
            console.log("User is online");
            setOnlineStatus(true);
        };

        const handleOffline = () => {
            console.log("User is offline");
            setOnlineStatus(false);
        };

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    return onlineStatus;
}

export default useOnlineStatus;
