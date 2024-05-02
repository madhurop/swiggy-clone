// import React,{Component} from "react"
// class UserName extends Component{
//     constructor(props) {
//         super(props);
//         console.log(this.props.fakeData)
//     }
//     render(){
        
//         return(
//             <div className="">This is the Class Based component {this.props.fakeData}</div>
//         )
//     }
// }
// export default UserName;
import React,{useState,useEffect} from 'react'

function UserClass() {
    const [image,setImage]=useState([])
    const[lati,setLati]=useState()
    const[long,setLong]=useState()
    navigator.geolocation.getCurrentPosition(showPosition);

    useEffect(()=>{
        //nasaApi()
        //instaApi()
    },[])
    function showPosition(position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        setLati(lat)
        setLong(lon)
        console.log("Latitude: " + lat + ", Longitude: " + lon);
      }
      
      
    // const nasaApi = async ()=>{
    //     const request = await  fetch("https://api.nasa.gov/planetary/apod?api_key=G8wJ89gVAF2kfPmR15tm54gnJKglAeQzGCXh7KG6")
    //     const data= await request.json()
    //     console.log(data)
    //     setImage(data.hdurl)
    // }
    const instaApi=async ()=>{
        const url = `https://ai-weather-by-meteosource.p.rapidapi.com/current?lat=${lati}&lon=${long}&timezone=auto&language=en&units=auto`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '964729d0c7msh6639193e9635c98p1300e5jsn76d4c8f7ffae',
		'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
} catch (error) {
	console.error(error);
}
    }
  return (
    <div>
        <img  alt="" className="" />
      
    </div>
  )
}

export default UserClass
