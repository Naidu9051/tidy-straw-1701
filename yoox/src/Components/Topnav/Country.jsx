import { Stack } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Country = () => {
  // const[name,setName]=React.useState("")
  const [data, setData] = React.useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = React.useState("inside");
  const btnRef = React.useRef(null);
  axios
    .get("https://restcountries.com/v3.1/all")
    .then((res) => setData(res.data));

  return (
    <div style={{ position: "sticky" }}>
      <Stack spacing={10}>
        {/* <Select border={"none"} width={"150px"} size="sm" iconSize="20px" placeholder='United States'> */}

        <Button
          marginLeft="100px"
          display="inline-block"
          maxWidth=" 108px"
          whiteSpace="nowrap"
          _hover={{ bg: "blue.500", color: " white" }}
          overflow="hidden"
          fontWeight={"bold"}
          textOverflow="ellipsis"
          fontSize="12px"
          background="white"
          width={"70px"}
          size={2}
          mt={3}
          ref={btnRef}
          onClick={onOpen}
          paddingBottom='10px'
        >
          {" "}
          <u> India </u>
          <ChevronDownIcon marginLeft={"5px"} />
        </Button>

        <Modal
          size={"xl"}
          onClose={onClose}
          finalFocusRef={btnRef}
          isOpen={isOpen}
          scrollBehavior={scrollBehavior}
        >
          <ModalOverlay />
          <ModalContent colorScheme="brand">
            <ModalHeader colorScheme="brand">
              SHOP IN{" "}
              <p style={{ fontSize: "10px" }}>
                By changing the location, delivery options of that location will
                apply and all items will be removed from your Shopping Bag.
              </p>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: "10px",
                cursor: "pointer",
              }}
            >
              {data.map((el) => (
                <div>
                  <div
                    style={{ display: "flex", fontSize: "10px" }}
                    key={el.id}
                  >
                    {" "}
                    <div>
                      {" "}
                      <img
                        width={"20px"}
                        src={el.flags.png}
                        alt="coutnryFlag"
                      />
                    </div>
                    <div style={{ marginLeft: "5px" }}>
                      <p>{el.name.common}</p>
                    </div>
                  </div>
                </div>
              ))}
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Stack>
    </div>
  );
};
export default Country;
