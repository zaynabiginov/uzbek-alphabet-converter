# Uzbek Alphabet Converter

A browser-based tool for converting Uzbek text between Cyrillic, the new Latin
alphabet, and Latin with apostrophes. You can paste text or upload documents.
Files are processed locally in your browser and are not uploaded to a server.

## Features

- Convert text between Uzbek Cyrillic, new Latin, and apostrophe-based Latin.
- Select up to 15 files at a time, up to 200 MB per file.
- Download converted files individually or download all successful results in
  one ZIP archive.
- Use the interface in Uzbek or Russian and choose a light, dark, or system
  theme.
- View a short preview of supported file conversion results.

## Supported file formats

| Input format | Output format | Notes |
| --- | --- | --- |
| `.txt` | `.txt` | Text is converted in chunks to handle large files. |
| `.doc` | `.doc` | Extracted text is converted and saved as an RTF-compatible Word document. Original formatting and images are not preserved. |
| `.docx` | `.docx` | Text is converted while the document archive and text formatting are retained. |
| `.xlsx` | `.xlsx` | Text in supported workbook XML parts is converted. |
| `.pptx` | `.pptx` | Text in supported presentation XML parts is converted. |
| `.pdf` | `.pdf` | Pages with selectable text are rendered as images with converted text redrawn approximately. |

### Format limitations

- Legacy `.xls` and `.ppt` files are not supported.
- Scanned PDFs without a selectable text layer cannot be converted. Converted
  PDFs are image-based: their text is not selectable, and links, forms, and
  some visual details may not be preserved.
- Password-protected Office documents and ZIP64 Office archives are not
  supported.
- Office archives with more than 500 MB of uncompressed contents are rejected.
- Processing large files requires additional browser memory and may take
  longer.

## Run locally

This is a static website; there is no build step or package installation
required.

1. Download or clone this repository.
2. From the project root, start a local web server. For example, with Python:

   ```sh
   python -m http.server 8000
   ```

3. Open <http://localhost:8000> in a modern browser.

Serving the project over HTTP is recommended because the PDF and DOC parsers
are loaded as local JavaScript modules. The bundled parsers do not require a
third-party CDN at runtime.

## Using the converter

1. Select the source and destination alphabets.
2. Either type or paste text into the left-hand field, or select files in the
   upload area.
3. Click **Convert**.
4. For files, download each successful result separately or choose **Download
   all as ZIP**. Errors are shown alongside the affected files.

The new Latin alphabet uses `Ö` for `Oʻ`, `Ğ` for `Gʻ`, `Ş` for `Sh`, and `Ç`
for `Ch`.

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
└── favicon.svg
```

The bundled PDF.js files are licensed under Apache License 2.0. The legacy DOC
parser is licensed under MIT. See the `LICENSE` files in their respective
directories for the full license texts and `README.txt` files for source
information.
