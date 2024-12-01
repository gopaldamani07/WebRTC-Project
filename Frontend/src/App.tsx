import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Sender } from './components/Sender';
import { Receiver } from './components/Receiver';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the sender component */}
        <Route path="/sender" element={<Sender />} />
        {/* Route for the receiver component */}
        <Route path="/receiver" element={<Receiver />} />
        {/* Fallback for undefined routes */}
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
