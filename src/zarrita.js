import * as zarr from 'zarrita';
import { GZip, Zlib } from 'numcodecs';
zarr.registry.add('gzip', () => GZip);
zarr.registry.add('zlib', () => Zlib);
console.log(zarr);
