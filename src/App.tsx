import '@livekit/react-components/dist/index.css';
import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import { PreJoinPage } from './PreJoinPage';
import { RoomPage } from './RoomPage';

function App() {
    return (
        <div className="w-full h-screen bg-black text-white">
            <div className="container h-full mx-auto">
                <Router>
                    <Routes>
                        <Route path="/room" element={<RoomPage />} />
                        <Route path="/" element={<PreJoinPage />} />
                    </Routes>
                </Router>
            </div>
      </div>
    )
}

export default App
