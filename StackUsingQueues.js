var MyStack = function() {
    this.items = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.items.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.items.pop();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.items[this.items.length - 1];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.items.length === 0;
};
