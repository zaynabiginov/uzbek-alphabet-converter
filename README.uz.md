# Uzbek Alphabet Converter — foydalanish qo‘llanmasi

O‘zbek Alphabet Converter — o‘zbekcha matnni kirill yozuvi, yangi lotin yozuvi va
apostrofli lotin yozuvi o‘rtasida o‘giradigan bepul veb-ilova. Matnni bevosita
maydonga kiritish yoki hujjatlarni yuklash mumkin. Konvertatsiya brauzerda,
qurilmangizning o‘zida bajariladi; fayllar serverga yuborilmaydi.

## Imkoniyatlar

- Matn va qo‘llab-quvvatlanadigan hujjatlarni uch yozuv orasida o‘girish.
- Matn natijasini nusxalash yoki UTF-8 kodlangan `.txt` fayl sifatida yuklab olish.
- Bir martada 15 tagacha faylni qayta ishlash; har bir fayl 200 MB gacha.
- Muvaffaqiyatli fayllarni alohida yoki bitta ZIP arxivida yuklab olish.
- O‘zbekcha yoki ruscha interfeys, shuningdek yorug‘, qorong‘i yoki tizim mavzusi.
- Fayllar uchun qisqa natija ko‘rinishini va xatolarni ko‘rish.

## Yozuvlar

Konvertatsiya — alifbo o‘girish, tarjima emas. Ishni boshlashdan oldin matn
qaysi yozuvda ekanini **manba** ro‘yxatidan, kerakli natijani esa **maqsad**
ro‘yxatidan tanlang:

1. **O‘zbek kirill yozuvi** — masalan, `Ўзбекистон`.
2. **Yangi o‘zbek lotin yozuvi** — `Oʻ` va `Gʻ` uchun `Ö` va `Ğ`, `Sh` va `Ch`
   uchun `Ş` va `Ç` ishlatiladi; masalan, `Oʻzbekiston` → `Özbekiston`.
3. **Apostrofli o‘zbek lotin yozuvi** — `O'`, `G'`, `Sh` va `Ch` shakllari;
   masalan, `O'zbekiston`.

Kirilldan lotinga o‘girishda harflarning katta-kichikligi saqlanadi. Lotin
yozuvlaridan kirillga o‘girishda ilova `oʻ/gʻ`, `sh`, `ch`, `shch`, `yo`, `yu`,
`ya` va `ts` kabi harf birikmalarini taniydi. Turli apostrof belgilarini ham
qabul qiladi. Natija kerakli imloga mos kelishini yuklab olishdan oldin tekshirib
chiqing: avtomatik o‘girish imlo tekshiruvi yoki tarjimaning o‘rnini bosmaydi.

## Qo‘llab-quvvatlanadigan fayllar

| Format | Natija | Izoh |
| --- | --- | --- |
| `.txt` | `.txt` | UTF-8 matni bo‘laklarda qayta ishlanadi; katta fayllar ko‘proq vaqt yoki xotira talab qilishi mumkin. |
| `.doc` | `.doc` | Matn ajratiladi va RTF-mos Word hujjatiga yoziladi. Asl formatlash, jadvallar tuzilishi va rasmlar saqlanmaydi. |
| `.docx` | `.docx` | Asosiy matn, sarlavha, kolontitul, izohlar va yakuniy izohlardagi matn o‘giriladi; arxiv tuzilishi saqlanadi. |
| `.xlsx` | `.xlsx` | Ish kitobi XML qismlarida topilgan matn o‘giriladi. |
| `.pptx` | `.pptx` | Taqdimot XML qismlarida topilgan matn o‘giriladi. |
| `.pdf` | `.pdf` | Tanlanadigan matn topilgan sahifalar rasmga aylantiriladi va matn taxminan qayta chiziladi. |

### Cheklovlar

- Eski `.xls` va `.ppt` formatlari qo‘llab-quvvatlanmaydi.
- Skanerlangan, tanlanadigan matn qatlami bo‘lmagan PDF fayllar o‘girilmaydi.
- Natijaviy PDF sahifalari rasmlardan tuziladi: matnni belgilab nusxalab bo‘lmaydi;
  havolalar, formalar va sahifa ko‘rinishining ayrim tafsilotlari saqlanmasligi
  mumkin.
