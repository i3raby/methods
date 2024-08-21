const http = require('node:http');

/**
 * Get the current Node.js Methods.
 * @private
 */

function CurrentNodeMethods() {
    return http.METHODS && http.METHODS.map((value) => value.toUpperCase());
}

/**
 * Get the "basic" Node.js methods, a snapshot from Node.js 0.10.
 * @private
 */

function BasicNodeMethods() {
    return [
        'GET', 'POST', 'PUT', 'HEAD', 'DELETE', 'OPTIONS', 'TRACE', 'COPY', 'SEARCH',
        'LOCK', 'MKCOL', 'MOVE', 'PURGE', 'PROPFIND', 'PROPPATCH', 'UNLOCK', 'REPORT', 'CONNECT',
        'MKACTIVITY', 'CHECKOUT', 'MERGE', 'M-SEARCH', 'NOTIFY', 'SUBSCRIBE', 'UNSUBSCRIBE', 'PATCH',
    ]
}

module.exports = CurrentNodeMethods() || BasicNodeMethods();