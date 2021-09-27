import { ZarrArray, registry } from 'zarrita/core';

registry.set('gzip', () => import('numcodecs/gzip').then(m => m.default));
registry.set('zlib', () => import('numcodecs/zlib').then(m => m.default));

// no codecs included in bundle by default, loaded dynamically at runtime
console.log(ZarrArray);
