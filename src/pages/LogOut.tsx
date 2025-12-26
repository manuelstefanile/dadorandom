import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // cancella la sessione
        localStorage.removeItem("session");

        // redirect al login
        navigate("/login", { replace: true });
    }, [navigate]);

    return null; // oppure uno spinner se vuoi
};

export default Logout;
