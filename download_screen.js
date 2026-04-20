const https = require('https');
const fs = require('fs');

const file = fs.createWriteStream("pages/quote.html");
https.get("https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sX2QzYWZlOGJjMTYyZDQ1NmI4MDhhYTQwZTFlZjc3MDE2EgsSBxCdw_CfgwYYAZIBIwoKcHJvamVjdF9pZBIVQhM0MTg5MDMzMTE0NzE5MTE0Mjky&filename=&opi=89354086", function(response) {
  response.pipe(file);
  file.on("finish", () => {
      file.close();
      console.log("Download Completed");
  });
});
