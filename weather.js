let loc = document.getElementById("location");
let tempicon = document.getElementById("temp-icon");
let tempvalue = document.getElementById("temp-value");
let climate = document.getElementById("climate");
let iconfile;
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");







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

            const api = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid={1860f550f372cd463fb36f25533f51b0}`

            fetch(api). then((Response)=>
            {
                return Response.json();

            })


        }


        


        )

    }
}
)