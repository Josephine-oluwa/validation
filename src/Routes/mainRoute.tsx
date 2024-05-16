import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/static/Layout";
import Error from "../Error/Error";
import Page from "../pages/Page";
import ProjectPage from "../pages/Projects/ProjectPage";
import Gallery from "../pages/Projects/Gallery";
import Contact from "../pages/Contact";



export const mainRoute = createBrowserRouter ([
    {
        path: "/",
        element: <Layout/>,
        children: [
           {
            index :true,
            element: <Page/>
           },
           {
            index: true, 
            path: "/projectPage",
            element: <ProjectPage/>
          },
           {
            index: true, 
            path: "/gallery",
            element: <Gallery/>
          },
           {
            index: true, 
            path: "/contact",
            element: <Contact/>
          },

        ]
        
    },

    {
        path: "*",
        element: <Error/>
    },

])