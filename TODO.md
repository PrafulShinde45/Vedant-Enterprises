# TODO: Optimize Website, Fix Bugs, and Test

## Tasks
- [ ] Fix unescaped apostrophes in text (react/no-unescaped-entities errors)
  - [ ] app/about/page.js: lines 165, 292
  - [ ] app/contact/page.js: lines 59, 167 (two instances)
  - [ ] app/page.js: lines 78, 230, 273
- [ ] Replace <a> links with <Link /> from next/link (@next/next/no-html-link-for-pages errors)
  - [ ] app/components/Footer.js: line 38
  - [ ] app/components/Navbar.js: lines 101, 186
- [ ] Fix React hook issue in Navbar.js (setState in effect)
  - [ ] app/components/Navbar.js: line 20
- [ ] Replace <img> with <Image /> from next/image for performance (@next/next/no-img-element warnings)
  - [ ] app/about/page.js: lines 106, 140
  - [ ] app/gallery/page.js: lines 229, 277
  - [ ] app/page.js: lines 157, 198
  - [ ] All product pages (multiple <img> tags)
- [ ] Fix missing dependency in useEffect (react-hooks/exhaustive-deps)
  - [ ] app/components/Navbar.js: line 42
- [ ] Run lint again to verify all issues are fixed
- [ ] Test website by running dev server
- [ ] Use browser to check performance and smoothness
