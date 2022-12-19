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
          src="https://www.yoox.com/images/yoox80/banners/6971_1_HL_DM_ROWHK.png?634485886601286852#width=430&height=600"
        />
        <div></div>
        <Box
          style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
          backgroundColor="white"
          // position="absolute"
          right="36%"
          height="550px"
          marginTop="100px"
          boxShadow="10px"
          width="350px"
          textAlign="center"
          paddingTop="60px"
        >
          <Text marginTop="20px" fontFamily=" Montserrat,sans-serif" fontSize='14px'>
            DESIGNERS
          </Text>
          <br />
          <br />

          <Link
            fontWeight="bold"
            fontFamily=" Montserrat,sans-serif"
            _hover={{ color: "gray" }}
            fontSize='14px'
          >
            MOSCHINO
          </Link>
          <br />
          <br />

          <Link
            fontWeight="bold"
            fontFamily=" Montserrat,sans-serif"
            _hover={{ color: "gray" }}
            fontSize='14px'
          >
            DOLCE & GABBANA
          </Link>
          <br />
          <br />

          <Link
            fontWeight="bold"
            fontFamily=" Montserrat,sans-serif"
            _hover={{ color: "gray" }}
            fontSize='14px'
          >
            MICHAEL KORS
          </Link>
          <br />
          <br />

          <Link
            fontWeight="bold"
            fontFamily=" Montserrat,sans-serif"
            _hover={{ color: "gray" }}
            fontSize='14px'
          >
            BALENCIAGA
          </Link>
          <br />
          <br />

          <Link
            fontWeight="bold"
            fontFamily=" Montserrat,sans-serif"
            _hover={{ color: "gray" }}
            fontSize='14px'
          >
            TORY BURCH
          </Link>
          <br />
          <br />

          <Link
            fontWeight="bold"
            fontFamily=" Montserrat,sans-serif"
            _hover={{ color: "gray" }}
            fontSize='14px'
          >
            CHLOÉ
          </Link>
          <br />
          <br />

          <Link
            fontWeight="bold"
            fontFamily=" Montserrat,sans-serif"
            _hover={{ color: "gray" }}
            fontSize='14px'
          >
            GUCCI
          </Link>
          <br />
          <br />

          <Link
            fontWeight="bold"
            fontFamily=" Montserrat,sans-serif"
            _hover={{ color: "gray" }}
            fontSize='14px'
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
          src="https://www.yoox.com/images/yoox80/banners/6824_1_TrendSpace_HL_W.jpg?634485886601286852#width=430&height=600"
        />
      </div>

      <div style={{ display: "flex" }}>
        <div>
          <Text
            marginTop="20px"
            marginLeft="150px"
            fontFamily=" Montserrat,sans-serif"
            fontSize="24px"
          >
            20% & 30% OFF{" "}
          </Text>
          <Text color="#000000" fontFamily=" Montserrat,sans-serif" marginLeft="180px" fontSize="12px">
            Only until 12/18
          </Text>
          <br />
          <Link color="gray" fontFamily=" Montserrat,sans-serif" marginLeft="190px">
            SHOP NOW
          </Link>
        </div>
        <div>
          <Text
            marginLeft="555px"
            marginTop="20px"
            fontFamily="Playfair Display,sans-serif"
            fontSize="24px"
          >
            THE SPACE AGE
          </Text>
          <Text
            marginLeft="535px"
            color="#000000"
            fontFamily=" Montserrat,sans-serif"
            fontSize="12px"
          >
            Futuristic fashion: the beginning of a new era!{" "}
          </Text>
          <br />
          <Link
            marginLeft="615px"
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
