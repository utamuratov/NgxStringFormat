# Angular stringFormat Pipe [display money, unicode, zeroString, time]

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.7.
This pipe helps to confert a string from a simple view to special view. For example, ```12345 => 12 345; #&1179 => қ; 1250 => 00:20:50``` and so on.

## Installation

Use this following command to install:

```bash
npm i @utamuratov/ngx-string-format
```

## Usage

```
import { NgxStringFormatModule} from '@utamuratov/ngx-string-format';
 
@NgModule({
  declarations: [AppComponent],
  imports: [NgxStringFormat],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

# Using
```
{{anyString| stringFormat: 'spaceEachThreeCharacters'}}

# for example
{{'12345'| stringFormat: 'spaceEachThreeCharactersWithTwoZero'}}

# result
12 345.00
```

## API
Pipe cases:
| Cases                      |      Are      |
|----------------------------|:-------------:|
| 'spaceEachThreeCharacters' |  Starts at the end and throws one space after every 3 characters: ```12345 => 12 345``` |
| 'spaceEachThreeCharactersWithTwoZero' |    Starting at the end, it throws one space after every 3 characters and rounds off the 2 characters with precision: ```12345.56 => 12 345.56```|
| 'beforeTwoDigitWithComma' | Puts a full stop before the last 2 characters: ```1234 => 12.34``` |
|'withLeftOneZero' |```1=>01; 5=>05``` |
|'unicode'|It converts all unicodes in the context to string|
|'secundsToTime'|Secunds are converted to hours, minutes, secunds format: ```125 => 00:02:05```|
