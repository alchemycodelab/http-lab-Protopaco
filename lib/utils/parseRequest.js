module.exports = rawRequest => {

    const splitRequest = rawRequest.split(' ');
    const method = splitRequest[0];
    const path = splitRequest[1];
    if (method === 'GET') return { method, path };

    const splitOnNewLine = rawRequest.split('\n');
    const body = splitOnNewLine[splitOnNewLine.length - 1];

    return { method, path, body }

};
