# EasySoft Kennsla - LADDER Builder

Kennsluvefur fyrir PLC forritun með EasySoft 8 / easyE4.

## 🔗 Hýst á Netlify

Vefurinn er hýstur á [Netlify](https://netlify.com) beint frá GitHub.

## ⚡ LADDER Builder

Gagnvirkt verkfæri þar sem nemendur forrita LADDER logic:

- **Snertur**: NO/NC contacts (i1-i16, M1-M16)
- **Spólur**: Coil, SET, RESET (Q1-Q12, M1-M16)  
- **Tímar**: TON, TOF, PULSE, FLASH með S/MM:SS/HH:MM tímasniði
- **Teljarar**: CNT með C/D/R línum
- **Analog**: IA1-IA4 inngangar (0-1000 = 0-10V)
- **Compare**: CMP blokkir til að bera saman analog gildi
- **6+1 reitir** á hverju network, parallel branches

### Hermun
- **Færiband**: Mótor áfram/aftur, B1-B3 skynjarar, S1/S2 push buttons, R/Y/G turn ljós
- **Umferðarljós**: Tímastýrð umferðarljós
- **Tank/Fyllingarstöð**: Tvær dælur, drain, 4 vatnsstigsskynjarar (HiHi/Hi/Lo/LoLo), IA2 stilliviðnám með setpoint línu, R/Y/G turn ljós

### Eiginleikar
- Drag & drop og lyklaborð forritun
- Eiginleikar panel með dropdowns fyrir alla íhluti
- Export/Import í .txt skrá með REX auðkenni
- Tvítyngt viðmót (IS/EN)

## 📚 Kennslukaflar

1. **Uppsetning vélar** - IP tala, einingar, tenging
2. **SET/RESET aðferð** - Grunnforritun í LADDER
3. **Blokkir** - Tímar, teljarar, samanburður, markerarar

## 🛠️ Uppsetning

Engrar uppsetningar er þörf - opnaðu `index.html` í vafra eða hýstu á Netlify/GitHub Pages.

### Netlify
1. Tengdu GitHub repo við Netlify
2. Build skipun: *(engin)*
3. Publish directory: `.`

## 👤 Höfundur

**Friðrik Óli Atlason**  
Rafdeild VMA
