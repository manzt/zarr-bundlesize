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
> run-p zarr zarr-js zarrita


> zarr-bundlesize@1.0.0 zarrita
> esbuild --bundle --outfile=dist/zarrita.js --format=esm src/zarrita.js


> zarr-bundlesize@1.0.0 zarr-js
> esbuild --bundle --outfile=dist/zarr-js.js --format=esm src/zarr-js.js


> zarr-bundlesize@1.0.0 zarr
> esbuild --bundle --outfile=dist/zarr.js --format=esm src/zarr.js


  dist/zarrita.js  139.6kb

⚡ Done in 19ms

  dist/zarr.js  189.0kb

⚡ Done in 19ms

  dist/zarr-js.js  322.4kb

⚡ Done in 23ms
```

```
ls -la dist
.rw-r--r-- 330k hms-manzt 27 Sep 16:51 zarr-js.js
.rw-r--r-- 194k hms-manzt 27 Sep 16:51 zarr.js
.rw-r--r-- 143k hms-manzt 27 Sep 16:51 zarrita.js
```


