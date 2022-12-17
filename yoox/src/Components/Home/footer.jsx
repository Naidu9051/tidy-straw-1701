import {
  Text,
  Box,
  Link,
  Input,
  Checkbox,
  CheckboxGroup,
  Stack,
  Button,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";

const Footer = () => {
  return (
    <div>
      <div
        style={{
          marginTop: "100px",
          display: "flex",
          justifyContent: "space-evenly",
          textDecoration: "none",
        }}
      >
        <div>
          <Box>
            <Text fontSize="xl">NEW TO TRENDZ</Text>
            <hr
              style={{
                display: "block",
                border: "1px solid",
                unicodeBidi: "isolate",
                marginBlockStart: "0.5em",
                marginBlockEnd: "0.5em",
                marginInlineStart: "auto",
                marginInlineEnd: " auto",
                overflow: "visible",
                margin: "0 auto",
                width: "33px",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                lineHeight: " 2em",
                marginBottom: "14px",
                color: "inherit",
                textDecoration: "none",
                backgroundColor: "transparent",
                fontFamily: "Montserrat,sansSerif",
              }}
            >
              <div>
                {" "}
                <Link>Shopping Guide</Link>
              </div>
              <div>
                {" "}
                <Link>Iphone/Ipad/Android</Link>
              </div>
              <div>
                {" "}
                <Link>Browse All Designers</Link>
              </div>
              <div>
                {" "}
                <Link>Browse All Categories</Link>
              </div>
            </div>
          </Box>
        </div>

        <div>
          <Box>
            <Text fontSize="xl">HELP</Text>
            <hr
              style={{
                display: "block",
                border: "1px solid",
                unicodeBidi: "isolate",
                marginBlockStart: "0.5em",
                marginBlockEnd: "0.5em",
                marginInlineStart: "auto",
                marginInlineEnd: " auto",
                overflow: "visible",
                margin: "0 auto",
                width: "33px",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                lineHeight: " 2em",
                marginBottom: "14px",
                color: "inherit",
                textDecoration: "none",
                backgroundColor: "transparent",
              }}
            >
              <div>
                {" "}
                <Link>Shipping Times & Costs</Link>
              </div>
              <div>
                {" "}
                <Link>Payments & Web Security</Link>
              </div>
              <div>
                {" "}
                <Link>Product Quality</Link>
              </div>
              <div>
                {" "}
                <Link>Track Your Order</Link>
              </div>
              <div>
                {" "}
                <Link>Return & Refunds</Link>
              </div>
              <div>
                {" "}
                <Link>FAQ's</Link>
              </div>
              <div>
                {" "}
                <Link>Size Guide</Link>
              </div>
            </div>
          </Box>
        </div>
        <div>
          <div
            style={{ width: "300px", height: "400px", backgroundColor: "pink" }}
          >
            <EmailIcon />
            <Text
              marginTop="20px"
              fontSize="xl"
              fontWeight="700"
              lineHeight="20px"
              fontFamily="Montserrat,sansSerif "
            >
              TRENDZ NEWS
            </Text>
            <Text
              fontWeight="500"
              fontFamily="Montserrat,sansSerif"
              marginBlockStart="1em"
              marginBlockEnd="1em"
              fontSize=".95rem"
              textAlign="center"
              marginTop="20px"
            >
              Sign Up for the latest Newsletter and discover the latest arrivals
              and promotion
            </Text>
            <Input
              marginTop="30px"
              width="80%"
              placeholder="Insert Your Email Address"
            />
            <div
              style={{
                justifyContent: "spaceEvenly",
                marginLeft: "50px",
                marginTop: "30px",
              }}
            >
              <CheckboxGroup colorScheme="gray">
                <Stack spacing={[1, 5]} direction={["column", "row"]}>
                  <Checkbox value="Male">Male</Checkbox>
                  <Checkbox value="Female">Female</Checkbox>
                </Stack>
              </CheckboxGroup>
            </div>
            <div
              style={{
                fontFamily: "SourceSansProItalic,sansSerif",
                lineHeight: "1rem",
                marginTop: "20px",
                marginLeft: "20px",
              }}
            >
              <Checkbox>
                I consent to receive YOOX newsletters via email. For further
                information, please consult the <Link>Privacy Policy</Link> .
              </Checkbox>
            </div>
            <Button marginTop="10px">SIGN UP</Button>
          </div>
        </div>

        <div>
          <Box>
            <Text fontSize="xl">MYTRENDZ</Text>
            <hr
              style={{
                display: "block",
                border: "1px solid",
                unicodeBidi: "isolate",
                marginBlockStart: "0.5em",
                marginBlockEnd: "0.5em",
                marginInlineStart: "auto",
                marginInlineEnd: " auto",
                overflow: "visible",
                margin: "0 auto",
                width: "33px",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                lineHeight: " 2em",
                marginBottom: "14px",
                color: "inherit",
                textDecoration: "none",
                backgroundColor: "transparent",
              }}
            >
              <div>
                {" "}
                <Link>Login</Link>
              </div>
              <div>
                {" "}
                <Link>My Orders</Link>
              </div>
              <div>
                {" "}
                <Link>My Details</Link>
              </div>
              <div>
                {" "}
                <Link>Dreambox</Link>
              </div>
              <div>
                {" "}
                <Link>premiere</Link>
              </div>
            </div>
          </Box>
        </div>
        <div>
          <Box>
            <Text fontSize="xl">ABOUT US</Text>
            <hr
              style={{
                display: "block",
                border: "1px solid",
                unicodeBidi: "isolate",
                marginBlockStart: "0.5em",
                marginBlockEnd: "0.5em",
                marginInlineStart: "auto",
                marginInlineEnd: " auto",
                overflow: "visible",
                margin: "0 auto",
                width: "33px",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                lineHeight: " 2em",
                marginBottom: "14px",
                color: "inherit",
                textDecoration: "none",
                backgroundColor: "transparent",
              }}
            >
              <div>
                {" "}
                <Link>Company Info</Link>
              </div>
              <div>
                {" "}
                <Link>Press</Link>
              </div>
              <div>
                {" "}
                <Link>Careers</Link>
              </div>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
};
export default Footer;
