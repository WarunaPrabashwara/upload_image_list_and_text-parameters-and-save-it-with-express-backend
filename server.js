const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');

const app = express();
const port = 3000;

// Use the express-fileupload middleware
app.use(fileUpload());

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle image upload

app.post('/upload', (req, res) => {
  // Log the files to the console
//  console.log(req.files);

  const  { image, image2 } = req.files

  
  image.mv(__dirname + '/upload/' + image.name)
  image2.mv(__dirname + '/upload/' + image2.name )   
  
  console.log('dddd')
  console.log( req.body )
  console.log( req.body.texttoupload)
  // All good
  res.sendStatus(200);
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});