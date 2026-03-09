import { useEffect, useState } from "react";
import axios from "axios";

const Chief = () => {
    const [chief, setChief] = useState({
        name: "loading...",
        title: "loading...",
        url: "../assets/placeholder.png",
        description:"loading..."
    });

    useEffect(
        () => {
            axios.get("/api/public/chief")
                .then(res => {setChief({
                    name: res.data[0].NAME,
                    title: res.data[0].TITLE,
                    url: res.data[0].IMAGE_URL,
                    description: res.data[0].DESCRIPTION,
                    photo: res.data[0].PHOTO
                })})
                .catch(err => console.log(err));
            }, []);
            
    return (
        <>
        <div className= "grid grid-cols-[300px_1fr_1fr_1fr_1fr] h-100vh bg-[url('../src/assets/hero.jpg')] bg-cover bg-center text-white shadow-md mb-6">
            <div className="col-span-1 mx-auto w-3/5 py-10"></div>
            <div className="col-span-1 mx-auto w-3/5 py-10">
                <img src={`data:image/jpeg;base64,${chief.photo}`} alt="Chief" className="rounded-t-lg" style={{maxWidth: "102%"}} />
                <div className="text-sm font-bold w-62 p-2 rounded-b" style={{"backgroundColor": "rgba(0,0,0,0.6)"}}>{chief.name}<br /><p style={{fontSize: "0.75rem"}}>{chief.title}</p></div>
            </div>
            <div className="col-span-2 inline-block text-lg my-10 rounded p-5 text-justify" style={{"background-color": "rgba(0,0,0,0.6)"}}>{chief.description}</div>
            

        </div>
        </>
    )
}

export default Chief