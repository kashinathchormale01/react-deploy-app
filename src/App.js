// import logo from './logo.svg';
import { Box } from '@mui/material';
import './App.css';
import { Routes, Route, useNavigate } from "react-router-dom";
import About from "../src/component/About";
import Contact from "../src/component/Contact";
import AppBreadcrumbs from "../src/component/Breadcrumbs";
import { Button } from '@mui/material';

function App() {
  let navigate = useNavigate();
  return (
    <>
      <Box
        component="section"
        sx={{
          p: 6,
          border: "1px dashed grey",
          backgroundColor: "#eee",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "450px",
          width: "90%",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <AppBreadcrumbs />
        <Routes>
          <Route exact from="/" render={(props) => <About {...props} />} />
          {/* <Route exact path="/about" render={(props) => <About {...props} />}>
            <Route
              exact
              path="/contact"
              render={(props) => <Contact {...props} />}
            />
          </Route> */}
          <Route path="about" element={(props) => <About {...props} />}>
            <Route path="contact" element={(props) => <Contact {...props} />} />
            {/* <Route path="new" element={<NewProduct />} /> */}
          </Route>
        </Routes>
        <>
          <Button onClick={() => navigate("/about")}>ABOUT</Button>
          <Button onClick={() => navigate("/jobs")}>JOBS</Button>
          <Button onClick={() => navigate("/contact")}>Contact</Button>
        </>
      </Box>
    </>
  );
}

export default App;
