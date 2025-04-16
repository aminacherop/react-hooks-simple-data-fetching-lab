// create your App component here
//import { response } from "msw"
import React,{useState,useEffect} from "react"
function App (){
    const [dogImage,setDogImage] = useState(null)
    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response)=>response.json())
        .then((data)=>{
            setDogImage(data.message);
        });
    } ,[]);
    return (
        <div style={{textAlign: "center", marginTop: "40px"}}>
            {dogImage ? (
                <img
                src={dogImage}
          alt="A Random Dog"
          style={{ width: "400px", borderRadius: "10px" }}

                />
            ):(
                <p> Loading...</p>
            )}

        </div>
    )

}

export default App;