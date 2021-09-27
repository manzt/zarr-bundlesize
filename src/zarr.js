import * as zarr from 'zarr/core';
import { GZip, Zlib } from 'numcodecs';
zarr.addCodec('gzip', () => GZip);
zarr.addCodec('zlib', () => Zlib);
console.log(zarr);
