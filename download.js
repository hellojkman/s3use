const fs = require('fs');
const AWS = require('aws-sdk');
const BUCKET_NAME = 's3-jucha';
const S3 = new AWS.S3({accessKeyId: '#', secretAccessKey:     '#' });
const downloadFile = (fileName) => {
    const params = {
      Bucket: 's3-jucha',
      Key: 'axios.png'
    };
      S3.getObject(params, function(err, data) {
        if (err) { throw err; }
	fs.writeFileSync(fileName, data.Body.toString());
      });
};
downloadFile('axios.png');
