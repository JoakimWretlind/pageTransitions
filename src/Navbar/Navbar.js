import { useState } from 'react'
import { Nav, NavUL, NavLI, NavLink } from './navbar.style'
import { navbarData } from './navbarData'

const Navbar = () => {
    const [value, setValue] = useState(0);

    return (
        <Nav>
            <NavUL>
                {navbarData.map((item, index) => {
                    return (
                        <NavLI key={index}>
                            <NavLink
                                to={item.path}
                                onClick={() => setValue(index)}
                                className={`${index === value && 'active'}`}>
                                {item.title}
                            </NavLink>
                        </NavLI>
                    )
                })}
            </NavUL>
        </Nav >
    )
}

export default Navbar
