const fs = require('fs');
const AWS = require('aws-sdk');
const BUCKET_NAME = 's3-028bucket';
const s3 = new AWS.S3({accessKeyId: '#', secretAccessKey: '#'});

const uploadFile = (fileName) => {
    const fileContent = fs.readFileSync(fileName);
    const params = {
      Bucket: 's3-jucha',
      Key: 'axios.png',
      Body: fileContent
    };
    s3.upload(params, function(err, data) {
      if (err) {throw err;}
      console.log(`File uploaded successfully. ${data.Location}`);
    });
};
uploadFile('axios.png');
