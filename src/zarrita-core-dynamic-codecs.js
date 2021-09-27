import { ZarrArray, registry } from 'zarrita/core';

// add codecs, but use dynamic imports. These are loaded at runtime
// when the compression type is inspected for the array. They do not 
// end up in the initial bundle.
registry.set('gzip', () => import('numcodecs/gzip').then(m => m.default));
registry.set('zlib', () => import('numcodecs/zlib').then(m => m.default));

console.log(ZarrArray);
