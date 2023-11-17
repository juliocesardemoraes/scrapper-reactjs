import { useEffect, useState } from "react";

export default function Search() {
  const [productName, setProductName] = useState("");
  const [products, setProducts] = useState([]);
  const searchProducts = async () => {
    const API_URL = `https://scrapper-nodejs-zeta.vercel.app/scrape?keyword=${productName}`;
    let res = await fetch(API_URL);
    const data = await res.json();
    setProducts(data.products);
  };
  useEffect(() => {}, []);
  return (
    <div>
      <div>
        <input
          placeholder="Digite o nome do produto"
          onChange={(e) => {
            setProductName(e.target.value);
          }}
        ></input>
        <div
          className="search__button"
          onClick={() => {
            searchProducts();
          }}
        >
          Search
        </div>
      </div>
      <div className="map__products">
        {products?.length > 0 &&
          products?.map((product) => {
            return <div key={product?.title}>{product?.title}</div>;
          })}
      </div>
    </div>
  );
}
