import { ZarrArray, registry } from 'zarrita/core';
import { GZip, Zlib } from 'numcodecs';

registry.add('gzip', () => GZip);
registry.add('zlib', () => Zlib);

// just supports direct chunk indexing, no special slicing
console.log(ZarrArray);
