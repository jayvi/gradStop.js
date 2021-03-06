# GradStop.js

#### JavaScript micro library to generate gradient color stops

| [Demo](http://codepen.io/Siddharth11/full/RPvJmO)  | [Download](https://raw.githubusercontent.com/Siddharth11/gradStop.js/master/dist/gradstop.min.js) |
|---|---|

### Usage:

``` javascript
var gradient = gradStop({
    stops: 5,
    inputFormat: 'hex',
    colorArray: ['#343838', '#00DFFC']
});
console.log(gradient);
// rgb(52,56,56), rgb(39,97,105), rgb(26,139,154), rgb(13,181,203), rgb(0,223,252)
```


![Gradient Strip](gradient strip.png)

#### Default Parameters:
 * inputFormat: 'hex' (supports hex, rgb and hsl)
 * stops: 5
 * colorArray: ['#fff', '#000'] \(supports upto 4 values)

Both shorthand(#fff) and standard(#ffffff) format hex values are supported.  

#### Development  
 - Install dependencies  
 `npm install` or `yarn`
 - Start JS compilation  
 `npm run dev`
 - Build  
 `npm run build`
