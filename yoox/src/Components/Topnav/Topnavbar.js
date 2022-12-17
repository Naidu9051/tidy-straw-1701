import "./topnavbar.css";
import Country from "./Country";
import React from "react";
import CustomerCare from "./CustomerCare";
import { Button } from "@chakra-ui/react";
import { UnlockIcon } from "@chakra-ui/icons";

const Topnavbar = () => {
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
          marginBottom: "0px"
        }}
      >
        <Country />
        <CustomerCare />

        <Button
          marginRight="50px"
          display="inline-block"
          maxWidth=" 108px"
          whiteSpace="nowrap"
          _hover={{ bg: "blue.500", color: " white" }}
          overflow="hidden"
          fontWeight={"bold"}
          textOverflow="ellipsis"
          fontSize="12px"
          background="white"
          width={"100px"}
          size={2}
          mt={3}
          paddingBottom= "10px"
        >
          {" "}
          <u style={{ marginLeft: "5px", marginTop: "5px" }}> 🖊️ Register</u>
        </Button>

        <Button
          marginRight="50px"
          display="inline-block"
          maxWidth=" 108px"
          whiteSpace="nowrap"
          _hover={{ bg: "blue.500", color: " white" }}
          overflow="hidden"
          fontWeight={"bold"}
          textOverflow="ellipsis"
          fontSize="12px"
          background="white"
          width={"100px"}
          size={2}
          mt={3}
          paddingBottom= "10px"
        >
          {" "}
          <UnlockIcon />{" "}
          <u style={{ marginLeft: "5px", marginTop: "5px" }}>Login</u>
        </Button>
      </div>
    </>
  );
};

export default Topnavbar;
