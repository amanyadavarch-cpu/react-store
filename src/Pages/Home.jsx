import axios from "axios";
import { useContext, useEffect } from "react";
import { MyStore } from "../context/Mystore";
import ProductsCard from "../components/ProductsCard";


const Home = () => {

    let {productsData, setProducutsData} = useContext(MyStore);

    useEffect(()=>{
      let getProductData = async()=>{
        try {
          let res = await axios.get("https://fakestoreapi.com/products")
          setProducutsData(res.data)
        } catch (error) {
          console.log("error in api",error);
        }
      }

        getProductData()
    },[setProducutsData])
   

  return (
    <div className="grid grid-cols-4 gap-4 p-3">
      {
         productsData.map((val)=>{
            return <ProductsCard key={val.id} product={val}/>
         })
      }
    </div>
  )
}

export default Home
