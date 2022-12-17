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
          src=" "
        />

        <div
          style={{
            width: "350px",
            height: "120px",
            backgroundColor: "white",
            position: "absolute",
            top: "12%",
            right: "70%",
          }}
        >
          <Text
            fontWeight="bold"
            fontSize="24px"
            fontFamily="playfairDisplay,sansSerif"
            marginRight="120px"
          >
            LIGHTS ON!
          </Text>
          <Text
            fontSize="14px"
            fontFamily="Montserrat,sans-serif"
            marginRight="60px"
            marginTop="10px"
          >
            Enter To Find The Perfect Present
          </Text>
          <Text
            fontWeight="bold"
            fontSize="15px"
            fontFamily="playfairDisplay,sansSerif"
            cursor="pointer"
            marginRight="100px"
            marginTop="10px"
          >
            <u>LET THE SHOW BEGIN</u>
          </Text>
        </div>

        {/* <Text color="wheat"  position="absolute" top="80%" right="30%"  fontSize="3rem" cursor="pointer" width="100%"><u>Let The show begin</u></Text> */}
      </div>
    </div>
  );
}
export default ImageCard;