- PDF matni sahifaga taxminan qayta joylanadi. Shuning uchun shrift, satrlar
  oralig‘i yoki matn joylashuvi asl nusxadan farq qilishi mumkin.
- Eski `.doc` fayllari asl hujjat ko‘rinishini saqlamaydi; natija RTF-mos matnli
  Word hujjati bo‘ladi.
- Parol bilan himoyalangan Office hujjatlari va ZIP64 Office arxivlari
  qo‘llab-quvvatlanmaydi. Office arxivining ochilgan hajmi 500 MB dan oshsa,
  fayl rad etiladi.
- Katta fayllarni qayta ishlash qurilmada qo‘shimcha xotira talab qiladi.
  Konvertatsiya tugaguncha sahifani yopmang.

## Ishga tushirish

Loyiha statik sayt hisoblanadi: yig‘ish (build) bosqichi va paket o‘rnatish
talab qilinmaydi. PDF va DOC parserlari loyiha ichida mavjud; ular uchinchi
tomon CDN manzilidan yuklanmaydi. JavaScript modullarini to‘g‘ri yuklash uchun
saytni HTTP orqali ishga tushirish tavsiya etiladi.

1. Repozitoriyani yuklab oling yoki klonlang:

   ```sh
   git clone https://github.com/zaynabiginov/uzbek-alphabet-converter.git
   cd uzbek-alphabet-converter
   ```

2. Loyiha papkasida mahalliy HTTP serverni ishga tushiring. Python 3 misoli:

   ```sh
   python -m http.server 8000
   ```

   Windows’da PowerShell yoki buyruq satrida ham shu buyruqdan foydalanish
   mumkin. Agar `python` buyrug‘i topilmasa, `py -m http.server 8000` ni sinab
   ko‘ring.

3. Brauzerda <http://localhost:8000> manzilini oching.

## Foydalanish

### Matnni o‘girish

1. Manba va maqsad yozuvlarini tanlang.
2. Matnni chapdagi maydonga kiriting yoki joylang.
3. **Matnni konvertatsiya qilish** tugmasini bosing.
4. Natijani o‘ngdagi maydonda tekshiring. **Nusxalash** orqali buferga oling
   yoki **TXT yuklab olish** orqali `.txt` faylni saqlang.

### Faylni o‘girish

1. Yozuv yo‘nalishini tanlang.
2. **Fayl tanlash** tugmasini bosing yoki fayllarni yuklash maydoniga sudrab
   olib keling.
3. Har bir fayl 200 MB dan oshmasligi va qo‘llab-quvvatlanadigan formatda
   bo‘lishi kerak. Bir martada 15 tagacha fayl tanlanadi.
4. **Konvertatsiya qilish** tugmasini bosing. Fayllar navbat bilan qayta
   ishlanadi; muvaffaqiyat va xatolar natijalar ro‘yxatida ko‘rsatiladi.
5. Natijani alohida yuklab oling yoki muvaffaqiyatli natijalarning barchasini
   ZIP arxivida saqlang.

## Loyiha tuzilishi

```text
.
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── app.js
├── vendor/
│   ├── doc-parser/
│   │   ├── LICENSE
│   │   └── dist/
│   └── pdfjs/
│       ├── LICENSE
│       ├── README.txt
│       ├── pdf.min.mjs
│       └── pdf.worker.min.mjs
├── favicon.svg
├── README.md
├── README.uz.md
├── README.ru.md
└── README.en.md
```

## Maxfiylik va litsenziyalar

Matn va fayllar foydalanuvchining brauzerida qayta ishlanadi va konvertatsiya
uchun serverga yuklanmaydi. Biroq saytni internetda joylashtirsangiz, brauzer
saytning o‘z fayllarini hostingdan oladi.

Paketlangan PDF.js Apache License 2.0, eski DOC parseri esa MIT litsenziyasi
ostida tarqatiladi. Batafsil ma’lumot va litsenziya matnlari tegishli
`vendor` papkalaridagi fayllarda berilgan.

---

[Русский](README.ru.md) | [English](README.en.md) | [Bosh sahifa](README.md)
