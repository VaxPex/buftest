let nbuf = Buffer.alloc(0)
offset = 0;
//writes a byte
let buf = Buffer.alloc(1)
buf.writeInt8(0, 0);
nbuf = Buffer.concat([nbuf, buf])
offset += 1;
//read byte
console.log(nbuf.slice(offset - 1, offset).readInt8())
//read bool
console.log(nbuf.slice(offset - 1, offset).readInt8() !== 0)
