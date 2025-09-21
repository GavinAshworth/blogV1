import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import WeekPage from './pages/content.js';

function App() {
    return (
        <Router basename="/blogV1">
            <Routes>
                <Route path="/" element={<WeekPage />} />           {/* current week */}
                <Route path="/week/:weekNumber" element={<WeekPage />} />  {/* past weeks */}
            </Routes>
        </Router>
    );
}

export default App;
