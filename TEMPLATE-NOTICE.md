# Website template attribution

The website adapts Academic Project Page Template by Eliahu Horwitz:
https://github.com/eliahuhorwitz/Academic-project-page-template

Source revision: d38af1ccae1ce82c3404d2820c4c646afd409f81

The upstream template credits the Nerfies project page:
https://nerfies.github.io/

The template declares Creative Commons Attribution-ShareAlike 4.0 International:
https://creativecommons.org/licenses/by-sa/4.0/

Retain the footer credit and this notice. Website template adaptations and newly authored explanatory SVGs are provided under CC BY-SA 4.0. This does not relicense the thesis PDF or third-party figures reproduced within it; these retain their respective rights and attributions.

The retained Bulma stylesheet contains its upstream MIT license notice. Unused template dependencies and sample media are not included.

## Local preview

From this repository, run:

```sh
python3 -m http.server 8765 --bind 127.0.0.1 --directory docs
```

Open http://127.0.0.1:8765/ . No package installation or build step is required. Use content/website-copy.md for portable editorial text, and update docs/index.html alongside it. Figure sources are recorded in content/figure-manifest.md.

## Later publication

This version is local only. After local review, GitHub Pages can publish main /docs. PDF links point to the existing PDF on GitHub so no second tracked copy is needed.
