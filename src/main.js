import { objectAssign } from './polyfill'
import { extractHEX, extractRGB, extractHSL, propBezInterpolate, returnRGBStr, returnHSLStr } from './utils'
import defaultOptions from './defaultOptions'

(function(glob) {
    function GradStop(options) {
        options = objectAssign({}, this.options, options)

        if (options.stops < options.colorArray.length) {
            throw "Number of stops cannot be less than colorArray.length"
        }
        return this.computeStops(options)
    }

    // GradStop deafult options
    GradStop.prototype.options = defaultOptions

    // computeStops
    GradStop.prototype.computeStops = options => {

        let outputArray = []

        const init = options => {
            switch(options.inputFormat) {
                case 'hex':
                    return extractHEX(options.colorArray)
                case 'rgb':
                    return extractRGB(options.colorArray)
                case 'hsl':
                    return extractHSL(options.colorArray)
            }
        }

        const stopsGenerator = options => {

            let colorArray = options.colorArray

            const inc = 1.0 / (options.stops - 1)

            let t = 0

            for (let i = 0; i < options.stops; i++) {

                if (options.inputFormat == 'hex' || options.inputFormat == 'rgb') {
                    let [r, g, b] = propBezInterpolate(['r', 'g', 'b'])(colorArray)(t)
                    outputArray.push(returnRGBStr([r, g, b]))
                } else if (options.inputFormat == 'hsl') {
                    let [h, s, l] = propBezInterpolate(['h', 's', 'l'])(colorArray)(t)
                    outputArray.push(returnHSLStr([h, s, l]))
                }
                t += inc
            }
        }
        options.colorArray = init(options)
        stopsGenerator(options)

        return outputArray
    }

    // drop 'new' keyword
    glob.gradStop = options => new GradStop(options)

})(typeof window !== 'undefined' ? window : global)