import { IButton } from '../models';

function createButton(label: string, value: string, shiftValue: string = '', symbolValue: string = ''): IButton {
  return {
    label,
    value,
    shiftValue,
    symbolValue,
  }
}

// English letters
const enQ = createButton('q', 'q', 'Q', '1');
const enW = createButton('w', 'w', 'W', '2');
const enE = createButton('e', 'e', 'E', '3');
const enR = createButton('r', 'r', 'R', '4');
const enT = createButton('t', 't', 'T', '5');
const enY = createButton('y', 'y', 'Y', '6');
const enU = createButton('u', 'u', 'U', '7');
const enI = createButton('i', 'i', 'I', '8');
const enO = createButton('o', 'o', 'O', '9');
const enP = createButton('p', 'p', 'P', '0');
const enA = createButton('a', 'a', 'A', '#');
const enS = createButton('s', 's', 'S', '$');
const enD = createButton('d', 'd', 'D', '%');
const enF = createButton('f', 'f', 'F', '!');
const enG = createButton('g', 'g', 'G', '&');
const enH = createButton('h', 'h', 'H', '@');
const enJ = createButton('j', 'j', 'J', '*');
const enK = createButton('k', 'k', 'K', '/');
const enL = createButton('l', 'l', 'L', '\\');
const enZ = createButton('z', 'z', 'Z', '+');
const enX = createButton('x', 'x', 'X', '-');
const enC = createButton('c', 'c', 'C', '=');
const enV = createButton('v', 'v', 'V', '"');
const enB = createButton('b', 'b', 'B', '_');
const enN = createButton('n', 'n', 'N', ',');
const enM = createButton('m', 'm', 'M', '.');

// Georgian letters
const geQ = createButton('ქ', 'ქ', 'ქ', '1');
const geW = createButton('წ', 'წ', 'ჭ', '2');
const geE = createButton('ე', 'ე', 'ე', '3');
const geR = createButton('რ', 'რ', 'ღ', '4');
const geT = createButton('ტ', 'ტ', 'თ', '5');
const geY = createButton('ყ', 'ყ', 'ყ', '6');
const geU = createButton('უ', 'უ', 'უ', '7');
const geI = createButton('ი', 'ი', 'ი', '8');
const geO = createButton('ო', 'ო', 'ო', '9');
const geP = createButton('პ', 'პ', 'პ', '0');
const geA = createButton('ა', 'ა', 'ა', '#');
const geS = createButton('ს', 'ს', 'შ', '$');
const geD = createButton('დ', 'დ', 'დ', '%');
const geF = createButton('ფ', 'ფ', 'ფ', '!');
const geG = createButton('გ', 'გ', 'გ', '&');
const geH = createButton('ჰ', 'ჰ', 'ჰ', '@');
const geJ = createButton('ჯ', 'ჯ', 'ჟ', '*');
const geK = createButton('კ', 'კ', 'კ', '/');
const geL = createButton('ლ', 'ლ', 'ლ', '\\');
const geZ = createButton('ზ', 'ზ', 'ძ', '+');
const geX = createButton('ხ', 'ხ', 'ხ', '-');
const geC = createButton('ც', 'ც', 'ჩ', '=');
const geV = createButton('ვ', 'ვ', 'ვ', '"');
const geB = createButton('ბ', 'ბ', 'ბ', '_');
const geN = createButton('ნ', 'ნ', 'ნ', ',');
const geM = createButton('მ', 'მ', 'მ', '.');

// Russian letters
const ruYa = createButton('я', 'я', 'Я', '1');
const ruV = createButton('в', 'в', 'В', '2');
const ruE = createButton('е', 'е', 'Е', '3');
const ruR = createButton('р', 'р', 'Р', '4');
const ruT = createButton('т', 'т', 'Т', '5');
const ruY = createButton('ы', 'ы', 'Ы', '6');
const ruU = createButton('у', 'у', 'У', '7');
const ruI = createButton('и', 'и', 'И', '8');
const ruO = createButton('о', 'о', 'О', '9');
const ruP = createButton('п', 'п', 'П', '0');
const ruA = createButton('а', 'а', 'А', '#');
const ruS = createButton('с', 'с', 'С', '$');
const ruD = createButton('д', 'д', 'Д', '%');
const ruF = createButton('ф', 'ф', 'Ф', '!');
const ruG = createButton('г', 'г', 'Г', '&');
const ruH = createButton('х', 'х', 'Х', '@');
const ruJ = createButton('й', 'й', 'Й', '*');
const ruK = createButton('к', 'к', 'К', '/');
const ruL = createButton('л', 'л', 'Л', '\\');
const ruZ = createButton('з', 'з', 'З', '+');
const ruX = createButton('ь', 'ь', 'Ь', '-');
const ruC = createButton('ц', 'ц', 'Ц', '=');
const ruV1 = createButton('в', 'в', 'В', '"');
const ruB = createButton('б', 'б', 'Б', '_');
const ruN = createButton('н', 'н', 'Н', ',');
const ruM = createButton('м', 'м', 'М', '.');

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
  enQ, enW, enE, enR, enT, enY, enU, enI, enO, enP, enA, enS, enD, 
  enF, enG, enH, enJ, enK, enL, enZ, enX, enC, enV, enB, enN, enM, 
  geQ, geW, geE, geR, geT, geY, geU, geI, geO, geP, geA, geS, geD, 
  geF, geG, geH, geJ, geK, geL, geZ, geX, geC, geV, geB, geN, geM,
  ruYa, ruV, ruE, ruR, ruT, ruY, ruU, ruI, ruO, ruP, ruA, ruS, ruD, 
  ruF, ruG, ruH, ruJ, ruK, ruL, ruZ, ruX, ruC, ruV1, ruB, ruN, ruM,
  zero, one, two, three, four, five, six, seven, eight, nine, dot 
}
