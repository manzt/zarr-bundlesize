import { ZarrArray } from 'zarrita/core';
import { GZip, Zlib } from 'numcodecs';

// need to add codecs to registry
registry.add('gzip', () => GZip);
registry.add('zlib', () => Zlib);

// just supports direct chunk indexing, no special slicing
console.log(ZarrArray);
