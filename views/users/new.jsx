 var React = require("react");

 class New extends React.Component {
   render() {
     return (
       <html>
         <head />
         <body>
           <form method="POST" action="/users">
             <div>
               name:<input name="name" type="text" />
             </div>
             <div>
               Password:<input name="password" type="password" required />
             </div>
             <input type="submit" value="Submit" />
           </form>
         </body>
       </html>
     );
   }
 }

 module.exports = New;