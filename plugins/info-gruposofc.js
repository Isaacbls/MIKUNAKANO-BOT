iIlet media = './Menu7.png'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
    await conn.sendMessage(m.chat, { react: { text: '📇', key: m.key } })
let str = `*🔮 GRUPOS OFICIALES*

    *_╭━━━⊜ ┋✿Miku Nakano-Bot_*
  *_┃🌩❏ ${gp1}_*
*_╰━━━━━━━━━━━━━━━━⊜_*

    *_╭━━━⊜ SakuraBot Test_*
  *_┃🌩❏ ${g2}_*
*_╰━━━━━━━━━━━━━━━━⊜_*

 *🔮 GRUPOS EN COLABORACIÓN*

    *_╭━━━⊜ Curiosity y SakuraBot_*
  *_┃🌦❏ ${g3}_*
*_╰━━━━━━━━━━━━━━━━⊜_*

    *_╭━━━⊜ NovaBot & SakuraBot_*
  *_┃🌦❏ ${g4}_*
*_╰━━━━━━━━━━━━━━━━⊜_*

  *🔮 CANAL OFICIAL*

    *_╭━━━⊜ Canal SakuraLite_*
  *_┃🌦❏ ${channel}_*
*_╰━━━━━━━━━━━━━━━━⊜_*`
await conn.sendFile(m.chat, media, 'gata.mp4', str, fkontak)}

handler.command = /^grupos|linksk|gruposofc|gruposoficiales$/i
handler.register = true
handler.exp = 33

export default handler
