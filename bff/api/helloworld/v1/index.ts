// Code generated by protoc-gen-typescript-http. DO NOT EDIT.
/* eslint-disable camelcase */
// @ts-nocheck

export enum ErrorReason {
  GreeterUnspecified = 0,
  UserNotFound = 1,
}
export enum HelloStatus {
  Ok = 0,
  Error = 1,
}
export enum GreeterErrorReason {
  Unknown = "UNKNOWN",
}
/**
 * The request message containing the user's name.
 */
export type HelloRequest = {
  name: string;
};

export type Social = {
  email: string;
  github: string;
};

export type Address = {
  city: string;
  street: string;
};

/**
 * The response message containing the greetings
 */
export type HelloReply = {
  message: string;
  bio: string[];
  social: Social | undefined;
  addresses: Address[];
  timestamp: wellKnownTimestamp | undefined;
  status: HelloStatus;
};

// Encoded using RFC 3339, where generated output will always be Z-normalized
// and uses 0, 3, 6 or 9 fractional digits.
// Offsets other than "Z" are also accepted.
type wellKnownTimestamp = string;

/** The URIs for Greeter */
export interface GreeterURIs<T = unknown> {
  /** Get the URI of `SayHello` method */
  getSayHelloURI(request: HelloRequest, options?: T): string;
}

/**
 * The greeting service definition.
 */
export interface Greeter<T = unknown> {
  uris: GreeterURIs<T>;
  /**
   * Sends a greeting
   */
  sayHello(request: HelloRequest, options?: T): Promise<HelloReply>;
}

export function getGreeterURIs<T = unknown>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handlerOptions: {
    mapStringify?: (map: Record<string, unknown>) => string;
  } = {},
): GreeterURIs<T> {
  return {
    getSayHelloURI(request, options) { // eslint-disable-line @typescript-eslint/no-unused-vars
      if (!request.name) {
        throw new Error("missing required field request.name");
      }
      const path = `helloworld/${request.name}`; // eslint-disable-line quotes
      const queryParams: string[] = [];
      let uri = path;
      if (queryParams.length > 0) {
        uri += `?${queryParams.join("&")}`
      }
      return uri;
    },
  };
}
// eslint-disable-next-line  @typescript-eslint/no-explicit-any
type RequestType<T = Record<string, any> | string | null> = {
  path: string;
  method: string;
  body: T;
};

type RequestHandler<T = unknown> = (
  request: RequestType & T,
  meta: { service: string, method: string },
) => Promise<unknown>;

export function createGreeterClient<T = unknown>(
  handler: RequestHandler<T>,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handlerOptions: {
    mapStringify?: (map: Record<string, unknown>) => string;
  } = {},
): Greeter<T> {
  const uris = getGreeterURIs<T>(handlerOptions);
  return {
    uris,
    sayHello(request, options) { // eslint-disable-line @typescript-eslint/no-unused-vars
      const uri = uris.getSayHelloURI(request, options);
      const body = null;
      return handler({
        path: uri,
        method: "GET",
        body,
        ...(options as T),
      }, {
        service: "Greeter",
        method: "SayHello",
      }) as Promise<HelloReply>;
    },
  };
}

// @@protoc_insertion_point(typescript-http-eof)
