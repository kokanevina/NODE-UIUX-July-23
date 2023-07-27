const mongoose=require('mongoose');

/* mongoose.connect('mongodb://127.0.0.1:27017/uiux_node')
   .then(console.log("connected...")).catch("Exception occured").finally("this code executing in any case...");

 */

   mongoose.connect('mongodb://127.0.0.1:27017', {
        dbName : "uiux_node",
       // family:4
   })
   .then(console.log("connected...")).catch("Exception occured").finally("this code executing in any case...");
