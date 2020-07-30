const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const address = process.argv[2]

if (!address){
    console.log("Please provide a location")
}else{
    geocode(address, (error, {location, longitude, latitude} = {}) =>{
        if(error){
            console.log(error)
            return
        }
    
        else{
            forecast(latitude, longitude, (error, forecastData) =>{
                if(error){
                    console.log(error)
                    return
                }
                console.log(location)
                console.log(forecastData) 
            })
        }
    })
}


