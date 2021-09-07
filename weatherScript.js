
const clicky = () => {
    let city = document.querySelector(".inp").value;

    if(city.length>0){
    let temperature = document.querySelector(".temp");
    let summary = document.querySelector(".summary");
    let loc = document.querySelector(".location");
    let icon = document.querySelector("img");
    
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7f1cc820c2337d5b6bb592d1c46ce6c4`).then((response) => {
        return response.json()
    }).then((response) => {
        let temp=response.main.temp-273.15;
        // temp
        temperature.innerText = temp.toFixed(3) + "°C";
        // haze vala
        summary.innerHTML=response.weather[0].main;
        // gjha
        loc.innerHTML=`${response.name},${response.sys.country}`
        // icon
    if(response.weather[0].main=="Clouds"){
        icon.setAttribute("src",'https://image.shutterstock.com/image-vector/orange-sun-clouds-flat-vector-600w-1051120334.jpg');
    }else if(response.weather[0].main=="Haze"){
        icon.setAttribute("src",'https://image.shutterstock.com/image-vector/transparent-sunny-weather-icon-png-600w-1946120422.jpg');
    }else{
        icon.setAttribute("src",'https://image.shutterstock.com/image-vector/rain-cloud-lightning-polygon-icon-600w-316097984.jpg');
    }
    document.querySelector(".inp").value="";
    }).catch((err)=>{
        alert(`${city} is not a Valid City.`);
    })
}else{
    alert("Type a Valid City.");
}


}
