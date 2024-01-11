import React, {useEffect, useState} from "react";
import data from "../../fakeData.json";
import ContainerList from "../../components/container/Container";
export default function Home() {
    const [containerData, setContainerData] = useState([])
    useEffect(() => {
        setContainerData(data)
    },[]);
    console.log("Home: ", containerData)
    return (
       <div>
              <ContainerList containers={containerData}/>
       </div>
    );
}