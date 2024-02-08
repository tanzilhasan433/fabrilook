

import { Navbar, TextInput } from "keep-react";
import {  Heart, ShoppingCart, User,  MagnifyingGlass} from "phosphor-react";
import { NavLink } from "react-router-dom";
import { IoGiftOutline } from "react-icons/io5";
import { VscThreeBars } from "react-icons/vsc";
import { Dropdown } from "keep-react";

export const NavbarComponent = () => {


    const manuItems = [
      {
        root: "tshirt",
        name: "t-Shirt" 
      },
      {
        root: "shirt",
        name: "Shirt"
      },
      {
        root: "shocks",
        name: "Shocks"
      },
      {
        root: "trouser",
        name: "Trouser"
      },
      {
        root: "panjabi",
        name: "Panjabi"
      },
      {
        root: "pant",
        name: "Pant"
      },   
      {
        root: "underpant",
        name: "Underpant"
      }
    ]
    



  return (
    <Navbar fluid={true} className="bg-white font-medium" >
      <Navbar.Container className="flex items-center justify-between m-8">
        <Navbar.Brand>
        
        <NavLink  to="/">  <img
            
              src="https://i.ibb.co/pjxKPCn/images.jpg"
              alt="keep"
              width="150"
              height="80"
            /></NavLink> 
        </Navbar.Brand>

              <Navbar.Container
          tag="ul"
          className="lg:flex hidden items-center justify-between gap-8 "
        >
          <Navbar.Link to="/" linkName="Home"/>
          <Navbar.Link to="/about" linkName="About"/>
          <Navbar.Link to="/blog" linkName="Blog"/>
          <Dropdown
              className="dropdown-menu "
              label="Category"
              size=""
              type="sm"
              dismissOnClick={true}
              
            >
               <div className="flex flex-col gap-2 items-center">
                    {manuItems.map((aa, index) => (
                      <NavLink key={index} to={aa.root}>
                        {aa.name}
                      </NavLink>
                    ))}
               </div>
            </Dropdown>
              
          
         
        </Navbar.Container>

        <Navbar.Container
          tag="ul"
          className="lg:flex hidden items-center justify-between gap-8"
        >
           <TextInput
              id="#id-10"
              placeholder="Search anything"
              color="gray"
              sizing="sm"
              type="text"
              addon={<MagnifyingGlass size={20} color="#5E718D" />}
              addonPosition="left"
            />
         
        </Navbar.Container>

        <Navbar.Container className="flex items-center gap-8">
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-8"
          >
      
             <Navbar.Link to="/coupon" linkName="Coupon"
             icon={<IoGiftOutline  size={20} color="#444" />}
             iconAnimation={false}
             />
            

            <Navbar.Link
              icon={<Heart size={20} color="#444" />}
              iconAnimation={false}
            />
            <Navbar.Link
              icon={<ShoppingCart size={20} color="#444" />}
              iconAnimation={false}
            />

            <Navbar.Link
              icon={<User size={20} color="#444" />}
              iconAnimation={false}
            />
            <Navbar.Link
              icon={<VscThreeBars size={20} color="#444" />}
              iconAnimation={false}
            />

          </Navbar.Container>
          <Navbar.Container className="flex gap-1">
            <Navbar.Toggle className="block" />
            
          </Navbar.Container>
        </Navbar.Container>
        <Navbar.Collapse
          collapseType="sidebar"
          className="fixed right-0 top-0 bg-white p-10 lg:!w-2/6 xl:!w-1/6 md:!w-2/6 w-1/2"
        >
          <Navbar.Container tag="ul" className="flex flex-col gap-5 font-semibold">
                {manuItems.map((aa, index) => (
                    <NavLink key={index} to={aa.root}>
                      {aa.name}
                    </NavLink>
                  ))}
          </Navbar.Container>
        </Navbar.Collapse>
      </Navbar.Container>
    </Navbar>
  );
}

