import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from "react-icons/ai";
import "../styles/components/informationcontainer.scss";
function InformationContainer() {
    const Information = [
        {name: "Telefone", icon: <AiFillPhone />, info: "+55 (11) 9 9999-9999"},
        {name: "Email", icon: <AiOutlineMail />, info: "raphael@gmail.com"},
        {name: "Endereço", icon: <AiFillEnvironment />, info: "Rua dos Bobos, 0"},
    ];
    return (
        <section id="information">
            <div className="info-card">
                <AiFillPhone id="phone-icon" />
                <div>
                    <h3>Telefone</h3>
                    <p>(47)99999-9999</p>
                </div>
            </div>
            <div className="info-card">
                <AiOutlineMail id="email-icon" />
                <div>
                    <h3>E-mail</h3>
                    <p>raphael@gmail.com</p>
                </div>
            </div>
            <div className="info-card">
                <AiFillEnvironment id="pin-icon" />
                <div>
                    <h3>Localização</h3>
                    <p>Joinville / SC</p>
                </div>
            </div>
        </section>
    );
}

export default InformationContainer;
