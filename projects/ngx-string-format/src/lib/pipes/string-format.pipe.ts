import { Pipe, PipeTransform } from "@angular/core";
import { toUnicode } from "punycode";

@Pipe({ name: "stringFormat" })
export class StringFormatPipe implements PipeTransform {
  transform(str: any, type: string) {
    switch (type) {
      case "spaceEachThreeCharacters":
        return !str || str === undefined
          ? "0.00"
          : str.toString().replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, " ");
      case "spaceEachThreeCharactersWithTwoZero":
        return !str || str === undefined
          ? "0.00"
          : this.roundTwoDigit(str.toString()).replace(
              /(?!^)(?=(?:\d{3})+(?:\.|$))/gm,
              " "
            );
      case "beforeTwoDigitWithComma":
        return !str || str === undefined
          ? "0.00"
          : this.beforeTwoDigitWithComma(str);
      case "secundsToTime":
        return !str || str === undefined ? "00:00:00" : this.secundsToTime(str);
      case "withLeftOneZero":
        return !str || str === undefined
          ? "00"
          : str.toString().length < 2
          ? "0" + str.toString()
          : str.toString();
      case "unicode":
        return this.unicodeToString(str.toString());
      default:
        throw new Error(`Invalid string format specified: ${type}`);
    }
  }

  unicodeToString(str: string) {
    let index = str.indexOf("&#");
    while (index >= 0) {
      let commaPoint = str.indexOf(";", index + 2);
      if (commaPoint >= 0) {
        str =
          str.substring(0, index) +
          String.fromCharCode(+str.substring(index + 2, commaPoint)) +
          str.substring(commaPoint + 1);
      }
      index = str.indexOf("&#", index + 1);
    }
    return str;
  }

  roundTwoDigit(str: string) {
    if (!str) {
      return "0.00";
    }
    str = str.toString();
    const indx = str.indexOf(".");
    if (indx < 0) {
      return str + ".00";
    }
    str += "0";
    return str.substring(0, indx + 3);
  }

  beforeTwoDigitWithComma(str: string) {
    str = str.toString();
    const length = str.length;
    return (
      str
        .substring(0, length - 2)
        .replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, " ") +
      "." +
      str.substr(length - 2, 2)
    );
  }

  secundsToTime(str) {
    const seconds = Number(str);
    const d = Math.floor(seconds / (3600 * 24));
    const h = Math.floor((seconds % (3600 * 24)) / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);

    return (
      (!h || h === undefined
        ? "00"
        : h.toString().length < 2
        ? "0" + h.toString()
        : m.toString()) +
      ":" +
      (!m || m === undefined
        ? "00"
        : m.toString().length < 2
        ? "0" + m.toString()
        : m.toString()) +
      ":" +
      (!s || s === undefined
        ? "00"
        : s.toString().length < 2
        ? "0" + s.toString()
        : s.toString())
    );
  }
}
