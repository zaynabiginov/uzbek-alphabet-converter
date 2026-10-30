const messages = {
  uz: {
    headerTitle: "O‘zbek alifbosi konvertori",
    siteControls: "Sayt boshqaruvlari",
    themeSystem: "Tizim bo‘yicha",
    themeLight: "Yorug‘",
    themeDark: "Qorong‘i",
    help: "Yordam",
    closeHelp: "Yordam oynasini yopish",
    pageTitle: "O‘zbek yozuvini bir zumda o‘giring",
    introText: "O‘zbek yozuvlari orasida matn va hujjatlarni o‘giring. Kerakli alifbolarni tanlang, matnni kiriting yoki faylni yuklang.",
    directionLabel: "Yozuv turini tanlash",
    sourceSelectLabel: "Qaysi yozuvdan",
    targetSelectLabel: "Qaysi yozuvga",
    alphabetCyrillic: "O‘zbek kirill yozuvi",
    alphabetNewLatin: "O‘zbek lotin yozuvi — yangi (Ö, Ğ, Ş, Ç)",
    alphabetApostrophe: "O‘zbek lotin yozuvi — apostrofli",
    fileHeading: "Faylni konvertatsiya qilish",
    filePrivacy: "Fayl qurilmangizda qayta ishlanadi",
    uploadTitle: "Faylni shu yerga olib keling",
    uploadHelp: ".txt, .doc, .docx, .pdf, .xlsx yoki .pptx · 15 tagacha fayl · har biri 200 MB gacha",
    chooseFile: "Fayl tanlash",
    convertFile: "Konvertatsiya qilish",
    resultHeading: "Konvertatsiya natijasi",
    downloadResult: "Natijani yuklab olish",
    downloadAll: "Barchasini ZIP qilib yuklab olish",
    downloadedAll: "Barcha muvaffaqiyatli fayllar ZIP arxivida yuklandi.",
    dividerText: "yoki matnni shu yerda o‘giring",
    textHeading: "Matn bilan ishlash",
    textHelp: "Matnni kiriting yoki joylang — natijani nusxalang",
    sourcePlaceholder: "Masalan: Ассалому алайкум! Ўзбекистон — гўзал юрт.",
    resultPlaceholder: "Natija shu yerda ko‘rinadi",
    convertText: "Matnni konvertatsiya qilish",
    copyText: "Nusxalash",
    downloadText: "TXT yuklab olish",
    privacyLabel: "Maxfiylik:",
    privacyText: "fayllar serverga yuborilmaydi. Barcha konvertatsiya bevosita brauzeringizda amalga oshiriladi.",
    githubCta: "GitHub’da ko‘ring",
    helpTitle: "Yordam",
    helpAlphabetsTitle: "Yozuv turini tanlash",
    helpAlphabetsText: "Manba va natija alifbosini ro‘yxatlardan tanlang: kirill, yangi lotin (Ö, Ğ, Ş, Ç) yoki apostrofli lotin.",
    helpTextTitle: "Matnni o‘girish",
    helpTextStep1: "Matnni chap tomondagi maydonga yozing yoki joylang.",
    helpTextStep2: "«Matnni konvertatsiya qilish» tugmasini bosing.",
    helpTextStep3: "O‘ng tomondagi natijani tekshiring; «Nusxalash» tugmasi natijani almashish buferiga oladi.",
    helpFilesTitle: "Fayl formatlari",
    helpFilesStep1: "«Fayl tanlash»ni bosing yoki fayllarni yuklash maydoniga sudrab olib keling.",
    helpFilesStep2: "Bir martada 15 tagacha .txt, .doc, .docx, .pdf, .xlsx yoki .pptx fayl tanlang. Har bir fayl 200 MB gacha bo‘lishi mumkin.",
    helpFilesStep3: "«Konvertatsiya qilish» tugmasini bosing. Fayllar navbat bilan qayta ishlanadi; katta hujjatlar ko‘proq vaqt olishi mumkin.",
    helpFilesStep4: "Muvaffaqiyatli natijalarni alohida yoki barchasini bitta ZIP arxivi bilan yuklab oling. Xatolik yuz bergan fayllar ro‘yxatda alohida ko‘rsatiladi.",
    helpOfficeDetails: "DOCX, XLSX va PPTX matni hujjat tuzilishi va formatlashini saqlagan holda o‘zgartiriladi. Eski DOC formati matni TXT fayliga aylantiriladi, uning formatlashi va rasmlari saqlanmaydi. Eski .xls va .ppt formatlari qo‘llab-quvvatlanmaydi.",
    helpPdfTitle: "PDF fayllar",
    helpPdfDetails: "PDF sahifalari tasvir ko‘rinishida saqlanadi; topilgan matn taxminan qayta yoziladi. Natijada matn ajratib olinmaydi, havolalar va formalar saqlanmaydi, sahifa maketi va rangi biroz o‘zgarishi mumkin. Matn qatlamisiz skanerlangan PDF fayllar konvertatsiya qilinmaydi.",
    helpPrivacyTitle: "Maxfiylik va katta fayllar",
    helpPrivacy: "Fayllaringiz serverga yuborilmaydi. Ular brauzeringiz xotirasida qayta ishlanadi. Katta fayllar ko‘proq xotira talab qiladi; ishlov berish paytida sahifani yopmang.",
    invalidFile: "Faqat .txt, .doc, .docx, .pdf, .xlsx yoki .pptx fayllarini tanlang.",
    oversizedFile: "Har bir fayl hajmi 200 MB dan oshmasligi kerak.",
    noValidFiles: "Tanlangan fayllar orasida qo‘llab-quvvatlanadigan fayl topilmadi.",
    selectedFiles: "{count} ta fayl tanlandi",
    skippedFiles: "{count} ta fayl o‘tkazib yuborildi: format noto‘g‘ri, fayl 200 MB dan katta yoki 15 ta fayl chegarasidan oshdi.",
    processingFiles: "{total} ta fayldan {current}-si qayta ishlanmoqda: {name}",
    processingPdfPage: "{file}: PDF sahifasi {page}/{total} qayta ishlanmoqda.",
    completedFiles: "Tayyor: {success} ta fayl konvertatsiya qilindi, {failed} tasida xatolik.",
    archiveFailed: "ZIP arxivini yaratib bo‘lmadi: {error}",
    packingArchive: "ZIP arxivi tayyorlanmoqda: {current}/{total} — {name}",
    pdfNoText: "PDF ichida ajratib olinadigan matn yo‘q. Skanerlangan PDF fayllar hozircha qo‘llab-quvvatlanmaydi.",
    fileProcessed: "Muvaffaqiyatli konvertatsiya qilindi.",
    fileProcessFailed: "Konvertatsiya qilib bo‘lmadi: {error}",
    previewResult: "Natijani ko‘rish",
    emptyDocument: "Hujjatda matn topilmadi.",
    fileFailed: "Faylni konvertatsiya qilib bo‘lmadi.",
    convertTextDone: "Matn konvertatsiya qilindi.",
    enterText: "Avval matn kiriting.",
    copiedText: "Natija nusxalandi.",
    copyFailed: "Avtomatik nusxalash ishlamadi — matnni qo‘lda nusxalang.",
    downloadedText: "TXT fayl yuklab olindi.",
    downloadWord: "Word faylni yuklab olish",
    downloadTxt: "TXT faylni yuklab olish",
    downloadPdf: "PDF faylni yuklab olish",
    downloadExcel: "Excel faylni yuklab olish",
    downloadPowerPoint: "PowerPoint faylni yuklab olish",
  },
  ru: {
    headerTitle: "Конвертер узбекского алфавита",
    siteControls: "Настройки сайта",
    themeSystem: "Как в системе",
    themeLight: "Светлая",
    themeDark: "Тёмная",
    help: "Помощь",
    closeHelp: "Закрыть окно помощи",
    pageTitle: "Конвертируйте узбекский текст",
    introText: "Переводите текст и документы между узбекскими письменностями. Выберите алфавиты, введите текст или загрузите файл.",
    directionLabel: "Выбор письменности",
    sourceSelectLabel: "Из какой письменности",
    targetSelectLabel: "В какую письменность",
    alphabetCyrillic: "Узбекская кириллица",
    alphabetNewLatin: "Новая узбекская латиница (Ö, Ğ, Ş, Ç)",
    alphabetApostrophe: "Узбекская латиница с апострофами",
    fileHeading: "Конвертация файла",
    filePrivacy: "Файл обрабатывается на вашем устройстве",
    uploadTitle: "Перетащите файл сюда",
    uploadHelp: ".txt, .doc, .docx, .pdf, .xlsx или .pptx · до 15 файлов · до 200 МБ каждый",
    chooseFile: "Выбрать файл",
    convertFile: "Конвертировать",
    resultHeading: "Результат конвертации",
    downloadResult: "Скачать результат",
    downloadAll: "Скачать все ZIP-архивом",
    downloadedAll: "Все успешно обработанные файлы скачаны одним ZIP-архивом.",
    dividerText: "или конвертируйте текст здесь",
    textHeading: "Работа с текстом",
    textHelp: "Введите или вставьте текст — затем скопируйте результат",
    sourcePlaceholder: "Например: Ассалому алайкум! Ўзбекистон — гўзал юрт.",
    resultPlaceholder: "Здесь появится результат",
    convertText: "Конвертировать текст",
    copyText: "Скопировать",
    downloadText: "Скачать TXT",
    privacyLabel: "Конфиденциальность:",
    privacyText: "файлы не отправляются на сервер. Конвертация выполняется прямо в браузере.",
    githubCta: "Посмотрите на GitHub",
    helpTitle: "Помощь",
    helpAlphabetsTitle: "Выбор письменности",
    helpAlphabetsText: "Выберите исходный и целевой алфавиты: кириллицу, новую латиницу (Ö, Ğ, Ş, Ç) или латиницу с апострофами.",
    helpTextTitle: "Конвертация текста",
    helpTextStep1: "Введите или вставьте текст в левое поле.",
    helpTextStep2: "Нажмите «Конвертировать текст».",
    helpTextStep3: "Проверьте результат справа. Кнопка «Скопировать» поместит его в буфер обмена.",
    helpFilesTitle: "Форматы файлов",
    helpFilesStep1: "Нажмите «Выбрать файл» или перетащите файлы в область загрузки.",
    helpFilesStep2: "Можно выбрать до 15 файлов .txt, .doc, .docx, .pdf, .xlsx или .pptx за раз. Размер каждого — до 200 МБ.",
    helpFilesStep3: "Нажмите «Конвертировать». Файлы обрабатываются по очереди; большие документы могут обрабатываться дольше.",
    helpFilesStep4: "Скачивайте успешные результаты по одному или все сразу одним ZIP-архивом. Ошибки отображаются в списке.",
    helpOfficeDetails: "Текст в DOCX, XLSX и PPTX изменяется с сохранением структуры и форматирования. Текст старого DOC преобразуется в TXT, без исходного оформления и изображений. Форматы .xls и .ppt не поддерживаются.",
    helpPdfTitle: "PDF-файлы",
    helpPdfDetails: "Страницы PDF сохраняются как изображения, найденный текст заменяется приблизительно. В результате текст нельзя выделить, ссылки и формы не сохраняются, оформление и цвета могут немного измениться. Сканированные PDF без текстового слоя не поддерживаются.",
    helpPrivacyTitle: "Конфиденциальность и большие файлы",
    helpPrivacy: "Файлы не отправляются на сервер и обрабатываются в памяти браузера. Большие файлы требуют больше памяти; не закрывайте страницу во время обработки.",
    invalidFile: "Поддерживаются только файлы .txt, .doc, .docx, .pdf, .xlsx и .pptx.",
    oversizedFile: "Размер каждого файла не должен превышать 200 МБ.",
    noValidFiles: "Среди выбранных файлов нет файлов поддерживаемого формата.",
    selectedFiles: "Выбрано файлов: {count}",
    skippedFiles: "Пропущено файлов: {count} — неверный формат, размер больше 200 МБ или превышен лимит в 15 файлов.",
    processingFiles: "Обработка файла {current} из {total}: {name}",
    processingPdfPage: "{file}: обработка страницы PDF {page} из {total}.",
    completedFiles: "Готово: успешно конвертировано — {success}, с ошибками — {failed}.",
    archiveFailed: "Не удалось создать ZIP-архив: {error}",
    packingArchive: "Создание ZIP-архива: {current}/{total} — {name}",
    pdfNoText: "В PDF нет извлекаемого текста. Сканированные PDF пока не поддерживаются.",
    fileProcessed: "Успешно конвертирован.",
    fileProcessFailed: "Не удалось конвертировать: {error}",
    previewResult: "Показать результат",
    emptyDocument: "В документе не найден текст.",
    fileFailed: "Не удалось конвертировать файл.",
    convertTextDone: "Текст конвертирован.",
    enterText: "Сначала введите текст.",
    copiedText: "Результат скопирован.",
    copyFailed: "Не удалось скопировать автоматически — скопируйте текст вручную.",
    downloadedText: "TXT-файл скачан.",
    downloadWord: "Скачать Word-файл",
    downloadTxt: "Скачать TXT-файл",
    downloadPdf: "Скачать PDF-файл",
    downloadExcel: "Скачать Excel-файл",
    downloadPowerPoint: "Скачать PowerPoint-файл",
  },
};
let currentLocale = "uz";
let selectedTheme = "system";
const systemTheme = window.matchMedia("(prefers-color-scheme: light)");

