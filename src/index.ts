// src/index.ts

const statusDescriptions: { [key: number]: string } = {
    100: 'Continue: The server has received the request headers, and the client should proceed to send the request body.',
    101: 'Switching Protocols: The requester has asked the server to switch protocols.',
    200: 'OK: The request was successful.',
    201: 'Created: The request was successful and a resource was created.',
    202: 'Accepted: The request has been accepted for processing, but the processing is not complete.',
    203: 'Non-Authoritative Information: The request was successful but the returned meta-information is from a cached copy.',
    204: 'No Content: The server successfully processed the request and is not returning any content.',
    205: 'Reset Content: The server successfully processed the request, but is not returning any content and requires the requester to reset the document view.',
    206: 'Partial Content: The server is delivering only part of the resource due to a range header sent by the client.',
    300: 'Multiple Choices: There are multiple options for the resource from which the client may choose.',
    301: 'Moved Permanently: This and all future requests should be directed to the given URI.',
    302: 'Found: The resource was found but temporarily located at a different URI.',
    303: 'See Other: The response to the request can be found under another URI using the GET method.',
    304: 'Not Modified: Indicates that the resource has not been modified since the version specified by the request headers.',
    305: 'Use Proxy: The requested resource is available only through a proxy.',
    307: 'Temporary Redirect: The request should be repeated with another URI; however, future requests should still use the original URI.',
    400: 'Bad Request: The server cannot or will not process the request due to an apparent client error.',
    401: 'Unauthorized: Authentication is required and has failed or has not yet been provided.',
    402: 'Payment Required: Reserved for future use.',
    403: 'Forbidden: The request was valid, but the server is refusing action.',
    404: 'Not Found: The requested resource could not be found.',
    405: 'Method Not Allowed: A request method is not supported for the requested resource.',
    406: 'Not Acceptable: The requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request.',
    407: 'Proxy Authentication Required: The client must first authenticate itself with the proxy.',
    408: 'Request Timeout: The server timed out waiting for the request.',
    409: 'Conflict: The request could not be processed because of conflict in the request.',
    410: 'Gone: The resource requested is no longer available and will not be available again.',
    411: 'Length Required: The request did not specify the length of its content, which is required by the requested resource.',
    412: 'Precondition Failed: The server does not meet one of the preconditions that the requester put on the request.',
    413: 'Payload Too Large: The request is larger than the server is willing or able to process.',
    414: 'URI Too Long: The URI provided was too long for the server to process.',
    415: 'Unsupported Media Type: The request entity has a media type which the server or resource does not support.',
    416: 'Range Not Satisfiable: The client has asked for a portion of the file, but the server cannot supply that portion.',
    417: 'Expectation Failed: The server cannot meet the requirements of the Expect request-header field.',
    418: "I'm a teapot: This code was defined in 1998 as one of the traditional IETF April Fools' jokes.",
    421: 'Misdirected Request: The request was directed at a server that is not able to produce a response.',
    426: 'Upgrade Required: The client should switch to a different protocol such as TLS/1.0.',
    428: 'Precondition Required: The origin server requires the request to be conditional.',
    429: 'Too Many Requests: The user has sent too many requests in a given amount of time ("rate limiting").',
    431: 'Request Header Fields Too Large: The server is unwilling to process the request because its header fields are too large.',
    451: 'Unavailable For Legal Reasons: The user-agent requested a resource that cannot legally be provided.',
    500: 'Internal Server Error: A generic error message, given when an unexpected condition was encountered.',
    501: 'Not Implemented: The server either does not recognize the request method, or it lacks the ability to fulfil the request.',
    502: 'Bad Gateway: The server was acting as a gateway or proxy and received an invalid response from the upstream server.',
    503: 'Service Unavailable: The server cannot handle the request (because it is overloaded or down for maintenance).',
    504: 'Gateway Timeout: The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.',
    505: 'HTTP Version Not Supported: The server does not support the HTTP protocol version used in the request.'
};

function getStatusDescription(statusCode: number): string {
    return statusDescriptions[statusCode] || 'Unknown status code';
}

export { getStatusDescription };
