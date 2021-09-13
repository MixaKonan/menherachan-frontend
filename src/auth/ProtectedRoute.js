import {Redirect, Route} from "react-router-dom";
import {useContext} from "react";
import {AdminContext} from "../common/contexts/AdminContext";

function ProtectedRoute({ component: Component, ...restOfProps }) {
    const {authenticated} = useContext(AdminContext)

    return (
        <Route
            {...restOfProps}
            render={(props) =>
                authenticated ? <Component {...props} /> : <Redirect to="/login" />
            }
        />
    );
}

export default ProtectedRoute;