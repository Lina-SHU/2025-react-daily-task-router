import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();
    const logout = () => {
        navigate('/login');
    }

    return (
        <button type="button" onClick={logout}>Logout</button>
    )
};

export default Logout;