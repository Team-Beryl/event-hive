import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rootlayout from "./layouts/rootlayout";
import Landing from "./pages/landing";
import EventPage from "./pages/eventpage";
import CollegePage from "./pages/collegepage";
import CreateEvent from "./pages/createevent";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
import NotFound from "./pages/notfound";


function App() {

    const router = createBrowserRouter([

        {
            path: "/",
            element: <Rootlayout />,
            children: [

                {
                    index: true,
                    element: <Landing />
                },

                {
                    path: "event",
                    element: <EventPage />
                },

                {
                    path: "college",
                    element: <CollegePage />
                },

                {
                    path: "create",
                    element: <CreateEvent />
                },

                {
                    path: "sign",
                    element: <SignUp />
                },

                {
                    path: "sig",
                    element: <SignIn />
                },

                {
                    path: "404",
                    element: <NotFound />
                }


            ]
        }


    ])
    return <RouterProvider router={router} />

}


export default App