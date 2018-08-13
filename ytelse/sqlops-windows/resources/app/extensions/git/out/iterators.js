/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
function* filter(it, condition) {
    let i = 0;
    for (let t of it) {
        if (condition(t, i++)) {
            yield t;
        }
    }
}
function* map(it, fn) {
    let i = 0;
    for (let t of it) {
        yield fn(t, i++);
    }
}
class FunctionalIteratorImpl {
    constructor(iterator) {
        this.iterator = iterator;
    }
    filter(condition) {
        return new FunctionalIteratorImpl(filter(this.iterator, condition));
    }
    map(fn) {
        return new FunctionalIteratorImpl(map(this.iterator, fn));
    }
    toArray() {
        return Array.from(this.iterator);
    }
    [Symbol.iterator]() {
        return this.iterator;
    }
}
function iterate(obj) {
    if (Array.isArray(obj)) {
        return new FunctionalIteratorImpl(obj[Symbol.iterator]());
    }
    return new FunctionalIteratorImpl(obj);
}
exports.iterate = iterate;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/8a3011756318a2ded1e6e84332230a2b2bf9c544/extensions\git\out/iterators.js.map
