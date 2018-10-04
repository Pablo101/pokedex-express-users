var React = require("react");

 class Login extends React.Component {
   render() {
     return (
       <html>
         <head />
         <body>
           <form method="POST" action="/users_pokemons">
             <div>
               Name:<input name="name" type="text" required />
             </div>
             <div>
               Password:<input name="password" type="number" required />
             </div>
             <input type="submit" value="Submit" />
           </form>
         </body>
       </html>
     );
   }
 }

 module.exports = Login;

//login form