function translate(key) {
  return messages[currentLocale][key] ?? messages.uz[key] ?? key;
}

function formatMessage(key, values = {}) {
  return Object.entries(values).reduce(
    (message, [name, value]) => message.replaceAll(`{${name}}`, String(value)),
    translate(key),
  );
}

function applyLocale(locale) {
  currentLocale = locale;
  document.documentElement.lang = locale === "ru" ? "ru" : "uz";
  document.title = `${translate("headerTitle")} — Yozuv`;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = translate(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = translate(element.dataset.i18nPlaceholder);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", translate(element.dataset.i18nAria));
  });
  document.querySelector("#language-label").textContent = locale === "ru" ? "РУС" : "O‘Z";
  document.querySelectorAll("[data-locale]").forEach((option) => {
    option.setAttribute("aria-checked", String(option.dataset.locale === locale));
  });
  updateDirection(false);
  updateThemeLabel();
}

function applyTheme() {
  const theme = selectedTheme === "system"
    ? (systemTheme.matches ? "light" : "dark")
    : selectedTheme;
  document.body.dataset.theme = theme;
  document.querySelector("#theme-color").content = theme === "light" ? "#f4f7f5" : "#111827";
  document.querySelectorAll("[data-theme-choice]").forEach((option) => {
    option.setAttribute("aria-checked", String(option.dataset.themeChoice === selectedTheme));
  });
  updateThemeLabel();
}

function updateThemeLabel() {
  const key = selectedTheme === "system"
    ? "themeSystem"
    : selectedTheme === "light"
      ? "themeLight"
      : "themeDark";
  document.querySelector("#theme-label").textContent = translate(key);
}

