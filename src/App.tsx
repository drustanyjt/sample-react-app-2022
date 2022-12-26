import Home from './pages/Home';
import BasicThreadView from './pages/BasicThreadView';
import StyledThreadView from './pages/StyledThreadView';
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core';
import { blue, orange } from '@material-ui/core/colors';
import Thread2View from './pages/Thread2View';

const theme = createTheme({
    palette: {
        primary: blue,
        secondary: orange,
    },
});

const App: React.FC = () => {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/thread/1" element={<BasicThreadView />} />
                        <Route path="/thread/1/styled" element={<StyledThreadView />} />
                        <Route path="/" element={<Home />} />
                        <Route path="/thread/2" element={<Thread2View />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
};

export default App;
