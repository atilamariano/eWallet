import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/authProvider/useAuth"

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();

  if (!auth.email) {
    return <Navigate to="/login" />;
  };

  return children;
};