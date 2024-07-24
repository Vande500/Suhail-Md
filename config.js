const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "237680396003";




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
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_01_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDQwLFxuICAgICAgICA3LFxuICAgICAgICAzMSxcbiAgICAgICAgMjMzLFxuICAgICAgICA4OSxcbiAgICAgICAgMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTIyLFxuICAgICAgICA0MyxcbiAgICAgICAgMjI5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDksXG4gICAgICAgIDEyMixcbiAgICAgICAgNTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIwLFxuICAgICAgICA5NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDczLFxuICAgICAgICA5NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDY1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTU5LFxuICAgICAgICA0NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTM0LFxuICAgICAgICA1NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDg0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDY5LFxuICAgICAgICA2MCxcbiAgICAgICAgMjAwLFxuICAgICAgICA1MyxcbiAgICAgICAgMzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDQxLFxuICAgICAgICA3NCxcbiAgICAgICAgMzksXG4gICAgICAgIDYsXG4gICAgICAgIDAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzksXG4gICAgICAgIDk0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTM3LFxuICAgICAgICA5NixcbiAgICAgICAgMjUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTU0LFxuICAgICAgICA2NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDQ4LFxuICAgICAgICA0MyxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTEwLFxuICAgICAgICA1MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNSxcbiAgICAgICAgMjAyLFxuICAgICAgICA1NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjExLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgNTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTAwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTU2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDg4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjA5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjI4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTQyLFxuICAgICAgICA2MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxODQsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTAyLFxuICAgICAgICA1NixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDY2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTgzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTE2LFxuICAgICAgICA3MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMyxcbiAgICAgICAgODAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDk5LFxuICAgICAgICA3NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTksXG4gICAgICAgIDI0NixcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDgwLFxuICAgICAgICA2NixcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJtSURsdUtDZHB5TDNETWMvVFQ5TldqbmtqUFRsenJlRHFVL1pvanFVUStVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ3S05LZTE1ZFJXV1FENGhkQTVxa1Z3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjI4OGZjZGFhLTVlZjMtNDk4Ni1iMjhlLWIyYjhjY2M3MjA2Y1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzQsXG4gICAgICAxMjcsXG4gICAgICAxOTIsXG4gICAgICAyMixcbiAgICAgIDEwMyxcbiAgICAgIDEwNyxcbiAgICAgIDIzMCxcbiAgICAgIDE2OCxcbiAgICAgIDI5LFxuICAgICAgMTY3LFxuICAgICAgMTY3LFxuICAgICAgMTE3LFxuICAgICAgODEsXG4gICAgICAxLFxuICAgICAgMTk1LFxuICAgICAgMjM0LFxuICAgICAgMTY2LFxuICAgICAgMTk4LFxuICAgICAgMjAwLFxuICAgICAgMTM2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMwLFxuICAgICAgMixcbiAgICAgIDIyNyxcbiAgICAgIDIyMCxcbiAgICAgIDIxMSxcbiAgICAgIDIzNixcbiAgICAgIDQ5LFxuICAgICAgMTM3LFxuICAgICAgMjA0LFxuICAgICAgMTYxLFxuICAgICAgMTgyLFxuICAgICAgMjQwLFxuICAgICAgNTcsXG4gICAgICAxNSxcbiAgICAgIDM2LFxuICAgICAgMjAwLFxuICAgICAgMzYsXG4gICAgICA2MSxcbiAgICAgIDE2NixcbiAgICAgIDEwMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI1Vjg2RktIUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM3NjgwMzk2MDAzOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0MjE3MjQxMDEzMDU4OTozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0krMS9iOERFT0tmOGJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibFFGV1Z4RXlEUi95bm5neGM5Y05TaGhwRWxBQ2djQXVsbTUzSFg0TksxTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJsdUlzSzBQQkErZldJZnBweHZyL3Q4c2ZTczdNd3JkN1psOVIxMzlVUlROZThrWTFqTklHUFpVYVQxVGtDSlhId2UyQ01FSWVIM1NvdEl0STlHcVJEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI2UVZSNFVMZkcxQ3NGSWFVWUxOZ1RYNFZRNjlpZUVvS3Z3SlFoUDFhMThEbjMrUmpzckladi9KSnd6YUhMc2NDc2VoeCtXWlBvMGdGUVJseU1KOFNpQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzc2ODAzOTYwMDM6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTUyMDEwMlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
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
