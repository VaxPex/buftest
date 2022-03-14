let nbuf = Buffer.alloc(0)
offset = 0;
//writes a byte
let buf = Buffer.alloc(1)
buf.writeInt8(0, 0);
nbuf = Buffer.concat([nbuf, buf])
offset += 1
//read byte
console.log(nbuf.slice(offset - 1, offset).readInt8())
//read bool
console.log(nbuf.slice(offset - 1, offset).readInt8() !== 0) 
let njbuf = Buffer.alloc(0)
offset = 0;
//writes a byte
let buff = Buffer.alloc(1)
buff.writeInt8(1, 0);
njbuf = Buffer.concat([njbuf, buff])
//read byte
offset += 1
console.log(njbuf.slice(offset - 1, offset).readInt8())
//read bool
console.log(njbuf.slice(offset - 1, offset).readInt8() !== 0) 
