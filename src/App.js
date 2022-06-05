import { Container } from "@mui/material";
import { Outlet } from "react-router";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Container
        sx={{
          my: 5,
          "& img": {
            width: "100%",
          },
        }}>
        <Outlet />
      </Container>
    </div>
  );
}

export default App;
