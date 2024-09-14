function TimeStamp_Addition(msg)
{

 msg.payload.timestamp=new Date().toLocaleString()
 
 return msg;
 
}

 module.exports= TimeStamp_Addition;

