import {  Stack} from "@chakra-ui/react"
import { NavLink } from "react-router-dom"
// import {ChevronDownIcon} from "@chakra-ui/icons"
import React from "react"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Text,
    Button
  } from '@chakra-ui/react'
function CustomerCare(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [scrollBehavior, setScrollBehavior] = React.useState('inside')
    const btnRef = React.useRef(null)
    return(
        <>
        <Stack >
      
     <Button  display= "inline-block"
    maxWidth=" 108px"
    whiteSpace= "nowrap"
    overflow= "hidden" fontWeight={"bold"}   _hover={{ bg: "blue.500", color: " white"  }}   textOverflow= "ellipsis"  fontSize="12px" background="white" width={"100px"} size={2} mt={3} ref={btnRef} onClick={onOpen}> <u >Customer Care</u> 
       
   
      </Button>


      <Modal
      size={"md"}
    
        onClose={onClose}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        scrollBehavior={scrollBehavior}
      >
        <ModalOverlay />
        <ModalContent colorScheme='brand'>
           {/* <NavLink to='/customerCare'>Customer Care</NavLink>  */}
          <ModalHeader colorScheme='brand'>CAN WE HELP YOU ??</ModalHeader>
          <ModalCloseButton />
          <ModalBody style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"10px",cursor:"pointer"}} >
        <div style={{width:"300%",height:"30px",backgroundColor:"#333",color:"white",textAlign:"center"}}>GO TO CUSTOMER CARE AREA</div>
          </ModalBody>
          <ModalBody  _hover={{color:" blue.500"}} style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"10px",cursor:"pointer"}} >
        <div style={{textAlign:"center",width:"200%"}}>TRACK YOUR ORDER</div>
          </ModalBody>
          <ModalBody  _hover={{color:" blue.500"}} style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"10px",cursor:"pointer"}} >
        <div style={{textAlign:"center",width:"200%"}}>COMPLETE THE RETURN FORM</div>
          </ModalBody> 
           <ModalBody _hover={{color:" blue.500"}} style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"10px",cursor:"pointer"}} >
        <div style={{textAlign:"center",width:"200%"}}>TRACK YOUR RETURN</div>
          </ModalBody> 
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </Stack>
      <Text margin="auto" marginTop="10px" fontSize='xs'> FREE STANDARD SHIPPING ON ORDERS OVER $250</Text>
        </>
    )
}
export default CustomerCare