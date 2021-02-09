exports.donasi = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagram, telegram, youtube, kapanbotaktif, grupch1, grupch2) => {
	return `🤜🤜{ *MENU DONASI ${BotName}* }🤛🤛
  
  
TERIMA KASIH
*${id.split("@s.whatsapp.net")[0]}*
🐼🐼


🗓*${tampilTanggal}* 🐼
⏰*${tampilWaktu}* 🐼
(Waktu Server)

↡↡↡↡↡↡↡↡↡↡↡↡↡↡↡↡↡↡↡↡↡↡↡↡↡↡↡↡↡↡↡↡↡↡↡↡↡↡↡↡↡↡↡↡↡↡
INI BOT PRIBADI, JADI GA PERLU DONASI!
↟↟↟↟↟↟↟↟↟↟↟↟↟↟↟↟↟↟↟↟↟↟↟↟↟↟↟↟↟↟↟↟↟↟↟↟↟↟↟↟↟↟↟↟↟↟
${instagram}
${telegram}

`
}