function setupMenu(button, menu, onSelect) {
  button.addEventListener("click", () => {
    const opening = menu.hidden;
    document.querySelectorAll(".menu-options").forEach((otherMenu) => {
      otherMenu.hidden = true;
      document.querySelector(`[aria-controls="${otherMenu.id}"]`).setAttribute("aria-expanded", "false");
    });
    menu.hidden = !opening;
    button.setAttribute("aria-expanded", String(opening));
    if (opening) menu.querySelector("button").focus();
  });
  menu.addEventListener("click", (event) => {
    const option = event.target.closest("button");
    if (!option) return;
    onSelect(option);
    menu.hidden = true;
    button.setAttribute("aria-expanded", "false");
    button.focus();
  });
}

setupMenu(
  document.querySelector("#language-button"),
  document.querySelector("#language-menu"),
  (option) => applyLocale(option.dataset.locale),
);
setupMenu(
  document.querySelector("#theme-button"),
  document.querySelector("#theme-menu"),
  (option) => {
    selectedTheme = option.dataset.themeChoice;
    applyTheme();
  },
);
document.addEventListener("click", (event) => {
  if (event.target.closest(".header-menu")) return;
  document.querySelectorAll(".menu-options").forEach((menu) => {
    menu.hidden = true;
    document.querySelector(`[aria-controls="${menu.id}"]`).setAttribute("aria-expanded", "false");
  });
});
document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  document.querySelectorAll(".menu-options").forEach((menu) => {
    if (menu.hidden) return;
    menu.hidden = true;
    document.querySelector(`[aria-controls="${menu.id}"]`).setAttribute("aria-expanded", "false");
  });
});
systemTheme.addEventListener("change", () => {
  if (selectedTheme === "system") applyTheme();
});

const helpDialog = document.querySelector("#help-dialog");
document.querySelector("#help-button").addEventListener("click", () => helpDialog.showModal());
document.querySelector("#help-close").addEventListener("click", () => helpDialog.close());
helpDialog.addEventListener("click", (event) => {
  if (event.target === helpDialog) helpDialog.close();
});

const cyrillicToLatin = {
  А: "A", а: "a", Б: "B", б: "b", В: "V", в: "v", Г: "G", г: "g",
  Д: "D", д: "d", Е: "E", е: "e", Ё: "Yo", ё: "yo", Ж: "J", ж: "j",
  З: "Z", з: "z", И: "I", и: "i", Й: "Y", й: "y", К: "K", к: "k",
  Л: "L", л: "l", М: "M", м: "m", Н: "N", н: "n", О: "O", о: "o",
  П: "P", п: "p", Р: "R", р: "r", С: "S", с: "s", Т: "T", т: "t",
  У: "U", у: "u", Ф: "F", ф: "f", Х: "X", х: "x", Ц: "Ts", ц: "ts",
  Ч: "Ch", ч: "ch", Ш: "Sh", ш: "sh", Щ: "Shch", щ: "shch",
  Ъ: "ʼ", ъ: "ʼ", Ы: "I", ы: "i", Ь: "ʼ", ь: "ʼ", Э: "E", э: "e",
  Ю: "Yu", ю: "yu", Я: "Ya", я: "ya", Ў: "Oʻ", ў: "oʻ", Қ: "Q",
  қ: "q", Ғ: "Gʻ", ғ: "gʻ", Ҳ: "H", ҳ: "h",
};
const latinToCyrillic = {
  a: "а", b: "б", d: "д", e: "е", f: "ф", g: "г", h: "ҳ", i: "и",
  j: "ж", k: "к", l: "л", m: "м", n: "н", o: "о", p: "п", q: "қ",
  r: "р", s: "с", t: "т", u: "у", v: "в", x: "х", y: "й", z: "з",
  w: "в", c: "ц",
};
const latinDigraphs = [
  ["shch", "щ"], ["oʻ", "ў"], ["gʻ", "ғ"], ["yo", "ё"], ["yu", "ю"],
  ["ya", "я"], ["sh", "ш"], ["ch", "ч"], ["ts", "ц"],
];
const alphabets = {
  cyrillic: "alphabetCyrillic",
  "latin-new": "alphabetNewLatin",
  "latin-apostrophe": "alphabetApostrophe",
};
const MAX_FILES = 15;
const MAX_FILE_SIZE = 200 * 1024 * 1024;
const MAX_UNCOMPRESSED_SIZE = 500 * 1024 * 1024;
const PDF_RENDER_SCALE = 1.5;
const PDF_MAX_RENDER_DIMENSION = 5000;
const encoder = new TextEncoder();
const decoder = new TextDecoder("utf-8");
const crc32Table = new Uint32Array(256);
for (let tableIndex = 0; tableIndex < crc32Table.length; tableIndex += 1) {
  let value = tableIndex;
  for (let bit = 0; bit < 8; bit += 1) {
    value = (value >>> 1) ^ (value & 1 ? 0xedb88320 : 0);
  }
  crc32Table[tableIndex] = value >>> 0;
}

const fileInput = document.querySelector("#file-input");
const dropZone = document.querySelector("#drop-zone");
const selectedFile = document.querySelector("#selected-file");
const fileName = document.querySelector("#file-name");
const fileSize = document.querySelector("#file-size");
const fileList = document.querySelector("#file-list");
const fileStatus = document.querySelector("#file-status");
const fileResult = document.querySelector("#file-result");
const fileResults = document.querySelector("#file-results");
const downloadAllButton = document.querySelector("#download-all");
const sourceAlphabet = document.querySelector("#source-alphabet");
const targetAlphabet = document.querySelector("#target-alphabet");
const sourceText = document.querySelector("#source-text");
const convertedText = document.querySelector("#converted-text");
const copyText = document.querySelector("#copy-text");
const downloadText = document.querySelector("#download-text");
const textStatus = document.querySelector("#text-status");
let currentFiles = [];
let skippedFileCount = 0;
let fileDownloadUrls = [];
let convertedFiles = [];
let convertedArchive = null;
let archiveDownloadUrl = null;
let textDownloadUrl = null;
let pdfjsModulePromise = null;

async function loadPdfJs() {
  if (!pdfjsModulePromise) {
    const moduleUrl = new URL("./vendor/pdfjs/pdf.min.mjs", document.baseURI).href;
    pdfjsModulePromise = import(moduleUrl).catch((error) => {
      pdfjsModulePromise = null;
      throw new Error(`PDF kutubxonasini yuklab bo‘lmadi: ${error.message}`);
    });
  }
  return pdfjsModulePromise;
}

function convertCyrillicToLatin(text) {
  const letters = Array.from(text);
  return letters.map((letter, index) => {
    if (letter === "Е" || letter === "е") {
      const previous = letters[index - 1] || "";
      const startsWord = index === 0 || !/[\p{L}\p{N}]/u.test(previous);
      const followsVowelOrSign = /[АаЕеЁёИиОоУуЎўЭэЮюЯяЪъЬь]/u.test(previous);
      if (startsWord || followsVowelOrSign) {
        return letter === "Е" ? "Ye" : "ye";
      }
    }
    return cyrillicToLatin[letter] ?? letter;
  }).join("");
}

