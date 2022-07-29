import "./styles/components/app.scss";

import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

function App() {
    return (
        <div id="portifolio">
            <h1>Raphael Soares</h1>
            <Sidebar />
            <MainContent />
        </div>
    );
}

export default App;
