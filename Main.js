var Message_Processing = require('./Function1')
var String_manipulation = require('./Function2')
var Filter_Sensor_Data = require('./Function3')
var Time_Based_Greeting = require('./Function4')
var Combine_Sensor_Data = require('./Function5')
var TimeStamp_Addition = require('./Function6')
var Access_Dynamic_Property = require('./Function7')
//--------------------------------------------------------------------Function 1 invocation
var msg1 = {
  payload: {
    temperature: 35,
    humidity: 60,
    device: {
      name: "DHT11_Sensor"
    }
  }
};
var processed_Message = Message_Processing(msg1);
console.log(processed_Message); 
//--------------------------------------------------------------------Function 2 invocation
var string = "Karim Abdelsabour Gamal";
var Manipulated_String = String_manipulation(string);
console.log(Manipulated_String);
//--------------------------------------------------------------------Function 3 invocation
var msg2 = {
  payload: {
    reading: 30,
    device: {
      name: "Ultrasonic_Sensor"
    }
  }
};
var certain_threshold = 40;
var Filtered_Reading = Filter_Sensor_Data(msg2, certain_threshold);
console.log(filteredMsg); 
//--------------------------------------------------------------------Function 4 invocation
var Now_Greeting = Time_Based_Greeting();
console.log(Now_Greeting); 
//--------------------------------------------------------------------Function 5 invocation
var msg3 = {
  payload: {
   temperature: 35,
    device: {
      name: "DHT11_Sensor"
    }
  }
};
var msg4 = {
  payload: {
    humidity: 60,
    device: {
      name: "DHT11_Sensor"
    }
  }
};
var msg5 = {
  payload: {
  }
};
var msg5 = Combine_Sensor_Data(msg1, msg2, msg5);
console.log(msg5); 
//--------------------------------------------------------------------Function 6 invocation
var msg6 = {
  payload: {}
};

var Message_AddedTimeStamp = TimeStamp_Addition(msg6);
console.log(Message_AddedTimeStamp); 
//--------------------------------------------------------------------Function 7 invocation
var msg7 = {
  payload: {
    DHT11_data: {
      temperature: 30,
      humidity: 70,
      pressure: 1013
    },
    timestamp: "2024-9-14T12:34:56Z"
  }
};

var property_Name = "DHT11_data.pressure";
var property_Value = Access_Dynamic_Property(msg7, property_Name);
console.log(property_Value); 
//--------------------------------------------------------------------The End



















