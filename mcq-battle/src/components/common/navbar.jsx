import { Menu } from "antd";
import React, { useContext, useEffect, useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import { Urls } from "../../constant/Urls";
import AuthContext from "../../contexts/auth.context";
import AuthCookies from "../../services/cookie/authToken.cookie";

const Navbar = () => {
    const { isLoggedInUser, setIsLoggedInUser} = useContext(AuthContext);
    const navigate = useNavigate(); //hook for navigation
    const [currentSelectedNavItem, setCurrentSelectedNavItem] = useState(null);
    const location = useLocation(); //hook for current location

    useEffect(() => {
        setNavItems(
            Initial_Nav_Items.filter((item) => {
                if(isLoggedInUser) {
                    return item.showAfterLogin; //show items for logged in users
                }
                return !item.isProtected; //show items for non-logged in users
            })
        );

        if(isLoggedInUser) {
            //Adding Logout item for logged-in users
            setNavItems((prev) => [
                ...prev,
                {
                    label: (
                        <div
                        onClick={() => {
                            AuthCookies.ClearAll();
                            setIsLoggedInUser(null);
                            navigate(Urls.Login());
                        }}>
                            Logout
                        </div>
                    ), 
                    style: {marginLeft: "auto"},
                    key: "/logout",
                    isProtected: true,
                    showAfterLogin: true,
                },
            ]);
        }
    }, [isLoggedInUser]); //Re-run effect when auth state changes

    useEffect(() => {
        const path = location.pathname;
        const navItem = Initial_Nav_Items.find((item) => path === item.key);
        if (navItem) {
            setCurrentSelectedNavItem([navItem.key]);
        }
    }, [location.pathname, isLoggedInUser]); //Re-run effect when location or auth state changes

    return (
        <header className="border-b border-gray-300">
            <div className="container mx-auto mt-3">
                <Menu
                mode="horizontal"
                selectedKeys={currentSelectedNavItem}
                items={navItems}
                className="border-b-0"
                />
            </div>
        </header>
    );
};

export default Navbar;

//initial nav items

const Initial_Nav_Items = [
    {
        label: (
            <link to={Urls.Home()} className="p-4" >
                Home
            </link>
        ),
        key: Urls.Home(),
        isProtected: false,
        showAfterLogin: true,
    },
    {
        label: (
          <Link to={Urls.Mcqs.Mcqs()} className="p-4">
            Mcqs
          </Link>
        ),
        key: Urls.Mcqs.Mcqs(),
        isProtected: true, // Protected route
        showAfterLogin: true, // Show after login
      },
      {
        label: (
          <Link to={Urls.Login()} className="p-4">
            Login
          </Link>
        ),
        key: Urls.Login(),
        style: { marginLeft: "auto" }, // Align to the right
        isProtected: false, // Publicly accessible
        showAfterLogin: false, // Hide after login
      },
      {
        label: (
          <Link to={Urls.Signup()} className="p-4">
            Signup
          </Link>
        ),
        key: Urls.Signup(),
        isProtected: false, // Publicly accessible
        showAfterLogin: false, // Hide after login
      },
];

