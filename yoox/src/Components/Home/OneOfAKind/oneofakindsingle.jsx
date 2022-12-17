import axios from "axios";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Image } from "@chakra-ui/react";
function SingleProduct() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  axios
    .get(`https://capable-spurious-list.glitch.me/oneofakind/${id}`)
    .then((res) => setProduct(res));

  return (
    <div>
      <div>
        <Image src={product.url} />
        <h2>{product.brand}</h2>
        <h2>{product.title}</h2>
        <h2>{product.offer}</h2>
        <h2>{product.price}</h2>
        <br />
        <br />
      </div>
      <Link to={"/"}>Go back</Link>
    </div>
  );
}
export default SingleProduct;
