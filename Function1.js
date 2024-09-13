function Message_Processing(msg) {

var temperature=msg.payload.temperature;
var humidity=msg.payload.humidity;

var temperature_status;
var humidity_status;

 if(temperature>50)
 {
   status= "Temperature is High";
   
 }
 else if ( 30 <temperature< 50 )
 {
   temperature_status= "Temperature is Low";
 }
 else if (temperature <= 30)
 {
   temperature_status= "Temperature is at room conditions";
 }
 
 if(humidity > 50)
 {
   temperature_status= "humidity is High";
   
 }
 else if ( 30 < humidity < 50 )
 {
   humidity_status= "humidity is Normal";
 }
 else if (temperature <= 30)
 {
   humidity_status= "humidity is Low";
 }

 msg.payload.temperature_status=temperature_status;
 msg.payload.humidity_status=humidity_status;
 return msg;
}
module.exports= Message_Processing;