function convertLatinToCyrillic(text) {
  const normalized = normalizeNewLatin(text).replace(/[ʻʼ’‘`]/g, "'").replace(/([OoGg])'/g, "$1ʻ");
  const letters = Array.from(normalized);
  let output = "";
  for (let index = 0; index < letters.length;) {
    const remaining = letters.slice(index).join("").toLowerCase();
    const digraph = latinDigraphs.find(([latin]) => remaining.startsWith(latin));
    if (digraph) {
      const source = letters.slice(index, index + digraph[0].length).join("");
      output += source[0] === source[0].toUpperCase()
        ? digraph[1].toUpperCase()
        : digraph[1];
      index += digraph[0].length;
      continue;
    }
    const character = letters[index];
    const lower = character.toLowerCase();
    let converted = latinToCyrillic[lower];
    if (character === "ʻ" || character === "'") converted = "ъ";
    if (converted && character === character.toUpperCase()) converted = converted.toUpperCase();
    output += converted ?? character;
    index += 1;
  }
  return output;
}

function normalizeNewLatin(text) {
  return text
    .replace(/[Öö]/g, (letter) => letter === "Ö" ? "Oʻ" : "oʻ")
    .replace(/[Ğğ]/g, (letter) => letter === "Ğ" ? "Gʻ" : "gʻ")
    .replace(/[Şş]/g, (letter) => letter === "Ş" ? "Sh" : "sh")
    .replace(/[Çç]/g, (letter) => letter === "Ç" ? "Ch" : "ch");
}

function formatNewLatin(text) {
  return text
    .replace(/([OoGg])['ʻʼ’‘`]/g, (_match, letter) => `${letter}ʻ`)
    .replace(/['’‘`ʼ]/g, "ʼ")
    .replace(/[Oo]ʻ/g, (letter) => letter[0] === "O" ? "Ö" : "ö")
    .replace(/[Gg]ʻ/g, (letter) => letter[0] === "G" ? "Ğ" : "ğ")
    .replace(/sh/gi, (letters) => letters[0] === letters[0].toUpperCase() ? "Ş" : "ş")
    .replace(/ch/gi, (letters) => letters[0] === letters[0].toUpperCase() ? "Ç" : "ç");
}

function formatApostropheLatin(text) {
  return normalizeNewLatin(text)
    .replace(/[Oo]ʻ/g, (letter) => letter[0] === "O" ? "O'" : "o'")
    .replace(/[Gg]ʻ/g, (letter) => letter[0] === "G" ? "G'" : "g'")
    .replace(/[ʻʼ’‘`]/g, "'");
}

function convertText(text, from = sourceAlphabet.value, to = targetAlphabet.value) {
  if (from === to) return text;
  if (from === "cyrillic") {
    const converted = convertCyrillicToLatin(text);
    return to === "latin-new" ? formatNewLatin(converted) : formatApostropheLatin(converted);
  }
  if (to === "cyrillic") return convertLatinToCyrillic(text);
  return to === "latin-new" ? formatNewLatin(text) : formatApostropheLatin(text);
}

async function convertTextFile(file) {
  const decoder = new TextDecoder("utf-8");
  const outputChunks = [];
  let preview = "";
  let carry = "";
  const chunkSize = 1024 * 1024;

  for (let offset = 0; offset < file.size; offset += chunkSize) {
    const end = Math.min(offset + chunkSize, file.size);
    const bytes = await file.slice(offset, end).arrayBuffer();
    const decoded = decoder.decode(bytes, { stream: end < file.size });
    const text = carry + decoded;
    let safeText = text;

    if (end < file.size) {
      const characters = Array.from(text);
      const safeLength = Math.max(0, characters.length - 8);
      safeText = characters.slice(0, safeLength).join("");
      carry = characters.slice(safeLength).join("");
    } else {
      safeText += decoder.decode();
      carry = "";
    }

    if (safeText) {
      const converted = convertText(safeText);
      outputChunks.push(encoder.encode(converted));
      if (preview.length < 5000) preview += converted.slice(0, 5000 - preview.length);
    }
  }

  if (carry) {
    const converted = convertText(carry);
    outputChunks.push(encoder.encode(converted));
    if (preview.length < 5000) preview += converted.slice(0, 5000 - preview.length);
  }

  return {
    blob: new Blob(outputChunks, { type: "text/plain;charset=utf-8" }),
    preview,
  };
}

function updateDirection(clearResults = true) {
  const sourceName = translate(alphabets[sourceAlphabet.value]);
  const targetName = translate(alphabets[targetAlphabet.value]);
  document.querySelector("#flow-source").textContent = sourceName;
  document.querySelector("#flow-target").textContent = targetName;
  document.querySelector("#source-text-label").textContent = sourceName;
  document.querySelector("#converted-text-label").textContent = targetName;
  if (clearResults) {
    clearFileResults();
    setStatus(fileStatus, "");
    setStatus(textStatus, "");
  }
}

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} bayt`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function setStatus(element, message, isError = false) {
  element.textContent = message;
  element.classList.toggle("is-error", isError);
}

function clearFileResults() {
  for (const url of fileDownloadUrls) URL.revokeObjectURL(url);
  fileDownloadUrls = [];
  if (archiveDownloadUrl) URL.revokeObjectURL(archiveDownloadUrl);
  archiveDownloadUrl = null;
  convertedArchive = null;
  convertedFiles = [];
  downloadAllButton.disabled = true;
  fileResults.replaceChildren();
  fileResult.classList.remove("is-visible");
}

function setFiles(fileCollection) {
  const files = Array.from(fileCollection);
  if (!files.length) return;

  const supported = files.filter((file) => /\.(txt|doc|docx|pdf|xlsx|pptx)$/i.test(file.name));
  const withinSizeLimit = supported.filter((file) => file.size <= MAX_FILE_SIZE);
  const currentSelection = withinSizeLimit.slice(0, MAX_FILES);
  const skippedCount = files.length - currentSelection.length;

  clearFileResults();
  skippedFileCount = skippedCount;
  currentFiles = currentSelection;
  fileInput.value = "";
  fileList.replaceChildren();

  for (const file of currentFiles) {
    const item = document.createElement("li");
    item.textContent = `${file.name} · ${formatSize(file.size)}`;
    fileList.append(item);
  }

  const hasSelection = currentFiles.length > 0;
  selectedFile.classList.toggle("is-visible", hasSelection);
  if (hasSelection) {
    fileName.textContent = formatMessage("selectedFiles", { count: currentFiles.length });
    fileSize.textContent = "";
  }

  if (!hasSelection) {
    setStatus(fileStatus, formatMessage("noValidFiles"), true);
  } else if (skippedCount > 0) {
    setStatus(fileStatus, formatMessage("skippedFiles", { count: skippedCount }), true);
  } else {
    setStatus(fileStatus, "");
  }
}

function crc32(bytes) {
  return (updateCrc32(0xffffffff, bytes) ^ 0xffffffff) >>> 0;
}

function updateCrc32(crc, bytes) {
  for (const byte of bytes) {
    crc = crc32Table[(crc ^ byte) & 0xff] ^ (crc >>> 8);
  }
  return crc >>> 0;
}

async function crc32Blob(blob) {
  if (typeof blob.stream !== "function") {
    return crc32(new Uint8Array(await blob.arrayBuffer()));
  }
  const reader = blob.stream().getReader();
  let crc = 0xffffffff;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      crc = updateCrc32(crc, value);
    }
  } finally {
    reader.releaseLock();
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function createArchiveEntry(file, name, checksum, offset) {
  const nameBytes = encoder.encode(name);
  const flags = 0x0800;
  const date = 0x0021;
  const local = new Uint8Array(30 + nameBytes.length);
  const localView = new DataView(local.buffer);
  localView.setUint32(0, 0x04034b50, true);
  localView.setUint16(4, 20, true);
  localView.setUint16(6, flags, true);
  localView.setUint16(8, 0, true);
  localView.setUint16(12, date, true);
  localView.setUint32(14, checksum, true);
  localView.setUint32(18, file.blob.size, true);
  localView.setUint32(22, file.blob.size, true);
  localView.setUint16(26, nameBytes.length, true);
  local.set(nameBytes, 30);

  const central = new Uint8Array(46 + nameBytes.length);
  const centralView = new DataView(central.buffer);
  centralView.setUint32(0, 0x02014b50, true);
  centralView.setUint16(4, 20, true);
  centralView.setUint16(6, 20, true);
  centralView.setUint16(8, flags, true);
  centralView.setUint16(12, date, true);
  centralView.setUint32(16, checksum, true);
  centralView.setUint32(20, file.blob.size, true);
  centralView.setUint32(24, file.blob.size, true);
  centralView.setUint16(28, nameBytes.length, true);
  centralView.setUint32(42, offset, true);
  central.set(nameBytes, 46);
  return { local, nameBytes, central };
}

async function buildDownloadArchive(files) {
  const chunks = [];
  const centralChunks = [];
  const names = new Set();
  let offset = 0;
  for (const [index, file] of files.entries()) {
    setStatus(fileStatus, formatMessage("packingArchive", {
      current: index + 1,
      total: files.length,
      name: file.name,
    }));
    const baseName = file.name.split(/[\\/]/).pop();
    const dot = baseName.lastIndexOf(".");
    const stem = dot > 0 ? baseName.slice(0, dot) : baseName;
    const extension = dot > 0 ? baseName.slice(dot) : "";
    let name = baseName;
    for (let suffix = 2; names.has(name.toLocaleLowerCase()); suffix += 1) {
      name = `${stem} (${suffix})${extension}`;
    }
    names.add(name.toLocaleLowerCase());
    if (file.blob.size > 0xffffffff) {
      throw new Error("ZIP64 kerak bo‘lgan fayllar to‘plamini bitta arxivga joylab bo‘lmaydi.");
    }
    const checksum = await crc32Blob(file.blob);
    const entry = createArchiveEntry(file, name, checksum, offset);
    if (offset + entry.local.length + file.blob.size > 0xffffffff) {
      throw new Error("ZIP64 kerak bo‘lgan fayllar to‘plamini bitta arxivga joylab bo‘lmaydi.");
    }
    chunks.push(entry.local, file.blob);
    centralChunks.push(entry.central);
    offset += entry.local.length + file.blob.size;
  }
  if (files.length > 0xffff) throw new Error("Arxivga juda ko‘p fayl joylanmoqda.");
  const centralDirectory = joinBytes(centralChunks);
  if (centralDirectory.length > 0xffffffff) throw new Error("ZIP katalogi 4 GB chegarasidan oshdi.");
  const end = new Uint8Array(22);
  const endView = new DataView(end.buffer);
  endView.setUint32(0, 0x06054b50, true);
  endView.setUint16(8, files.length, true);
  endView.setUint16(10, files.length, true);
  endView.setUint32(12, centralDirectory.length, true);
  endView.setUint32(16, offset, true);
  chunks.push(centralDirectory, end);
  return new Blob(chunks, { type: "application/zip" });
}

function findZipDirectory(bytes, view) {
  const minimum = Math.max(0, bytes.length - 65557);
  for (let offset = bytes.length - 22; offset >= minimum; offset -= 1) {
    if (view.getUint32(offset, true) === 0x06054b50) {
      const commentLength = view.getUint16(offset + 20, true);
      if (offset + 22 + commentLength === bytes.length) return offset;
    }
  }
  throw new Error("Office fayl arxivi buzilgan yoki format tanilmadi.");
}

async function readZipEntries(bytes) {
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const endOffset = findZipDirectory(bytes, view);
  const count = view.getUint16(endOffset + 10, true);
  const centralSize = view.getUint32(endOffset + 12, true);
  let offset = view.getUint32(endOffset + 16, true);
  let totalUncompressedSize = 0;
  if (count === 0xffff || centralSize === 0xffffffff || offset === 0xffffffff) {
    throw new Error("ZIP64 arxivlari qo‘llab-quvvatlanmaydi.");
  }
  const entries = [];
  for (let index = 0; index < count; index += 1) {
    if (view.getUint32(offset, true) !== 0x02014b50) {
      throw new Error("Office faylining ZIP katalogini o‘qib bo‘lmadi.");
    }
    const nameLength = view.getUint16(offset + 28, true);
    const extraLength = view.getUint16(offset + 30, true);
    const commentLength = view.getUint16(offset + 32, true);
    const compressedSize = view.getUint32(offset + 20, true);
    const uncompressedSize = view.getUint32(offset + 24, true);
    totalUncompressedSize += uncompressedSize;
    if (totalUncompressedSize > MAX_UNCOMPRESSED_SIZE) {
      throw new Error("Office fayli ochilgandan keyin hajmi 500 MB dan oshadi.");
    }
    const localOffset = view.getUint32(offset + 42, true);
    if (compressedSize === 0xffffffff || uncompressedSize === 0xffffffff || localOffset === 0xffffffff) {
      throw new Error("ZIP64 arxivlari qo‘llab-quvvatlanmaydi.");
    }
    const nameBytes = bytes.slice(offset + 46, offset + 46 + nameLength);
    const entry = {
      name: decoder.decode(nameBytes),
      nameBytes,
      central: bytes.slice(offset, offset + 46 + nameLength + extraLength + commentLength),
      flags: view.getUint16(offset + 8, true),
      method: view.getUint16(offset + 10, true),
      time: view.getUint16(offset + 12, true),
      date: view.getUint16(offset + 14, true),
      crc: view.getUint32(offset + 16, true),
      compressedSize,
      uncompressedSize,
      localOffset,
      data: null,
      replacement: null,
    };
    if (entry.flags & 1) throw new Error("Parol bilan himoyalangan Office faylini ochib bo‘lmaydi.");
    const localNameLength = view.getUint16(localOffset + 26, true);
    const localExtraLength = view.getUint16(localOffset + 28, true);
    const dataOffset = localOffset + 30 + localNameLength + localExtraLength;
    entry.data = bytes.slice(dataOffset, dataOffset + compressedSize);
    entries.push(entry);
    offset += 46 + nameLength + extraLength + commentLength;
  }
  return {
    entries,
    comment: bytes.slice(endOffset + 22),
  };
}

async function decompressEntry(entry) {
  if (entry.method === 0) {
    if (entry.data.length !== entry.uncompressedSize || entry.data.length > MAX_UNCOMPRESSED_SIZE) {
      throw new Error("Hujjatdagi siqilmagan yozuv hajmi noto‘g‘ri.");
    }
    return entry.data;
  }
  if (entry.method !== 8) throw new Error(`Office arxivining ${entry.method} siqish usuli qo‘llab-quvvatlanmaydi.`);
  if (typeof DecompressionStream === "undefined") {
    throw new Error("Arxivni ochish uchun zamonaviy Chrome, Edge yoki Firefox brauzeridan foydalaning.");
  }
  try {
    const stream = new Blob([entry.data]).stream().pipeThrough(new DecompressionStream("deflate-raw"));
    const reader = stream.getReader();
    const chunks = [];
    let totalLength = 0;
    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        totalLength += value.length;
        if (totalLength > entry.uncompressedSize || totalLength > MAX_UNCOMPRESSED_SIZE) {
          throw new Error("Hujjat ochilganda e’lon qilingan hajmdan oshdi.");
        }
        chunks.push(value);
      }
    } catch (error) {
      await reader.cancel(error);
      throw error;
    } finally {
      reader.releaseLock();
    }
    const result = joinBytes(chunks);
    if (result.length !== entry.uncompressedSize) throw new Error("Arxiv yozuvi o‘lchami mos kelmadi.");
    return result;
  } catch (error) {
    throw new Error(`Office hujjatini ochib bo‘lmadi: ${error.message}`);
  }
}

function joinBytes(chunks) {
  const length = chunks.reduce((total, chunk) => total + chunk.length, 0);
  const result = new Uint8Array(length);
  let offset = 0;
  for (const chunk of chunks) {
    result.set(chunk, offset);
    offset += chunk.length;
  }
  return result;
}

function buildZip(entries, comment) {
  const localChunks = [];
  const centralChunks = [];
  let localOffset = 0;
  for (const entry of entries) {
    const payload = entry.replacement ?? entry.data;
    const flags = entry.flags & ~0x0008;
    const method = entry.replacement ? 0 : entry.method;
    const checksum = entry.replacement ? crc32(payload) : entry.crc;
    const compressedSize = payload.length;
    const uncompressedSize = entry.replacement ? payload.length : entry.uncompressedSize;
    const local = new Uint8Array(30 + entry.nameBytes.length);
    const localView = new DataView(local.buffer);
    localView.setUint32(0, 0x04034b50, true);
    localView.setUint16(4, 20, true);
    localView.setUint16(6, flags, true);
    localView.setUint16(8, method, true);
    localView.setUint16(10, entry.time, true);
    localView.setUint16(12, entry.date, true);
    localView.setUint32(14, checksum, true);
    localView.setUint32(18, compressedSize, true);
    localView.setUint32(22, uncompressedSize, true);
    localView.setUint16(26, entry.nameBytes.length, true);
    localView.setUint16(28, 0, true);
    local.set(entry.nameBytes, 30);
    localChunks.push(local, payload);

    const oldCentral = entry.central;
    const oldView = new DataView(oldCentral.buffer, oldCentral.byteOffset, oldCentral.byteLength);
    const extraLength = oldView.getUint16(30, true);
    const commentLength = oldView.getUint16(32, true);
    const central = new Uint8Array(46 + entry.nameBytes.length + extraLength + commentLength);
    central.set(oldCentral);
    const centralView = new DataView(central.buffer);
    centralView.setUint16(8, flags, true);
    centralView.setUint16(10, method, true);
    centralView.setUint32(16, checksum, true);
    centralView.setUint32(20, compressedSize, true);
    centralView.setUint32(24, uncompressedSize, true);
    centralView.setUint32(42, localOffset, true);
    centralChunks.push(central);
    localOffset += local.length + payload.length;
  }

  const centralDirectory = joinBytes(centralChunks);
  if (entries.length > 0xffff || centralDirectory.length > 0xffffffff) {
    throw new Error("Office arxivi juda katta bo‘lgani uchun ZIP64 formati kerak.");
  }
  const end = new Uint8Array(22 + comment.length);
  const endView = new DataView(end.buffer);
  endView.setUint32(0, 0x06054b50, true);
  endView.setUint16(8, entries.length, true);
  endView.setUint16(10, entries.length, true);
  endView.setUint32(12, centralDirectory.length, true);
  endView.setUint32(16, localOffset, true);
  endView.setUint16(20, comment.length, true);
  end.set(comment, 22);
  return new Blob([...localChunks, centralDirectory, end], { type: "application/zip" });
}

function convertWordXml(xmlText) {
  const documentXml = new DOMParser().parseFromString(xmlText, "application/xml");
  if (documentXml.querySelector("parsererror")) {
    throw new Error("Office hujjatidagi XML matnini o‘qib bo‘lmadi.");
  }
  const textNodes = Array.from(documentXml.getElementsByTagNameNS("*", "t"))
    .filter((node) => node.namespaceURI?.includes("wordprocessingml"));
  for (const node of textNodes) node.textContent = convertText(node.textContent);
  const paragraphs = Array.from(documentXml.getElementsByTagNameNS("*", "p"))
    .filter((node) => node.namespaceURI?.includes("wordprocessingml"));
  const preview = paragraphs.map((paragraph) => paragraph.textContent).filter(Boolean).join("\n");
  return {
    xml: new XMLSerializer().serializeToString(documentXml),
    preview,
    textNodeCount: textNodes.length,
  };
}

function convertOfficeXml(xmlText) {
  const documentXml = new DOMParser().parseFromString(xmlText, "application/xml");
  if (documentXml.querySelector("parsererror")) {
    throw new Error("Office hujjatidagi XML matnini o‘qib bo‘lmadi.");
  }
  const textNodes = Array.from(documentXml.getElementsByTagNameNS("*", "t"))
    .filter((node) => {
      const namespace = node.namespaceURI || "";
      return namespace.includes("spreadsheetml") || namespace.includes("drawingml");
    });
  for (const node of textNodes) node.textContent = convertText(node.textContent);
  return {
    xml: new XMLSerializer().serializeToString(documentXml),
    preview: textNodes.map((node) => node.textContent).filter(Boolean).join("\n"),
    textNodeCount: textNodes.length,
  };
}

async function convertDocx(file) {
  const bytes = new Uint8Array(await file.arrayBuffer());
  const archive = await readZipEntries(bytes);
  const parts = archive.entries.filter((entry) =>
    /^word\/(document|header\d*|footer\d*|footnotes|endnotes)\.xml$/i.test(entry.name),
  );
  const documentPart = parts.find((entry) => /^word\/document\.xml$/i.test(entry.name));
  if (!documentPart) throw new Error("DOCX hujjatida asosiy matn topilmadi.");
  let preview = "";
  let convertedCount = 0;
  for (const part of parts) {
    const xml = decoder.decode(await decompressEntry(part));
    const converted = convertWordXml(xml);
    part.replacement = encoder.encode(converted.xml);
    convertedCount += converted.textNodeCount;
    if (part === documentPart) preview = converted.preview;
  }
  if (convertedCount === 0) throw new Error("Word hujjatida konvertatsiya qilinadigan matn topilmadi.");
  return {
    bytes: buildZip(archive.entries, archive.comment),
    preview,
  };
}

function extractLegacyDocBlocks(blocks) {
  const lines = [];
  for (const block of blocks) {
    if (block.type === "paragraph") {
      if (block.text) lines.push(block.text);
      continue;
    }
    if (block.type !== "table") continue;
    for (const row of block.rows) {
      const cells = row.cells.map((cell) =>
        extractLegacyDocBlocks(cell.blocks ?? cell.paragraphs).join("\n"),
      );
      lines.push(cells.join("\t"));
    }
  }
  return lines;
}

async function convertLegacyDoc(file) {
  const moduleUrl = new URL("./vendor/doc-parser/dist/msdoc/parser.js", document.baseURI).href;
  const { parseMsDoc } = await import(moduleUrl);
  const parsed = parseMsDoc(new Uint8Array(await file.arrayBuffer()));
  const source = extractLegacyDocBlocks(parsed.blocks).join("\n");
  if (!source.trim()) {
    throw new Error("DOC hujjatida konvertatsiya qilinadigan matn topilmadi.");
  }
  const output = convertText(source);
  return {
    blob: new Blob([output], { type: "text/plain;charset=utf-8" }),
    preview: output,
  };
}

async function convertOpenXml(file, format) {
  const bytes = new Uint8Array(await file.arrayBuffer());
  const archive = await readZipEntries(bytes);
  const isExcel = format === "xlsx";
  const rootPart = isExcel ? "xl/workbook.xml" : "ppt/presentation.xml";
  if (!archive.entries.some((entry) => entry.name === rootPart)) {
    throw new Error(isExcel ? "Excel XLSX faylining tuzilishi noto‘g‘ri." : "PowerPoint PPTX faylining tuzilishi noto‘g‘ri.");
  }
  const parts = archive.entries.filter((entry) =>
    new RegExp(`^${isExcel ? "xl" : "ppt"}/.*\\.xml$`, "i").test(entry.name),
  );
  let preview = "";
  let convertedCount = 0;
  for (const part of parts) {
    const xml = decoder.decode(await decompressEntry(part));
    const converted = convertOfficeXml(xml);
    if (converted.textNodeCount > 0) {
      part.replacement = encoder.encode(converted.xml);
      convertedCount += converted.textNodeCount;
      if (converted.preview && preview.length < 5000) {
        const preferred = isExcel
          ? /xl\/(sharedStrings|worksheets|charts)\//i.test(part.name)
          : /ppt\/(slides|charts)\//i.test(part.name);
        preview = preferred && !preview
          ? converted.preview.slice(0, 5000)
          : `${preview}\n${converted.preview}`.slice(0, 5000);
      }
    }
  }
  if (convertedCount === 0) {
    throw new Error(isExcel
      ? "Excel faylida matn topilmadi."
      : "PowerPoint faylida matn topilmadi.");
  }
  return {
    bytes: buildZip(archive.entries, archive.comment),
    preview,
  };
}

function sampleCanvasColor(context, x, y, width, height) {
  const canvas = context.canvas;
  const samples = [
    [x - 2, y - height / 2],
    [x + width + 2, y - height / 2],
    [x + width / 2, y - height - 2],
    [x + width / 2, y + 2],
  ];
  for (const [sampleX, sampleY] of samples) {
    const pixelX = Math.max(0, Math.min(canvas.width - 1, Math.round(sampleX)));
    const pixelY = Math.max(0, Math.min(canvas.height - 1, Math.round(sampleY)));
    const [red, green, blue] = context.getImageData(pixelX, pixelY, 1, 1).data;
    if (red > 225 && green > 225 && blue > 225) return `rgb(${red}, ${green}, ${blue})`;
  }
  return "#ffffff";
}

function redrawConvertedPdfText(context, viewport, item, styles, pdfjs) {
  const converted = convertText(item.str);
  if (!converted || converted === item.str) return converted;
  const transform = pdfjs.Util.transform(viewport.transform, item.transform);
  const x = transform[4];
  const y = transform[5];
  const fontHeight = Math.hypot(transform[2], transform[3]);
  if (!Number.isFinite(fontHeight) || fontHeight < 1) return converted;
  const angle = Math.atan2(transform[1], transform[0]);
  const oldWidth = Math.max(1, item.width * viewport.scale);
  const style = styles[item.fontName];
  const fontFamily = style?.fontFamily?.replace(/["']/g, "") || "Arial, sans-serif";

  context.save();
  context.translate(x, y);
  context.rotate(angle);
  context.font = `${fontHeight}px "${fontFamily}"`;
  const newWidth = Math.max(oldWidth, context.measureText(converted).width + 2);
  context.fillStyle = sampleCanvasColor(context, x, y, oldWidth, fontHeight);
  context.fillRect(-1, -fontHeight, newWidth + 2, fontHeight * 1.3);
  context.fillStyle = "#111111";
  context.textBaseline = "alphabetic";
  context.fillText(converted, 0, 0);
  context.restore();
  return converted;
}

function jpegBlobFromCanvas(canvas) {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) resolve(blob);
      else reject(new Error("PDF sahifasini rasmga aylantirib bo‘lmadi."));
    }, "image/jpeg", 0.88);
  });
}

