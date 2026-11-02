# Uzbek Alphabet Converter — User Guide

Uzbek Alphabet Converter is a free browser-based app for converting Uzbek text
between Cyrillic, the new Latin alphabet, and apostrophe-based Latin. Type or
paste text directly into the page, or select documents to convert. Processing
happens locally in your browser; files are not uploaded to a server.

## Features

- Convert text and supported documents between the three writing systems.
- Copy converted text or download it as a UTF-8 `.txt` file.
- Process up to 15 files at a time, up to 200 MB per file.
- Download successful results individually or together in one ZIP archive.
- Uzbek and Russian interface; light, dark, and system theme options.
- Preview a short portion of file results and see errors for individual files.

## Writing systems

Conversion changes the writing system; it does not translate the text. Select
the correct **source** alphabet and the desired **target** alphabet before
converting:

1. **Uzbek Cyrillic** — for example, `Ўзбекистон`.
2. **New Uzbek Latin** — `Ö` and `Ğ` represent `Oʻ` and `Gʻ`, while `Ş` and `Ç`
   represent `Sh` and `Ch`; for example, `Oʻzbekiston` → `Özbekiston`.
3. **Apostrophe-based Uzbek Latin** — uses `O'`, `G'`, `Sh`, and `Ch`; for
   example, `O'zbekiston`.

When converting Cyrillic to Latin, letter case is retained. Latin-to-Cyrillic
conversion recognizes combinations such as `oʻ/gʻ`, `sh`, `ch`, `shch`, `yo`,
`yu`, `ya`, and `ts`, and accepts several apostrophe characters. Check the
result before using it: automatic conversion is not a spell checker or
translation service.

## Supported files

| Format | Output | Notes |
| --- | --- | --- |
| `.txt` | `.txt` | UTF-8 text is processed in chunks; large files may need more time and memory. |
| `.doc` | `.doc` | Text is extracted and saved as an RTF-compatible Word document. Original formatting, table structure, and images are not preserved. |
| `.docx` | `.docx` | Text in the document body, headers, footers, footnotes, and endnotes is converted; the archive structure is retained. |
| `.xlsx` | `.xlsx` | Text found in workbook XML parts is converted. |
| `.pptx` | `.pptx` | Text found in presentation XML parts is converted. |
| `.pdf` | `.pdf` | Pages with selectable text are rendered as images, with converted text redrawn approximately. |

### Limitations

- Legacy `.xls` and `.ppt` formats are not supported.
- Scanned PDFs without a selectable text layer cannot be converted.
- Output PDFs are image-based: their text is not selectable or searchable, and
  links, forms, and some visual details may not be preserved.
- PDF text is repositioned approximately, so fonts, spacing, and layout may
  differ from the original.
- Legacy `.doc` formatting is not retained; the output is a text-based
  RTF-compatible Word document.
- Password-protected Office documents and ZIP64 Office archives are not
  supported. Office archives with more than 500 MB of uncompressed contents
  are rejected.
- Large files require additional browser memory. Keep the page open until
  processing is complete.

## Run locally

This is a static website; there is no build step or package installation
required. The PDF and DOC parsers are bundled in the repository and are not
loaded from a third-party CDN. Serving the site over HTTP is recommended so
that JavaScript modules load correctly.

1. Clone or download the repository:

   ```sh
   git clone https://github.com/zaynabiginov/uzbek-alphabet-converter.git
   cd uzbek-alphabet-converter
   ```

2. Start a local HTTP server from the project directory. For example, with
   Python 3:

   ```sh
   python -m http.server 8000
   ```

   On Windows, run the same command in PowerShell or Command Prompt. If
   `python` is not recognized, try `py -m http.server 8000`.

3. Open <http://localhost:8000> in a modern browser.

## How to use

### Convert text

1. Choose the source and target writing systems.
2. Type or paste text into the left-hand field.
3. Click **Convert text**.
4. Review the result in the right-hand field. Use **Copy** or **Download TXT**
   to save it.

### Convert files

1. Choose the conversion direction.
2. Click **Choose file** or drag files into the upload area.
3. Select supported files no larger than 200 MB each; up to 15 files can be
   selected at a time.
4. Click **Convert**. Files are processed one at a time, and successful results
   and errors are listed separately.
5. Download results individually or put all successful results into one ZIP
   archive.

## Project structure

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

## Privacy and licenses

Text and files are processed in the user's browser and are not sent to a server
for conversion. If you host the site online, the site assets themselves are
still served by your hosting provider.

The bundled PDF.js files are licensed under Apache License 2.0. The legacy DOC
parser is licensed under MIT. See the relevant files in the `vendor`
directories for full license texts and source information.

---

[O‘zbekcha](README.uz.md) | [Русский](README.ru.md) | [Home](README.md)
