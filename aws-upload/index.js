const fs = require("fs");
const AWS = require("aws-sdk");
AWS.config.loadFromPath("./AwsConfig.json");

// var s3 = new AWS.S3();
// s3.createBucket({ Bucket: "myBucket" });

var s3Bucket = new AWS.S3({ params: { Bucket: "ads-resource" } });

var imageFile = fs.readFileSync("./cake.jpeg");
var data = { Key: "cake", Body: imageFile };
s3Bucket.putObject(data, function(err, data) {
  if (err) {
    console.log("Error uploading data: ", data);
  } else {
    console.log("succesfully uploaded the image!");
  }
});
