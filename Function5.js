function Combine_Sensor_Data(msg1,msg2,msg3)
{

 msg3.payload.temperature=msg1.payload.temperature;
 msg3.payload.humidity=msg2.payload.humidity;
 return msg3;
 
}

 module.exports= Combine_Sensor_Data;

