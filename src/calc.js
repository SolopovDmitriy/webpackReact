
export default class Calc {
    add(...args) {
        return args.reduce(function (a, b) {
            return a + b;
        });
    }
}

