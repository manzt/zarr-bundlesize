import * as zarr from 'zarrita';
import { GZip, Zlib } from 'numcodecs';

// need to add codecs, none are included by default
zarr.registry.add('gzip', () => GZip);
zarr.registry.add('zlib', () => Zlib);

console.log(zarr);
