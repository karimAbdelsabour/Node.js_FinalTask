function Time_Based_Greeting(){
var timeinhours = new Date().getHours();
 if (timeinhours < 12)
 {
   console.log("Good Morning")
 }
 else if (timeinhours > 12)
 {
   console.log("Good evening")
 }
 module.exports= Time_Based_Greeting;
}


