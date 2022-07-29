import {FaLinkedin, FaGithub, FaInstagram} from "react-icons/fa";

import "../styles/components/socialnetwork.scss";

function SocialNetwok() {
    const SocialNetwoks = [
        {name: "LinkedIn", icon: <FaLinkedin />, url: "https://www.linkedin.com/"},
        {name: "Github", icon: <FaGithub />, url: "https://www.github.com"},
        {name: "Instagram", icon: <FaInstagram />, url: "https://www.instagram.com/"},
    ];
    return (
        <section id="social-networks">
            {SocialNetwoks.map((socialNetwork) => (
                <a className="social-btn" href={socialNetwork.url} key={socialNetwork.name} id={socialNetwork.name}>
                    {socialNetwork.icon}
                </a>
            ))}
        </section>
    );
}

export default SocialNetwok;
