const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_34_10_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyNixcbiAgICAgICAgOTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDI1LFxuICAgICAgICAzNixcbiAgICAgICAgMTQ3LFxuICAgICAgICA0OSxcbiAgICAgICAgMjE4LFxuICAgICAgICA0NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAzMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDY2LFxuICAgICAgICA3NixcbiAgICAgICAgODMsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDg5LFxuICAgICAgICA0LFxuICAgICAgICA2MixcbiAgICAgICAgMTMwLFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTEsXG4gICAgICAgIDEzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDMxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTksXG4gICAgICAgIDM2LFxuICAgICAgICAyMixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDczLFxuICAgICAgICAxODEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0LFxuICAgICAgICA2MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTczLFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA3OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDc1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgODcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDUxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTk2LFxuICAgICAgICA5MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTYxLFxuICAgICAgICAwLFxuICAgICAgICA5NixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDg3LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTk4LFxuICAgICAgICA5NSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDMzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODIsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDk0LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDgwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNSxcbiAgICAgICAgMTM1LFxuICAgICAgICA4NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDczLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA0OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTU5LFxuICAgICAgICA1NixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNixcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDYxLFxuICAgICAgICAxOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTQxLFxuICAgICAgICA3OSxcbiAgICAgICAgMjE4LFxuICAgICAgICA5MixcbiAgICAgICAgMjksXG4gICAgICAgIDE3NyxcbiAgICAgICAgOSxcbiAgICAgICAgMjI4LFxuICAgICAgICA0OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDYyLFxuICAgICAgICA2NixcbiAgICAgICAgMjI4LFxuICAgICAgICA2MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNSxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjdiK3piU2xNRVJyT05rS3ZaQnVDQzVxcms1M0tmYVhDcWZYWlVpMHA1Vjg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjRxeEF5VnRMUkgtTlhpcXl6SnowekFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTVhMjVlZmUtODZiNS00NmJmLWI2MDQtMTg4ZjMxY2FlOTE5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMixcbiAgICAgIDI0MCxcbiAgICAgIDI0NSxcbiAgICAgIDI0LFxuICAgICAgODAsXG4gICAgICA3NyxcbiAgICAgIDM5LFxuICAgICAgMTI0LFxuICAgICAgODYsXG4gICAgICA4NCxcbiAgICAgIDQ3LFxuICAgICAgMTIzLFxuICAgICAgOSxcbiAgICAgIDIxNyxcbiAgICAgIDEwNCxcbiAgICAgIDk1LFxuICAgICAgMzMsXG4gICAgICAxMjAsXG4gICAgICAxMzEsXG4gICAgICAyMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjcsXG4gICAgICAxODAsXG4gICAgICAyMjcsXG4gICAgICAyMzIsXG4gICAgICA0MCxcbiAgICAgIDExOSxcbiAgICAgIDI0NixcbiAgICAgIDE0NyxcbiAgICAgIDEyNixcbiAgICAgIDE1MyxcbiAgICAgIDExMyxcbiAgICAgIDI0MixcbiAgICAgIDgsXG4gICAgICAyNSxcbiAgICAgIDE0MixcbiAgICAgIDE3OSxcbiAgICAgIDE5NSxcbiAgICAgIDEzNSxcbiAgICAgIDM1LFxuICAgICAgNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNUdWODQ1QlRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwNzA1NDk0NDM6NjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI0NzM5MjI5NzQ5NDEzOjYxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ00yZzhLUUVFTzdSdUxnR0dBd2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiOE1ZSytCUTZENFRhV0xDcldKTmk2VHd4M09ISjZBNXFqSFdVZTBPM0dtaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJubVh5VGluZTI4U25NWDZhdEZMaUNWd0tkaUlxWkFWalhaQVh2NWM2bXRjckpjT2c2aXU1TG8yQVk5M1F3QnhzU1dvdHAyK2ZJZDMrWjFNa1hVaDFBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJZRktSODJJN09mTmpEZW9MSnZpamxnMlQzaGQvUzQ0L2RxU1R5aHRoaFUxMVBLMkhtRWMwMUNxKzh6SDRtSTZ3SEEyeWtqZnV2a0dvejh1Skp0Sy9EZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDcwNTQ5NDQzOjYxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI4OTgxMjM0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRGJQXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEYlAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJuQUlidGlIMjV1T2pESTBCVnpjUlV3amtGRE5SSlFSUU93emVDYzZuOHlzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExNTEwNzg0NzUsXCJjdXJyZW50SW5kZXhcIjoxMCxcImRldmljZUluZGV4ZXNcIjpbMCwxMF19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