async function convertPdf(file) {
  const pdfjs = await loadPdfJs();
  pdfjs.GlobalWorkerOptions.workerSrc = new URL("./vendor/pdfjs/pdf.worker.min.mjs", document.baseURI).href;
  const loadingTask = pdfjs.getDocument({ data: new Uint8Array(await file.arrayBuffer()) });
  let pdf;
  const pages = [];
  let preview = "";
  let textItemCount = 0;
  try {
    pdf = await loadingTask.promise;
    for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
      setStatus(fileStatus, formatMessage("processingPdfPage", {
        file: file.name,
        page: pageNumber,
        total: pdf.numPages,
      }));
      const page = await pdf.getPage(pageNumber);
      const baseViewport = page.getViewport({ scale: 1 });
      const scale = Math.min(PDF_RENDER_SCALE, PDF_MAX_RENDER_DIMENSION / Math.max(baseViewport.width, baseViewport.height));
      const viewport = page.getViewport({ scale });
      const canvas = document.createElement("canvas");
      canvas.width = Math.ceil(viewport.width);
      canvas.height = Math.ceil(viewport.height);
      const context = canvas.getContext("2d", { alpha: false });
      if (!context) throw new Error("PDF sahifasini chizish uchun canvas yaratilmadi.");
      context.fillStyle = "#ffffff";
      context.fillRect(0, 0, canvas.width, canvas.height);
      await page.render({ canvasContext: context, viewport }).promise;

      const textContent = await page.getTextContent();
      const pageText = [];
      for (const item of textContent.items) {
        if (!("str" in item) || !item.str) continue;
        textItemCount += 1;
        pageText.push(redrawConvertedPdfText(context, viewport, item, textContent.styles, pdfjs));
      }
      if (preview.length < 5000) {
        preview += `${pageText.join("")}\n`.slice(0, 5000 - preview.length);
      }
      const image = new Uint8Array(await (await jpegBlobFromCanvas(canvas)).arrayBuffer());
      pages.push({
        width: viewport.width / scale,
        height: viewport.height / scale,
        imageWidth: canvas.width,
        imageHeight: canvas.height,
        image,
      });
      canvas.width = 0;
      canvas.height = 0;
      page.cleanup();
    }
  } finally {
    await loadingTask.destroy();
  }
  if (textItemCount === 0) {
    throw new Error(translate("pdfNoText"));
  }
  return {
    bytes: buildImagePdf(pages),
    preview,
  };
}

