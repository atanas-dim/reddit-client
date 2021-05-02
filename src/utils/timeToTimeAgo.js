//Unix time to 'time ago' converter found on StackOverflow and reworked
function timeToTimeAgo(ts) {
   // This function computes the delta between the
   // provided timestamp and the current time, then test
   // the delta for predefined ranges.

   var d=new Date();  // Gets the current time
   var nowTs = Math.floor(d.getTime()/1000); // getTime() returns milliseconds, and we need seconds, hence the Math.floor and division by 1000
   var seconds = nowTs - ts;
   
   // more that two days
   if (seconds > 2*24*3600) {
      return "a few days ago";
   }
   // a day
   if (seconds > 24*3600) {
      return "yesterday";
   }
   if (seconds > 12*3600) {
      return "12h ago";
   }
   if (seconds > 11*3600) {
      return "11h ago";
   }
   if (seconds > 10*3600) {
      return "10h ago";
   }
   if (seconds > 9*3600) {
      return "9h ago";
   }
   if (seconds > 8*3600) {
      return "8h ago";
   }
   if (seconds > 7*3600) {
      return "7h ago";
   }
   if (seconds > 6*3600) {
      return "6h ago";
   }
   if (seconds > 5*3600) {
      return "5h ago";
   }
   if (seconds > 4*3600) {
      return "4h ago";
   }
   if (seconds > 3*3600) {
      return "3h ago";
   }
   if (seconds > 2*3600) {
      return "2h ago";
   }
   if (seconds > 3600) {
      return "1h ago";
   }
   if (seconds > 1800) {
      return "Half an hour ago";
   }
   if (seconds > 60) {
      return Math.floor(seconds/60) + " minutes ago";
   }
}

export default timeToTimeAgo;