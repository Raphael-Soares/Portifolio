import SocialNetwok from "./SocialNetwok";
import Avatar from "../img/ProfileImg.png";

import "../styles/components/sidebar.scss";
import InformationContainer from "./InformationContainer";

function Sidebar() {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Avatar" />
            <p className="title">Desenvolvedor Web</p>
            <SocialNetwok />
            <InformationContainer />
            <a href="" className="btn">
                Download curriculo
            </a>
        </aside>
    );
}

export default Sidebar;
