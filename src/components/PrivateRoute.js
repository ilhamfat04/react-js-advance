// import necessary utility from rrd
import { Redirect, Route } from 'react-router-dom'

// create component here
function PrivateRoute({ component: Component, ...rest }) {
    // assume that user is not login
    const isLogin = false

    return (
        <>
            <Route
                {...rest}
                render={(props) =>
                    isLogin ? <Component {...props} /> : <Redirect to="/signin" />
                }
            />
        </>
    )
}

export default PrivateRoute


