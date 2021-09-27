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


> zarr-bundlesize@1.0.0 zarr-js
> esbuild --bundle --minify --outfile=dist/zarr-js.js --format=esm src/zarr-js.js


> zarr-bundlesize@1.0.0 zarr
> esbuild --bundle --minify --outfile=dist/zarr.js --format=esm src/zarr.js


> zarr-bundlesize@1.0.0 zarrita
> esbuild --bundle --minify --outfile=dist/zarrita.js --format=esm src/zarrita.js


> zarr-bundlesize@1.0.0 zarrita-core
> esbuild --bundle --minify --outfile=dist/zarrita-core.js --format=esm src/zarrita-core.js


> zarr-bundlesize@1.0.0 zarrita-core-dynamic
> esbuild --bundle --minify --splitting --outdir=dist/zarr-core-dyanmic --format=esm src/zarrita-core-dynamic-codecs.js


  dist/zarr-js.js  132.7kb

⚡ Done in 25ms

  dist/zarrita-core.js  46.3kb # just core zarr features

⚡ Done in 21ms

  dist/zarr.js  85.1kb

⚡ Done in 22ms

  dist/zarrita.js  61.6kb

⚡ Done in 26ms

  dist/zarr-core-dyanmic/chunk-BVQTLAQB.js               43.6kb
  dist/zarr-core-yanmic/zarrita-core-dynamic-codecs.js   2.1kb # zarr implementation is ~2kb, rest is compression lib
  dist/zarr-core-dyanmic/zlib-LZSF2JAL.js                 389b
  dist/zarr-core-dyanmic/gzip-I6SXISEB.js                 383b

⚡ Done in 19ms
```

