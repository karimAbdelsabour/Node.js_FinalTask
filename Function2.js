function String_manipulation(string){

 return string.len > 10 ? string.toUpperCase() + "(Truncated)" : string.toUpperCase() ;
}
module.exports= String_manipulation;
