function Filter_Sensor_Data ( msg , certain_threshold)
{
 if(msg.payload.reading < certain_threshold){
  return null;}
 else{
  return msg.payload.reading;
 }
}
module.exports= Filter_Sensor_Data;
