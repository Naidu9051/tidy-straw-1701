import {
  Stack,
  Button,
  Text,
  Link,
  Image,
  Input,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [last, setLast] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [loading, setLoading] = useState(false);

  //    const { loginUser, authState } = useContext(AppContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(name);
    if (name !== "" && email !== "" && last !== "" && number !== "") {
      alert("SignUp succssfull");
      navigate("/login");
    } else {
      alert("Fill details");
    }
  };
  return (
    <div>
      <Stack>
        <Text
          fontFamily="Montserrat,sansSerif"
          fontWeight="700"
          fontSize="1.125rem"
          marginBlockStart="0.83em"
          marginBlockEnd="0.83em"
          wordBreak="break-word"
        >
          {" "}
          MYTRENDZ
        </Text>
        <Text
          marginBottom="10px"
          fontWeight="500"
          fontFamily="Montserrat,sansSerif"
          fontSize="0.825rem"
        >
          REGISTRATION
        </Text>

        <Text fontFamily="Montserrat,sansSerif">
          REGISTER WITH YOUR SOCIAL MEDIA ACCOUNT
        </Text>

        <div
          style={{
            height: "46px",
            margin: "auto",
            marginTop: "30px",
            textAlign: "center",
            color: "white",
            width: "400px",
            background: "#3b5998",
          }}
        >
          {" "}
          <Link href="https://www.facebook.com">
            {" "}
            <Text fontSize="30px">f</Text>
          </Link>
        </div>
        <div
          style={{
            height: "46px",
            margin: "auto",
            marginTop: "30px",
            width: "400px",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "1px 1px 1px 1px",
          }}
        >
          {" "}
          <Link href="https://www.google.com">
            {" "}
            <Image
              marginTop="10px"
              marginLeft="47%"
              src="https://www.yoox.com/media/yoox16/icons/google_24.png"
            />
          </Link>
        </div>

        <div
          style={{
            margin: "46px 0 8px",
            width: "40%",
            justifyContent: "center",
            margin: "auto",
            marginTop: "50px",
            gap: "30px",
          }}
        >
          <Text
            fontSize=".875rem"
            fontWeight="500"
            fontFamily="Montserrat,sansSerif"
          >
            OR WITH YOUR EMAIL
          </Text>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            marginTop="20px"
            placeholder="FIRST NAME*"
          />
          <Input
            value={last}
            onChange={(e) => setLast(e.target.value)}
            marginTop="20px"
            placeholder="SECOND NAME*"
          />
          <Input
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            marginTop="20px"
            placeholder="E-MAIL*"
          />
          <Input
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            marginTop="20px"
            placeholder="PASSWORD*"
          />
        </div>

        <Text
          fontSize=".875rem"
          fontWeight="500"
          fontFamily="Montserrat,sansSerif"
          style={{ marginTop: "30px", marginRight: "270px" }}
        >
          Personalise your Shopping experience
        </Text>

        <div style={{ marginLeft: "30%" }}>
          <CheckboxGroup
            colorScheme="blackAlpha"
            defaultValue={["naruto", "kakashi"]}
          >
            <Stack spacing={[1, 5]} direction={["column", "row"]}>
              <Checkbox value="MALE">MALE</Checkbox>
              <Checkbox value="FEMALE">FEMALE</Checkbox>
            </Stack>
          </CheckboxGroup>
        </div>
        <Text
          style={{ marginTop: "30px" }}
          fontSize=".75rem"
          fontFamily="SourceSansPro,sans-serif"
        >
          If you are over 18 years old , celebrate your birthday with us : WE
          have a surprise for you.
        </Text>

        <div
          style={{
            margin: "46px 0 8px",
            width: "40%",
            justifyContent: "center",
            margin: "auto",
            gap: "30px",
          }}
        >
          <Input placeholder="DATE OF BIRTH (DD/MM/YYYY)" />
        </div>

        <Text
          style={{
            marginRight: "400px",
            marginBottom: "0px",
            marginTop: "30px",
          }}
          fontSize=".678rem"
          fontFamily="Montserrat,sansSerif"
        >
          CELL PHONE
        </Text>
        <div
          style={{
            width: "40%",
            justifyContent: "center",
            margin: "auto",
            gap: "30px",
          }}
        >
          <Input
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            type="number"
            placeholder="CONTACT NUMBER"
          />
        </div>
        <Text
          fontSize="14px"
          color="#999"
          fontFamily="SourceSansProItalic,sansSerif"
        >
          By entering your phone number,you agree to be contacted by SMS for
          marketing and promotional purposes
        </Text>

        <Text
          style={{ marginTop: "30px" }}
          fontFamily="SourceSansProItalic,sansSerif"
          fontSize="12px"
        >
          I declare that i have read and accepted the{" "}
          <Link>MYTRENDZ Terms and Conditions of Use</Link>
        </Text>

        <div style={{ marginTop: "30px", fontSize: "14px" }}>
          <Checkbox>
            <Text fontSize="12px">
              I agree to the use of my personal data in order to be updated on
              new arrivals, informed about exclusive items and contacted as part
              of targeted marketing initiatives related to services offered by
              YOOX. By analyzing my personal data, order history and browsing
              habits, YOOX can improve my shopping experience with suggestions
              that correspond to my interests. For further information, please
              consult the Privacy Policy.
            </Text>
          </Checkbox>
        </div>

        <div style={{ marginTop: "30px", width: "40%", margin: "auto" }}>
          <Button onClick={handleSubmit} marginTop={"30px"}>
            REGISTER
          </Button>
        </div>

        <div
          style={{
            width: "100%",
            height: "100px",
            backgroundColor: "#333",
            marginTop: "80px",
            color: "white",
            textAlign: "center",
            fontFamily: "Montserrat,sansSerif",
            fontSize: ".778rem",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Text marginTop="40px">
            POWERED BY YOOX NET-A-PORTER GROUP - COPYRIGHT © 2000-2022 YOOX
            NET-A-PORTER GROUP S.P.A. - ALL RIGHTS RESERVED - SIAE LICENCE #
            401/I/526
          </Text>
          <div
            style={{
              display: "flex",
              gap: "40px",
              justifyContent: "center",
              marginTop: "40px",
            }}
          >
            <Link>LEGAL AREA</Link>
            <Link>PRIVACY POLICY</Link>
          </div>
        </div>
      </Stack>
    </div>
  );
};
export default Register;
