import '@livekit/react-components/dist/index.css';
import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import { PreJoinPage } from './pages/PreJoinPage';
import { RoomPage } from './pages/RoomPage';

function App() {
    return (
        <div className="w-full h-screen bg-black text-white">
            <div className="container h-full mx-auto">
                <Router>
                    <Routes>
                        <Route path="/" element={<PreJoinPage />} />
                        <Route path="/room" element={<RoomPage />} />
                    </Routes>
                </Router>
            </div>
      </div>
    )
}

export default App
