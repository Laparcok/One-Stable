// Tambahin Link Kalian Sendiri
let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
━━━━━━━━━━━━━━━
_*Grup Official*_
━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━ꕥ
┃ *_Grup Utama_*  : https://tinyurl.com/y5ck3k4u => 𝐑𝐚𝐦𝐞𝐢𝐧 𝐛𝐚𝐧𝐡:𝐯 𓂺
┃ *_Grup Kedua_*  : 𝐍𝐨𝐭 𝐟𝐨𝐮𝐧𝐝
┃ *_Grup Ketiga_* : 𝐍𝐨𝐭 𝐟𝐨𝐮𝐧𝐝
┃ *_Grup Keempat_* : 𝐍𝐨𝐭 𝐟𝐨𝐨𝐮𝐧𝐝
┃ *_Grup Kelima_* : 𝐍𝐨𝐭 𝐅𝐨𝐮𝐧𝐝
┗━━━━━━━━━━━━━ꕥ
`.trim()
conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'One Groups')).buffer(), ext, 'One', 'SIAP BANG🗿', 'Iya', 'Owner', '.owner', m)

}
handler.help = ['gcbot']
handler.tags = ['main']
handler.command = /^(gcbot)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
