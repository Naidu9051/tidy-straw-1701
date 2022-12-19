import "./topnavbar.css";
import Country from "./Country";
import React, { useContext } from "react";
import CustomerCare from "./CustomerCare";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import style from "./nav.module.css";
import { UnlockIcon } from "@chakra-ui/icons";
import { BsFillPencilFill } from "react-icons/bs";

import { FaUserAlt } from "react-icons/fa";
import Login from "./Login";
import { useToast } from "@chakra-ui/react";
import { AuthContext } from "../../Contexts/AuthContext";

const Topnavbar = () => {
  const { state, HandleLoginContext, HandleLogoutContext } =
    useContext(AuthContext);
  const toastsss = useToast();

  const handleLogoutAuth = () => {
    HandleLogoutContext();
    toastsss({
      title: "Logout Successful",
      description: ``,
      status: "success",
      duration: 7000,
      isClosable: true,
      position: "top",
    });
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          backgroundColor: "white",
          fontWeight: "bold",
          position: "sticky",
          top: "0px",
          zIndex: "99",
          height: "30px",
          borderBottom: "1px solid #f4f4f4",
          width: "100%",
          fontFamily: "Montserrat,sans-serif",
          marginBottom: "0px",
        }}
      >
        <Country />
        <CustomerCare />

        <div className={style.inbox2}>
          {state.isAuth ? (
            <div className={style.forIcon}>
              <FaUserAlt />
              <h2>MYOOX</h2>
            </div>
          ) : (
            <div className={style.forIcon}>
              <BsFillPencilFill />
              <Link to="/register">REGISTER</Link>
            </div>
          )}

          {state.isAuth ? (
            <div className={style.forIcon}>
              <Button
                onClick={handleLogoutAuth}
                mt="-3px"
                w="20px"
                size="sm"
                bg="white"
                fontSize="12px"
                fontWeight="bolder"
              >
                Login
              </Button>
            </div>
          ) : (
            <div className={style.forIcon}>
              <UnlockIcon />
              <Login />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Topnavbar;
