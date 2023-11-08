import { IButton } from '../interfaces';

function createButton(label: string, value: string, shiftValue: string = '', symbolValue: string = ''): IButton {
  return {
    label,
    value,
    shiftValue,
    symbolValue,
  }
}

// English letters
const q = createButton('q', 'q', 'Q', '1');
const w = createButton('w', 'w', 'W', '2');
const e = createButton('e', 'e', 'E', '3');
const r = createButton('r', 'r', 'R', '4');
const t = createButton('t', 't', 'T', '5');
const y = createButton('y', 'y', 'Y', '6');
const u = createButton('u', 'u', 'U', '7');
const i = createButton('i', 'i', 'I', '8');
const o = createButton('o', 'o', 'O', '9');
const p = createButton('p', 'p', 'P', '0');
const a = createButton('a', 'a', 'A', '#');
const s = createButton('s', 's', 'S', '$');
const d = createButton('d', 'd', 'D', '%');
const f = createButton('f', 'f', 'F', '!');
const g = createButton('g', 'g', 'G', '&');
const h = createButton('h', 'h', 'H', '@');
const j = createButton('j', 'j', 'J', '*');
const k = createButton('k', 'k', 'K', '/');
const l = createButton('l', 'l', 'L', '\\');
const z = createButton('z', 'z', 'Z', '+');
const x = createButton('x', 'x', 'X', '-');
const c = createButton('c', 'c', 'C', '=');
const v = createButton('v', 'v', 'V', '"');
const b = createButton('b', 'b', 'B', '_');
const n = createButton('n', 'n', 'N', ',');
const m = createButton('m', 'm', 'M', '.');

// Georgian letters
const qGeo = createButton('ქ', 'ქ', 'ქ', '1');
const wGeo = createButton('წ', 'წ', 'ჭ', '2');
const eGeo = createButton('ე', 'ე', 'ე', '3');
const rGeo = createButton('რ', 'რ', 'ღ', '4');
const tGeo = createButton('ტ', 'ტ', 'თ', '5');
const yGeo = createButton('ყ', 'ყ', 'ყ', '6');
const uGeo = createButton('უ', 'უ', 'უ', '7');
const iGeo = createButton('ი', 'ი', 'ი', '8');
const oGeo = createButton('ო', 'ო', 'ო', '9');
const pGeo = createButton('პ', 'პ', 'პ', '0');
const aGeo = createButton('ა', 'ა', 'ა', '#');
const sGeo = createButton('ს', 'ს', 'შ', '$');
const dGeo = createButton('დ', 'დ', 'დ', '%');
const fGeo = createButton('ფ', 'ფ', 'ფ', '!');
const gGeo = createButton('გ', 'გ', 'გ', '&');
const hGeo = createButton('ჰ', 'ჰ', 'ჰ', '@');
const jGeo = createButton('ჯ', 'ჯ', 'ჟ', '*');
const kGeo = createButton('კ', 'კ', 'კ', '/');
const lGeo = createButton('ლ', 'ლ', 'ლ', '\\');
const zGeo = createButton('ზ', 'ზ', 'ძ', '+');
const xGeo = createButton('ხ', 'ხ', 'ხ', '-');
const cGeo = createButton('ც', 'ც', 'ჩ', '=');
const vGeo = createButton('ვ', 'ვ', 'ვ', '"');
const bGeo = createButton('ბ', 'ბ', 'ბ', '_');
const nGeo = createButton('ნ', 'ნ', 'ნ', ',');
const mGeo = createButton('მ', 'მ', 'მ', '.');

// Numbers
const zero = createButton('0', '0');
const one = createButton('1', '1');
const two = createButton('2', '2');
const three = createButton('3', '3');
const four = createButton('4', '4');
const five = createButton('5', '5');
const six = createButton('6', '6');
const seven = createButton('7', '7');
const eight = createButton('8', '8');
const nine = createButton('9', '9');
const dot = createButton('.', '.');

export default { 
  q, w, e, r, t, y, u, i, o, p, a, s, d, f, g, h, j, k, l, z, x, c, v, b, n, m, 
  qGeo, wGeo, eGeo, rGeo, tGeo, yGeo, uGeo, iGeo, oGeo, pGeo, aGeo, sGeo, dGeo, 
  fGeo, gGeo, hGeo, jGeo, kGeo, lGeo, zGeo, xGeo, cGeo, vGeo, bGeo, nGeo, mGeo,
  zero, one, two, three, four, five, six, seven, eight, nine, dot 
}
