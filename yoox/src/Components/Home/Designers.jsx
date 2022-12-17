import { Image, Link, Box, Text } from "@chakra-ui/react";
function Designer() {
  return (
    <div>
      <div
        style={{
          backGroundColor: "cream",
          display: "flex",
          marginLeft: "50px",
          justifyContent: "space-between",
        }}
      >
        <Image
          marginTop="150px"
          src=""
        />
        <div></div>
        <Box
          style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
          backgroundColor="white"
          position="absolute"
          right="36%"
          height="550px"
          marginTop="100px"
          boxShadow="10px"
          width="350px"
        >
          <Text marginTop="20px" fontFamily=" Montserrat,sans-serif">
            DESIGNERS
          </Text>
          <br />
          <br />

          <Link
            fontWeight="bold"
            fontFamily=" Montserrat,sans-serif"
            _hover={{ color: "gray" }}
          >
            MOSCHINO
          </Link>
          <br />
          <br />

          <Link
            fontWeight="bold"
            fontFamily=" Montserrat,sans-serif"
            _hover={{ color: "gray" }}
          >
            DOLCE & GABBANA
          </Link>
          <br />
          <br />

          <Link
            fontWeight="bold"
            fontFamily=" Montserrat,sans-serif"
            _hover={{ color: "gray" }}
          >
            MICHAEL KORS
          </Link>
          <br />
          <br />

          <Link
            fontWeight="bold"
            fontFamily=" Montserrat,sans-serif"
            _hover={{ color: "gray" }}
          >
            BALENCIAGA
          </Link>
          <br />
          <br />

          <Link
            fontWeight="bold"
            fontFamily=" Montserrat,sans-serif"
            _hover={{ color: "gray" }}
          >
            TORY BURCH
          </Link>
          <br />
          <br />

          <Link
            fontWeight="bold"
            fontFamily=" Montserrat,sans-serif"
            _hover={{ color: "gray" }}
          >
            CHLOÉ
          </Link>
          <br />
          <br />

          <Link
            fontWeight="bold"
            fontFamily=" Montserrat,sans-serif"
            _hover={{ color: "gray" }}
          >
            GUCCI
          </Link>
          <br />
          <br />

          <Link
            fontWeight="bold"
            fontFamily=" Montserrat,sans-serif"
            _hover={{ color: "gray" }}
          >
            MAISON MARGIELA
          </Link>
          <br />
          <br />
          <br />
          <Link fontFamily=" Montserrat,sans-serif">VIEW ALL</Link>
        </Box>
        <Image
          marginRight="50px"
          marginTop="150px"
          src=" "
        />
      </div>

      <div style={{ display: "flex" }}>
        <div>
          <Text
            marginTop="20px"
            marginLeft="75px"
            fontFamily=" Montserrat,sans-serif"
            fontSize="24px"
          >
            GET UP TO 70%, 80% & 90% OFF{" "}
          </Text>
          <Text color="#000000" fontFamily=" Montserrat,sans-serif">
            Ends November 11th
          </Text>
          <br />
          <Link color="gray" fontFamily=" Montserrat,sans-serif">
            SHOP NOW
          </Link>
        </div>
        <div>
          <Text
            marginLeft="355px"
            marginTop="20px"
            fontFamily=" Montserrat,sans-serif"
            fontSize="24px"
          >
            COOL COATS
          </Text>
          <Text
            marginLeft="415px"
            color="#000000"
            fontFamily=" Montserrat,sans-serif"
          >
            Puffer jackets and more to keep you warm{" "}
          </Text>
          <br />
          <Link
            marginLeft="375px"
            color="gray"
            fontFamily=" Montserrat,sans-serif"
          >
            SHOP NOW
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Designer;
