import { AppBar, Toolbar, styled } from "@mui/material";

import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
  background: #2f8045;
  border-radius: 20%;
`;
{/* Adding stylings to the navlink*/}
const Tabs = styled(NavLink)`
  color: 	#333300;
  margin-right:-60px;
  margin-left:330px;
  text-decoration: none;
  font-size: 35px;
  padding: 20px;

  
`;
{/*Here i am creating Nav Bar*/ }
const NavBar = () => {
  return (
    <Header position="static">
      <Toolbar>
        <Tabs to="./" exact>
          ABOUT
        </Tabs>
       
        <Tabs to="add" exact>
          ADD DATA
        </Tabs>
        
        <Tabs to="all" exact>
          DISPLAY DATA
        </Tabs>
      </Toolbar>
    </Header>
  );
};

export default NavBar;
