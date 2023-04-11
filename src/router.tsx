import { useRoutes } from "react-router-dom";
import User from "./pages/User";
import Users from "./pages/Users";

const Router = () => {
    const router = useRoutes([
        {
            element: < Users />, path: "/"
        },
        {
            element: <User />, path: "/:id"
        }
    ])
    return router
}
export default Router