# AFTERSTORY Website Folder

The live website source remains at `../afterstory-site` to avoid disturbing Firebase deployment paths and existing local tooling.

The isolated V2 storefront is in [`V2 Website/`](V2%20Website/README.md). It contains V2 requirements, the current task queue, Stitch reference material, and its frontend source; it is not connected to the live site.

For routine website edits, start with:

- `../afterstory-site/content`
- `../afterstory-site/components`
- `../afterstory-site/app`
- `../afterstory-site/public/images`

Avoid reading generated or dependency folders unless needed:

- `../afterstory-site/node_modules`
- `../afterstory-site/dist`
- `../afterstory-site/outputs`
- `../afterstory-site/.next`
- `../afterstory-site/.vinext`
