import { Outlet } from "react-router-dom";
import { UserAuth } from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function AdminLayout() {
  const { currentUser } = UserAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!currentUser) {
      navigate("/shreeshaktiTrading/admin/login");
    } else {
      navigate("/shreeshaktiTrading/admin/dashboard");
    }
  }, []);
  return <Outlet />;
}
