import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    // const location = useLocation();

    if (loading) {
        return <progress className="progress w-56"></progress>
    }

    if (user) {
        return children;
    }
    return (
        <div>

        </div>
    );
};

export default PrivateRoute;