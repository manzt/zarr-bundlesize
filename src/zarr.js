import * as zarr from 'zarr/core';
import { GZip, Zlib } from 'numcodecs';

// need to add codecs, none are available by default
zarr.addCodec('gzip', () => GZip);
zarr.addCodec('zlib', () => Zlib);

console.log(zarr);
