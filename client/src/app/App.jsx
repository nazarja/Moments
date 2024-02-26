import { useEffect } from 'react';
import { refreshAuth } from '../utils/refreshAuthUtil';
import { interceptors } from '../utils/interceptorsUtil';

const App = ({ children }) => {

    useEffect(() => {
        (async () => {
            await refreshAuth();
            interceptors();
        })()
    }, []);

    return <>{children}</>;
};

export default App;