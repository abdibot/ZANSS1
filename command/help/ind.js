exports.limitcount = (prem, limitCounts) => {
	return`
*γ LIMIT COUNT γ*
Sisa limit : ${prem ? '1000' : `${limitCounts}`}
`
}
exports.limitend = (pushname) => {
	return`Maaf ${pushname} limit hari ini telah habis\nlimit di reset setiap jam 24:00`
}
exports.noregis = (pushname) =>{
	return` πββοΈ Halo ${pushname} lu belum daftar. Ketik .daftar dulu`
	}
exports.regis = () =>{
	return` Lu udah daftar π`
	}
exports.daftar = (sender, pushname, time, serialUser, totalUser) =>{
	return` *PENDAFTARAN BERHASIL*

β’ Nama : ${pushname}
β’ Nomor : ${sender.split("@")[0]}
β’ Waktu : ${time}
β’ Serial : ${serialUser}

Thanks yak udah daftar, sekarang ketik .menu untuk melihat 
fitur bot.
`
	}
exports.owner = (botname) =>{
	return` πββοΈ Command khusus owner ${botname}`
	}
exports.admin = (groupName) =>{
	return`πββοΈ Command khusus admin ${groupName}`
	}
exports.adminB = () =>{
	return`β οΈ Bot bukan admin grup`
	}
exports.err = () =>{
	return`β οΈ Fitur ini sedang eror !`
	}
exports.group = () =>{
	return`πββοΈ Command khusus di dalam group`
	}

exports.wait = () =>{
	return`β³ Sedang di proses ~`
	}
exports.ok = () =>{
	return` β Oke done ~`
	}
exports.welcome = () =>{
	return`Jangan Lupa Intro Ya~
β―ΦΈ   ΦNama :
β―ΦΈ   ΦUmur :
β―ΦΈ   ΦKelamin :
β―ΦΈ   ΦAskot :
β°β α¬ _Patuhi Rules Group Ya_  >_<`
      }
exports.leave = () =>{
	return`
β
β°β α¬ _Balik Lagi Wajib Donasi Ya_ >_<`
}
exports.menu = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

β­ββ¬£ *List Menu*
β β’ ${prefix}menu
β β’ ${prefix}help
β β’ ${prefix}zanss
β
β *Download*
β β’ ${prefix}play [query]
β β’ ${prefix}song [judul lagu]
β β’ ${prefix}pinterest [query]
β β’ ${prefix}ytmp3 [url]
β β’ ${prefix}ytmp4 [url]
β β’ ${prefix}tiktok [url]
β β’ ${prefix}tiktoknowm [url]
β β’ ${prefix}tiktokwm [url]
β β’ ${prefix}tiktokaudio [url]
β β’ ${prefix}soundcloud [url]
β β’ ${prefix}telesticker [url]
β β’ ${prefix}spotify [url]
β β’ ${prefix}spotifysearch [query]
β β’ ${prefix}nhentai [code]
β β’ ${prefix}nhentaipdf [code]
β β’ ${prefix}nhentaisearch [query]
β
β *Convert*
β β’ ${prefix}stiker [video/image]
β β’ ${prefix}semoji π
β β’ ${prefix}smeme [text]
β β’ ${prefix}memegen [text|text2]
β β’ ${prefix}fast [video/vn]
β β’ ${prefix}tupai [video/vn]
β β’ ${prefix}vibra [video/vn]
β β’ ${prefix}robot [video/vn]
β β’ ${prefix}slow [video/vn]
β β’ ${prefix}bass [video/vn]
β β’ ${prefix}nightcore [video/vn]
β
β *Education*
β β’ ${prefix}nuliskiri [text]
β β’ ${prefix}nuliskanan [text]
β β’ ${prefix}foliokiri [text]
β β’ ${prefix}foliokanan [text]
β
β *Islamic*
β β’ ${prefix}listsurah
β β’ ${prefix}alquran
β β’ ${prefix}asmaulhusna
β β’ ${prefix}kisahnabi
β β’ ${prefix}alquranaudio
β β’ ${prefix}jadwalsholat
β
β *Maker Ephoto360*
β β’ ${prefix}wetglass
β β’ ${prefix}multicolor3d
β β’ ${prefix}watercolor
β β’ ${prefix}luxurygold
β β’ ${prefix}galaxywallpaper
β β’ ${prefix}lighttext
β β’ ${prefix}beautifulflower
β β’ ${prefix}puppycute
β β’ ${prefix}royaltext
β β’ ${prefix}heartshaped
β β’ ${prefix}birthdaycake
β β’ ${prefix}galaxystyle
β β’ ${prefix}hologram3d
β β’ ${prefix}greenneon
β β’ ${prefix}glossychrome
β β’ ${prefix}greenbush
β β’ ${prefix}metallogo
β β’ ${prefix}noeltext
β β’ ${prefix}glittergold
β β’ ${prefix}textcake
β β’ ${prefix}starsnight
β β’ ${prefix}wooden3d
β β’ ${prefix}textbyname
β β’ ${prefix}writegalacy
β β’ ${prefix}galaxybat
β β’ ${prefix}snow3d
β β’ ${prefix}birthdayday
β β’ ${prefix}goldplaybutton
β β’ ${prefix}silverplaybutton
β β’ ${prefix}freefire
β
β *Maker TextPro*
β β’ ${prefix}blackpink
β β’ ${prefix}neon
β β’ ${prefix}greenneon
β β’ ${prefix}advanceglow
β β’ ${prefix}futureneon
β β’ ${prefix}sandwriting
β β’ ${prefix}sandsummer
β β’ ${prefix}sandengraved
β β’ ${prefix}metaldark
β β’ ${prefix}neonlight
β β’ ${prefix}holographic
β β’ ${prefix}text1917
β β’ ${prefix}minion
β β’ ${prefix}deluxesilver
β β’ ${prefix}newyearcard
β β’ ${prefix}bloodfrosted
β β’ ${prefix}halloween
β β’ ${prefix}jokerlogo
β β’ ${prefix}fireworksparkle
β β’ ${prefix}natureleaves
β β’ ${prefix}bokeh
β β’ ${prefix}toxic
β β’ ${prefix}strawberry
β β’ ${prefix}box3d
β β’ ${prefix}roadwarning
β β’ ${prefix}breakwall
β β’ ${prefix}icecold
β β’ ${prefix}luxury
β β’ ${prefix}cloud
β β’ ${prefix}summersand
β β’ ${prefix}horrorblood
β β’ ${prefix}thunder
β
β *Game*
β β’ ${prefix}tebakgambar 
β
β *Info*
β β’ ${prefix}owner
β β’ ${prefix}daftar
β
β *Owner*
β β’ ${prefix}broadcast (LAGI EROR) 
β β’ ${prefix}leave
β β’ >
β β’ $
β β’  => 
β
β *Group*
β β’ ${prefix}antilink 1 / 0
β β’ ${prefix}hidetag [text]
β β’ ${prefix}linkgrup
β β’ ${prefix}tagall
β β’ ${prefix}kick @tag
β β’ ${prefix}setdesc [text] 
β β’ ${prefix}setname [text] 
β°ββ¬£
`
	}