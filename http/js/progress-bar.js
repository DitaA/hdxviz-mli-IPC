d3.json('https://ds-ec2.scraperwiki.com/3grrlc8/pchhes1jjv0k8fi/sql?q=select * from crowdsourced_data', function(error, json) {
     if (error) return console.log('There was an error:' + error);
     responseData = json;

     d3.json('https://ds-ec2.scraperwiki.com/3grrlc8/pchhes1jjv0k8fi/sql?q=select%20*%20from%20cap_appeals_list', function(error, json) {
       if (error) return console.log('There was an error:' + error);
       capData = json;

  });
});
