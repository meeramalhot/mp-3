import {Route, RouterProvider, Routes, createBrowserRouter} from "react-router";
import "./styles.css";
import HomePage from "./components/HomePage";
import WorkPage from "./components/WorkPage";
import EducationPage from "./components/EducationPage";
import Projects from "./components/Projects";
import Personal from "./components/Personal";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import {styled} from "styled-components";

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;

    @media screen and (max-width: 750px) {
        flex-direction: column;
        margin: auto;
    }
`;

function Root() {
    return (
        <div>
            <Header/>
            <StyledWrapper>
                <Nav/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/work" element={<WorkPage/>}/>
                    <Route path="/education" element={<EducationPage/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/personal" element={<Personal/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </StyledWrapper>
            <Footer/>

        </div>


);
}

const router = createBrowserRouter([{path: "*", Component: Root}])

function App() {
    return (<RouterProvider router={router}/>);
}

export default App;
