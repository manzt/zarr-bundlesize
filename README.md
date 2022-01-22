# zarr-bundlesize

A comparison of bundle sizes across javascript zarr implementations. A [recent blogpost](https://carbonplan.org/blog/maps-library-release)
pointed out there are several implementations of zarr in JavaScript. This repo serves to demonstate
the size of a javascript bundle that chooses to include one of these modules in the browser.

```
npm install
npm run build
```

```sh
> zarr-bundlesize@1.0.0 build
> run-p zarr zarr-js zarrita zarrita-core zarrita-core-dynamic


> zarr-bundlesize@1.0.0 zarrita-core
> esbuild --bundle --minify --outfile=dist/zarrita-core.js --format=esm src/zarrita-core.js


> zarr-bundlesize@1.0.0 zarrita
> esbuild --bundle --minify --outfile=dist/zarrita.js --format=esm src/zarrita.js


> zarr-bundlesize@1.0.0 zarr-js
> esbuild --bundle --minify --outfile=dist/zarr-js.js --format=esm src/zarr-js.js


> zarr-bundlesize@1.0.0 zarr
> esbuild --bundle --minify --outfile=dist/zarr.js --format=esm src/zarr.js


> zarr-bundlesize@1.0.0 zarrita-core-dynamic
> esbuild --bundle --minify --splitting --outdir=dist/zarr-core-dyanmic --format=esm src/zarrita-core-dynamic-codecs.js


  dist/zarrita-core.js  49.2kb

⚡ Done in 23ms

  dist/zarrita.js  53.9kb

⚡ Done in 22ms

  dist/zarr-js.js  132.7kb

⚡ Done in 22ms

  dist/zarr.js  85.1kb

⚡ Done in 22ms

  dist/zarr-core-dyanmic/chunk-MTAZXJLI.js               43.6kb
  dist/zarr-core-dyanmic/zarrita-core-dynamic-codecs.js   4.9kb
  dist/zarr-core-dyanmic/zlib-CXSA23ZW.js                 387b 
  dist/zarr-core-dyanmic/gzip-L6R6VTGD.js                 381b 

⚡ Done in 21ms
```

