import { Link, useNavigate } from "react-router-dom";

function NotFound(){
    const navigate = useNavigate();

    setTimeout(() => {
        navigate('/');
    }, 4000)

    return (
        <div>
            <h2>404 - Not Found</h2>
            <img src="NoGo.jpg" alt="Not Found" height="300" />
            <p>We don't have a character by that name. Let's get you home!</p>
            <p><Link to="/">Go Home!</Link></p>
        </div>
    );

}

export default NotFound;