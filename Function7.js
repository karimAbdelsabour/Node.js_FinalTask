function Access_Dynamic_Property(msg,poperty)
{

 return msg?.payload?.[poperty];
 
}

 module.exports= Access_Dynamic_Property;

