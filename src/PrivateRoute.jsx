import { Navigate, Outlet } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const PrivateRoute = ({ component: component, ...rest }) => {
  const { toast } = useToast();
  const profileDetails = JSON.parse(sessionStorage.getItem("profile"));
  const token = profileDetails?.token;
  if (!token) {
    toast({
      title: "Login Required",
      description: "Please login to access this page",
    });
  }
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
