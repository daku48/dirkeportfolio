# Dirke Romaine D. Angeles: Portfolio Website

A responsive portfolio built with plain HTML5, CSS3, and vanilla JavaScript (no frameworks). It has a dark/light theme switch, three featured projects, a resume section, an NC II certificate section, and a contact section.

## Folder structure

```text
dirkeportfolio/
├── index.html
├── css/style.css
├── js/script.js
├── assets/
│   ├── projects/       ds-sweet-heritage.jpg, dive.jpg, regal-time-pieces.jpg
│   ├── certificates/   nc2-certificate.png
│   └── resume/         resume.png, resume.pdf
└── README.md
```

## Run locally

Double-click `index.html`, or serve it:

```bash
cd dirkeportfolio
python3 -m http.server 8000
```

Then open <http://localhost:8000>. The Inter font loads from Google Fonts; without internet the site falls back to your system font and still works.

## How the supplied files were used

| Supplied file | Used as |
|---|---|
| `index.html`, `style.css`, `script.js`, `README.md` (template) | Starting point. Placeholders were replaced, and the CSS and JS were moved into `css/` and `js/`. |
| `dsweet.png` | Project 1 screenshot (D's Sweet Heritage). Resized to 1400px wide. |
| `dive.png` | Project 2 screenshot (Dive). |
| `realtimepieces.png` | Project 3 screenshot (Regal Time Pieces). Resized to 1400px wide. |
| `resume.png` | Resume section (view and download PNG). Also converted to `resume.pdf`. |
| `NCII.png` | Certifications section. |

The originals in your upload were not modified.

## Where the content came from

- **Education, skills, title, and the D's Sweet Heritage role:** your prompt and `resume.png`.
- **Certificate details:** `NCII.png` (title, TESDA, issued February 19, 2025, valid until February 18, 2030).
- **Project descriptions for Dive and Regal Time Pieces:** only what is visible in their screenshots.
- **Contact:** the email and city shown on your resume.

## Missing information and limitations

- **No project source code, live demo links, or repository URLs were supplied.** Each project therefore has a "View Full Screenshot" button instead of fake Demo or Source buttons. When you have real URLs, add buttons inside each project's `btn-group` in `index.html`.
- **Technologies for Dive and Regal Time Pieces are not listed**, and their role is described as "front-end interface design," because the screenshots do not show what they were built with. The D's Sweet Heritage stack (HTML, CSS, JavaScript, Figma, Miro) comes from your resume. Edit these if you want to be more specific.
- **No profile photo was supplied**, so the hero uses a "DA" monogram and a quick-facts card. (The photo on the certificate was deliberately not reused.) To add one, replace the `.hero-visual` block with an `<img>`.
- **Back-end development** is shown as "entry level, currently learning," because it comes from your prompt and no file demonstrates it. Add specific tools (for example PHP or Node.js) when you can back them up with a project.
- **No GitHub or LinkedIn links** were found, so those are not shown. To add one, copy a `<li>` in the Contact section and change the link and text.
- **The resume is an image, not a text PDF.** `resume.pdf` was made from the 615 x 792 PNG, so it looks a little soft when zoomed. Replace `assets/resume/resume.pdf` and `resume.png` with a higher-quality export from your original document when you can. The resume lists "CCS3," which I read as a typo and show as "CSS3" on the site.
- **The certificate image includes your certificate number, ULI, QR code, and ID photo.** It is shown in full because you asked for the actual certificate. If you would rather not publish those, replace the image with a version that hides them.
- **Your phone number** appears in the resume image but is not typed anywhere else on the site.

## Update the site

1. **Text:** edit `index.html` (sections are labeled with comments).
2. **Colors:** edit the CSS variables at the top of `css/style.css` (`:root[data-theme="dark"]` and `:root[data-theme="light"]`).
3. **Images:** keep the same filenames, or change the `src` and `href` in `index.html`.
4. **New project:** copy a whole `<article class="project">` block (add `reverse` to flip the layout) and update the text and image.

## Test checklist

1. **Theme:** click the sun/moon button; the whole page should switch. Reload and it should stick (`localStorage`). To test first-visit behavior, delete the `theme` key in DevTools > Application > Local Storage and reload; the site follows your OS theme. Tab to the button and press Enter or Space.
2. **Responsive:** use DevTools device mode at about 1280px, 900px, 600px, and 375px. Below 821px the hamburger menu appears; it should open, close on link tap, and close on Escape.
3. **Links:** check that View Resume, Download PDF/PNG, View Certificate, and the screenshot links all open the right files.
4. **No horizontal scroll** at any width, and headings should not hide behind the fixed header after clicking a nav link.
