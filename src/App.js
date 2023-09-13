import './App.css';
import Student from './Student';
import { Routes, Route, Link } from "react-router-dom";
import Teachers from './Teachers';
import NotFound from './NotFound';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

function App() {


  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit"><Link style={{ textDecoration: 'none', color: 'white' }} to="/">Home</Link></Button>

            <Button color="inherit"><Link style={{ textDecoration: 'none', color: 'white' }} to="/student-login">Students Login</Link></Button>
            <Button color="inherit"><Link style={{ textDecoration: 'none', color: 'white' }} to="/teacher-login">Teachers Login</Link></Button>

          </Toolbar>
        </AppBar>
      </Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student-login" element={<Student />} />
        <Route path="/teacher-login" element={<Teachers />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );

  function Home() {
    return (
      <h1 >Welcome to the NAMMA college website</h1>

    )
  }
}

export default App;