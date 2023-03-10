import { LanguageOutlined, SearchOutlined, FullscreenExitOutlined, NotificationsNoneOutlined, ChatBubbleOutlineOutlined, ListOutlined, DarkModeOutlined, LightMode } from "@mui/icons-material";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import "./navbar.scss";

const Navbar = () => {

    const { dispatch, darkMode } = useContext(DarkModeContext);

    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search..." />
                    <SearchOutlined />
                </div>

                <div className="items">
                    <div className="item">
                        <LanguageOutlined className="icon" />
                        English
                    </div>
                    
                    <div className="item" onClick={() => dispatch({type: "TOGGLE"})}>
                        {darkMode ? (
                            <LightMode className="icon" />
                        ) : (
                            <DarkModeOutlined className="icon" />
                        )}
                    </div>
                    
                    <div className="item">
                        <FullscreenExitOutlined className="icon" />
                    </div>
                    
                    <div className="item">
                        <NotificationsNoneOutlined className="icon" />
                        <div className="counter">1</div>
                    </div>
                    
                    <div className="item">
                        <ChatBubbleOutlineOutlined className="icon" />
                        <div className="counter">1</div>
                    </div>
                    
                    <div className="item">
                        <ListOutlined className="icon" />
                    </div>
                    
                    <div className="item">
                        <img src="https://images.pexels.com/photos/11293709/pexels-photo-11293709.jpeg?auto=compress&cs=tinysrgb&w=800" alt="avartar" className="avatar" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;