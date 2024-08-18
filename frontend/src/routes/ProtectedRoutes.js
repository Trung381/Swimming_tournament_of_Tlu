import {Routes} from 'react-router-dom'

function ProtectedRoutes(props) {
    // useState [session, setSession] = new useState({});

    // useEffect(() => {
    //     let session = 
    //     if (!session) {
            
    //     }
    // }, [])

    return(
        <Routes path={props.path} component={props.component}></Routes>
    );
}

export default ProtectedRoutes;