import React from "react"
import { Link } from "react-scroll";
const data = [
    {
        id: 1,
        text: "home",
        url: "header",
    },
    {
        id: 2,
        text: "about",
        url: "about-section",
        offset: -250
    },
    {
        id: 3,
        text: "services",
        url: "services-section",
        offset: -250
    },
    {
        id: 4,
        text: "contact",
        url: "contact-section",
        offset: -240
    },
]


export default ({ styleClass, hideSidebar }) => {
    return (
        <ul className={`page-links ${styleClass ? styleClass : ""}`}>
            {data.map(link => {
                return (
                    <li key={link.id}>
                        <Link
                            onClick={hideSidebar}
                            to={link.url}
                            offset={link.offset ? link.offset : 0}
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            duration={500}>
                            {link.text}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}