import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import GameDetailsPage from "./pages/GameDetailsPage";

const router = createBrowserRouter([
    { path:'/',
    element:<Layout/>,
    children:[
        { path : '' , element : <HomePage/> },
        { path : '/games/:slug' , element : <GameDetailsPage/> }
    ]
}
])
export default router;
