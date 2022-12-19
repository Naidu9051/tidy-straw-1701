import { Image, Text } from "@chakra-ui/react";

function ImageCard() {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "60px",
          backgroundColor: "MediumSeaGreen",
        }}
      >
        <Text fontWeight={"bold"} fontSize="lg">
          {" "}
          SINGLES'S DAY:GET UPTO 90% OFF{" "}
        </Text>
        <Text fontWeight={"bold"} fontSize="sm">
          {" "}
          <u>Ends 11/11</u>{" "}
        </Text>
      </div>
      <div>
        <Image
          width={"100%"}
          height="600px"
          cursor={"pointer"}
          src="https://www.yoox.com/images/yoox80/banners/6895_1_Genz_WM_Main.png?634485886601286852&impolicy=cropDefault&width=960&height=510"
        />

        <div
          style={{
            width: "380px",
            height: "150px",
            backgroundColor: "white",
            position: "absolute",
            top: "9%",
            right: "70%",
            paddingLeft: "15px"
          }}
        >
          <Text
            fontWeight="bold"
            fontSize="24px"
            fontFamily="playfairDisplay,sansSerif"
            marginRight="120px"
          >
            HERE COMES THE NIGHT
          </Text>
          <Text
            fontSize="14px"
            fontFamily="Montserrat,sans-serif"
            marginRight="60px"
            marginTop="10px"
          >
            Rock-inspired leather looks and daring details
          </Text>
          <Text
            fontWeight="bold"
            fontSize="15px"
            fontFamily="playfairDisplay,sansSerif"
            cursor="pointer"
            marginRight="100px"
            marginTop="10px"
          >
            <u>GET THE LOOK</u>
          </Text>
        </div>

        {/* <Text color="wheat"  position="absolute" top="80%" right="30%"  fontSize="3rem" cursor="pointer" width="100%"><u>Let The show begin</u></Text> */}
      </div>
    </div>
  );
}
export default ImageCard;
