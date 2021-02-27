let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Smartfrem [08819547416]
│ • Indosat im3 [085807174320]
│ • Dana [08819547416]
│• Ovo [08819547416]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/628819547416
╰────

Ini *#caranya untuk Donasi*
*Cara Donasi*:
1.) Beli ke pulsa/ konter terdekat semisal Indomaret
2.) Bilang ke konter terdekat..
"Beli pulsa indosat im3"
3.)Dan terus masukkan nomor kami 085807174320
4.) Jika sudah kirim bukti ke sini.. Terimakasih
*Karena bot bisa on mengunakan data*
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
