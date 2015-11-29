import AWS from 'aws-sdk';

AWS.config.loadFromPath('./config.json');

exports = module.exports = {
  signToAWS: function() {
    var s3 = new AWS.S3();

    var params = {
      Bucket: 'mwsik1',
      Key: 'myKey',
      Expires: 6000
    };

    s3.getSignedUrl('getObject', params, function (err, url) {
      console.log("The URL is", url);
    });
  },
  signAndUploadToAWS: function(filename, filetype, callback) {
    var s3 = new AWS.S3();

    var params = {
      Bucket: 'mwsik1',
      Key: filename,
      Expires: 6000,
      ContentType: filetype
    };

    s3.getSignedUrl('putObject', params, function(err, data) {
      if (err) {
        console.log(err);
        return err;
      } else {
        console.log('data: ', data);
        callback(data);
        //return data;
      }
    });
  },
  removeToAWS: function(filename) {
    var s3 = new AWS.S3();
    console.log('removeToAWS - filename: ', filename);
    var params = {
      Bucket: 'mwsik1',
      Key: 'filename',
      RequestPayer: 'requester'
    };
    s3.deleteObject(params, function(err, data) {
      if (err) {
        console.log(err, err.stack);
      } else {
        console.log(data);
      }
    });
    /*s3.getSignedUrl('deleteObject', params, function(err, data) {
      if (err) {
        console.log(err, err.stack);
      } else {
        console.log('delete: ' + data);
      }
    });*/
  }
};
