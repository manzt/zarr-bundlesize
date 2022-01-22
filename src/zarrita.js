import { get_array, registry, slice } from "zarrita/v2";
import { get } from "zarrita/ops";
import { GZip, Zlib } from "numcodecs";

let zarr = {
  get_array,
  registry,
  slice,
  get,
};

// need to add codecs, none are included by default
zarr.registry.add("gzip", () => GZip);
zarr.registry.add("zlib", () => Zlib);

console.log(zarr);
