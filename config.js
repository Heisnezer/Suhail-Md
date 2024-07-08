const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lagos,Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null,2347017768907";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_39_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIwLFxuICAgICAgICAxODcsXG4gICAgICAgIDg3LFxuICAgICAgICA3LFxuICAgICAgICA1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjE0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDM5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjMsXG4gICAgICAgIDYzLFxuICAgICAgICAyMSxcbiAgICAgICAgODksXG4gICAgICAgIDk4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDQ3LFxuICAgICAgICA5NixcbiAgICAgICAgNjksXG4gICAgICAgIDgwLFxuICAgICAgICAxMzksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjI1LFxuICAgICAgICA0NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTIwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTMwLFxuICAgICAgICA5NixcbiAgICAgICAgMTM3LFxuICAgICAgICA4MixcbiAgICAgICAgMTcxLFxuICAgICAgICAyNixcbiAgICAgICAgOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTA1LFxuICAgICAgICA5OSxcbiAgICAgICAgNSxcbiAgICAgICAgMjMzLFxuICAgICAgICA5LFxuICAgICAgICAxLFxuICAgICAgICA5OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjA0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMixcbiAgICAgICAgMTY4LFxuICAgICAgICA5MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDUwLFxuICAgICAgICA3OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTksXG4gICAgICAgIDc4LFxuICAgICAgICA0MCxcbiAgICAgICAgODIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjE2LFxuICAgICAgICA1MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAzMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwMixcbiAgICAgICAgODIsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDM0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQzLFxuICAgICAgICAyNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTg2LFxuICAgICAgICA1OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNSxcbiAgICAgICAgOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTIyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTgzLFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDM2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjE3LFxuICAgICAgICA1NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDksXG4gICAgICAgIDgyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDUsXG4gICAgICAgIDU1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDMzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDQzLFxuICAgICAgICA0MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTM3LFxuICAgICAgICA4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDExNyxcbiAgICAgICAgOCxcbiAgICAgICAgODYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQxLFxuICAgICAgICA5MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjAzLFxuICAgICAgICA2NixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDk5LFxuICAgICAgICAyMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDksXG4gICAgICAgIDU0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODMsXG4gICAgICAgIDE5NixcbiAgICAgICAgODksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTg2LFxuICAgICAgICA3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDksXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY1LFxuICBcImFkdlNlY3JldEtleVwiOiBcImZBeGdnNmFQUVFnQnRFZTNGS2NodE1TditoTmZIMWFOTTAzU1B2Rjk5d3M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlhCOE9VOHhEU0EtenVMSGJMQTdFZ0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNmYyNWQ3MjctYTFmNC00ZjkyLTkyNmYtMDlmYWIwMjFhZTY2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk4LFxuICAgICAgNzAsXG4gICAgICAyNDEsXG4gICAgICAxNDEsXG4gICAgICAxNTQsXG4gICAgICAwLFxuICAgICAgMTgzLFxuICAgICAgMjQwLFxuICAgICAgNCxcbiAgICAgIDE0OSxcbiAgICAgIDAsXG4gICAgICA5NyxcbiAgICAgIDIwOSxcbiAgICAgIDI0MSxcbiAgICAgIDI1MCxcbiAgICAgIDExMixcbiAgICAgIDIwMCxcbiAgICAgIDExMixcbiAgICAgIDI4LFxuICAgICAgMjE4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTIsXG4gICAgICA1OSxcbiAgICAgIDIyNSxcbiAgICAgIDk1LFxuICAgICAgMTc0LFxuICAgICAgMTQsXG4gICAgICA5MCxcbiAgICAgIDE0NixcbiAgICAgIDE0NixcbiAgICAgIDIzMCxcbiAgICAgIDE2MCxcbiAgICAgIDE2MyxcbiAgICAgIDE2MixcbiAgICAgIDg3LFxuICAgICAgMTY3LFxuICAgICAgMjQ1LFxuICAgICAgNSxcbiAgICAgIDE0MCxcbiAgICAgIDE2MyxcbiAgICAgIDEzMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0s3Z3dVa1FsSkN3dEFZWUFpQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYUhSQi9TSnphZFZoQXNlaDRQL1lSdzlCZEdWUGpXRWVMY0RJbkdveEEwYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJxRHZWU1lhMTVEVjRPbkdVTTUwWG9HR2MyeDdlbWdwVDBzRVFPclM0L0tHUEYvL0VhdDJiekRRRDlXMnVaUHY0dElZdlV5R0lBRDNwdG00b3Q3ekVDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJsT1F5VGFCbldTRW9TUk1JTDBQWGk5angwSHFGVGVBRnJvM2JBaXY5TXgvWDhpRk5vNE13NGQxcW1KUUVxaWVQOHk2cVUzNWFuNDQ3ZndXQm5aUDlodz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwMTc3Njg5MDc6NjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJOZXplciBUdlwiLFxuICAgIFwibGlkXCI6IFwiMTI0Mzg2OTE2OTgyODU0OjY3QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzAxNzc2ODkwNzo2N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMyxcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNDUzMTQ0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQkwxXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCTDEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJMMHRlaTIvTFp6dXM3elJzWGtIV1dHZ1M4QlQ4d1BWM25aYUlsSzAwdHVBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1NDE2OTM5MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzE4NDU5ODIyNzE4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
