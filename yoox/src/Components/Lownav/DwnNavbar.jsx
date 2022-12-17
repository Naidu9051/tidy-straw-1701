import { Button,Text } from "@chakra-ui/react"
import './dwnnavbar.css'

function DownNavbar(){
    return (
  
       <div style={{position:"sticky",top:"120px",zIndex:"99"}} >
         <div className="DwnNav"  style={{width:"100%", height:"40px",backgroundColor:"#333",position:"sticky"}}>
            <Button colorScheme={"blackAlpha"} backgroundColor={"#333"}><Text color="white"  fontSize='xs'>NEW ARRIVALS</Text></Button>
            <Button colorScheme={"blackAlpha"} backgroundColor={"#333"} ><Text color="white" fontSize='xs'>DESIGNERS</Text></Button>
            <Button colorScheme={"blackAlpha"} backgroundColor={"#333"}><Text color="white" fontSize='xs'>CLOTHING</Text></Button>
            <Button colorScheme={"blackAlpha"} backgroundColor={"#333"}><Text color="white" fontSize='xs'>SHOES</Text></Button>
            <Button colorScheme={"blackAlpha"} backgroundColor={"#333"}><Text color="white" fontSize='xs'>ACCESORIES & BAGS</Text></Button>
            <Button colorScheme={"blackAlpha"} backgroundColor={"#333"}><Text color="white" fontSize='xs'>8 BY TRENDZ</Text></Button>
            <Button colorScheme={"blackAlpha"} backgroundColor={"#333"}><Text color="white" fontSize='xs'>TRENDZYGEN</Text></Button>
            <Button colorScheme={"blackAlpha"} backgroundColor={"#333"}><Text color="white" fontSize='xs'>COLLABORATION</Text></Button>
            <Button colorScheme={"blackAlpha"} backgroundColor={"#333"}><Text color="white" fontSize='xs'>BEST DEALS</Text></Button>
            <Button colorScheme={"blackAlpha"} backgroundImage={"https://www.yoox.com/media/yoox16/gift/2022_gift_menu_desktop.gif"} ><Text color="white" fontSize='xs'>GIFT GUIDE</Text></Button>



        </div>
       </div>
            
      
    )
}
export default DownNavbar