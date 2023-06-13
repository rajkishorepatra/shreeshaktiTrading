import { Outlet } from "react-router-dom";
import { UserAuth } from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function AdminLayout() {
  const { currentUser } = UserAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!currentUser) {
      navigate("/admin/login");
    } else {
      navigate("/admin/dashboard");
    }
  }, []);
  return <Outlet />;
}
