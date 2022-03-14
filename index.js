let nbuf = Buffer.alloc(0)
offset = 0;
let buf = Buffer.alloc(1)
buf.writeInt8(0, 0);
nbuf = Buffer.concat([nbuf, buf])
offset += 1
console.log(nbuf.slice(offset - 1, offset).readInt8())
console.log(nbuf.slice(offset - 1, offset).readInt8() !== 0) 
let njbuf = Buffer.alloc(0)
offset = 0;
let buff = Buffer.alloc(1)
buff.writeInt8(1, 0);
njbuf = Buffer.concat([njbuf, buff])
offset += 1
console.log(njbuf.slice(offset - 1, offset).readInt8())
console.log(njbuf.slice(offset - 1, offset).readInt8() !== 0)
njbuf = null
nbuf = null
offset = 0
