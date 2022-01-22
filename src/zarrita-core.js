import { get_array, registry } from "zarrita/v2";
import { GZip, Zlib } from "numcodecs";

// need to add codecs to registry
registry.add("gzip", () => GZip);
registry.add("zlib", () => Zlib);

// just supports direct chunk indexing, no special slicing
console.log(get_array);
