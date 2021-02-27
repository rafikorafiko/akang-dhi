let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
⚠️ *INFO BOT* ⚠️
Dibuat dengan javascript via NodeJs,Ffmpeg,dan ImageMagick

Script: @Nurotomo
Github: 
https://github.com/dhiwidhi/akang-dhi.git

*Sosmed :*
➥ Instagram
@kangwid_20

*Thanks To :*
Allah S.W.T
orang tua
Nurotomo
Dan kawan yang lain :)

╠═〘 DONASI 〙 ═
╠➥ SmartFren: 0881-954-7416
╠➥ Ovo: 0881-954-7416
╠➥ Indosat im3 :0858-0717-4320
║>Bot on jam 08.00 pagi
╠═〘 INFO BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