function buildImagePdf(pages) {
  if (pages.length === 0) throw new Error("PDF faylida sahifa topilmadi.");
  const objects = [];
  const pageReferences = pages.map((_page, index) => `${3 + index * 3} 0 R`).join(" ");
  objects.push({ id: 1, content: [encoder.encode("<< /Type /Catalog /Pages 2 0 R >>")] });
  objects.push({
    id: 2,
    content: [encoder.encode(`<< /Type /Pages /Kids [${pageReferences}] /Count ${pages.length} >>`)],
  });

  pages.forEach((page, index) => {
    const pageId = 3 + index * 3;
    const contentId = pageId + 1;
    const imageId = pageId + 2;
    const width = page.width.toFixed(3);
    const height = page.height.toFixed(3);
    objects.push({
      id: pageId,
      content: [encoder.encode(
        `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${width} ${height}] /Resources << /XObject << /Im0 ${imageId} 0 R >> >> /Contents ${contentId} 0 R >>`,
      )],
    });
    const drawing = encoder.encode(`q ${width} 0 0 ${height} 0 0 cm /Im0 Do Q`);
    objects.push({
      id: contentId,
      content: [
        encoder.encode(`<< /Length ${drawing.length} >>\nstream\n`),
        drawing,
        encoder.encode("\nendstream"),
      ],
    });
    objects.push({
      id: imageId,
      content: [
        encoder.encode(
          `<< /Type /XObject /Subtype /Image /Width ${page.imageWidth} /Height ${page.imageHeight} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${page.image.length} >>\nstream\n`,
        ),
        page.image,
        encoder.encode("\nendstream"),
      ],
    });
  });

  const chunks = [new Uint8Array([37, 80, 68, 70, 45, 49, 46, 52, 10, 37, 226, 227, 207, 211, 10])];
  const offsets = [0];
  let length = chunks[0].length;
  for (const object of objects) {
    offsets[object.id] = length;
    const header = encoder.encode(`${object.id} 0 obj\n`);
    const footer = encoder.encode("\nendobj\n");
    chunks.push(header, ...object.content, footer);
    length += header.length + object.content.reduce((total, chunk) => total + chunk.length, 0) + footer.length;
  }
  const xrefOffset = length;
  const xref = [
    `xref\n0 ${objects.length + 1}\n`,
    "0000000000 65535 f \n",
    ...offsets.slice(1).map((offset) => `${String(offset).padStart(10, "0")} 00000 n \n`),
  ].join("");
  const trailer = `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;
  chunks.push(encoder.encode(xref), encoder.encode(trailer));
  return new Blob(chunks, { type: "application/pdf" });
}

sourceAlphabet.addEventListener("change", updateDirection);
targetAlphabet.addEventListener("change", updateDirection);
fileInput.addEventListener("change", () => setFiles(fileInput.files));

for (const eventName of ["dragenter", "dragover"]) {
  dropZone.addEventListener(eventName, (event) => {
    event.preventDefault();
    dropZone.classList.add("is-dragging");
  });
}

for (const eventName of ["dragleave", "drop"]) {
  dropZone.addEventListener(eventName, (event) => {
    event.preventDefault();
    dropZone.classList.remove("is-dragging");
  });
}

dropZone.addEventListener("drop", (event) => setFiles(event.dataTransfer.files));

function appendFileResult(file, { output, preview, extension, mimeType, error }) {
  const item = document.createElement("article");
  item.className = "file-result-item";

  const head = document.createElement("div");
  head.className = "file-result-head";

  const name = document.createElement("div");
  name.className = "file-result-name";
  name.textContent = file.name;
  head.append(name);

  const status = document.createElement("p");
  status.className = "file-result-status";
  if (error) {
    status.classList.add("is-error");
    status.textContent = formatMessage("fileProcessFailed", { error });
  } else {
    const outputName = `${file.name.replace(/\.(txt|docx|doc|pdf|xlsx|pptx)$/i, "")}-konvertatsiya${extension}`;
    const blob = output instanceof Blob ? output : new Blob([output], { type: mimeType });
    const link = document.createElement("a");
    link.className = "button";
    link.href = URL.createObjectURL(blob);
    link.download = outputName;
    const downloadLabels = {
      ".docx": "downloadWord",
      ".pdf": "downloadPdf",
      ".pptx": "downloadPowerPoint",
      ".txt": "downloadTxt",
      ".xlsx": "downloadExcel",
    };
    link.textContent = translate(downloadLabels[extension]);
    fileDownloadUrls.push(link.href);
    convertedFiles.push({ name: outputName, blob });
    head.append(link);
    status.textContent = translate("fileProcessed");
  }

  item.append(head, status);
  if (preview) {
    const details = document.createElement("details");
    const summary = document.createElement("summary");
    summary.className = "file-preview-toggle";
    summary.textContent = translate("previewResult");
    const previewElement = document.createElement("pre");
    previewElement.className = "result-preview";
    previewElement.textContent = preview.slice(0, 5000) || translate("emptyDocument");
    details.append(summary, previewElement);
    item.append(details);
  }
  fileResults.append(item);
  fileResult.classList.add("is-visible");
}

document.querySelector("#convert-file").addEventListener("click", async () => {
  if (!currentFiles.length) return;
  const button = document.querySelector("#convert-file");
  button.disabled = true;
  clearFileResults();
  let successCount = 0;
  let failedCount = 0;
  try {
    for (const [index, file] of currentFiles.entries()) {
      setStatus(fileStatus, formatMessage("processingFiles", {
        current: index + 1,
        total: currentFiles.length,
        name: file.name,
      }));
      try {
        const extension = file.name.split(".").pop().toLowerCase();
        let output;
        let preview;
        let mimeType;
        let outputExtension;
        if (extension === "doc") {
          const result = await convertLegacyDoc(file);
          output = result.blob;
          preview = result.preview;
          mimeType = "text/plain;charset=utf-8";
          outputExtension = ".txt";
        } else if (extension === "docx") {
          const result = await convertDocx(file);
          output = result.bytes;
          preview = result.preview;
          mimeType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
          outputExtension = ".docx";
        } else if (extension === "xlsx" || extension === "pptx") {
          const result = await convertOpenXml(file, extension);
          output = result.bytes;
          preview = result.preview;
          mimeType = extension === "xlsx"
            ? "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            : "application/vnd.openxmlformats-officedocument.presentationml.presentation";
          outputExtension = `.${extension}`;
        } else if (extension === "pdf") {
          const result = await convertPdf(file);
          output = result.bytes;
          preview = result.preview;
          mimeType = "application/pdf";
          outputExtension = ".pdf";
        } else {
          const result = await convertTextFile(file);
          output = result.blob;
          preview = result.preview;
          mimeType = "text/plain;charset=utf-8";
          outputExtension = ".txt";
        }
        appendFileResult(file, { output, preview, extension: outputExtension, mimeType });
        successCount += 1;
      } catch (error) {
        appendFileResult(file, { error: error.message || translate("fileFailed") });
        failedCount += 1;
      }
    }
    const completionMessage = formatMessage("completedFiles", {
      success: successCount,
      failed: failedCount,
    });
    const skippedMessage = skippedFileCount > 0
      ? ` ${formatMessage("skippedFiles", { count: skippedFileCount })}`
      : "";
    setStatus(fileStatus, `${completionMessage}${skippedMessage}`, failedCount > 0 || skippedFileCount > 0);
  } finally {
    button.disabled = false;
    downloadAllButton.disabled = convertedFiles.length === 0;
  }
});

downloadAllButton.addEventListener("click", async () => {
  if (!convertedFiles.length) return;
  downloadAllButton.disabled = true;
  try {
    if (!convertedArchive) convertedArchive = await buildDownloadArchive(convertedFiles);
    if (!archiveDownloadUrl) archiveDownloadUrl = URL.createObjectURL(convertedArchive);
    const link = document.createElement("a");
    link.href = archiveDownloadUrl;
    link.download = "konvertatsiya-natijalari.zip";
    link.click();
    setStatus(fileStatus, translate("downloadedAll"));
  } catch (error) {
    setStatus(fileStatus, formatMessage("archiveFailed", {
      error: error.message || translate("fileFailed"),
    }), true);
  } finally {
    downloadAllButton.disabled = convertedFiles.length === 0;
  }
});

document.querySelector("#convert-text").addEventListener("click", () => {
  convertedText.value = convertText(sourceText.value);
  copyText.disabled = !convertedText.value;
  downloadText.disabled = !convertedText.value;
  setStatus(textStatus, convertedText.value ? translate("convertTextDone") : translate("enterText"));
});

copyText.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(convertedText.value);
    setStatus(textStatus, translate("copiedText"));
  } catch {
    convertedText.focus();
    convertedText.select();
    setStatus(textStatus, translate("copyFailed"), true);
  }
});

downloadText.addEventListener("click", () => {
  if (!convertedText.value) return;
  if (textDownloadUrl) URL.revokeObjectURL(textDownloadUrl);
  textDownloadUrl = URL.createObjectURL(new Blob([convertedText.value], { type: "text/plain;charset=utf-8" }));
  const link = document.createElement("a");
  link.href = textDownloadUrl;
  link.download = "matn-konvertatsiya.txt";
  link.click();
  setStatus(textStatus, translate("downloadedText"));
});

applyTheme();
applyLocale(currentLocale);
updateDirection();
window.addEventListener("beforeunload", () => {
  for (const url of fileDownloadUrls) URL.revokeObjectURL(url);
  if (archiveDownloadUrl) URL.revokeObjectURL(archiveDownloadUrl);
  if (textDownloadUrl) URL.revokeObjectURL(textDownloadUrl);
});
