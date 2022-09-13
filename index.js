const express = require('express');
const routes = require('./src/routes');
const app = express();
const cors = require('cors');
app.set('port', (process.env.PORT || 5000));

const corsOptions ={
    origin:'*', 
    credentials:true,            
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use(express.json());
app.use('/api', routes);

app.listen(app.get('port'), () => {
    
    console.log('Betterme server started on port 5000');
});
