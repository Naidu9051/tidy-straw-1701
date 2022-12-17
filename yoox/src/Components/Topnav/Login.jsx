import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
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
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { loginUser, authState } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.token) {
          loginUser(res.token);
          alert("Login Successful");
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
          Login
        </Text>

        <Text fontFamily="Montserrat,sansSerif">
          LOGIN WITH YOUR SOCIAL MEDIA ACCOUNT
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
              <Checkbox value="REMEMBER-ME">REMEMBER ME</Checkbox>
            </Stack>
          </CheckboxGroup>
        </div>

        <div style={{ marginTop: "30px", width: "40%", margin: "auto" }}>
          <Button onClick={handleSubmit} marginTop={"30px"}>
            LOGIN
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
}
export default Login;
