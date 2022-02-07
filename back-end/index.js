const express = require('express');
var cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const path = require('path');

console.log(`
████████╗██████╗ ██╗   ██╗███████╗███╗   ██╗ ██████╗ ██████╗ ████████╗██╗  ██╗    ████████╗███████╗███████╗████████╗
╚══██╔══╝██╔══██╗██║   ██║██╔════╝████╗  ██║██╔═══██╗██╔══██╗╚══██╔══╝██║  ██║    ╚══██╔══╝██╔════╝██╔════╝╚══██╔══╝
   ██║   ██████╔╝██║   ██║█████╗  ██╔██╗ ██║██║   ██║██████╔╝   ██║   ███████║       ██║   █████╗  ███████╗   ██║   
   ██║   ██╔══██╗██║   ██║██╔══╝  ██║╚██╗██║██║   ██║██╔══██╗   ██║   ██╔══██║       ██║   ██╔══╝  ╚════██║   ██║   
   ██║   ██║  ██║╚██████╔╝███████╗██║ ╚████║╚██████╔╝██║  ██║   ██║   ██║  ██║       ██║   ███████╗███████║   ██║   
   ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═══╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝       ╚═╝   ╚══════╝╚══════╝   ╚═╝                                                    
`)

const app = express();

// settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(cors());

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json())

// // routes
app.use(require('./routes'));

// listening the Server
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});