import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route
} from "react-router-dom";

import "./style.css";

// Layout
import Layout from "./pages/Layout";

// Pages
import Home from "./pages/Home";
import ContactUs from "./pages/Contactus";
import Program from "./pages/Program";
import AboutUs from "./pages/Aboutus";
import Faqs from "./pages/FAQS";


function App() {

    const router = createBrowserRouter(

        createRoutesFromElements(

            <Route path="/" element={<Layout />}>

                <Route
                    index
                    element={<Home />}
                />

                <Route
                    path="Program"
                    element={<Program />}
                />

                <Route
                    path="ContactUs"
                    element={<ContactUs />}
                />

                <Route
                    path="AboutUs"
                    element={<AboutUs />}
                />

                <Route
                    path="Faqs"
                    element={<Faqs />}
                />

            </Route>
        )
    );


    return (
        <RouterProvider router={router} />
    );
}


export default App;