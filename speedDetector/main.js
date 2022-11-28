//#challenge2
//takes speed input and gives one demerit point for for every 5km/s above speed limit 70
function speedDetector(speed) {
   
     if(speed<=70)
         console.log("Ok")//prints "Ok" if the speed is < 70
     else if(speed>70&&speed<=130)//for every 5km/s above the speed limit 70 the system gives the driver 1 demerit point and prints the total demerit points.
         {console.log("Points:"+Math.floor(((speed-70)/5)))}
     else if(Math.floor((speed-70)/5>12)) //if the driver gets past the speed limit by 60km/s and gets 12 demerit points, it should print license suspended.
         {console.log("License suspended")};
     }
        
     speedDetector(79);