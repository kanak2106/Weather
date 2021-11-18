let loc = document.getElementsByClassName("location");
let tempicon = document.getElementsByClassName("temp-icon");
let tempvalue = document.getElementsByClassName("temp-value");
let climate = document.getElementsByClassName("climate");
let iconfile;
const searchInput = document.getElementsByClassName("search-input");
const searchButton = document.getElementsByClassName("search-button");







window.addEventListener("load" , ()=>
{
    let long ;
    let lat ;

    if (navigator.geolocation)
    {

        navigator.geolocation.getCurrentPosition((position ) =>
        { 
        long= position.coords.longitude;
        lat= position.coords.latitude;
        const proxy="https://cors-anywhere.herokuapp.com/"

            const api = `$ {proxy} api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid={1860f550f372cd463fb36f25533f51b0}`

            fetch(api). then((Response)=>
            {
                return Response.json();

            })

            .then ( data => 
                {

                    const {name} = data ;
                    const {feels_like} = data.main ;
                    const {id, main} = data.weather[0] ;

                    loc.textContent =name;
                    climate.textContent=main;
                    tempvalue.textContent=Math.round(feels_like-273)





               })


        }


        


        )

    }
}
)
