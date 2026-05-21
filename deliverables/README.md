# Deliverables

Source files for every branded handout. HTML in, PDF out — PDFs are committed to `public/` so the live site can link to them directly.

## Layout

```
deliverables/
├── strategy-guide/     # AI Strategy, Integration & Governance (5pp)
│   ├── strategy-guide.html         # cream variant — current default
│   └── strategy-guide-navy.html    # navy variant
├── brochure/
├── one-pager/
├── business-card/
└── assets/             # shared brand assets (headshot, etc.)
```

## Regenerating PDFs

```bash
npm run build:pdfs
```

Renders every HTML source via headless Chrome and writes the PDF to `public/<name>.pdf`. After running, the updated PDFs are served at `veraconsulting.co/<name>.pdf`.

## Editing rules

- Pages are letter-sized, `0.4in 0.6in` padding, `page-break-after: always`.
- Colors live in CSS custom properties at the top of each file (`--accent`, `--heading`, `--body`, `--muted`, `--surface`, `--hairline`).
- For print runs, see "Turning it into a real packet" notes — saddle-stitch booklets need page counts divisible by 4.
