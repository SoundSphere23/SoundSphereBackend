
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Song
 * 
 */
export type Song = $Result.DefaultSelection<Prisma.$SongPayload>
/**
 * Model Album
 * 
 */
export type Album = $Result.DefaultSelection<Prisma.$AlbumPayload>
/**
 * Model Genre
 * 
 */
export type Genre = $Result.DefaultSelection<Prisma.$GenrePayload>
/**
 * Model Playlist
 * 
 */
export type Playlist = $Result.DefaultSelection<Prisma.$PlaylistPayload>
/**
 * Model Artist
 * 
 */
export type Artist = $Result.DefaultSelection<Prisma.$ArtistPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.song`: Exposes CRUD operations for the **Song** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Songs
    * const songs = await prisma.song.findMany()
    * ```
    */
  get song(): Prisma.SongDelegate<ExtArgs>;

  /**
   * `prisma.album`: Exposes CRUD operations for the **Album** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Albums
    * const albums = await prisma.album.findMany()
    * ```
    */
  get album(): Prisma.AlbumDelegate<ExtArgs>;

  /**
   * `prisma.genre`: Exposes CRUD operations for the **Genre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Genres
    * const genres = await prisma.genre.findMany()
    * ```
    */
  get genre(): Prisma.GenreDelegate<ExtArgs>;

  /**
   * `prisma.playlist`: Exposes CRUD operations for the **Playlist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Playlists
    * const playlists = await prisma.playlist.findMany()
    * ```
    */
  get playlist(): Prisma.PlaylistDelegate<ExtArgs>;

  /**
   * `prisma.artist`: Exposes CRUD operations for the **Artist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Artists
    * const artists = await prisma.artist.findMany()
    * ```
    */
  get artist(): Prisma.ArtistDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.6.0
   * Query Engine version: e95e739751f42d8ca026f6b910f5a2dc5adeaeee
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Song: 'Song',
    Album: 'Album',
    Genre: 'Genre',
    Playlist: 'Playlist',
    Artist: 'Artist'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'song' | 'album' | 'genre' | 'playlist' | 'artist'
      txIsolationLevel: never
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Song: {
        payload: Prisma.$SongPayload<ExtArgs>
        fields: Prisma.SongFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SongFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SongFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          findFirst: {
            args: Prisma.SongFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SongFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          findMany: {
            args: Prisma.SongFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongPayload>[]
          }
          create: {
            args: Prisma.SongCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          createMany: {
            args: Prisma.SongCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SongDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          update: {
            args: Prisma.SongUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          deleteMany: {
            args: Prisma.SongDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SongUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SongUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          aggregate: {
            args: Prisma.SongAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSong>
          }
          groupBy: {
            args: Prisma.SongGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SongGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SongFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.SongAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.SongCountArgs<ExtArgs>,
            result: $Utils.Optional<SongCountAggregateOutputType> | number
          }
        }
      }
      Album: {
        payload: Prisma.$AlbumPayload<ExtArgs>
        fields: Prisma.AlbumFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlbumFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlbumFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          findFirst: {
            args: Prisma.AlbumFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlbumFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          findMany: {
            args: Prisma.AlbumFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>[]
          }
          create: {
            args: Prisma.AlbumCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          createMany: {
            args: Prisma.AlbumCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AlbumDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          update: {
            args: Prisma.AlbumUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          deleteMany: {
            args: Prisma.AlbumDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AlbumUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AlbumUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          aggregate: {
            args: Prisma.AlbumAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAlbum>
          }
          groupBy: {
            args: Prisma.AlbumGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AlbumGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AlbumFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.AlbumAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.AlbumCountArgs<ExtArgs>,
            result: $Utils.Optional<AlbumCountAggregateOutputType> | number
          }
        }
      }
      Genre: {
        payload: Prisma.$GenrePayload<ExtArgs>
        fields: Prisma.GenreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GenreFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GenreFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          findFirst: {
            args: Prisma.GenreFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GenreFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          findMany: {
            args: Prisma.GenreFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          create: {
            args: Prisma.GenreCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          createMany: {
            args: Prisma.GenreCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GenreDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          update: {
            args: Prisma.GenreUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          deleteMany: {
            args: Prisma.GenreDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GenreUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GenreUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          aggregate: {
            args: Prisma.GenreAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGenre>
          }
          groupBy: {
            args: Prisma.GenreGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GenreGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.GenreFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.GenreAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.GenreCountArgs<ExtArgs>,
            result: $Utils.Optional<GenreCountAggregateOutputType> | number
          }
        }
      }
      Playlist: {
        payload: Prisma.$PlaylistPayload<ExtArgs>
        fields: Prisma.PlaylistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlaylistFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlaylistFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          findFirst: {
            args: Prisma.PlaylistFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlaylistFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          findMany: {
            args: Prisma.PlaylistFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>[]
          }
          create: {
            args: Prisma.PlaylistCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          createMany: {
            args: Prisma.PlaylistCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PlaylistDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          update: {
            args: Prisma.PlaylistUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          deleteMany: {
            args: Prisma.PlaylistDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PlaylistUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PlaylistUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          aggregate: {
            args: Prisma.PlaylistAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePlaylist>
          }
          groupBy: {
            args: Prisma.PlaylistGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PlaylistGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PlaylistFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.PlaylistAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.PlaylistCountArgs<ExtArgs>,
            result: $Utils.Optional<PlaylistCountAggregateOutputType> | number
          }
        }
      }
      Artist: {
        payload: Prisma.$ArtistPayload<ExtArgs>
        fields: Prisma.ArtistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArtistFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArtistFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          findFirst: {
            args: Prisma.ArtistFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArtistFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          findMany: {
            args: Prisma.ArtistFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>[]
          }
          create: {
            args: Prisma.ArtistCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          createMany: {
            args: Prisma.ArtistCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ArtistDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          update: {
            args: Prisma.ArtistUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          deleteMany: {
            args: Prisma.ArtistDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ArtistUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ArtistUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          aggregate: {
            args: Prisma.ArtistAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateArtist>
          }
          groupBy: {
            args: Prisma.ArtistGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ArtistGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ArtistFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.ArtistAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.ArtistCountArgs<ExtArgs>,
            result: $Utils.Optional<ArtistCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    likeSongs: number
    uploadSongs: number
    likeAlbums: number
    uploadAlbums: number
    playlist: number
    favouritesArtist: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likeSongs?: boolean | UserCountOutputTypeCountLikeSongsArgs
    uploadSongs?: boolean | UserCountOutputTypeCountUploadSongsArgs
    likeAlbums?: boolean | UserCountOutputTypeCountLikeAlbumsArgs
    uploadAlbums?: boolean | UserCountOutputTypeCountUploadAlbumsArgs
    playlist?: boolean | UserCountOutputTypeCountPlaylistArgs
    favouritesArtist?: boolean | UserCountOutputTypeCountFavouritesArtistArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikeSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SongWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUploadSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SongWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikeAlbumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUploadAlbumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPlaylistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavouritesArtistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistWhereInput
  }



  /**
   * Count Type SongCountOutputType
   */

  export type SongCountOutputType = {
    Artist: number
  }

  export type SongCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Artist?: boolean | SongCountOutputTypeCountArtistArgs
  }

  // Custom InputTypes

  /**
   * SongCountOutputType without action
   */
  export type SongCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongCountOutputType
     */
    select?: SongCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * SongCountOutputType without action
   */
  export type SongCountOutputTypeCountArtistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistWhereInput
  }



  /**
   * Count Type AlbumCountOutputType
   */

  export type AlbumCountOutputType = {
    Song: number
  }

  export type AlbumCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Song?: boolean | AlbumCountOutputTypeCountSongArgs
  }

  // Custom InputTypes

  /**
   * AlbumCountOutputType without action
   */
  export type AlbumCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumCountOutputType
     */
    select?: AlbumCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * AlbumCountOutputType without action
   */
  export type AlbumCountOutputTypeCountSongArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SongWhereInput
  }



  /**
   * Count Type GenreCountOutputType
   */

  export type GenreCountOutputType = {
    Song: number
    Album: number
  }

  export type GenreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Song?: boolean | GenreCountOutputTypeCountSongArgs
    Album?: boolean | GenreCountOutputTypeCountAlbumArgs
  }

  // Custom InputTypes

  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenreCountOutputType
     */
    select?: GenreCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeCountSongArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SongWhereInput
  }


  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeCountAlbumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumWhereInput
  }



  /**
   * Count Type PlaylistCountOutputType
   */

  export type PlaylistCountOutputType = {
    playlistSongs: number
  }

  export type PlaylistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlistSongs?: boolean | PlaylistCountOutputTypeCountPlaylistSongsArgs
  }

  // Custom InputTypes

  /**
   * PlaylistCountOutputType without action
   */
  export type PlaylistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistCountOutputType
     */
    select?: PlaylistCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PlaylistCountOutputType without action
   */
  export type PlaylistCountOutputTypeCountPlaylistSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SongWhereInput
  }



  /**
   * Count Type ArtistCountOutputType
   */

  export type ArtistCountOutputType = {
    Song: number
    Album: number
  }

  export type ArtistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Song?: boolean | ArtistCountOutputTypeCountSongArgs
    Album?: boolean | ArtistCountOutputTypeCountAlbumArgs
  }

  // Custom InputTypes

  /**
   * ArtistCountOutputType without action
   */
  export type ArtistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistCountOutputType
     */
    select?: ArtistCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ArtistCountOutputType without action
   */
  export type ArtistCountOutputTypeCountSongArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SongWhereInput
  }


  /**
   * ArtistCountOutputType without action
   */
  export type ArtistCountOutputTypeCountAlbumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    name: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    name: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    email: number
    name: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    name?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    name?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    name?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    email: string
    name: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    name?: boolean
    likeSongs?: boolean | User$likeSongsArgs<ExtArgs>
    uploadSongs?: boolean | User$uploadSongsArgs<ExtArgs>
    likeAlbums?: boolean | User$likeAlbumsArgs<ExtArgs>
    uploadAlbums?: boolean | User$uploadAlbumsArgs<ExtArgs>
    playlist?: boolean | User$playlistArgs<ExtArgs>
    favouritesArtist?: boolean | User$favouritesArtistArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    name?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likeSongs?: boolean | User$likeSongsArgs<ExtArgs>
    uploadSongs?: boolean | User$uploadSongsArgs<ExtArgs>
    likeAlbums?: boolean | User$likeAlbumsArgs<ExtArgs>
    uploadAlbums?: boolean | User$uploadAlbumsArgs<ExtArgs>
    playlist?: boolean | User$playlistArgs<ExtArgs>
    favouritesArtist?: boolean | User$favouritesArtistArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      likeSongs: Prisma.$SongPayload<ExtArgs>[]
      uploadSongs: Prisma.$SongPayload<ExtArgs>[]
      likeAlbums: Prisma.$AlbumPayload<ExtArgs>[]
      uploadAlbums: Prisma.$AlbumPayload<ExtArgs>[]
      playlist: Prisma.$PlaylistPayload<ExtArgs>[]
      favouritesArtist: Prisma.$ArtistPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      email: string
      name: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: UserFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: UserAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    likeSongs<T extends User$likeSongsArgs<ExtArgs> = {}>(args?: Subset<T, User$likeSongsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'findMany'> | Null>;

    uploadSongs<T extends User$uploadSongsArgs<ExtArgs> = {}>(args?: Subset<T, User$uploadSongsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'findMany'> | Null>;

    likeAlbums<T extends User$likeAlbumsArgs<ExtArgs> = {}>(args?: Subset<T, User$likeAlbumsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, 'findMany'> | Null>;

    uploadAlbums<T extends User$uploadAlbumsArgs<ExtArgs> = {}>(args?: Subset<T, User$uploadAlbumsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, 'findMany'> | Null>;

    playlist<T extends User$playlistArgs<ExtArgs> = {}>(args?: Subset<T, User$playlistArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, 'findMany'> | Null>;

    favouritesArtist<T extends User$favouritesArtistArgs<ExtArgs> = {}>(args?: Subset<T, User$favouritesArtistArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * User.likeSongs
   */
  export type User$likeSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    where?: SongWhereInput
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    cursor?: SongWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }


  /**
   * User.uploadSongs
   */
  export type User$uploadSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    where?: SongWhereInput
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    cursor?: SongWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }


  /**
   * User.likeAlbums
   */
  export type User$likeAlbumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumInclude<ExtArgs> | null
    where?: AlbumWhereInput
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    cursor?: AlbumWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }


  /**
   * User.uploadAlbums
   */
  export type User$uploadAlbumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumInclude<ExtArgs> | null
    where?: AlbumWhereInput
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    cursor?: AlbumWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }


  /**
   * User.playlist
   */
  export type User$playlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistInclude<ExtArgs> | null
    where?: PlaylistWhereInput
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    cursor?: PlaylistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }


  /**
   * User.favouritesArtist
   */
  export type User$favouritesArtistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInclude<ExtArgs> | null
    where?: ArtistWhereInput
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    cursor?: ArtistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Song
   */

  export type AggregateSong = {
    _count: SongCountAggregateOutputType | null
    _avg: SongAvgAggregateOutputType | null
    _sum: SongSumAggregateOutputType | null
    _min: SongMinAggregateOutputType | null
    _max: SongMaxAggregateOutputType | null
  }

  export type SongAvgAggregateOutputType = {
    duration: number | null
    rating: number | null
    reproductions: number | null
  }

  export type SongSumAggregateOutputType = {
    duration: number | null
    rating: number | null
    reproductions: number | null
  }

  export type SongMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    url: string | null
    duration: number | null
    rating: number | null
    thumbnail: string | null
    reproductions: number | null
    isPublic: boolean | null
    userCreatorId: string | null
    albumId: string | null
    genreId: string | null
    playlistId: string | null
  }

  export type SongMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    url: string | null
    duration: number | null
    rating: number | null
    thumbnail: string | null
    reproductions: number | null
    isPublic: boolean | null
    userCreatorId: string | null
    albumId: string | null
    genreId: string | null
    playlistId: string | null
  }

  export type SongCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    url: number
    duration: number
    rating: number
    thumbnail: number
    reproductions: number
    isPublic: number
    userCreatorId: number
    likedById: number
    albumId: number
    genreId: number
    playlistId: number
    artistId: number
    _all: number
  }


  export type SongAvgAggregateInputType = {
    duration?: true
    rating?: true
    reproductions?: true
  }

  export type SongSumAggregateInputType = {
    duration?: true
    rating?: true
    reproductions?: true
  }

  export type SongMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    url?: true
    duration?: true
    rating?: true
    thumbnail?: true
    reproductions?: true
    isPublic?: true
    userCreatorId?: true
    albumId?: true
    genreId?: true
    playlistId?: true
  }

  export type SongMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    url?: true
    duration?: true
    rating?: true
    thumbnail?: true
    reproductions?: true
    isPublic?: true
    userCreatorId?: true
    albumId?: true
    genreId?: true
    playlistId?: true
  }

  export type SongCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    url?: true
    duration?: true
    rating?: true
    thumbnail?: true
    reproductions?: true
    isPublic?: true
    userCreatorId?: true
    likedById?: true
    albumId?: true
    genreId?: true
    playlistId?: true
    artistId?: true
    _all?: true
  }

  export type SongAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Song to aggregate.
     */
    where?: SongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songs to fetch.
     */
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Songs
    **/
    _count?: true | SongCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SongAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SongSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SongMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SongMaxAggregateInputType
  }

  export type GetSongAggregateType<T extends SongAggregateArgs> = {
        [P in keyof T & keyof AggregateSong]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSong[P]>
      : GetScalarType<T[P], AggregateSong[P]>
  }




  export type SongGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SongWhereInput
    orderBy?: SongOrderByWithAggregationInput | SongOrderByWithAggregationInput[]
    by: SongScalarFieldEnum[] | SongScalarFieldEnum
    having?: SongScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SongCountAggregateInputType | true
    _avg?: SongAvgAggregateInputType
    _sum?: SongSumAggregateInputType
    _min?: SongMinAggregateInputType
    _max?: SongMaxAggregateInputType
  }

  export type SongGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    url: string
    duration: number | null
    rating: number | null
    thumbnail: string
    reproductions: number | null
    isPublic: boolean | null
    userCreatorId: string
    likedById: string[]
    albumId: string | null
    genreId: string
    playlistId: string | null
    artistId: string[]
    _count: SongCountAggregateOutputType | null
    _avg: SongAvgAggregateOutputType | null
    _sum: SongSumAggregateOutputType | null
    _min: SongMinAggregateOutputType | null
    _max: SongMaxAggregateOutputType | null
  }

  type GetSongGroupByPayload<T extends SongGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SongGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SongGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SongGroupByOutputType[P]>
            : GetScalarType<T[P], SongGroupByOutputType[P]>
        }
      >
    >


  export type SongSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    url?: boolean
    duration?: boolean
    rating?: boolean
    thumbnail?: boolean
    reproductions?: boolean
    isPublic?: boolean
    userCreatorId?: boolean
    likedById?: boolean
    albumId?: boolean
    genreId?: boolean
    playlistId?: boolean
    artistId?: boolean
    UserCreator?: boolean | UserDefaultArgs<ExtArgs>
    UserLike?: boolean | Song$UserLikeArgs<ExtArgs>
    Album?: boolean | Song$AlbumArgs<ExtArgs>
    Genre?: boolean | GenreDefaultArgs<ExtArgs>
    Playlist?: boolean | Song$PlaylistArgs<ExtArgs>
    Artist?: boolean | Song$ArtistArgs<ExtArgs>
    _count?: boolean | SongCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["song"]>

  export type SongSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    url?: boolean
    duration?: boolean
    rating?: boolean
    thumbnail?: boolean
    reproductions?: boolean
    isPublic?: boolean
    userCreatorId?: boolean
    likedById?: boolean
    albumId?: boolean
    genreId?: boolean
    playlistId?: boolean
    artistId?: boolean
  }

  export type SongInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserCreator?: boolean | UserDefaultArgs<ExtArgs>
    UserLike?: boolean | Song$UserLikeArgs<ExtArgs>
    Album?: boolean | Song$AlbumArgs<ExtArgs>
    Genre?: boolean | GenreDefaultArgs<ExtArgs>
    Playlist?: boolean | Song$PlaylistArgs<ExtArgs>
    Artist?: boolean | Song$ArtistArgs<ExtArgs>
    _count?: boolean | SongCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $SongPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Song"
    objects: {
      UserCreator: Prisma.$UserPayload<ExtArgs>
      UserLike: Prisma.$UserPayload<ExtArgs> | null
      Album: Prisma.$AlbumPayload<ExtArgs> | null
      Genre: Prisma.$GenrePayload<ExtArgs>
      Playlist: Prisma.$PlaylistPayload<ExtArgs> | null
      Artist: Prisma.$ArtistPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      name: string
      url: string
      duration: number | null
      rating: number | null
      thumbnail: string
      reproductions: number | null
      isPublic: boolean | null
      userCreatorId: string
      likedById: string[]
      albumId: string | null
      genreId: string
      playlistId: string | null
      artistId: string[]
    }, ExtArgs["result"]["song"]>
    composites: {}
  }


  type SongGetPayload<S extends boolean | null | undefined | SongDefaultArgs> = $Result.GetResult<Prisma.$SongPayload, S>

  type SongCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SongFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: SongCountAggregateInputType | true
    }

  export interface SongDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Song'], meta: { name: 'Song' } }
    /**
     * Find zero or one Song that matches the filter.
     * @param {SongFindUniqueArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SongFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SongFindUniqueArgs<ExtArgs>>
    ): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Song that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SongFindUniqueOrThrowArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SongFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SongFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Song that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongFindFirstArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SongFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SongFindFirstArgs<ExtArgs>>
    ): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Song that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongFindFirstOrThrowArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SongFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SongFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Songs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Songs
     * const songs = await prisma.song.findMany()
     * 
     * // Get first 10 Songs
     * const songs = await prisma.song.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const songWithIdOnly = await prisma.song.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SongFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SongFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Song.
     * @param {SongCreateArgs} args - Arguments to create a Song.
     * @example
     * // Create one Song
     * const Song = await prisma.song.create({
     *   data: {
     *     // ... data to create a Song
     *   }
     * })
     * 
    **/
    create<T extends SongCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SongCreateArgs<ExtArgs>>
    ): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Songs.
     *     @param {SongCreateManyArgs} args - Arguments to create many Songs.
     *     @example
     *     // Create many Songs
     *     const song = await prisma.song.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SongCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SongCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Song.
     * @param {SongDeleteArgs} args - Arguments to delete one Song.
     * @example
     * // Delete one Song
     * const Song = await prisma.song.delete({
     *   where: {
     *     // ... filter to delete one Song
     *   }
     * })
     * 
    **/
    delete<T extends SongDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SongDeleteArgs<ExtArgs>>
    ): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Song.
     * @param {SongUpdateArgs} args - Arguments to update one Song.
     * @example
     * // Update one Song
     * const song = await prisma.song.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SongUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SongUpdateArgs<ExtArgs>>
    ): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Songs.
     * @param {SongDeleteManyArgs} args - Arguments to filter Songs to delete.
     * @example
     * // Delete a few Songs
     * const { count } = await prisma.song.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SongDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SongDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Songs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Songs
     * const song = await prisma.song.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SongUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SongUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Song.
     * @param {SongUpsertArgs} args - Arguments to update or create a Song.
     * @example
     * // Update or create a Song
     * const song = await prisma.song.upsert({
     *   create: {
     *     // ... data to create a Song
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Song we want to update
     *   }
     * })
    **/
    upsert<T extends SongUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SongUpsertArgs<ExtArgs>>
    ): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Songs that matches the filter.
     * @param {SongFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const song = await prisma.song.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: SongFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Song.
     * @param {SongAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const song = await prisma.song.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: SongAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Songs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongCountArgs} args - Arguments to filter Songs to count.
     * @example
     * // Count the number of Songs
     * const count = await prisma.song.count({
     *   where: {
     *     // ... the filter for the Songs we want to count
     *   }
     * })
    **/
    count<T extends SongCountArgs>(
      args?: Subset<T, SongCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SongCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Song.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SongAggregateArgs>(args: Subset<T, SongAggregateArgs>): Prisma.PrismaPromise<GetSongAggregateType<T>>

    /**
     * Group by Song.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SongGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SongGroupByArgs['orderBy'] }
        : { orderBy?: SongGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SongGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSongGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Song model
   */
  readonly fields: SongFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Song.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SongClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    UserCreator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    UserLike<T extends Song$UserLikeArgs<ExtArgs> = {}>(args?: Subset<T, Song$UserLikeArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    Album<T extends Song$AlbumArgs<ExtArgs> = {}>(args?: Subset<T, Song$AlbumArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    Genre<T extends GenreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GenreDefaultArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Playlist<T extends Song$PlaylistArgs<ExtArgs> = {}>(args?: Subset<T, Song$PlaylistArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    Artist<T extends Song$ArtistArgs<ExtArgs> = {}>(args?: Subset<T, Song$ArtistArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Song model
   */ 
  interface SongFieldRefs {
    readonly id: FieldRef<"Song", 'String'>
    readonly createdAt: FieldRef<"Song", 'DateTime'>
    readonly updatedAt: FieldRef<"Song", 'DateTime'>
    readonly name: FieldRef<"Song", 'String'>
    readonly url: FieldRef<"Song", 'String'>
    readonly duration: FieldRef<"Song", 'Int'>
    readonly rating: FieldRef<"Song", 'Int'>
    readonly thumbnail: FieldRef<"Song", 'String'>
    readonly reproductions: FieldRef<"Song", 'Int'>
    readonly isPublic: FieldRef<"Song", 'Boolean'>
    readonly userCreatorId: FieldRef<"Song", 'String'>
    readonly likedById: FieldRef<"Song", 'String[]'>
    readonly albumId: FieldRef<"Song", 'String'>
    readonly genreId: FieldRef<"Song", 'String'>
    readonly playlistId: FieldRef<"Song", 'String'>
    readonly artistId: FieldRef<"Song", 'String[]'>
  }
    

  // Custom InputTypes

  /**
   * Song findUnique
   */
  export type SongFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Song to fetch.
     */
    where: SongWhereUniqueInput
  }


  /**
   * Song findUniqueOrThrow
   */
  export type SongFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Song to fetch.
     */
    where: SongWhereUniqueInput
  }


  /**
   * Song findFirst
   */
  export type SongFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Song to fetch.
     */
    where?: SongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songs to fetch.
     */
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Songs.
     */
    cursor?: SongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Songs.
     */
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }


  /**
   * Song findFirstOrThrow
   */
  export type SongFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Song to fetch.
     */
    where?: SongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songs to fetch.
     */
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Songs.
     */
    cursor?: SongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Songs.
     */
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }


  /**
   * Song findMany
   */
  export type SongFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Songs to fetch.
     */
    where?: SongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songs to fetch.
     */
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Songs.
     */
    cursor?: SongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songs.
     */
    skip?: number
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }


  /**
   * Song create
   */
  export type SongCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * The data needed to create a Song.
     */
    data: XOR<SongCreateInput, SongUncheckedCreateInput>
  }


  /**
   * Song createMany
   */
  export type SongCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Songs.
     */
    data: SongCreateManyInput | SongCreateManyInput[]
  }


  /**
   * Song update
   */
  export type SongUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * The data needed to update a Song.
     */
    data: XOR<SongUpdateInput, SongUncheckedUpdateInput>
    /**
     * Choose, which Song to update.
     */
    where: SongWhereUniqueInput
  }


  /**
   * Song updateMany
   */
  export type SongUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Songs.
     */
    data: XOR<SongUpdateManyMutationInput, SongUncheckedUpdateManyInput>
    /**
     * Filter which Songs to update
     */
    where?: SongWhereInput
  }


  /**
   * Song upsert
   */
  export type SongUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * The filter to search for the Song to update in case it exists.
     */
    where: SongWhereUniqueInput
    /**
     * In case the Song found by the `where` argument doesn't exist, create a new Song with this data.
     */
    create: XOR<SongCreateInput, SongUncheckedCreateInput>
    /**
     * In case the Song was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SongUpdateInput, SongUncheckedUpdateInput>
  }


  /**
   * Song delete
   */
  export type SongDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter which Song to delete.
     */
    where: SongWhereUniqueInput
  }


  /**
   * Song deleteMany
   */
  export type SongDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Songs to delete
     */
    where?: SongWhereInput
  }


  /**
   * Song findRaw
   */
  export type SongFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Song aggregateRaw
   */
  export type SongAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Song.UserLike
   */
  export type Song$UserLikeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * Song.Album
   */
  export type Song$AlbumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumInclude<ExtArgs> | null
    where?: AlbumWhereInput
  }


  /**
   * Song.Playlist
   */
  export type Song$PlaylistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistInclude<ExtArgs> | null
    where?: PlaylistWhereInput
  }


  /**
   * Song.Artist
   */
  export type Song$ArtistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInclude<ExtArgs> | null
    where?: ArtistWhereInput
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    cursor?: ArtistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }


  /**
   * Song without action
   */
  export type SongDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
  }



  /**
   * Model Album
   */

  export type AggregateAlbum = {
    _count: AlbumCountAggregateOutputType | null
    _avg: AlbumAvgAggregateOutputType | null
    _sum: AlbumSumAggregateOutputType | null
    _min: AlbumMinAggregateOutputType | null
    _max: AlbumMaxAggregateOutputType | null
  }

  export type AlbumAvgAggregateOutputType = {
    totalTracks: number | null
  }

  export type AlbumSumAggregateOutputType = {
    totalTracks: number | null
  }

  export type AlbumMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    thumbnail: string | null
    totalTracks: number | null
    isPublic: boolean | null
    userCreatorId: string | null
    genreId: string | null
    artistId: string | null
  }

  export type AlbumMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    thumbnail: string | null
    totalTracks: number | null
    isPublic: boolean | null
    userCreatorId: string | null
    genreId: string | null
    artistId: string | null
  }

  export type AlbumCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    thumbnail: number
    totalTracks: number
    isPublic: number
    userCreatorId: number
    likedById: number
    genreId: number
    artistId: number
    _all: number
  }


  export type AlbumAvgAggregateInputType = {
    totalTracks?: true
  }

  export type AlbumSumAggregateInputType = {
    totalTracks?: true
  }

  export type AlbumMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    thumbnail?: true
    totalTracks?: true
    isPublic?: true
    userCreatorId?: true
    genreId?: true
    artistId?: true
  }

  export type AlbumMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    thumbnail?: true
    totalTracks?: true
    isPublic?: true
    userCreatorId?: true
    genreId?: true
    artistId?: true
  }

  export type AlbumCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    thumbnail?: true
    totalTracks?: true
    isPublic?: true
    userCreatorId?: true
    likedById?: true
    genreId?: true
    artistId?: true
    _all?: true
  }

  export type AlbumAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Album to aggregate.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Albums
    **/
    _count?: true | AlbumCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlbumAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlbumSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlbumMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlbumMaxAggregateInputType
  }

  export type GetAlbumAggregateType<T extends AlbumAggregateArgs> = {
        [P in keyof T & keyof AggregateAlbum]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlbum[P]>
      : GetScalarType<T[P], AggregateAlbum[P]>
  }




  export type AlbumGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumWhereInput
    orderBy?: AlbumOrderByWithAggregationInput | AlbumOrderByWithAggregationInput[]
    by: AlbumScalarFieldEnum[] | AlbumScalarFieldEnum
    having?: AlbumScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlbumCountAggregateInputType | true
    _avg?: AlbumAvgAggregateInputType
    _sum?: AlbumSumAggregateInputType
    _min?: AlbumMinAggregateInputType
    _max?: AlbumMaxAggregateInputType
  }

  export type AlbumGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    thumbnail: string
    totalTracks: number | null
    isPublic: boolean | null
    userCreatorId: string | null
    likedById: string[]
    genreId: string
    artistId: string
    _count: AlbumCountAggregateOutputType | null
    _avg: AlbumAvgAggregateOutputType | null
    _sum: AlbumSumAggregateOutputType | null
    _min: AlbumMinAggregateOutputType | null
    _max: AlbumMaxAggregateOutputType | null
  }

  type GetAlbumGroupByPayload<T extends AlbumGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlbumGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlbumGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlbumGroupByOutputType[P]>
            : GetScalarType<T[P], AlbumGroupByOutputType[P]>
        }
      >
    >


  export type AlbumSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    thumbnail?: boolean
    totalTracks?: boolean
    isPublic?: boolean
    userCreatorId?: boolean
    likedById?: boolean
    genreId?: boolean
    artistId?: boolean
    Song?: boolean | Album$SongArgs<ExtArgs>
    UserCreator?: boolean | Album$UserCreatorArgs<ExtArgs>
    UserLike?: boolean | Album$UserLikeArgs<ExtArgs>
    Genre?: boolean | GenreDefaultArgs<ExtArgs>
    Artist?: boolean | ArtistDefaultArgs<ExtArgs>
    _count?: boolean | AlbumCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["album"]>

  export type AlbumSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    thumbnail?: boolean
    totalTracks?: boolean
    isPublic?: boolean
    userCreatorId?: boolean
    likedById?: boolean
    genreId?: boolean
    artistId?: boolean
  }

  export type AlbumInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Song?: boolean | Album$SongArgs<ExtArgs>
    UserCreator?: boolean | Album$UserCreatorArgs<ExtArgs>
    UserLike?: boolean | Album$UserLikeArgs<ExtArgs>
    Genre?: boolean | GenreDefaultArgs<ExtArgs>
    Artist?: boolean | ArtistDefaultArgs<ExtArgs>
    _count?: boolean | AlbumCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $AlbumPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Album"
    objects: {
      Song: Prisma.$SongPayload<ExtArgs>[]
      UserCreator: Prisma.$UserPayload<ExtArgs> | null
      UserLike: Prisma.$UserPayload<ExtArgs> | null
      Genre: Prisma.$GenrePayload<ExtArgs>
      Artist: Prisma.$ArtistPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      name: string
      thumbnail: string
      totalTracks: number | null
      isPublic: boolean | null
      userCreatorId: string | null
      likedById: string[]
      genreId: string
      artistId: string
    }, ExtArgs["result"]["album"]>
    composites: {}
  }


  type AlbumGetPayload<S extends boolean | null | undefined | AlbumDefaultArgs> = $Result.GetResult<Prisma.$AlbumPayload, S>

  type AlbumCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AlbumFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: AlbumCountAggregateInputType | true
    }

  export interface AlbumDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Album'], meta: { name: 'Album' } }
    /**
     * Find zero or one Album that matches the filter.
     * @param {AlbumFindUniqueArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AlbumFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AlbumFindUniqueArgs<ExtArgs>>
    ): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Album that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AlbumFindUniqueOrThrowArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AlbumFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AlbumFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Album that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindFirstArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AlbumFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AlbumFindFirstArgs<ExtArgs>>
    ): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Album that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindFirstOrThrowArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AlbumFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AlbumFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Albums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Albums
     * const albums = await prisma.album.findMany()
     * 
     * // Get first 10 Albums
     * const albums = await prisma.album.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const albumWithIdOnly = await prisma.album.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AlbumFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AlbumFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Album.
     * @param {AlbumCreateArgs} args - Arguments to create a Album.
     * @example
     * // Create one Album
     * const Album = await prisma.album.create({
     *   data: {
     *     // ... data to create a Album
     *   }
     * })
     * 
    **/
    create<T extends AlbumCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AlbumCreateArgs<ExtArgs>>
    ): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Albums.
     *     @param {AlbumCreateManyArgs} args - Arguments to create many Albums.
     *     @example
     *     // Create many Albums
     *     const album = await prisma.album.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AlbumCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AlbumCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Album.
     * @param {AlbumDeleteArgs} args - Arguments to delete one Album.
     * @example
     * // Delete one Album
     * const Album = await prisma.album.delete({
     *   where: {
     *     // ... filter to delete one Album
     *   }
     * })
     * 
    **/
    delete<T extends AlbumDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AlbumDeleteArgs<ExtArgs>>
    ): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Album.
     * @param {AlbumUpdateArgs} args - Arguments to update one Album.
     * @example
     * // Update one Album
     * const album = await prisma.album.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AlbumUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AlbumUpdateArgs<ExtArgs>>
    ): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Albums.
     * @param {AlbumDeleteManyArgs} args - Arguments to filter Albums to delete.
     * @example
     * // Delete a few Albums
     * const { count } = await prisma.album.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AlbumDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AlbumDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Albums
     * const album = await prisma.album.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AlbumUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AlbumUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Album.
     * @param {AlbumUpsertArgs} args - Arguments to update or create a Album.
     * @example
     * // Update or create a Album
     * const album = await prisma.album.upsert({
     *   create: {
     *     // ... data to create a Album
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Album we want to update
     *   }
     * })
    **/
    upsert<T extends AlbumUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AlbumUpsertArgs<ExtArgs>>
    ): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Albums that matches the filter.
     * @param {AlbumFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const album = await prisma.album.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: AlbumFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Album.
     * @param {AlbumAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const album = await prisma.album.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: AlbumAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumCountArgs} args - Arguments to filter Albums to count.
     * @example
     * // Count the number of Albums
     * const count = await prisma.album.count({
     *   where: {
     *     // ... the filter for the Albums we want to count
     *   }
     * })
    **/
    count<T extends AlbumCountArgs>(
      args?: Subset<T, AlbumCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlbumCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Album.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlbumAggregateArgs>(args: Subset<T, AlbumAggregateArgs>): Prisma.PrismaPromise<GetAlbumAggregateType<T>>

    /**
     * Group by Album.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AlbumGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlbumGroupByArgs['orderBy'] }
        : { orderBy?: AlbumGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AlbumGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlbumGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Album model
   */
  readonly fields: AlbumFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Album.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlbumClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Song<T extends Album$SongArgs<ExtArgs> = {}>(args?: Subset<T, Album$SongArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'findMany'> | Null>;

    UserCreator<T extends Album$UserCreatorArgs<ExtArgs> = {}>(args?: Subset<T, Album$UserCreatorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    UserLike<T extends Album$UserLikeArgs<ExtArgs> = {}>(args?: Subset<T, Album$UserLikeArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    Genre<T extends GenreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GenreDefaultArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Artist<T extends ArtistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArtistDefaultArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Album model
   */ 
  interface AlbumFieldRefs {
    readonly id: FieldRef<"Album", 'String'>
    readonly createdAt: FieldRef<"Album", 'DateTime'>
    readonly updatedAt: FieldRef<"Album", 'DateTime'>
    readonly name: FieldRef<"Album", 'String'>
    readonly thumbnail: FieldRef<"Album", 'String'>
    readonly totalTracks: FieldRef<"Album", 'Int'>
    readonly isPublic: FieldRef<"Album", 'Boolean'>
    readonly userCreatorId: FieldRef<"Album", 'String'>
    readonly likedById: FieldRef<"Album", 'String[]'>
    readonly genreId: FieldRef<"Album", 'String'>
    readonly artistId: FieldRef<"Album", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Album findUnique
   */
  export type AlbumFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where: AlbumWhereUniqueInput
  }


  /**
   * Album findUniqueOrThrow
   */
  export type AlbumFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where: AlbumWhereUniqueInput
  }


  /**
   * Album findFirst
   */
  export type AlbumFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Albums.
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Albums.
     */
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }


  /**
   * Album findFirstOrThrow
   */
  export type AlbumFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Albums.
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Albums.
     */
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }


  /**
   * Album findMany
   */
  export type AlbumFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Albums to fetch.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Albums.
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }


  /**
   * Album create
   */
  export type AlbumCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * The data needed to create a Album.
     */
    data: XOR<AlbumCreateInput, AlbumUncheckedCreateInput>
  }


  /**
   * Album createMany
   */
  export type AlbumCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Albums.
     */
    data: AlbumCreateManyInput | AlbumCreateManyInput[]
  }


  /**
   * Album update
   */
  export type AlbumUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * The data needed to update a Album.
     */
    data: XOR<AlbumUpdateInput, AlbumUncheckedUpdateInput>
    /**
     * Choose, which Album to update.
     */
    where: AlbumWhereUniqueInput
  }


  /**
   * Album updateMany
   */
  export type AlbumUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Albums.
     */
    data: XOR<AlbumUpdateManyMutationInput, AlbumUncheckedUpdateManyInput>
    /**
     * Filter which Albums to update
     */
    where?: AlbumWhereInput
  }


  /**
   * Album upsert
   */
  export type AlbumUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * The filter to search for the Album to update in case it exists.
     */
    where: AlbumWhereUniqueInput
    /**
     * In case the Album found by the `where` argument doesn't exist, create a new Album with this data.
     */
    create: XOR<AlbumCreateInput, AlbumUncheckedCreateInput>
    /**
     * In case the Album was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlbumUpdateInput, AlbumUncheckedUpdateInput>
  }


  /**
   * Album delete
   */
  export type AlbumDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter which Album to delete.
     */
    where: AlbumWhereUniqueInput
  }


  /**
   * Album deleteMany
   */
  export type AlbumDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Albums to delete
     */
    where?: AlbumWhereInput
  }


  /**
   * Album findRaw
   */
  export type AlbumFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Album aggregateRaw
   */
  export type AlbumAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Album.Song
   */
  export type Album$SongArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    where?: SongWhereInput
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    cursor?: SongWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }


  /**
   * Album.UserCreator
   */
  export type Album$UserCreatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * Album.UserLike
   */
  export type Album$UserLikeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * Album without action
   */
  export type AlbumDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumInclude<ExtArgs> | null
  }



  /**
   * Model Genre
   */

  export type AggregateGenre = {
    _count: GenreCountAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  export type GenreMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
  }

  export type GenreMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
  }

  export type GenreCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    _all: number
  }


  export type GenreMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
  }

  export type GenreMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
  }

  export type GenreCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    _all?: true
  }

  export type GenreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genre to aggregate.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Genres
    **/
    _count?: true | GenreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenreMaxAggregateInputType
  }

  export type GetGenreAggregateType<T extends GenreAggregateArgs> = {
        [P in keyof T & keyof AggregateGenre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenre[P]>
      : GetScalarType<T[P], AggregateGenre[P]>
  }




  export type GenreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenreWhereInput
    orderBy?: GenreOrderByWithAggregationInput | GenreOrderByWithAggregationInput[]
    by: GenreScalarFieldEnum[] | GenreScalarFieldEnum
    having?: GenreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenreCountAggregateInputType | true
    _min?: GenreMinAggregateInputType
    _max?: GenreMaxAggregateInputType
  }

  export type GenreGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    _count: GenreCountAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  type GetGenreGroupByPayload<T extends GenreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenreGroupByOutputType[P]>
            : GetScalarType<T[P], GenreGroupByOutputType[P]>
        }
      >
    >


  export type GenreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    Song?: boolean | Genre$SongArgs<ExtArgs>
    Album?: boolean | Genre$AlbumArgs<ExtArgs>
    _count?: boolean | GenreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
  }

  export type GenreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Song?: boolean | Genre$SongArgs<ExtArgs>
    Album?: boolean | Genre$AlbumArgs<ExtArgs>
    _count?: boolean | GenreCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $GenrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Genre"
    objects: {
      Song: Prisma.$SongPayload<ExtArgs>[]
      Album: Prisma.$AlbumPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      name: string
    }, ExtArgs["result"]["genre"]>
    composites: {}
  }


  type GenreGetPayload<S extends boolean | null | undefined | GenreDefaultArgs> = $Result.GetResult<Prisma.$GenrePayload, S>

  type GenreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GenreFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: GenreCountAggregateInputType | true
    }

  export interface GenreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Genre'], meta: { name: 'Genre' } }
    /**
     * Find zero or one Genre that matches the filter.
     * @param {GenreFindUniqueArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GenreFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GenreFindUniqueArgs<ExtArgs>>
    ): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Genre that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GenreFindUniqueOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GenreFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GenreFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Genre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GenreFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GenreFindFirstArgs<ExtArgs>>
    ): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Genre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GenreFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GenreFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Genres
     * const genres = await prisma.genre.findMany()
     * 
     * // Get first 10 Genres
     * const genres = await prisma.genre.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const genreWithIdOnly = await prisma.genre.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GenreFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GenreFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Genre.
     * @param {GenreCreateArgs} args - Arguments to create a Genre.
     * @example
     * // Create one Genre
     * const Genre = await prisma.genre.create({
     *   data: {
     *     // ... data to create a Genre
     *   }
     * })
     * 
    **/
    create<T extends GenreCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GenreCreateArgs<ExtArgs>>
    ): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Genres.
     *     @param {GenreCreateManyArgs} args - Arguments to create many Genres.
     *     @example
     *     // Create many Genres
     *     const genre = await prisma.genre.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GenreCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GenreCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Genre.
     * @param {GenreDeleteArgs} args - Arguments to delete one Genre.
     * @example
     * // Delete one Genre
     * const Genre = await prisma.genre.delete({
     *   where: {
     *     // ... filter to delete one Genre
     *   }
     * })
     * 
    **/
    delete<T extends GenreDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GenreDeleteArgs<ExtArgs>>
    ): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Genre.
     * @param {GenreUpdateArgs} args - Arguments to update one Genre.
     * @example
     * // Update one Genre
     * const genre = await prisma.genre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GenreUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GenreUpdateArgs<ExtArgs>>
    ): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Genres.
     * @param {GenreDeleteManyArgs} args - Arguments to filter Genres to delete.
     * @example
     * // Delete a few Genres
     * const { count } = await prisma.genre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GenreDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GenreDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Genres
     * const genre = await prisma.genre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GenreUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GenreUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Genre.
     * @param {GenreUpsertArgs} args - Arguments to update or create a Genre.
     * @example
     * // Update or create a Genre
     * const genre = await prisma.genre.upsert({
     *   create: {
     *     // ... data to create a Genre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genre we want to update
     *   }
     * })
    **/
    upsert<T extends GenreUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GenreUpsertArgs<ExtArgs>>
    ): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Genres that matches the filter.
     * @param {GenreFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const genre = await prisma.genre.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: GenreFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Genre.
     * @param {GenreAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const genre = await prisma.genre.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: GenreAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreCountArgs} args - Arguments to filter Genres to count.
     * @example
     * // Count the number of Genres
     * const count = await prisma.genre.count({
     *   where: {
     *     // ... the filter for the Genres we want to count
     *   }
     * })
    **/
    count<T extends GenreCountArgs>(
      args?: Subset<T, GenreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GenreAggregateArgs>(args: Subset<T, GenreAggregateArgs>): Prisma.PrismaPromise<GetGenreAggregateType<T>>

    /**
     * Group by Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GenreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GenreGroupByArgs['orderBy'] }
        : { orderBy?: GenreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GenreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Genre model
   */
  readonly fields: GenreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Genre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GenreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Song<T extends Genre$SongArgs<ExtArgs> = {}>(args?: Subset<T, Genre$SongArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'findMany'> | Null>;

    Album<T extends Genre$AlbumArgs<ExtArgs> = {}>(args?: Subset<T, Genre$AlbumArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Genre model
   */ 
  interface GenreFieldRefs {
    readonly id: FieldRef<"Genre", 'String'>
    readonly createdAt: FieldRef<"Genre", 'DateTime'>
    readonly updatedAt: FieldRef<"Genre", 'DateTime'>
    readonly name: FieldRef<"Genre", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Genre findUnique
   */
  export type GenreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }


  /**
   * Genre findUniqueOrThrow
   */
  export type GenreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }


  /**
   * Genre findFirst
   */
  export type GenreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }


  /**
   * Genre findFirstOrThrow
   */
  export type GenreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }


  /**
   * Genre findMany
   */
  export type GenreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }


  /**
   * Genre create
   */
  export type GenreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The data needed to create a Genre.
     */
    data: XOR<GenreCreateInput, GenreUncheckedCreateInput>
  }


  /**
   * Genre createMany
   */
  export type GenreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Genres.
     */
    data: GenreCreateManyInput | GenreCreateManyInput[]
  }


  /**
   * Genre update
   */
  export type GenreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The data needed to update a Genre.
     */
    data: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
    /**
     * Choose, which Genre to update.
     */
    where: GenreWhereUniqueInput
  }


  /**
   * Genre updateMany
   */
  export type GenreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Genres.
     */
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     */
    where?: GenreWhereInput
  }


  /**
   * Genre upsert
   */
  export type GenreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The filter to search for the Genre to update in case it exists.
     */
    where: GenreWhereUniqueInput
    /**
     * In case the Genre found by the `where` argument doesn't exist, create a new Genre with this data.
     */
    create: XOR<GenreCreateInput, GenreUncheckedCreateInput>
    /**
     * In case the Genre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
  }


  /**
   * Genre delete
   */
  export type GenreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter which Genre to delete.
     */
    where: GenreWhereUniqueInput
  }


  /**
   * Genre deleteMany
   */
  export type GenreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genres to delete
     */
    where?: GenreWhereInput
  }


  /**
   * Genre findRaw
   */
  export type GenreFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Genre aggregateRaw
   */
  export type GenreAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Genre.Song
   */
  export type Genre$SongArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    where?: SongWhereInput
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    cursor?: SongWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }


  /**
   * Genre.Album
   */
  export type Genre$AlbumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumInclude<ExtArgs> | null
    where?: AlbumWhereInput
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    cursor?: AlbumWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }


  /**
   * Genre without action
   */
  export type GenreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude<ExtArgs> | null
  }



  /**
   * Model Playlist
   */

  export type AggregatePlaylist = {
    _count: PlaylistCountAggregateOutputType | null
    _min: PlaylistMinAggregateOutputType | null
    _max: PlaylistMaxAggregateOutputType | null
  }

  export type PlaylistMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    playlistName: string | null
    thumbnail: string | null
    userCreatorId: string | null
  }

  export type PlaylistMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    playlistName: string | null
    thumbnail: string | null
    userCreatorId: string | null
  }

  export type PlaylistCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    playlistName: number
    thumbnail: number
    userCreatorId: number
    _all: number
  }


  export type PlaylistMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    playlistName?: true
    thumbnail?: true
    userCreatorId?: true
  }

  export type PlaylistMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    playlistName?: true
    thumbnail?: true
    userCreatorId?: true
  }

  export type PlaylistCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    playlistName?: true
    thumbnail?: true
    userCreatorId?: true
    _all?: true
  }

  export type PlaylistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Playlist to aggregate.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Playlists
    **/
    _count?: true | PlaylistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlaylistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlaylistMaxAggregateInputType
  }

  export type GetPlaylistAggregateType<T extends PlaylistAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaylist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaylist[P]>
      : GetScalarType<T[P], AggregatePlaylist[P]>
  }




  export type PlaylistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistWhereInput
    orderBy?: PlaylistOrderByWithAggregationInput | PlaylistOrderByWithAggregationInput[]
    by: PlaylistScalarFieldEnum[] | PlaylistScalarFieldEnum
    having?: PlaylistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlaylistCountAggregateInputType | true
    _min?: PlaylistMinAggregateInputType
    _max?: PlaylistMaxAggregateInputType
  }

  export type PlaylistGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    playlistName: string
    thumbnail: string | null
    userCreatorId: string
    _count: PlaylistCountAggregateOutputType | null
    _min: PlaylistMinAggregateOutputType | null
    _max: PlaylistMaxAggregateOutputType | null
  }

  type GetPlaylistGroupByPayload<T extends PlaylistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlaylistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlaylistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlaylistGroupByOutputType[P]>
            : GetScalarType<T[P], PlaylistGroupByOutputType[P]>
        }
      >
    >


  export type PlaylistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    playlistName?: boolean
    thumbnail?: boolean
    userCreatorId?: boolean
    playlistSongs?: boolean | Playlist$playlistSongsArgs<ExtArgs>
    UserCreator?: boolean | Playlist$UserCreatorArgs<ExtArgs>
    _count?: boolean | PlaylistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlist"]>

  export type PlaylistSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    playlistName?: boolean
    thumbnail?: boolean
    userCreatorId?: boolean
  }

  export type PlaylistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlistSongs?: boolean | Playlist$playlistSongsArgs<ExtArgs>
    UserCreator?: boolean | Playlist$UserCreatorArgs<ExtArgs>
    _count?: boolean | PlaylistCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PlaylistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Playlist"
    objects: {
      playlistSongs: Prisma.$SongPayload<ExtArgs>[]
      UserCreator: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      playlistName: string
      thumbnail: string | null
      userCreatorId: string
    }, ExtArgs["result"]["playlist"]>
    composites: {}
  }


  type PlaylistGetPayload<S extends boolean | null | undefined | PlaylistDefaultArgs> = $Result.GetResult<Prisma.$PlaylistPayload, S>

  type PlaylistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PlaylistFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: PlaylistCountAggregateInputType | true
    }

  export interface PlaylistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Playlist'], meta: { name: 'Playlist' } }
    /**
     * Find zero or one Playlist that matches the filter.
     * @param {PlaylistFindUniqueArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PlaylistFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PlaylistFindUniqueArgs<ExtArgs>>
    ): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Playlist that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PlaylistFindUniqueOrThrowArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PlaylistFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PlaylistFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Playlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindFirstArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PlaylistFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PlaylistFindFirstArgs<ExtArgs>>
    ): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Playlist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindFirstOrThrowArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PlaylistFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PlaylistFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Playlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Playlists
     * const playlists = await prisma.playlist.findMany()
     * 
     * // Get first 10 Playlists
     * const playlists = await prisma.playlist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playlistWithIdOnly = await prisma.playlist.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PlaylistFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlaylistFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Playlist.
     * @param {PlaylistCreateArgs} args - Arguments to create a Playlist.
     * @example
     * // Create one Playlist
     * const Playlist = await prisma.playlist.create({
     *   data: {
     *     // ... data to create a Playlist
     *   }
     * })
     * 
    **/
    create<T extends PlaylistCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PlaylistCreateArgs<ExtArgs>>
    ): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Playlists.
     *     @param {PlaylistCreateManyArgs} args - Arguments to create many Playlists.
     *     @example
     *     // Create many Playlists
     *     const playlist = await prisma.playlist.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PlaylistCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlaylistCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Playlist.
     * @param {PlaylistDeleteArgs} args - Arguments to delete one Playlist.
     * @example
     * // Delete one Playlist
     * const Playlist = await prisma.playlist.delete({
     *   where: {
     *     // ... filter to delete one Playlist
     *   }
     * })
     * 
    **/
    delete<T extends PlaylistDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PlaylistDeleteArgs<ExtArgs>>
    ): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Playlist.
     * @param {PlaylistUpdateArgs} args - Arguments to update one Playlist.
     * @example
     * // Update one Playlist
     * const playlist = await prisma.playlist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PlaylistUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PlaylistUpdateArgs<ExtArgs>>
    ): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Playlists.
     * @param {PlaylistDeleteManyArgs} args - Arguments to filter Playlists to delete.
     * @example
     * // Delete a few Playlists
     * const { count } = await prisma.playlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PlaylistDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlaylistDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Playlists
     * const playlist = await prisma.playlist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PlaylistUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PlaylistUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Playlist.
     * @param {PlaylistUpsertArgs} args - Arguments to update or create a Playlist.
     * @example
     * // Update or create a Playlist
     * const playlist = await prisma.playlist.upsert({
     *   create: {
     *     // ... data to create a Playlist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Playlist we want to update
     *   }
     * })
    **/
    upsert<T extends PlaylistUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PlaylistUpsertArgs<ExtArgs>>
    ): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Playlists that matches the filter.
     * @param {PlaylistFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const playlist = await prisma.playlist.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: PlaylistFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Playlist.
     * @param {PlaylistAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const playlist = await prisma.playlist.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: PlaylistAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistCountArgs} args - Arguments to filter Playlists to count.
     * @example
     * // Count the number of Playlists
     * const count = await prisma.playlist.count({
     *   where: {
     *     // ... the filter for the Playlists we want to count
     *   }
     * })
    **/
    count<T extends PlaylistCountArgs>(
      args?: Subset<T, PlaylistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlaylistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Playlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlaylistAggregateArgs>(args: Subset<T, PlaylistAggregateArgs>): Prisma.PrismaPromise<GetPlaylistAggregateType<T>>

    /**
     * Group by Playlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlaylistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlaylistGroupByArgs['orderBy'] }
        : { orderBy?: PlaylistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlaylistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaylistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Playlist model
   */
  readonly fields: PlaylistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Playlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlaylistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    playlistSongs<T extends Playlist$playlistSongsArgs<ExtArgs> = {}>(args?: Subset<T, Playlist$playlistSongsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'findMany'> | Null>;

    UserCreator<T extends Playlist$UserCreatorArgs<ExtArgs> = {}>(args?: Subset<T, Playlist$UserCreatorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Playlist model
   */ 
  interface PlaylistFieldRefs {
    readonly id: FieldRef<"Playlist", 'String'>
    readonly createdAt: FieldRef<"Playlist", 'DateTime'>
    readonly updatedAt: FieldRef<"Playlist", 'DateTime'>
    readonly playlistName: FieldRef<"Playlist", 'String'>
    readonly thumbnail: FieldRef<"Playlist", 'String'>
    readonly userCreatorId: FieldRef<"Playlist", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Playlist findUnique
   */
  export type PlaylistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where: PlaylistWhereUniqueInput
  }


  /**
   * Playlist findUniqueOrThrow
   */
  export type PlaylistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where: PlaylistWhereUniqueInput
  }


  /**
   * Playlist findFirst
   */
  export type PlaylistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Playlists.
     */
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }


  /**
   * Playlist findFirstOrThrow
   */
  export type PlaylistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Playlists.
     */
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }


  /**
   * Playlist findMany
   */
  export type PlaylistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlists to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }


  /**
   * Playlist create
   */
  export type PlaylistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * The data needed to create a Playlist.
     */
    data: XOR<PlaylistCreateInput, PlaylistUncheckedCreateInput>
  }


  /**
   * Playlist createMany
   */
  export type PlaylistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Playlists.
     */
    data: PlaylistCreateManyInput | PlaylistCreateManyInput[]
  }


  /**
   * Playlist update
   */
  export type PlaylistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * The data needed to update a Playlist.
     */
    data: XOR<PlaylistUpdateInput, PlaylistUncheckedUpdateInput>
    /**
     * Choose, which Playlist to update.
     */
    where: PlaylistWhereUniqueInput
  }


  /**
   * Playlist updateMany
   */
  export type PlaylistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Playlists.
     */
    data: XOR<PlaylistUpdateManyMutationInput, PlaylistUncheckedUpdateManyInput>
    /**
     * Filter which Playlists to update
     */
    where?: PlaylistWhereInput
  }


  /**
   * Playlist upsert
   */
  export type PlaylistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * The filter to search for the Playlist to update in case it exists.
     */
    where: PlaylistWhereUniqueInput
    /**
     * In case the Playlist found by the `where` argument doesn't exist, create a new Playlist with this data.
     */
    create: XOR<PlaylistCreateInput, PlaylistUncheckedCreateInput>
    /**
     * In case the Playlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlaylistUpdateInput, PlaylistUncheckedUpdateInput>
  }


  /**
   * Playlist delete
   */
  export type PlaylistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter which Playlist to delete.
     */
    where: PlaylistWhereUniqueInput
  }


  /**
   * Playlist deleteMany
   */
  export type PlaylistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Playlists to delete
     */
    where?: PlaylistWhereInput
  }


  /**
   * Playlist findRaw
   */
  export type PlaylistFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Playlist aggregateRaw
   */
  export type PlaylistAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Playlist.playlistSongs
   */
  export type Playlist$playlistSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    where?: SongWhereInput
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    cursor?: SongWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }


  /**
   * Playlist.UserCreator
   */
  export type Playlist$UserCreatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * Playlist without action
   */
  export type PlaylistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistInclude<ExtArgs> | null
  }



  /**
   * Model Artist
   */

  export type AggregateArtist = {
    _count: ArtistCountAggregateOutputType | null
    _min: ArtistMinAggregateOutputType | null
    _max: ArtistMaxAggregateOutputType | null
  }

  export type ArtistMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    thumbnail: string | null
    likedBy: string | null
  }

  export type ArtistMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    thumbnail: string | null
    likedBy: string | null
  }

  export type ArtistCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    thumbnail: number
    songsId: number
    likedBy: number
    _all: number
  }


  export type ArtistMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    thumbnail?: true
    likedBy?: true
  }

  export type ArtistMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    thumbnail?: true
    likedBy?: true
  }

  export type ArtistCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    thumbnail?: true
    songsId?: true
    likedBy?: true
    _all?: true
  }

  export type ArtistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artist to aggregate.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Artists
    **/
    _count?: true | ArtistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtistMaxAggregateInputType
  }

  export type GetArtistAggregateType<T extends ArtistAggregateArgs> = {
        [P in keyof T & keyof AggregateArtist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtist[P]>
      : GetScalarType<T[P], AggregateArtist[P]>
  }




  export type ArtistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistWhereInput
    orderBy?: ArtistOrderByWithAggregationInput | ArtistOrderByWithAggregationInput[]
    by: ArtistScalarFieldEnum[] | ArtistScalarFieldEnum
    having?: ArtistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtistCountAggregateInputType | true
    _min?: ArtistMinAggregateInputType
    _max?: ArtistMaxAggregateInputType
  }

  export type ArtistGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    thumbnail: string | null
    songsId: string[]
    likedBy: string | null
    _count: ArtistCountAggregateOutputType | null
    _min: ArtistMinAggregateOutputType | null
    _max: ArtistMaxAggregateOutputType | null
  }

  type GetArtistGroupByPayload<T extends ArtistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtistGroupByOutputType[P]>
            : GetScalarType<T[P], ArtistGroupByOutputType[P]>
        }
      >
    >


  export type ArtistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    thumbnail?: boolean
    songsId?: boolean
    likedBy?: boolean
    Song?: boolean | Artist$SongArgs<ExtArgs>
    Album?: boolean | Artist$AlbumArgs<ExtArgs>
    followedBy?: boolean | Artist$followedByArgs<ExtArgs>
    _count?: boolean | ArtistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artist"]>

  export type ArtistSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    thumbnail?: boolean
    songsId?: boolean
    likedBy?: boolean
  }

  export type ArtistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Song?: boolean | Artist$SongArgs<ExtArgs>
    Album?: boolean | Artist$AlbumArgs<ExtArgs>
    followedBy?: boolean | Artist$followedByArgs<ExtArgs>
    _count?: boolean | ArtistCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ArtistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Artist"
    objects: {
      Song: Prisma.$SongPayload<ExtArgs>[]
      Album: Prisma.$AlbumPayload<ExtArgs>[]
      followedBy: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      name: string
      thumbnail: string | null
      songsId: string[]
      likedBy: string | null
    }, ExtArgs["result"]["artist"]>
    composites: {}
  }


  type ArtistGetPayload<S extends boolean | null | undefined | ArtistDefaultArgs> = $Result.GetResult<Prisma.$ArtistPayload, S>

  type ArtistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ArtistFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ArtistCountAggregateInputType | true
    }

  export interface ArtistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Artist'], meta: { name: 'Artist' } }
    /**
     * Find zero or one Artist that matches the filter.
     * @param {ArtistFindUniqueArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ArtistFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ArtistFindUniqueArgs<ExtArgs>>
    ): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Artist that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ArtistFindUniqueOrThrowArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ArtistFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ArtistFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Artist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindFirstArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ArtistFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ArtistFindFirstArgs<ExtArgs>>
    ): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Artist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindFirstOrThrowArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ArtistFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ArtistFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Artists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Artists
     * const artists = await prisma.artist.findMany()
     * 
     * // Get first 10 Artists
     * const artists = await prisma.artist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const artistWithIdOnly = await prisma.artist.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ArtistFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ArtistFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Artist.
     * @param {ArtistCreateArgs} args - Arguments to create a Artist.
     * @example
     * // Create one Artist
     * const Artist = await prisma.artist.create({
     *   data: {
     *     // ... data to create a Artist
     *   }
     * })
     * 
    **/
    create<T extends ArtistCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ArtistCreateArgs<ExtArgs>>
    ): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Artists.
     *     @param {ArtistCreateManyArgs} args - Arguments to create many Artists.
     *     @example
     *     // Create many Artists
     *     const artist = await prisma.artist.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ArtistCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ArtistCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Artist.
     * @param {ArtistDeleteArgs} args - Arguments to delete one Artist.
     * @example
     * // Delete one Artist
     * const Artist = await prisma.artist.delete({
     *   where: {
     *     // ... filter to delete one Artist
     *   }
     * })
     * 
    **/
    delete<T extends ArtistDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ArtistDeleteArgs<ExtArgs>>
    ): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Artist.
     * @param {ArtistUpdateArgs} args - Arguments to update one Artist.
     * @example
     * // Update one Artist
     * const artist = await prisma.artist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ArtistUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ArtistUpdateArgs<ExtArgs>>
    ): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Artists.
     * @param {ArtistDeleteManyArgs} args - Arguments to filter Artists to delete.
     * @example
     * // Delete a few Artists
     * const { count } = await prisma.artist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ArtistDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ArtistDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Artists
     * const artist = await prisma.artist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ArtistUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ArtistUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Artist.
     * @param {ArtistUpsertArgs} args - Arguments to update or create a Artist.
     * @example
     * // Update or create a Artist
     * const artist = await prisma.artist.upsert({
     *   create: {
     *     // ... data to create a Artist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Artist we want to update
     *   }
     * })
    **/
    upsert<T extends ArtistUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ArtistUpsertArgs<ExtArgs>>
    ): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Artists that matches the filter.
     * @param {ArtistFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const artist = await prisma.artist.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ArtistFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Artist.
     * @param {ArtistAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const artist = await prisma.artist.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ArtistAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistCountArgs} args - Arguments to filter Artists to count.
     * @example
     * // Count the number of Artists
     * const count = await prisma.artist.count({
     *   where: {
     *     // ... the filter for the Artists we want to count
     *   }
     * })
    **/
    count<T extends ArtistCountArgs>(
      args?: Subset<T, ArtistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Artist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArtistAggregateArgs>(args: Subset<T, ArtistAggregateArgs>): Prisma.PrismaPromise<GetArtistAggregateType<T>>

    /**
     * Group by Artist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArtistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtistGroupByArgs['orderBy'] }
        : { orderBy?: ArtistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArtistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Artist model
   */
  readonly fields: ArtistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Artist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArtistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Song<T extends Artist$SongArgs<ExtArgs> = {}>(args?: Subset<T, Artist$SongArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'findMany'> | Null>;

    Album<T extends Artist$AlbumArgs<ExtArgs> = {}>(args?: Subset<T, Artist$AlbumArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, 'findMany'> | Null>;

    followedBy<T extends Artist$followedByArgs<ExtArgs> = {}>(args?: Subset<T, Artist$followedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Artist model
   */ 
  interface ArtistFieldRefs {
    readonly id: FieldRef<"Artist", 'String'>
    readonly createdAt: FieldRef<"Artist", 'DateTime'>
    readonly updatedAt: FieldRef<"Artist", 'DateTime'>
    readonly name: FieldRef<"Artist", 'String'>
    readonly thumbnail: FieldRef<"Artist", 'String'>
    readonly songsId: FieldRef<"Artist", 'String[]'>
    readonly likedBy: FieldRef<"Artist", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Artist findUnique
   */
  export type ArtistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where: ArtistWhereUniqueInput
  }


  /**
   * Artist findUniqueOrThrow
   */
  export type ArtistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where: ArtistWhereUniqueInput
  }


  /**
   * Artist findFirst
   */
  export type ArtistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artists.
     */
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }


  /**
   * Artist findFirstOrThrow
   */
  export type ArtistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artists.
     */
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }


  /**
   * Artist findMany
   */
  export type ArtistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artists to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }


  /**
   * Artist create
   */
  export type ArtistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * The data needed to create a Artist.
     */
    data: XOR<ArtistCreateInput, ArtistUncheckedCreateInput>
  }


  /**
   * Artist createMany
   */
  export type ArtistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Artists.
     */
    data: ArtistCreateManyInput | ArtistCreateManyInput[]
  }


  /**
   * Artist update
   */
  export type ArtistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * The data needed to update a Artist.
     */
    data: XOR<ArtistUpdateInput, ArtistUncheckedUpdateInput>
    /**
     * Choose, which Artist to update.
     */
    where: ArtistWhereUniqueInput
  }


  /**
   * Artist updateMany
   */
  export type ArtistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Artists.
     */
    data: XOR<ArtistUpdateManyMutationInput, ArtistUncheckedUpdateManyInput>
    /**
     * Filter which Artists to update
     */
    where?: ArtistWhereInput
  }


  /**
   * Artist upsert
   */
  export type ArtistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * The filter to search for the Artist to update in case it exists.
     */
    where: ArtistWhereUniqueInput
    /**
     * In case the Artist found by the `where` argument doesn't exist, create a new Artist with this data.
     */
    create: XOR<ArtistCreateInput, ArtistUncheckedCreateInput>
    /**
     * In case the Artist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtistUpdateInput, ArtistUncheckedUpdateInput>
  }


  /**
   * Artist delete
   */
  export type ArtistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter which Artist to delete.
     */
    where: ArtistWhereUniqueInput
  }


  /**
   * Artist deleteMany
   */
  export type ArtistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artists to delete
     */
    where?: ArtistWhereInput
  }


  /**
   * Artist findRaw
   */
  export type ArtistFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Artist aggregateRaw
   */
  export type ArtistAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Artist.Song
   */
  export type Artist$SongArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    where?: SongWhereInput
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    cursor?: SongWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }


  /**
   * Artist.Album
   */
  export type Artist$AlbumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumInclude<ExtArgs> | null
    where?: AlbumWhereInput
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    cursor?: AlbumWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }


  /**
   * Artist.followedBy
   */
  export type Artist$followedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * Artist without action
   */
  export type ArtistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    email: 'email',
    name: 'name'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SongScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    url: 'url',
    duration: 'duration',
    rating: 'rating',
    thumbnail: 'thumbnail',
    reproductions: 'reproductions',
    isPublic: 'isPublic',
    userCreatorId: 'userCreatorId',
    likedById: 'likedById',
    albumId: 'albumId',
    genreId: 'genreId',
    playlistId: 'playlistId',
    artistId: 'artistId'
  };

  export type SongScalarFieldEnum = (typeof SongScalarFieldEnum)[keyof typeof SongScalarFieldEnum]


  export const AlbumScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    thumbnail: 'thumbnail',
    totalTracks: 'totalTracks',
    isPublic: 'isPublic',
    userCreatorId: 'userCreatorId',
    likedById: 'likedById',
    genreId: 'genreId',
    artistId: 'artistId'
  };

  export type AlbumScalarFieldEnum = (typeof AlbumScalarFieldEnum)[keyof typeof AlbumScalarFieldEnum]


  export const GenreScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name'
  };

  export type GenreScalarFieldEnum = (typeof GenreScalarFieldEnum)[keyof typeof GenreScalarFieldEnum]


  export const PlaylistScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    playlistName: 'playlistName',
    thumbnail: 'thumbnail',
    userCreatorId: 'userCreatorId'
  };

  export type PlaylistScalarFieldEnum = (typeof PlaylistScalarFieldEnum)[keyof typeof PlaylistScalarFieldEnum]


  export const ArtistScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    thumbnail: 'thumbnail',
    songsId: 'songsId',
    likedBy: 'likedBy'
  };

  export type ArtistScalarFieldEnum = (typeof ArtistScalarFieldEnum)[keyof typeof ArtistScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    likeSongs?: SongListRelationFilter
    uploadSongs?: SongListRelationFilter
    likeAlbums?: AlbumListRelationFilter
    uploadAlbums?: AlbumListRelationFilter
    playlist?: PlaylistListRelationFilter
    favouritesArtist?: ArtistListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    likeSongs?: SongOrderByRelationAggregateInput
    uploadSongs?: SongOrderByRelationAggregateInput
    likeAlbums?: AlbumOrderByRelationAggregateInput
    uploadAlbums?: AlbumOrderByRelationAggregateInput
    playlist?: PlaylistOrderByRelationAggregateInput
    favouritesArtist?: ArtistOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    name?: StringFilter<"User"> | string
    likeSongs?: SongListRelationFilter
    uploadSongs?: SongListRelationFilter
    likeAlbums?: AlbumListRelationFilter
    uploadAlbums?: AlbumListRelationFilter
    playlist?: PlaylistListRelationFilter
    favouritesArtist?: ArtistListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
  }

  export type SongWhereInput = {
    AND?: SongWhereInput | SongWhereInput[]
    OR?: SongWhereInput[]
    NOT?: SongWhereInput | SongWhereInput[]
    id?: StringFilter<"Song"> | string
    createdAt?: DateTimeFilter<"Song"> | Date | string
    updatedAt?: DateTimeFilter<"Song"> | Date | string
    name?: StringFilter<"Song"> | string
    url?: StringFilter<"Song"> | string
    duration?: IntNullableFilter<"Song"> | number | null
    rating?: IntNullableFilter<"Song"> | number | null
    thumbnail?: StringFilter<"Song"> | string
    reproductions?: IntNullableFilter<"Song"> | number | null
    isPublic?: BoolNullableFilter<"Song"> | boolean | null
    userCreatorId?: StringFilter<"Song"> | string
    likedById?: StringNullableListFilter<"Song">
    albumId?: StringNullableFilter<"Song"> | string | null
    genreId?: StringFilter<"Song"> | string
    playlistId?: StringNullableFilter<"Song"> | string | null
    artistId?: StringNullableListFilter<"Song">
    UserCreator?: XOR<UserRelationFilter, UserWhereInput>
    UserLike?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    Album?: XOR<AlbumNullableRelationFilter, AlbumWhereInput> | null
    Genre?: XOR<GenreRelationFilter, GenreWhereInput>
    Playlist?: XOR<PlaylistNullableRelationFilter, PlaylistWhereInput> | null
    Artist?: ArtistListRelationFilter
  }

  export type SongOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    url?: SortOrder
    duration?: SortOrder
    rating?: SortOrder
    thumbnail?: SortOrder
    reproductions?: SortOrder
    isPublic?: SortOrder
    userCreatorId?: SortOrder
    likedById?: SortOrder
    albumId?: SortOrder
    genreId?: SortOrder
    playlistId?: SortOrder
    artistId?: SortOrder
    UserCreator?: UserOrderByWithRelationInput
    UserLike?: UserOrderByWithRelationInput
    Album?: AlbumOrderByWithRelationInput
    Genre?: GenreOrderByWithRelationInput
    Playlist?: PlaylistOrderByWithRelationInput
    Artist?: ArtistOrderByRelationAggregateInput
  }

  export type SongWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SongWhereInput | SongWhereInput[]
    OR?: SongWhereInput[]
    NOT?: SongWhereInput | SongWhereInput[]
    createdAt?: DateTimeFilter<"Song"> | Date | string
    updatedAt?: DateTimeFilter<"Song"> | Date | string
    name?: StringFilter<"Song"> | string
    url?: StringFilter<"Song"> | string
    duration?: IntNullableFilter<"Song"> | number | null
    rating?: IntNullableFilter<"Song"> | number | null
    thumbnail?: StringFilter<"Song"> | string
    reproductions?: IntNullableFilter<"Song"> | number | null
    isPublic?: BoolNullableFilter<"Song"> | boolean | null
    userCreatorId?: StringFilter<"Song"> | string
    likedById?: StringNullableListFilter<"Song">
    albumId?: StringNullableFilter<"Song"> | string | null
    genreId?: StringFilter<"Song"> | string
    playlistId?: StringNullableFilter<"Song"> | string | null
    artistId?: StringNullableListFilter<"Song">
    UserCreator?: XOR<UserRelationFilter, UserWhereInput>
    UserLike?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    Album?: XOR<AlbumNullableRelationFilter, AlbumWhereInput> | null
    Genre?: XOR<GenreRelationFilter, GenreWhereInput>
    Playlist?: XOR<PlaylistNullableRelationFilter, PlaylistWhereInput> | null
    Artist?: ArtistListRelationFilter
  }, "id">

  export type SongOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    url?: SortOrder
    duration?: SortOrder
    rating?: SortOrder
    thumbnail?: SortOrder
    reproductions?: SortOrder
    isPublic?: SortOrder
    userCreatorId?: SortOrder
    likedById?: SortOrder
    albumId?: SortOrder
    genreId?: SortOrder
    playlistId?: SortOrder
    artistId?: SortOrder
    _count?: SongCountOrderByAggregateInput
    _avg?: SongAvgOrderByAggregateInput
    _max?: SongMaxOrderByAggregateInput
    _min?: SongMinOrderByAggregateInput
    _sum?: SongSumOrderByAggregateInput
  }

  export type SongScalarWhereWithAggregatesInput = {
    AND?: SongScalarWhereWithAggregatesInput | SongScalarWhereWithAggregatesInput[]
    OR?: SongScalarWhereWithAggregatesInput[]
    NOT?: SongScalarWhereWithAggregatesInput | SongScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Song"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Song"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Song"> | Date | string
    name?: StringWithAggregatesFilter<"Song"> | string
    url?: StringWithAggregatesFilter<"Song"> | string
    duration?: IntNullableWithAggregatesFilter<"Song"> | number | null
    rating?: IntNullableWithAggregatesFilter<"Song"> | number | null
    thumbnail?: StringWithAggregatesFilter<"Song"> | string
    reproductions?: IntNullableWithAggregatesFilter<"Song"> | number | null
    isPublic?: BoolNullableWithAggregatesFilter<"Song"> | boolean | null
    userCreatorId?: StringWithAggregatesFilter<"Song"> | string
    likedById?: StringNullableListFilter<"Song">
    albumId?: StringNullableWithAggregatesFilter<"Song"> | string | null
    genreId?: StringWithAggregatesFilter<"Song"> | string
    playlistId?: StringNullableWithAggregatesFilter<"Song"> | string | null
    artistId?: StringNullableListFilter<"Song">
  }

  export type AlbumWhereInput = {
    AND?: AlbumWhereInput | AlbumWhereInput[]
    OR?: AlbumWhereInput[]
    NOT?: AlbumWhereInput | AlbumWhereInput[]
    id?: StringFilter<"Album"> | string
    createdAt?: DateTimeFilter<"Album"> | Date | string
    updatedAt?: DateTimeFilter<"Album"> | Date | string
    name?: StringFilter<"Album"> | string
    thumbnail?: StringFilter<"Album"> | string
    totalTracks?: IntNullableFilter<"Album"> | number | null
    isPublic?: BoolNullableFilter<"Album"> | boolean | null
    userCreatorId?: StringNullableFilter<"Album"> | string | null
    likedById?: StringNullableListFilter<"Album">
    genreId?: StringFilter<"Album"> | string
    artistId?: StringFilter<"Album"> | string
    Song?: SongListRelationFilter
    UserCreator?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    UserLike?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    Genre?: XOR<GenreRelationFilter, GenreWhereInput>
    Artist?: XOR<ArtistRelationFilter, ArtistWhereInput>
  }

  export type AlbumOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    thumbnail?: SortOrder
    totalTracks?: SortOrder
    isPublic?: SortOrder
    userCreatorId?: SortOrder
    likedById?: SortOrder
    genreId?: SortOrder
    artistId?: SortOrder
    Song?: SongOrderByRelationAggregateInput
    UserCreator?: UserOrderByWithRelationInput
    UserLike?: UserOrderByWithRelationInput
    Genre?: GenreOrderByWithRelationInput
    Artist?: ArtistOrderByWithRelationInput
  }

  export type AlbumWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AlbumWhereInput | AlbumWhereInput[]
    OR?: AlbumWhereInput[]
    NOT?: AlbumWhereInput | AlbumWhereInput[]
    createdAt?: DateTimeFilter<"Album"> | Date | string
    updatedAt?: DateTimeFilter<"Album"> | Date | string
    name?: StringFilter<"Album"> | string
    thumbnail?: StringFilter<"Album"> | string
    totalTracks?: IntNullableFilter<"Album"> | number | null
    isPublic?: BoolNullableFilter<"Album"> | boolean | null
    userCreatorId?: StringNullableFilter<"Album"> | string | null
    likedById?: StringNullableListFilter<"Album">
    genreId?: StringFilter<"Album"> | string
    artistId?: StringFilter<"Album"> | string
    Song?: SongListRelationFilter
    UserCreator?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    UserLike?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    Genre?: XOR<GenreRelationFilter, GenreWhereInput>
    Artist?: XOR<ArtistRelationFilter, ArtistWhereInput>
  }, "id">

  export type AlbumOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    thumbnail?: SortOrder
    totalTracks?: SortOrder
    isPublic?: SortOrder
    userCreatorId?: SortOrder
    likedById?: SortOrder
    genreId?: SortOrder
    artistId?: SortOrder
    _count?: AlbumCountOrderByAggregateInput
    _avg?: AlbumAvgOrderByAggregateInput
    _max?: AlbumMaxOrderByAggregateInput
    _min?: AlbumMinOrderByAggregateInput
    _sum?: AlbumSumOrderByAggregateInput
  }

  export type AlbumScalarWhereWithAggregatesInput = {
    AND?: AlbumScalarWhereWithAggregatesInput | AlbumScalarWhereWithAggregatesInput[]
    OR?: AlbumScalarWhereWithAggregatesInput[]
    NOT?: AlbumScalarWhereWithAggregatesInput | AlbumScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Album"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Album"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Album"> | Date | string
    name?: StringWithAggregatesFilter<"Album"> | string
    thumbnail?: StringWithAggregatesFilter<"Album"> | string
    totalTracks?: IntNullableWithAggregatesFilter<"Album"> | number | null
    isPublic?: BoolNullableWithAggregatesFilter<"Album"> | boolean | null
    userCreatorId?: StringNullableWithAggregatesFilter<"Album"> | string | null
    likedById?: StringNullableListFilter<"Album">
    genreId?: StringWithAggregatesFilter<"Album"> | string
    artistId?: StringWithAggregatesFilter<"Album"> | string
  }

  export type GenreWhereInput = {
    AND?: GenreWhereInput | GenreWhereInput[]
    OR?: GenreWhereInput[]
    NOT?: GenreWhereInput | GenreWhereInput[]
    id?: StringFilter<"Genre"> | string
    createdAt?: DateTimeFilter<"Genre"> | Date | string
    updatedAt?: DateTimeFilter<"Genre"> | Date | string
    name?: StringFilter<"Genre"> | string
    Song?: SongListRelationFilter
    Album?: AlbumListRelationFilter
  }

  export type GenreOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    Song?: SongOrderByRelationAggregateInput
    Album?: AlbumOrderByRelationAggregateInput
  }

  export type GenreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GenreWhereInput | GenreWhereInput[]
    OR?: GenreWhereInput[]
    NOT?: GenreWhereInput | GenreWhereInput[]
    createdAt?: DateTimeFilter<"Genre"> | Date | string
    updatedAt?: DateTimeFilter<"Genre"> | Date | string
    name?: StringFilter<"Genre"> | string
    Song?: SongListRelationFilter
    Album?: AlbumListRelationFilter
  }, "id">

  export type GenreOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    _count?: GenreCountOrderByAggregateInput
    _max?: GenreMaxOrderByAggregateInput
    _min?: GenreMinOrderByAggregateInput
  }

  export type GenreScalarWhereWithAggregatesInput = {
    AND?: GenreScalarWhereWithAggregatesInput | GenreScalarWhereWithAggregatesInput[]
    OR?: GenreScalarWhereWithAggregatesInput[]
    NOT?: GenreScalarWhereWithAggregatesInput | GenreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Genre"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Genre"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Genre"> | Date | string
    name?: StringWithAggregatesFilter<"Genre"> | string
  }

  export type PlaylistWhereInput = {
    AND?: PlaylistWhereInput | PlaylistWhereInput[]
    OR?: PlaylistWhereInput[]
    NOT?: PlaylistWhereInput | PlaylistWhereInput[]
    id?: StringFilter<"Playlist"> | string
    createdAt?: DateTimeFilter<"Playlist"> | Date | string
    updatedAt?: DateTimeFilter<"Playlist"> | Date | string
    playlistName?: StringFilter<"Playlist"> | string
    thumbnail?: StringNullableFilter<"Playlist"> | string | null
    userCreatorId?: StringFilter<"Playlist"> | string
    playlistSongs?: SongListRelationFilter
    UserCreator?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type PlaylistOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    playlistName?: SortOrder
    thumbnail?: SortOrder
    userCreatorId?: SortOrder
    playlistSongs?: SongOrderByRelationAggregateInput
    UserCreator?: UserOrderByWithRelationInput
  }

  export type PlaylistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    playlistName?: string
    AND?: PlaylistWhereInput | PlaylistWhereInput[]
    OR?: PlaylistWhereInput[]
    NOT?: PlaylistWhereInput | PlaylistWhereInput[]
    createdAt?: DateTimeFilter<"Playlist"> | Date | string
    updatedAt?: DateTimeFilter<"Playlist"> | Date | string
    thumbnail?: StringNullableFilter<"Playlist"> | string | null
    userCreatorId?: StringFilter<"Playlist"> | string
    playlistSongs?: SongListRelationFilter
    UserCreator?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id" | "playlistName">

  export type PlaylistOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    playlistName?: SortOrder
    thumbnail?: SortOrder
    userCreatorId?: SortOrder
    _count?: PlaylistCountOrderByAggregateInput
    _max?: PlaylistMaxOrderByAggregateInput
    _min?: PlaylistMinOrderByAggregateInput
  }

  export type PlaylistScalarWhereWithAggregatesInput = {
    AND?: PlaylistScalarWhereWithAggregatesInput | PlaylistScalarWhereWithAggregatesInput[]
    OR?: PlaylistScalarWhereWithAggregatesInput[]
    NOT?: PlaylistScalarWhereWithAggregatesInput | PlaylistScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Playlist"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Playlist"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Playlist"> | Date | string
    playlistName?: StringWithAggregatesFilter<"Playlist"> | string
    thumbnail?: StringNullableWithAggregatesFilter<"Playlist"> | string | null
    userCreatorId?: StringWithAggregatesFilter<"Playlist"> | string
  }

  export type ArtistWhereInput = {
    AND?: ArtistWhereInput | ArtistWhereInput[]
    OR?: ArtistWhereInput[]
    NOT?: ArtistWhereInput | ArtistWhereInput[]
    id?: StringFilter<"Artist"> | string
    createdAt?: DateTimeFilter<"Artist"> | Date | string
    updatedAt?: DateTimeFilter<"Artist"> | Date | string
    name?: StringFilter<"Artist"> | string
    thumbnail?: StringNullableFilter<"Artist"> | string | null
    songsId?: StringNullableListFilter<"Artist">
    likedBy?: StringNullableFilter<"Artist"> | string | null
    Song?: SongListRelationFilter
    Album?: AlbumListRelationFilter
    followedBy?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type ArtistOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    thumbnail?: SortOrder
    songsId?: SortOrder
    likedBy?: SortOrder
    Song?: SongOrderByRelationAggregateInput
    Album?: AlbumOrderByRelationAggregateInput
    followedBy?: UserOrderByWithRelationInput
  }

  export type ArtistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ArtistWhereInput | ArtistWhereInput[]
    OR?: ArtistWhereInput[]
    NOT?: ArtistWhereInput | ArtistWhereInput[]
    createdAt?: DateTimeFilter<"Artist"> | Date | string
    updatedAt?: DateTimeFilter<"Artist"> | Date | string
    name?: StringFilter<"Artist"> | string
    thumbnail?: StringNullableFilter<"Artist"> | string | null
    songsId?: StringNullableListFilter<"Artist">
    likedBy?: StringNullableFilter<"Artist"> | string | null
    Song?: SongListRelationFilter
    Album?: AlbumListRelationFilter
    followedBy?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type ArtistOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    thumbnail?: SortOrder
    songsId?: SortOrder
    likedBy?: SortOrder
    _count?: ArtistCountOrderByAggregateInput
    _max?: ArtistMaxOrderByAggregateInput
    _min?: ArtistMinOrderByAggregateInput
  }

  export type ArtistScalarWhereWithAggregatesInput = {
    AND?: ArtistScalarWhereWithAggregatesInput | ArtistScalarWhereWithAggregatesInput[]
    OR?: ArtistScalarWhereWithAggregatesInput[]
    NOT?: ArtistScalarWhereWithAggregatesInput | ArtistScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Artist"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Artist"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Artist"> | Date | string
    name?: StringWithAggregatesFilter<"Artist"> | string
    thumbnail?: StringNullableWithAggregatesFilter<"Artist"> | string | null
    songsId?: StringNullableListFilter<"Artist">
    likedBy?: StringNullableWithAggregatesFilter<"Artist"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name: string
    likeSongs?: SongCreateNestedManyWithoutUserLikeInput
    uploadSongs?: SongCreateNestedManyWithoutUserCreatorInput
    likeAlbums?: AlbumCreateNestedManyWithoutUserLikeInput
    uploadAlbums?: AlbumCreateNestedManyWithoutUserCreatorInput
    playlist?: PlaylistCreateNestedManyWithoutUserCreatorInput
    favouritesArtist?: ArtistCreateNestedManyWithoutFollowedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name: string
    likeSongs?: SongUncheckedCreateNestedManyWithoutUserLikeInput
    uploadSongs?: SongUncheckedCreateNestedManyWithoutUserCreatorInput
    likeAlbums?: AlbumUncheckedCreateNestedManyWithoutUserLikeInput
    uploadAlbums?: AlbumUncheckedCreateNestedManyWithoutUserCreatorInput
    playlist?: PlaylistUncheckedCreateNestedManyWithoutUserCreatorInput
    favouritesArtist?: ArtistUncheckedCreateNestedManyWithoutFollowedByInput
  }

  export type UserUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    likeSongs?: SongUpdateManyWithoutUserLikeNestedInput
    uploadSongs?: SongUpdateManyWithoutUserCreatorNestedInput
    likeAlbums?: AlbumUpdateManyWithoutUserLikeNestedInput
    uploadAlbums?: AlbumUpdateManyWithoutUserCreatorNestedInput
    playlist?: PlaylistUpdateManyWithoutUserCreatorNestedInput
    favouritesArtist?: ArtistUpdateManyWithoutFollowedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    likeSongs?: SongUncheckedUpdateManyWithoutUserLikeNestedInput
    uploadSongs?: SongUncheckedUpdateManyWithoutUserCreatorNestedInput
    likeAlbums?: AlbumUncheckedUpdateManyWithoutUserLikeNestedInput
    uploadAlbums?: AlbumUncheckedUpdateManyWithoutUserCreatorNestedInput
    playlist?: PlaylistUncheckedUpdateManyWithoutUserCreatorNestedInput
    favouritesArtist?: ArtistUncheckedUpdateManyWithoutFollowedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name: string
  }

  export type UserUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SongCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    url: string
    duration?: number | null
    rating?: number | null
    thumbnail: string
    reproductions?: number | null
    isPublic?: boolean | null
    UserCreator: UserCreateNestedOneWithoutUploadSongsInput
    UserLike?: UserCreateNestedOneWithoutLikeSongsInput
    Album?: AlbumCreateNestedOneWithoutSongInput
    Genre: GenreCreateNestedOneWithoutSongInput
    Playlist?: PlaylistCreateNestedOneWithoutPlaylistSongsInput
    Artist?: ArtistCreateNestedManyWithoutSongInput
  }

  export type SongUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    url: string
    duration?: number | null
    rating?: number | null
    thumbnail: string
    reproductions?: number | null
    isPublic?: boolean | null
    userCreatorId: string
    likedById?: SongCreatelikedByIdInput | string[]
    albumId?: string | null
    genreId: string
    playlistId?: string | null
    artistId?: SongCreateartistIdInput | string[]
    Artist?: ArtistUncheckedCreateNestedManyWithoutSongInput
  }

  export type SongUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail?: StringFieldUpdateOperationsInput | string
    reproductions?: NullableIntFieldUpdateOperationsInput | number | null
    isPublic?: NullableBoolFieldUpdateOperationsInput | boolean | null
    UserCreator?: UserUpdateOneRequiredWithoutUploadSongsNestedInput
    UserLike?: UserUpdateOneWithoutLikeSongsNestedInput
    Album?: AlbumUpdateOneWithoutSongNestedInput
    Genre?: GenreUpdateOneRequiredWithoutSongNestedInput
    Playlist?: PlaylistUpdateOneWithoutPlaylistSongsNestedInput
    Artist?: ArtistUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail?: StringFieldUpdateOperationsInput | string
    reproductions?: NullableIntFieldUpdateOperationsInput | number | null
    isPublic?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userCreatorId?: StringFieldUpdateOperationsInput | string
    likedById?: SongUpdatelikedByIdInput | string[]
    albumId?: NullableStringFieldUpdateOperationsInput | string | null
    genreId?: StringFieldUpdateOperationsInput | string
    playlistId?: NullableStringFieldUpdateOperationsInput | string | null
    artistId?: SongUpdateartistIdInput | string[]
    Artist?: ArtistUncheckedUpdateManyWithoutSongNestedInput
  }

  export type SongCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    url: string
    duration?: number | null
    rating?: number | null
    thumbnail: string
    reproductions?: number | null
    isPublic?: boolean | null
    userCreatorId: string
    likedById?: SongCreatelikedByIdInput | string[]
    albumId?: string | null
    genreId: string
    playlistId?: string | null
    artistId?: SongCreateartistIdInput | string[]
  }

  export type SongUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail?: StringFieldUpdateOperationsInput | string
    reproductions?: NullableIntFieldUpdateOperationsInput | number | null
    isPublic?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type SongUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail?: StringFieldUpdateOperationsInput | string
    reproductions?: NullableIntFieldUpdateOperationsInput | number | null
    isPublic?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userCreatorId?: StringFieldUpdateOperationsInput | string
    likedById?: SongUpdatelikedByIdInput | string[]
    albumId?: NullableStringFieldUpdateOperationsInput | string | null
    genreId?: StringFieldUpdateOperationsInput | string
    playlistId?: NullableStringFieldUpdateOperationsInput | string | null
    artistId?: SongUpdateartistIdInput | string[]
  }

  export type AlbumCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    thumbnail: string
    totalTracks?: number | null
    isPublic?: boolean | null
    Song?: SongCreateNestedManyWithoutAlbumInput
    UserCreator?: UserCreateNestedOneWithoutUploadAlbumsInput
    UserLike?: UserCreateNestedOneWithoutLikeAlbumsInput
    Genre: GenreCreateNestedOneWithoutAlbumInput
    Artist: ArtistCreateNestedOneWithoutAlbumInput
  }

  export type AlbumUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    thumbnail: string
    totalTracks?: number | null
    isPublic?: boolean | null
    userCreatorId?: string | null
    likedById?: AlbumCreatelikedByIdInput | string[]
    genreId: string
    artistId: string
    Song?: SongUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    totalTracks?: NullableIntFieldUpdateOperationsInput | number | null
    isPublic?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Song?: SongUpdateManyWithoutAlbumNestedInput
    UserCreator?: UserUpdateOneWithoutUploadAlbumsNestedInput
    UserLike?: UserUpdateOneWithoutLikeAlbumsNestedInput
    Genre?: GenreUpdateOneRequiredWithoutAlbumNestedInput
    Artist?: ArtistUpdateOneRequiredWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    totalTracks?: NullableIntFieldUpdateOperationsInput | number | null
    isPublic?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userCreatorId?: NullableStringFieldUpdateOperationsInput | string | null
    likedById?: AlbumUpdatelikedByIdInput | string[]
    genreId?: StringFieldUpdateOperationsInput | string
    artistId?: StringFieldUpdateOperationsInput | string
    Song?: SongUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    thumbnail: string
    totalTracks?: number | null
    isPublic?: boolean | null
    userCreatorId?: string | null
    likedById?: AlbumCreatelikedByIdInput | string[]
    genreId: string
    artistId: string
  }

  export type AlbumUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    totalTracks?: NullableIntFieldUpdateOperationsInput | number | null
    isPublic?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type AlbumUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    totalTracks?: NullableIntFieldUpdateOperationsInput | number | null
    isPublic?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userCreatorId?: NullableStringFieldUpdateOperationsInput | string | null
    likedById?: AlbumUpdatelikedByIdInput | string[]
    genreId?: StringFieldUpdateOperationsInput | string
    artistId?: StringFieldUpdateOperationsInput | string
  }

  export type GenreCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    Song?: SongCreateNestedManyWithoutGenreInput
    Album?: AlbumCreateNestedManyWithoutGenreInput
  }

  export type GenreUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    Song?: SongUncheckedCreateNestedManyWithoutGenreInput
    Album?: AlbumUncheckedCreateNestedManyWithoutGenreInput
  }

  export type GenreUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    Song?: SongUpdateManyWithoutGenreNestedInput
    Album?: AlbumUpdateManyWithoutGenreNestedInput
  }

  export type GenreUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    Song?: SongUncheckedUpdateManyWithoutGenreNestedInput
    Album?: AlbumUncheckedUpdateManyWithoutGenreNestedInput
  }

  export type GenreCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
  }

  export type GenreUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GenreUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PlaylistCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    playlistName: string
    thumbnail?: string | null
    playlistSongs?: SongCreateNestedManyWithoutPlaylistInput
    UserCreator?: UserCreateNestedOneWithoutPlaylistInput
  }

  export type PlaylistUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    playlistName: string
    thumbnail?: string | null
    userCreatorId: string
    playlistSongs?: SongUncheckedCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlistName?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    playlistSongs?: SongUpdateManyWithoutPlaylistNestedInput
    UserCreator?: UserUpdateOneWithoutPlaylistNestedInput
  }

  export type PlaylistUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlistName?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    userCreatorId?: StringFieldUpdateOperationsInput | string
    playlistSongs?: SongUncheckedUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    playlistName: string
    thumbnail?: string | null
    userCreatorId: string
  }

  export type PlaylistUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlistName?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlaylistUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlistName?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    userCreatorId?: StringFieldUpdateOperationsInput | string
  }

  export type ArtistCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    thumbnail?: string | null
    Song?: SongCreateNestedManyWithoutArtistInput
    Album?: AlbumCreateNestedManyWithoutArtistInput
    followedBy?: UserCreateNestedOneWithoutFavouritesArtistInput
  }

  export type ArtistUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    thumbnail?: string | null
    songsId?: ArtistCreatesongsIdInput | string[]
    likedBy?: string | null
    Song?: SongUncheckedCreateNestedManyWithoutArtistInput
    Album?: AlbumUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    Song?: SongUpdateManyWithoutArtistNestedInput
    Album?: AlbumUpdateManyWithoutArtistNestedInput
    followedBy?: UserUpdateOneWithoutFavouritesArtistNestedInput
  }

  export type ArtistUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    songsId?: ArtistUpdatesongsIdInput | string[]
    likedBy?: NullableStringFieldUpdateOperationsInput | string | null
    Song?: SongUncheckedUpdateManyWithoutArtistNestedInput
    Album?: AlbumUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type ArtistCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    thumbnail?: string | null
    songsId?: ArtistCreatesongsIdInput | string[]
    likedBy?: string | null
  }

  export type ArtistUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ArtistUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    songsId?: ArtistUpdatesongsIdInput | string[]
    likedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SongListRelationFilter = {
    every?: SongWhereInput
    some?: SongWhereInput
    none?: SongWhereInput
  }

  export type AlbumListRelationFilter = {
    every?: AlbumWhereInput
    some?: AlbumWhereInput
    none?: AlbumWhereInput
  }

  export type PlaylistListRelationFilter = {
    every?: PlaylistWhereInput
    some?: PlaylistWhereInput
    none?: PlaylistWhereInput
  }

  export type ArtistListRelationFilter = {
    every?: ArtistWhereInput
    some?: ArtistWhereInput
    none?: ArtistWhereInput
  }

  export type SongOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlbumOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlaylistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArtistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
    isSet?: boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type AlbumNullableRelationFilter = {
    is?: AlbumWhereInput | null
    isNot?: AlbumWhereInput | null
  }

  export type GenreRelationFilter = {
    is?: GenreWhereInput
    isNot?: GenreWhereInput
  }

  export type PlaylistNullableRelationFilter = {
    is?: PlaylistWhereInput | null
    isNot?: PlaylistWhereInput | null
  }

  export type SongCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    url?: SortOrder
    duration?: SortOrder
    rating?: SortOrder
    thumbnail?: SortOrder
    reproductions?: SortOrder
    isPublic?: SortOrder
    userCreatorId?: SortOrder
    likedById?: SortOrder
    albumId?: SortOrder
    genreId?: SortOrder
    playlistId?: SortOrder
    artistId?: SortOrder
  }

  export type SongAvgOrderByAggregateInput = {
    duration?: SortOrder
    rating?: SortOrder
    reproductions?: SortOrder
  }

  export type SongMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    url?: SortOrder
    duration?: SortOrder
    rating?: SortOrder
    thumbnail?: SortOrder
    reproductions?: SortOrder
    isPublic?: SortOrder
    userCreatorId?: SortOrder
    albumId?: SortOrder
    genreId?: SortOrder
    playlistId?: SortOrder
  }

  export type SongMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    url?: SortOrder
    duration?: SortOrder
    rating?: SortOrder
    thumbnail?: SortOrder
    reproductions?: SortOrder
    isPublic?: SortOrder
    userCreatorId?: SortOrder
    albumId?: SortOrder
    genreId?: SortOrder
    playlistId?: SortOrder
  }

  export type SongSumOrderByAggregateInput = {
    duration?: SortOrder
    rating?: SortOrder
    reproductions?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type ArtistRelationFilter = {
    is?: ArtistWhereInput
    isNot?: ArtistWhereInput
  }

  export type AlbumCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    thumbnail?: SortOrder
    totalTracks?: SortOrder
    isPublic?: SortOrder
    userCreatorId?: SortOrder
    likedById?: SortOrder
    genreId?: SortOrder
    artistId?: SortOrder
  }

  export type AlbumAvgOrderByAggregateInput = {
    totalTracks?: SortOrder
  }

  export type AlbumMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    thumbnail?: SortOrder
    totalTracks?: SortOrder
    isPublic?: SortOrder
    userCreatorId?: SortOrder
    genreId?: SortOrder
    artistId?: SortOrder
  }

  export type AlbumMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    thumbnail?: SortOrder
    totalTracks?: SortOrder
    isPublic?: SortOrder
    userCreatorId?: SortOrder
    genreId?: SortOrder
    artistId?: SortOrder
  }

  export type AlbumSumOrderByAggregateInput = {
    totalTracks?: SortOrder
  }

  export type GenreCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
  }

  export type GenreMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
  }

  export type GenreMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
  }

  export type PlaylistCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    playlistName?: SortOrder
    thumbnail?: SortOrder
    userCreatorId?: SortOrder
  }

  export type PlaylistMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    playlistName?: SortOrder
    thumbnail?: SortOrder
    userCreatorId?: SortOrder
  }

  export type PlaylistMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    playlistName?: SortOrder
    thumbnail?: SortOrder
    userCreatorId?: SortOrder
  }

  export type ArtistCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    thumbnail?: SortOrder
    songsId?: SortOrder
    likedBy?: SortOrder
  }

  export type ArtistMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    thumbnail?: SortOrder
    likedBy?: SortOrder
  }

  export type ArtistMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    thumbnail?: SortOrder
    likedBy?: SortOrder
  }

  export type SongCreateNestedManyWithoutUserLikeInput = {
    create?: XOR<SongCreateWithoutUserLikeInput, SongUncheckedCreateWithoutUserLikeInput> | SongCreateWithoutUserLikeInput[] | SongUncheckedCreateWithoutUserLikeInput[]
    connectOrCreate?: SongCreateOrConnectWithoutUserLikeInput | SongCreateOrConnectWithoutUserLikeInput[]
    createMany?: SongCreateManyUserLikeInputEnvelope
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
  }

  export type SongCreateNestedManyWithoutUserCreatorInput = {
    create?: XOR<SongCreateWithoutUserCreatorInput, SongUncheckedCreateWithoutUserCreatorInput> | SongCreateWithoutUserCreatorInput[] | SongUncheckedCreateWithoutUserCreatorInput[]
    connectOrCreate?: SongCreateOrConnectWithoutUserCreatorInput | SongCreateOrConnectWithoutUserCreatorInput[]
    createMany?: SongCreateManyUserCreatorInputEnvelope
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
  }

  export type AlbumCreateNestedManyWithoutUserLikeInput = {
    create?: XOR<AlbumCreateWithoutUserLikeInput, AlbumUncheckedCreateWithoutUserLikeInput> | AlbumCreateWithoutUserLikeInput[] | AlbumUncheckedCreateWithoutUserLikeInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutUserLikeInput | AlbumCreateOrConnectWithoutUserLikeInput[]
    createMany?: AlbumCreateManyUserLikeInputEnvelope
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
  }

  export type AlbumCreateNestedManyWithoutUserCreatorInput = {
    create?: XOR<AlbumCreateWithoutUserCreatorInput, AlbumUncheckedCreateWithoutUserCreatorInput> | AlbumCreateWithoutUserCreatorInput[] | AlbumUncheckedCreateWithoutUserCreatorInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutUserCreatorInput | AlbumCreateOrConnectWithoutUserCreatorInput[]
    createMany?: AlbumCreateManyUserCreatorInputEnvelope
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
  }

  export type PlaylistCreateNestedManyWithoutUserCreatorInput = {
    create?: XOR<PlaylistCreateWithoutUserCreatorInput, PlaylistUncheckedCreateWithoutUserCreatorInput> | PlaylistCreateWithoutUserCreatorInput[] | PlaylistUncheckedCreateWithoutUserCreatorInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutUserCreatorInput | PlaylistCreateOrConnectWithoutUserCreatorInput[]
    createMany?: PlaylistCreateManyUserCreatorInputEnvelope
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
  }

  export type ArtistCreateNestedManyWithoutFollowedByInput = {
    create?: XOR<ArtistCreateWithoutFollowedByInput, ArtistUncheckedCreateWithoutFollowedByInput> | ArtistCreateWithoutFollowedByInput[] | ArtistUncheckedCreateWithoutFollowedByInput[]
    connectOrCreate?: ArtistCreateOrConnectWithoutFollowedByInput | ArtistCreateOrConnectWithoutFollowedByInput[]
    createMany?: ArtistCreateManyFollowedByInputEnvelope
    connect?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
  }

  export type SongUncheckedCreateNestedManyWithoutUserLikeInput = {
    create?: XOR<SongCreateWithoutUserLikeInput, SongUncheckedCreateWithoutUserLikeInput> | SongCreateWithoutUserLikeInput[] | SongUncheckedCreateWithoutUserLikeInput[]
    connectOrCreate?: SongCreateOrConnectWithoutUserLikeInput | SongCreateOrConnectWithoutUserLikeInput[]
    createMany?: SongCreateManyUserLikeInputEnvelope
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
  }

  export type SongUncheckedCreateNestedManyWithoutUserCreatorInput = {
    create?: XOR<SongCreateWithoutUserCreatorInput, SongUncheckedCreateWithoutUserCreatorInput> | SongCreateWithoutUserCreatorInput[] | SongUncheckedCreateWithoutUserCreatorInput[]
    connectOrCreate?: SongCreateOrConnectWithoutUserCreatorInput | SongCreateOrConnectWithoutUserCreatorInput[]
    createMany?: SongCreateManyUserCreatorInputEnvelope
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
  }

  export type AlbumUncheckedCreateNestedManyWithoutUserLikeInput = {
    create?: XOR<AlbumCreateWithoutUserLikeInput, AlbumUncheckedCreateWithoutUserLikeInput> | AlbumCreateWithoutUserLikeInput[] | AlbumUncheckedCreateWithoutUserLikeInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutUserLikeInput | AlbumCreateOrConnectWithoutUserLikeInput[]
    createMany?: AlbumCreateManyUserLikeInputEnvelope
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
  }

  export type AlbumUncheckedCreateNestedManyWithoutUserCreatorInput = {
    create?: XOR<AlbumCreateWithoutUserCreatorInput, AlbumUncheckedCreateWithoutUserCreatorInput> | AlbumCreateWithoutUserCreatorInput[] | AlbumUncheckedCreateWithoutUserCreatorInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutUserCreatorInput | AlbumCreateOrConnectWithoutUserCreatorInput[]
    createMany?: AlbumCreateManyUserCreatorInputEnvelope
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
  }

  export type PlaylistUncheckedCreateNestedManyWithoutUserCreatorInput = {
    create?: XOR<PlaylistCreateWithoutUserCreatorInput, PlaylistUncheckedCreateWithoutUserCreatorInput> | PlaylistCreateWithoutUserCreatorInput[] | PlaylistUncheckedCreateWithoutUserCreatorInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutUserCreatorInput | PlaylistCreateOrConnectWithoutUserCreatorInput[]
    createMany?: PlaylistCreateManyUserCreatorInputEnvelope
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
  }

  export type ArtistUncheckedCreateNestedManyWithoutFollowedByInput = {
    create?: XOR<ArtistCreateWithoutFollowedByInput, ArtistUncheckedCreateWithoutFollowedByInput> | ArtistCreateWithoutFollowedByInput[] | ArtistUncheckedCreateWithoutFollowedByInput[]
    connectOrCreate?: ArtistCreateOrConnectWithoutFollowedByInput | ArtistCreateOrConnectWithoutFollowedByInput[]
    createMany?: ArtistCreateManyFollowedByInputEnvelope
    connect?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type SongUpdateManyWithoutUserLikeNestedInput = {
    create?: XOR<SongCreateWithoutUserLikeInput, SongUncheckedCreateWithoutUserLikeInput> | SongCreateWithoutUserLikeInput[] | SongUncheckedCreateWithoutUserLikeInput[]
    connectOrCreate?: SongCreateOrConnectWithoutUserLikeInput | SongCreateOrConnectWithoutUserLikeInput[]
    upsert?: SongUpsertWithWhereUniqueWithoutUserLikeInput | SongUpsertWithWhereUniqueWithoutUserLikeInput[]
    createMany?: SongCreateManyUserLikeInputEnvelope
    set?: SongWhereUniqueInput | SongWhereUniqueInput[]
    disconnect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    delete?: SongWhereUniqueInput | SongWhereUniqueInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    update?: SongUpdateWithWhereUniqueWithoutUserLikeInput | SongUpdateWithWhereUniqueWithoutUserLikeInput[]
    updateMany?: SongUpdateManyWithWhereWithoutUserLikeInput | SongUpdateManyWithWhereWithoutUserLikeInput[]
    deleteMany?: SongScalarWhereInput | SongScalarWhereInput[]
  }

  export type SongUpdateManyWithoutUserCreatorNestedInput = {
    create?: XOR<SongCreateWithoutUserCreatorInput, SongUncheckedCreateWithoutUserCreatorInput> | SongCreateWithoutUserCreatorInput[] | SongUncheckedCreateWithoutUserCreatorInput[]
    connectOrCreate?: SongCreateOrConnectWithoutUserCreatorInput | SongCreateOrConnectWithoutUserCreatorInput[]
    upsert?: SongUpsertWithWhereUniqueWithoutUserCreatorInput | SongUpsertWithWhereUniqueWithoutUserCreatorInput[]
    createMany?: SongCreateManyUserCreatorInputEnvelope
    set?: SongWhereUniqueInput | SongWhereUniqueInput[]
    disconnect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    delete?: SongWhereUniqueInput | SongWhereUniqueInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    update?: SongUpdateWithWhereUniqueWithoutUserCreatorInput | SongUpdateWithWhereUniqueWithoutUserCreatorInput[]
    updateMany?: SongUpdateManyWithWhereWithoutUserCreatorInput | SongUpdateManyWithWhereWithoutUserCreatorInput[]
    deleteMany?: SongScalarWhereInput | SongScalarWhereInput[]
  }

  export type AlbumUpdateManyWithoutUserLikeNestedInput = {
    create?: XOR<AlbumCreateWithoutUserLikeInput, AlbumUncheckedCreateWithoutUserLikeInput> | AlbumCreateWithoutUserLikeInput[] | AlbumUncheckedCreateWithoutUserLikeInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutUserLikeInput | AlbumCreateOrConnectWithoutUserLikeInput[]
    upsert?: AlbumUpsertWithWhereUniqueWithoutUserLikeInput | AlbumUpsertWithWhereUniqueWithoutUserLikeInput[]
    createMany?: AlbumCreateManyUserLikeInputEnvelope
    set?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    disconnect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    delete?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    update?: AlbumUpdateWithWhereUniqueWithoutUserLikeInput | AlbumUpdateWithWhereUniqueWithoutUserLikeInput[]
    updateMany?: AlbumUpdateManyWithWhereWithoutUserLikeInput | AlbumUpdateManyWithWhereWithoutUserLikeInput[]
    deleteMany?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
  }

  export type AlbumUpdateManyWithoutUserCreatorNestedInput = {
    create?: XOR<AlbumCreateWithoutUserCreatorInput, AlbumUncheckedCreateWithoutUserCreatorInput> | AlbumCreateWithoutUserCreatorInput[] | AlbumUncheckedCreateWithoutUserCreatorInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutUserCreatorInput | AlbumCreateOrConnectWithoutUserCreatorInput[]
    upsert?: AlbumUpsertWithWhereUniqueWithoutUserCreatorInput | AlbumUpsertWithWhereUniqueWithoutUserCreatorInput[]
    createMany?: AlbumCreateManyUserCreatorInputEnvelope
    set?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    disconnect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    delete?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    update?: AlbumUpdateWithWhereUniqueWithoutUserCreatorInput | AlbumUpdateWithWhereUniqueWithoutUserCreatorInput[]
    updateMany?: AlbumUpdateManyWithWhereWithoutUserCreatorInput | AlbumUpdateManyWithWhereWithoutUserCreatorInput[]
    deleteMany?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
  }

  export type PlaylistUpdateManyWithoutUserCreatorNestedInput = {
    create?: XOR<PlaylistCreateWithoutUserCreatorInput, PlaylistUncheckedCreateWithoutUserCreatorInput> | PlaylistCreateWithoutUserCreatorInput[] | PlaylistUncheckedCreateWithoutUserCreatorInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutUserCreatorInput | PlaylistCreateOrConnectWithoutUserCreatorInput[]
    upsert?: PlaylistUpsertWithWhereUniqueWithoutUserCreatorInput | PlaylistUpsertWithWhereUniqueWithoutUserCreatorInput[]
    createMany?: PlaylistCreateManyUserCreatorInputEnvelope
    set?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    disconnect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    delete?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    update?: PlaylistUpdateWithWhereUniqueWithoutUserCreatorInput | PlaylistUpdateWithWhereUniqueWithoutUserCreatorInput[]
    updateMany?: PlaylistUpdateManyWithWhereWithoutUserCreatorInput | PlaylistUpdateManyWithWhereWithoutUserCreatorInput[]
    deleteMany?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
  }

  export type ArtistUpdateManyWithoutFollowedByNestedInput = {
    create?: XOR<ArtistCreateWithoutFollowedByInput, ArtistUncheckedCreateWithoutFollowedByInput> | ArtistCreateWithoutFollowedByInput[] | ArtistUncheckedCreateWithoutFollowedByInput[]
    connectOrCreate?: ArtistCreateOrConnectWithoutFollowedByInput | ArtistCreateOrConnectWithoutFollowedByInput[]
    upsert?: ArtistUpsertWithWhereUniqueWithoutFollowedByInput | ArtistUpsertWithWhereUniqueWithoutFollowedByInput[]
    createMany?: ArtistCreateManyFollowedByInputEnvelope
    set?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    disconnect?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    delete?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    connect?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    update?: ArtistUpdateWithWhereUniqueWithoutFollowedByInput | ArtistUpdateWithWhereUniqueWithoutFollowedByInput[]
    updateMany?: ArtistUpdateManyWithWhereWithoutFollowedByInput | ArtistUpdateManyWithWhereWithoutFollowedByInput[]
    deleteMany?: ArtistScalarWhereInput | ArtistScalarWhereInput[]
  }

  export type SongUncheckedUpdateManyWithoutUserLikeNestedInput = {
    create?: XOR<SongCreateWithoutUserLikeInput, SongUncheckedCreateWithoutUserLikeInput> | SongCreateWithoutUserLikeInput[] | SongUncheckedCreateWithoutUserLikeInput[]
    connectOrCreate?: SongCreateOrConnectWithoutUserLikeInput | SongCreateOrConnectWithoutUserLikeInput[]
    upsert?: SongUpsertWithWhereUniqueWithoutUserLikeInput | SongUpsertWithWhereUniqueWithoutUserLikeInput[]
    createMany?: SongCreateManyUserLikeInputEnvelope
    set?: SongWhereUniqueInput | SongWhereUniqueInput[]
    disconnect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    delete?: SongWhereUniqueInput | SongWhereUniqueInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    update?: SongUpdateWithWhereUniqueWithoutUserLikeInput | SongUpdateWithWhereUniqueWithoutUserLikeInput[]
    updateMany?: SongUpdateManyWithWhereWithoutUserLikeInput | SongUpdateManyWithWhereWithoutUserLikeInput[]
    deleteMany?: SongScalarWhereInput | SongScalarWhereInput[]
  }

  export type SongUncheckedUpdateManyWithoutUserCreatorNestedInput = {
    create?: XOR<SongCreateWithoutUserCreatorInput, SongUncheckedCreateWithoutUserCreatorInput> | SongCreateWithoutUserCreatorInput[] | SongUncheckedCreateWithoutUserCreatorInput[]
    connectOrCreate?: SongCreateOrConnectWithoutUserCreatorInput | SongCreateOrConnectWithoutUserCreatorInput[]
    upsert?: SongUpsertWithWhereUniqueWithoutUserCreatorInput | SongUpsertWithWhereUniqueWithoutUserCreatorInput[]
    createMany?: SongCreateManyUserCreatorInputEnvelope
    set?: SongWhereUniqueInput | SongWhereUniqueInput[]
    disconnect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    delete?: SongWhereUniqueInput | SongWhereUniqueInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    update?: SongUpdateWithWhereUniqueWithoutUserCreatorInput | SongUpdateWithWhereUniqueWithoutUserCreatorInput[]
    updateMany?: SongUpdateManyWithWhereWithoutUserCreatorInput | SongUpdateManyWithWhereWithoutUserCreatorInput[]
    deleteMany?: SongScalarWhereInput | SongScalarWhereInput[]
  }

  export type AlbumUncheckedUpdateManyWithoutUserLikeNestedInput = {
    create?: XOR<AlbumCreateWithoutUserLikeInput, AlbumUncheckedCreateWithoutUserLikeInput> | AlbumCreateWithoutUserLikeInput[] | AlbumUncheckedCreateWithoutUserLikeInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutUserLikeInput | AlbumCreateOrConnectWithoutUserLikeInput[]
    upsert?: AlbumUpsertWithWhereUniqueWithoutUserLikeInput | AlbumUpsertWithWhereUniqueWithoutUserLikeInput[]
    createMany?: AlbumCreateManyUserLikeInputEnvelope
    set?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    disconnect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    delete?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    update?: AlbumUpdateWithWhereUniqueWithoutUserLikeInput | AlbumUpdateWithWhereUniqueWithoutUserLikeInput[]
    updateMany?: AlbumUpdateManyWithWhereWithoutUserLikeInput | AlbumUpdateManyWithWhereWithoutUserLikeInput[]
    deleteMany?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
  }

  export type AlbumUncheckedUpdateManyWithoutUserCreatorNestedInput = {
    create?: XOR<AlbumCreateWithoutUserCreatorInput, AlbumUncheckedCreateWithoutUserCreatorInput> | AlbumCreateWithoutUserCreatorInput[] | AlbumUncheckedCreateWithoutUserCreatorInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutUserCreatorInput | AlbumCreateOrConnectWithoutUserCreatorInput[]
    upsert?: AlbumUpsertWithWhereUniqueWithoutUserCreatorInput | AlbumUpsertWithWhereUniqueWithoutUserCreatorInput[]
    createMany?: AlbumCreateManyUserCreatorInputEnvelope
    set?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    disconnect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    delete?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    update?: AlbumUpdateWithWhereUniqueWithoutUserCreatorInput | AlbumUpdateWithWhereUniqueWithoutUserCreatorInput[]
    updateMany?: AlbumUpdateManyWithWhereWithoutUserCreatorInput | AlbumUpdateManyWithWhereWithoutUserCreatorInput[]
    deleteMany?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
  }

  export type PlaylistUncheckedUpdateManyWithoutUserCreatorNestedInput = {
    create?: XOR<PlaylistCreateWithoutUserCreatorInput, PlaylistUncheckedCreateWithoutUserCreatorInput> | PlaylistCreateWithoutUserCreatorInput[] | PlaylistUncheckedCreateWithoutUserCreatorInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutUserCreatorInput | PlaylistCreateOrConnectWithoutUserCreatorInput[]
    upsert?: PlaylistUpsertWithWhereUniqueWithoutUserCreatorInput | PlaylistUpsertWithWhereUniqueWithoutUserCreatorInput[]
    createMany?: PlaylistCreateManyUserCreatorInputEnvelope
    set?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    disconnect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    delete?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    update?: PlaylistUpdateWithWhereUniqueWithoutUserCreatorInput | PlaylistUpdateWithWhereUniqueWithoutUserCreatorInput[]
    updateMany?: PlaylistUpdateManyWithWhereWithoutUserCreatorInput | PlaylistUpdateManyWithWhereWithoutUserCreatorInput[]
    deleteMany?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
  }

  export type ArtistUncheckedUpdateManyWithoutFollowedByNestedInput = {
    create?: XOR<ArtistCreateWithoutFollowedByInput, ArtistUncheckedCreateWithoutFollowedByInput> | ArtistCreateWithoutFollowedByInput[] | ArtistUncheckedCreateWithoutFollowedByInput[]
    connectOrCreate?: ArtistCreateOrConnectWithoutFollowedByInput | ArtistCreateOrConnectWithoutFollowedByInput[]
    upsert?: ArtistUpsertWithWhereUniqueWithoutFollowedByInput | ArtistUpsertWithWhereUniqueWithoutFollowedByInput[]
    createMany?: ArtistCreateManyFollowedByInputEnvelope
    set?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    disconnect?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    delete?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    connect?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    update?: ArtistUpdateWithWhereUniqueWithoutFollowedByInput | ArtistUpdateWithWhereUniqueWithoutFollowedByInput[]
    updateMany?: ArtistUpdateManyWithWhereWithoutFollowedByInput | ArtistUpdateManyWithWhereWithoutFollowedByInput[]
    deleteMany?: ArtistScalarWhereInput | ArtistScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUploadSongsInput = {
    create?: XOR<UserCreateWithoutUploadSongsInput, UserUncheckedCreateWithoutUploadSongsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUploadSongsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLikeSongsInput = {
    create?: XOR<UserCreateWithoutLikeSongsInput, UserUncheckedCreateWithoutLikeSongsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikeSongsInput
    connect?: UserWhereUniqueInput
  }

  export type AlbumCreateNestedOneWithoutSongInput = {
    create?: XOR<AlbumCreateWithoutSongInput, AlbumUncheckedCreateWithoutSongInput>
    connectOrCreate?: AlbumCreateOrConnectWithoutSongInput
    connect?: AlbumWhereUniqueInput
  }

  export type GenreCreateNestedOneWithoutSongInput = {
    create?: XOR<GenreCreateWithoutSongInput, GenreUncheckedCreateWithoutSongInput>
    connectOrCreate?: GenreCreateOrConnectWithoutSongInput
    connect?: GenreWhereUniqueInput
  }

  export type PlaylistCreateNestedOneWithoutPlaylistSongsInput = {
    create?: XOR<PlaylistCreateWithoutPlaylistSongsInput, PlaylistUncheckedCreateWithoutPlaylistSongsInput>
    connectOrCreate?: PlaylistCreateOrConnectWithoutPlaylistSongsInput
    connect?: PlaylistWhereUniqueInput
  }

  export type ArtistCreateNestedManyWithoutSongInput = {
    create?: XOR<ArtistCreateWithoutSongInput, ArtistUncheckedCreateWithoutSongInput> | ArtistCreateWithoutSongInput[] | ArtistUncheckedCreateWithoutSongInput[]
    connectOrCreate?: ArtistCreateOrConnectWithoutSongInput | ArtistCreateOrConnectWithoutSongInput[]
    connect?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
  }

  export type SongCreatelikedByIdInput = {
    set: string[]
  }

  export type SongCreateartistIdInput = {
    set: string[]
  }

  export type ArtistUncheckedCreateNestedManyWithoutSongInput = {
    create?: XOR<ArtistCreateWithoutSongInput, ArtistUncheckedCreateWithoutSongInput> | ArtistCreateWithoutSongInput[] | ArtistUncheckedCreateWithoutSongInput[]
    connectOrCreate?: ArtistCreateOrConnectWithoutSongInput | ArtistCreateOrConnectWithoutSongInput[]
    connect?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
    unset?: boolean
  }

  export type UserUpdateOneRequiredWithoutUploadSongsNestedInput = {
    create?: XOR<UserCreateWithoutUploadSongsInput, UserUncheckedCreateWithoutUploadSongsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUploadSongsInput
    upsert?: UserUpsertWithoutUploadSongsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUploadSongsInput, UserUpdateWithoutUploadSongsInput>, UserUncheckedUpdateWithoutUploadSongsInput>
  }

  export type UserUpdateOneWithoutLikeSongsNestedInput = {
    create?: XOR<UserCreateWithoutLikeSongsInput, UserUncheckedCreateWithoutLikeSongsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikeSongsInput
    upsert?: UserUpsertWithoutLikeSongsInput
    disconnect?: boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLikeSongsInput, UserUpdateWithoutLikeSongsInput>, UserUncheckedUpdateWithoutLikeSongsInput>
  }

  export type AlbumUpdateOneWithoutSongNestedInput = {
    create?: XOR<AlbumCreateWithoutSongInput, AlbumUncheckedCreateWithoutSongInput>
    connectOrCreate?: AlbumCreateOrConnectWithoutSongInput
    upsert?: AlbumUpsertWithoutSongInput
    disconnect?: boolean
    delete?: AlbumWhereInput | boolean
    connect?: AlbumWhereUniqueInput
    update?: XOR<XOR<AlbumUpdateToOneWithWhereWithoutSongInput, AlbumUpdateWithoutSongInput>, AlbumUncheckedUpdateWithoutSongInput>
  }

  export type GenreUpdateOneRequiredWithoutSongNestedInput = {
    create?: XOR<GenreCreateWithoutSongInput, GenreUncheckedCreateWithoutSongInput>
    connectOrCreate?: GenreCreateOrConnectWithoutSongInput
    upsert?: GenreUpsertWithoutSongInput
    connect?: GenreWhereUniqueInput
    update?: XOR<XOR<GenreUpdateToOneWithWhereWithoutSongInput, GenreUpdateWithoutSongInput>, GenreUncheckedUpdateWithoutSongInput>
  }

  export type PlaylistUpdateOneWithoutPlaylistSongsNestedInput = {
    create?: XOR<PlaylistCreateWithoutPlaylistSongsInput, PlaylistUncheckedCreateWithoutPlaylistSongsInput>
    connectOrCreate?: PlaylistCreateOrConnectWithoutPlaylistSongsInput
    upsert?: PlaylistUpsertWithoutPlaylistSongsInput
    disconnect?: boolean
    delete?: PlaylistWhereInput | boolean
    connect?: PlaylistWhereUniqueInput
    update?: XOR<XOR<PlaylistUpdateToOneWithWhereWithoutPlaylistSongsInput, PlaylistUpdateWithoutPlaylistSongsInput>, PlaylistUncheckedUpdateWithoutPlaylistSongsInput>
  }

  export type ArtistUpdateManyWithoutSongNestedInput = {
    create?: XOR<ArtistCreateWithoutSongInput, ArtistUncheckedCreateWithoutSongInput> | ArtistCreateWithoutSongInput[] | ArtistUncheckedCreateWithoutSongInput[]
    connectOrCreate?: ArtistCreateOrConnectWithoutSongInput | ArtistCreateOrConnectWithoutSongInput[]
    upsert?: ArtistUpsertWithWhereUniqueWithoutSongInput | ArtistUpsertWithWhereUniqueWithoutSongInput[]
    set?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    disconnect?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    delete?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    connect?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    update?: ArtistUpdateWithWhereUniqueWithoutSongInput | ArtistUpdateWithWhereUniqueWithoutSongInput[]
    updateMany?: ArtistUpdateManyWithWhereWithoutSongInput | ArtistUpdateManyWithWhereWithoutSongInput[]
    deleteMany?: ArtistScalarWhereInput | ArtistScalarWhereInput[]
  }

  export type SongUpdatelikedByIdInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type SongUpdateartistIdInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ArtistUncheckedUpdateManyWithoutSongNestedInput = {
    create?: XOR<ArtistCreateWithoutSongInput, ArtistUncheckedCreateWithoutSongInput> | ArtistCreateWithoutSongInput[] | ArtistUncheckedCreateWithoutSongInput[]
    connectOrCreate?: ArtistCreateOrConnectWithoutSongInput | ArtistCreateOrConnectWithoutSongInput[]
    upsert?: ArtistUpsertWithWhereUniqueWithoutSongInput | ArtistUpsertWithWhereUniqueWithoutSongInput[]
    set?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    disconnect?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    delete?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    connect?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    update?: ArtistUpdateWithWhereUniqueWithoutSongInput | ArtistUpdateWithWhereUniqueWithoutSongInput[]
    updateMany?: ArtistUpdateManyWithWhereWithoutSongInput | ArtistUpdateManyWithWhereWithoutSongInput[]
    deleteMany?: ArtistScalarWhereInput | ArtistScalarWhereInput[]
  }

  export type SongCreateNestedManyWithoutAlbumInput = {
    create?: XOR<SongCreateWithoutAlbumInput, SongUncheckedCreateWithoutAlbumInput> | SongCreateWithoutAlbumInput[] | SongUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: SongCreateOrConnectWithoutAlbumInput | SongCreateOrConnectWithoutAlbumInput[]
    createMany?: SongCreateManyAlbumInputEnvelope
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutUploadAlbumsInput = {
    create?: XOR<UserCreateWithoutUploadAlbumsInput, UserUncheckedCreateWithoutUploadAlbumsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUploadAlbumsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLikeAlbumsInput = {
    create?: XOR<UserCreateWithoutLikeAlbumsInput, UserUncheckedCreateWithoutLikeAlbumsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikeAlbumsInput
    connect?: UserWhereUniqueInput
  }

  export type GenreCreateNestedOneWithoutAlbumInput = {
    create?: XOR<GenreCreateWithoutAlbumInput, GenreUncheckedCreateWithoutAlbumInput>
    connectOrCreate?: GenreCreateOrConnectWithoutAlbumInput
    connect?: GenreWhereUniqueInput
  }

  export type ArtistCreateNestedOneWithoutAlbumInput = {
    create?: XOR<ArtistCreateWithoutAlbumInput, ArtistUncheckedCreateWithoutAlbumInput>
    connectOrCreate?: ArtistCreateOrConnectWithoutAlbumInput
    connect?: ArtistWhereUniqueInput
  }

  export type AlbumCreatelikedByIdInput = {
    set: string[]
  }

  export type SongUncheckedCreateNestedManyWithoutAlbumInput = {
    create?: XOR<SongCreateWithoutAlbumInput, SongUncheckedCreateWithoutAlbumInput> | SongCreateWithoutAlbumInput[] | SongUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: SongCreateOrConnectWithoutAlbumInput | SongCreateOrConnectWithoutAlbumInput[]
    createMany?: SongCreateManyAlbumInputEnvelope
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
  }

  export type SongUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<SongCreateWithoutAlbumInput, SongUncheckedCreateWithoutAlbumInput> | SongCreateWithoutAlbumInput[] | SongUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: SongCreateOrConnectWithoutAlbumInput | SongCreateOrConnectWithoutAlbumInput[]
    upsert?: SongUpsertWithWhereUniqueWithoutAlbumInput | SongUpsertWithWhereUniqueWithoutAlbumInput[]
    createMany?: SongCreateManyAlbumInputEnvelope
    set?: SongWhereUniqueInput | SongWhereUniqueInput[]
    disconnect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    delete?: SongWhereUniqueInput | SongWhereUniqueInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    update?: SongUpdateWithWhereUniqueWithoutAlbumInput | SongUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: SongUpdateManyWithWhereWithoutAlbumInput | SongUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: SongScalarWhereInput | SongScalarWhereInput[]
  }

  export type UserUpdateOneWithoutUploadAlbumsNestedInput = {
    create?: XOR<UserCreateWithoutUploadAlbumsInput, UserUncheckedCreateWithoutUploadAlbumsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUploadAlbumsInput
    upsert?: UserUpsertWithoutUploadAlbumsInput
    disconnect?: boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUploadAlbumsInput, UserUpdateWithoutUploadAlbumsInput>, UserUncheckedUpdateWithoutUploadAlbumsInput>
  }

  export type UserUpdateOneWithoutLikeAlbumsNestedInput = {
    create?: XOR<UserCreateWithoutLikeAlbumsInput, UserUncheckedCreateWithoutLikeAlbumsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikeAlbumsInput
    upsert?: UserUpsertWithoutLikeAlbumsInput
    disconnect?: boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLikeAlbumsInput, UserUpdateWithoutLikeAlbumsInput>, UserUncheckedUpdateWithoutLikeAlbumsInput>
  }

  export type GenreUpdateOneRequiredWithoutAlbumNestedInput = {
    create?: XOR<GenreCreateWithoutAlbumInput, GenreUncheckedCreateWithoutAlbumInput>
    connectOrCreate?: GenreCreateOrConnectWithoutAlbumInput
    upsert?: GenreUpsertWithoutAlbumInput
    connect?: GenreWhereUniqueInput
    update?: XOR<XOR<GenreUpdateToOneWithWhereWithoutAlbumInput, GenreUpdateWithoutAlbumInput>, GenreUncheckedUpdateWithoutAlbumInput>
  }

  export type ArtistUpdateOneRequiredWithoutAlbumNestedInput = {
    create?: XOR<ArtistCreateWithoutAlbumInput, ArtistUncheckedCreateWithoutAlbumInput>
    connectOrCreate?: ArtistCreateOrConnectWithoutAlbumInput
    upsert?: ArtistUpsertWithoutAlbumInput
    connect?: ArtistWhereUniqueInput
    update?: XOR<XOR<ArtistUpdateToOneWithWhereWithoutAlbumInput, ArtistUpdateWithoutAlbumInput>, ArtistUncheckedUpdateWithoutAlbumInput>
  }

  export type AlbumUpdatelikedByIdInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SongUncheckedUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<SongCreateWithoutAlbumInput, SongUncheckedCreateWithoutAlbumInput> | SongCreateWithoutAlbumInput[] | SongUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: SongCreateOrConnectWithoutAlbumInput | SongCreateOrConnectWithoutAlbumInput[]
    upsert?: SongUpsertWithWhereUniqueWithoutAlbumInput | SongUpsertWithWhereUniqueWithoutAlbumInput[]
    createMany?: SongCreateManyAlbumInputEnvelope
    set?: SongWhereUniqueInput | SongWhereUniqueInput[]
    disconnect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    delete?: SongWhereUniqueInput | SongWhereUniqueInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    update?: SongUpdateWithWhereUniqueWithoutAlbumInput | SongUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: SongUpdateManyWithWhereWithoutAlbumInput | SongUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: SongScalarWhereInput | SongScalarWhereInput[]
  }

  export type SongCreateNestedManyWithoutGenreInput = {
    create?: XOR<SongCreateWithoutGenreInput, SongUncheckedCreateWithoutGenreInput> | SongCreateWithoutGenreInput[] | SongUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: SongCreateOrConnectWithoutGenreInput | SongCreateOrConnectWithoutGenreInput[]
    createMany?: SongCreateManyGenreInputEnvelope
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
  }

  export type AlbumCreateNestedManyWithoutGenreInput = {
    create?: XOR<AlbumCreateWithoutGenreInput, AlbumUncheckedCreateWithoutGenreInput> | AlbumCreateWithoutGenreInput[] | AlbumUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutGenreInput | AlbumCreateOrConnectWithoutGenreInput[]
    createMany?: AlbumCreateManyGenreInputEnvelope
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
  }

  export type SongUncheckedCreateNestedManyWithoutGenreInput = {
    create?: XOR<SongCreateWithoutGenreInput, SongUncheckedCreateWithoutGenreInput> | SongCreateWithoutGenreInput[] | SongUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: SongCreateOrConnectWithoutGenreInput | SongCreateOrConnectWithoutGenreInput[]
    createMany?: SongCreateManyGenreInputEnvelope
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
  }

  export type AlbumUncheckedCreateNestedManyWithoutGenreInput = {
    create?: XOR<AlbumCreateWithoutGenreInput, AlbumUncheckedCreateWithoutGenreInput> | AlbumCreateWithoutGenreInput[] | AlbumUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutGenreInput | AlbumCreateOrConnectWithoutGenreInput[]
    createMany?: AlbumCreateManyGenreInputEnvelope
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
  }

  export type SongUpdateManyWithoutGenreNestedInput = {
    create?: XOR<SongCreateWithoutGenreInput, SongUncheckedCreateWithoutGenreInput> | SongCreateWithoutGenreInput[] | SongUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: SongCreateOrConnectWithoutGenreInput | SongCreateOrConnectWithoutGenreInput[]
    upsert?: SongUpsertWithWhereUniqueWithoutGenreInput | SongUpsertWithWhereUniqueWithoutGenreInput[]
    createMany?: SongCreateManyGenreInputEnvelope
    set?: SongWhereUniqueInput | SongWhereUniqueInput[]
    disconnect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    delete?: SongWhereUniqueInput | SongWhereUniqueInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    update?: SongUpdateWithWhereUniqueWithoutGenreInput | SongUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: SongUpdateManyWithWhereWithoutGenreInput | SongUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: SongScalarWhereInput | SongScalarWhereInput[]
  }

  export type AlbumUpdateManyWithoutGenreNestedInput = {
    create?: XOR<AlbumCreateWithoutGenreInput, AlbumUncheckedCreateWithoutGenreInput> | AlbumCreateWithoutGenreInput[] | AlbumUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutGenreInput | AlbumCreateOrConnectWithoutGenreInput[]
    upsert?: AlbumUpsertWithWhereUniqueWithoutGenreInput | AlbumUpsertWithWhereUniqueWithoutGenreInput[]
    createMany?: AlbumCreateManyGenreInputEnvelope
    set?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    disconnect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    delete?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    update?: AlbumUpdateWithWhereUniqueWithoutGenreInput | AlbumUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: AlbumUpdateManyWithWhereWithoutGenreInput | AlbumUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
  }

  export type SongUncheckedUpdateManyWithoutGenreNestedInput = {
    create?: XOR<SongCreateWithoutGenreInput, SongUncheckedCreateWithoutGenreInput> | SongCreateWithoutGenreInput[] | SongUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: SongCreateOrConnectWithoutGenreInput | SongCreateOrConnectWithoutGenreInput[]
    upsert?: SongUpsertWithWhereUniqueWithoutGenreInput | SongUpsertWithWhereUniqueWithoutGenreInput[]
    createMany?: SongCreateManyGenreInputEnvelope
    set?: SongWhereUniqueInput | SongWhereUniqueInput[]
    disconnect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    delete?: SongWhereUniqueInput | SongWhereUniqueInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    update?: SongUpdateWithWhereUniqueWithoutGenreInput | SongUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: SongUpdateManyWithWhereWithoutGenreInput | SongUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: SongScalarWhereInput | SongScalarWhereInput[]
  }

  export type AlbumUncheckedUpdateManyWithoutGenreNestedInput = {
    create?: XOR<AlbumCreateWithoutGenreInput, AlbumUncheckedCreateWithoutGenreInput> | AlbumCreateWithoutGenreInput[] | AlbumUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutGenreInput | AlbumCreateOrConnectWithoutGenreInput[]
    upsert?: AlbumUpsertWithWhereUniqueWithoutGenreInput | AlbumUpsertWithWhereUniqueWithoutGenreInput[]
    createMany?: AlbumCreateManyGenreInputEnvelope
    set?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    disconnect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    delete?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    update?: AlbumUpdateWithWhereUniqueWithoutGenreInput | AlbumUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: AlbumUpdateManyWithWhereWithoutGenreInput | AlbumUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
  }

  export type SongCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<SongCreateWithoutPlaylistInput, SongUncheckedCreateWithoutPlaylistInput> | SongCreateWithoutPlaylistInput[] | SongUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: SongCreateOrConnectWithoutPlaylistInput | SongCreateOrConnectWithoutPlaylistInput[]
    createMany?: SongCreateManyPlaylistInputEnvelope
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutPlaylistInput = {
    create?: XOR<UserCreateWithoutPlaylistInput, UserUncheckedCreateWithoutPlaylistInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlaylistInput
    connect?: UserWhereUniqueInput
  }

  export type SongUncheckedCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<SongCreateWithoutPlaylistInput, SongUncheckedCreateWithoutPlaylistInput> | SongCreateWithoutPlaylistInput[] | SongUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: SongCreateOrConnectWithoutPlaylistInput | SongCreateOrConnectWithoutPlaylistInput[]
    createMany?: SongCreateManyPlaylistInputEnvelope
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
  }

  export type SongUpdateManyWithoutPlaylistNestedInput = {
    create?: XOR<SongCreateWithoutPlaylistInput, SongUncheckedCreateWithoutPlaylistInput> | SongCreateWithoutPlaylistInput[] | SongUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: SongCreateOrConnectWithoutPlaylistInput | SongCreateOrConnectWithoutPlaylistInput[]
    upsert?: SongUpsertWithWhereUniqueWithoutPlaylistInput | SongUpsertWithWhereUniqueWithoutPlaylistInput[]
    createMany?: SongCreateManyPlaylistInputEnvelope
    set?: SongWhereUniqueInput | SongWhereUniqueInput[]
    disconnect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    delete?: SongWhereUniqueInput | SongWhereUniqueInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    update?: SongUpdateWithWhereUniqueWithoutPlaylistInput | SongUpdateWithWhereUniqueWithoutPlaylistInput[]
    updateMany?: SongUpdateManyWithWhereWithoutPlaylistInput | SongUpdateManyWithWhereWithoutPlaylistInput[]
    deleteMany?: SongScalarWhereInput | SongScalarWhereInput[]
  }

  export type UserUpdateOneWithoutPlaylistNestedInput = {
    create?: XOR<UserCreateWithoutPlaylistInput, UserUncheckedCreateWithoutPlaylistInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlaylistInput
    upsert?: UserUpsertWithoutPlaylistInput
    disconnect?: boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPlaylistInput, UserUpdateWithoutPlaylistInput>, UserUncheckedUpdateWithoutPlaylistInput>
  }

  export type SongUncheckedUpdateManyWithoutPlaylistNestedInput = {
    create?: XOR<SongCreateWithoutPlaylistInput, SongUncheckedCreateWithoutPlaylistInput> | SongCreateWithoutPlaylistInput[] | SongUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: SongCreateOrConnectWithoutPlaylistInput | SongCreateOrConnectWithoutPlaylistInput[]
    upsert?: SongUpsertWithWhereUniqueWithoutPlaylistInput | SongUpsertWithWhereUniqueWithoutPlaylistInput[]
    createMany?: SongCreateManyPlaylistInputEnvelope
    set?: SongWhereUniqueInput | SongWhereUniqueInput[]
    disconnect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    delete?: SongWhereUniqueInput | SongWhereUniqueInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    update?: SongUpdateWithWhereUniqueWithoutPlaylistInput | SongUpdateWithWhereUniqueWithoutPlaylistInput[]
    updateMany?: SongUpdateManyWithWhereWithoutPlaylistInput | SongUpdateManyWithWhereWithoutPlaylistInput[]
    deleteMany?: SongScalarWhereInput | SongScalarWhereInput[]
  }

  export type SongCreateNestedManyWithoutArtistInput = {
    create?: XOR<SongCreateWithoutArtistInput, SongUncheckedCreateWithoutArtistInput> | SongCreateWithoutArtistInput[] | SongUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: SongCreateOrConnectWithoutArtistInput | SongCreateOrConnectWithoutArtistInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
  }

  export type AlbumCreateNestedManyWithoutArtistInput = {
    create?: XOR<AlbumCreateWithoutArtistInput, AlbumUncheckedCreateWithoutArtistInput> | AlbumCreateWithoutArtistInput[] | AlbumUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutArtistInput | AlbumCreateOrConnectWithoutArtistInput[]
    createMany?: AlbumCreateManyArtistInputEnvelope
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutFavouritesArtistInput = {
    create?: XOR<UserCreateWithoutFavouritesArtistInput, UserUncheckedCreateWithoutFavouritesArtistInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavouritesArtistInput
    connect?: UserWhereUniqueInput
  }

  export type ArtistCreatesongsIdInput = {
    set: string[]
  }

  export type SongUncheckedCreateNestedManyWithoutArtistInput = {
    create?: XOR<SongCreateWithoutArtistInput, SongUncheckedCreateWithoutArtistInput> | SongCreateWithoutArtistInput[] | SongUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: SongCreateOrConnectWithoutArtistInput | SongCreateOrConnectWithoutArtistInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
  }

  export type AlbumUncheckedCreateNestedManyWithoutArtistInput = {
    create?: XOR<AlbumCreateWithoutArtistInput, AlbumUncheckedCreateWithoutArtistInput> | AlbumCreateWithoutArtistInput[] | AlbumUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutArtistInput | AlbumCreateOrConnectWithoutArtistInput[]
    createMany?: AlbumCreateManyArtistInputEnvelope
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
  }

  export type SongUpdateManyWithoutArtistNestedInput = {
    create?: XOR<SongCreateWithoutArtistInput, SongUncheckedCreateWithoutArtistInput> | SongCreateWithoutArtistInput[] | SongUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: SongCreateOrConnectWithoutArtistInput | SongCreateOrConnectWithoutArtistInput[]
    upsert?: SongUpsertWithWhereUniqueWithoutArtistInput | SongUpsertWithWhereUniqueWithoutArtistInput[]
    set?: SongWhereUniqueInput | SongWhereUniqueInput[]
    disconnect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    delete?: SongWhereUniqueInput | SongWhereUniqueInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    update?: SongUpdateWithWhereUniqueWithoutArtistInput | SongUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: SongUpdateManyWithWhereWithoutArtistInput | SongUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: SongScalarWhereInput | SongScalarWhereInput[]
  }

  export type AlbumUpdateManyWithoutArtistNestedInput = {
    create?: XOR<AlbumCreateWithoutArtistInput, AlbumUncheckedCreateWithoutArtistInput> | AlbumCreateWithoutArtistInput[] | AlbumUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutArtistInput | AlbumCreateOrConnectWithoutArtistInput[]
    upsert?: AlbumUpsertWithWhereUniqueWithoutArtistInput | AlbumUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: AlbumCreateManyArtistInputEnvelope
    set?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    disconnect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    delete?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    update?: AlbumUpdateWithWhereUniqueWithoutArtistInput | AlbumUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: AlbumUpdateManyWithWhereWithoutArtistInput | AlbumUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
  }

  export type UserUpdateOneWithoutFavouritesArtistNestedInput = {
    create?: XOR<UserCreateWithoutFavouritesArtistInput, UserUncheckedCreateWithoutFavouritesArtistInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavouritesArtistInput
    upsert?: UserUpsertWithoutFavouritesArtistInput
    disconnect?: boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFavouritesArtistInput, UserUpdateWithoutFavouritesArtistInput>, UserUncheckedUpdateWithoutFavouritesArtistInput>
  }

  export type ArtistUpdatesongsIdInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SongUncheckedUpdateManyWithoutArtistNestedInput = {
    create?: XOR<SongCreateWithoutArtistInput, SongUncheckedCreateWithoutArtistInput> | SongCreateWithoutArtistInput[] | SongUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: SongCreateOrConnectWithoutArtistInput | SongCreateOrConnectWithoutArtistInput[]
    upsert?: SongUpsertWithWhereUniqueWithoutArtistInput | SongUpsertWithWhereUniqueWithoutArtistInput[]
    set?: SongWhereUniqueInput | SongWhereUniqueInput[]
    disconnect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    delete?: SongWhereUniqueInput | SongWhereUniqueInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    update?: SongUpdateWithWhereUniqueWithoutArtistInput | SongUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: SongUpdateManyWithWhereWithoutArtistInput | SongUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: SongScalarWhereInput | SongScalarWhereInput[]
  }

  export type AlbumUncheckedUpdateManyWithoutArtistNestedInput = {
    create?: XOR<AlbumCreateWithoutArtistInput, AlbumUncheckedCreateWithoutArtistInput> | AlbumCreateWithoutArtistInput[] | AlbumUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutArtistInput | AlbumCreateOrConnectWithoutArtistInput[]
    upsert?: AlbumUpsertWithWhereUniqueWithoutArtistInput | AlbumUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: AlbumCreateManyArtistInputEnvelope
    set?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    disconnect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    delete?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    update?: AlbumUpdateWithWhereUniqueWithoutArtistInput | AlbumUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: AlbumUpdateManyWithWhereWithoutArtistInput | AlbumUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
    isSet?: boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type SongCreateWithoutUserLikeInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    url: string
    duration?: number | null
    rating?: number | null
    thumbnail: string
    reproductions?: number | null
    isPublic?: boolean | null
    UserCreator: UserCreateNestedOneWithoutUploadSongsInput
    Album?: AlbumCreateNestedOneWithoutSongInput
    Genre: GenreCreateNestedOneWithoutSongInput
    Playlist?: PlaylistCreateNestedOneWithoutPlaylistSongsInput
    Artist?: ArtistCreateNestedManyWithoutSongInput
  }

  export type SongUncheckedCreateWithoutUserLikeInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    url: string
    duration?: number | null
    rating?: number | null
    thumbnail: string
    reproductions?: number | null
    isPublic?: boolean | null
    userCreatorId: string
    albumId?: string | null
    genreId: string
    playlistId?: string | null
    artistId?: SongCreateartistIdInput | string[]
    Artist?: ArtistUncheckedCreateNestedManyWithoutSongInput
  }

  export type SongCreateOrConnectWithoutUserLikeInput = {
    where: SongWhereUniqueInput
    create: XOR<SongCreateWithoutUserLikeInput, SongUncheckedCreateWithoutUserLikeInput>
  }

  export type SongCreateManyUserLikeInputEnvelope = {
    data: SongCreateManyUserLikeInput | SongCreateManyUserLikeInput[]
  }

  export type SongCreateWithoutUserCreatorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    url: string
    duration?: number | null
    rating?: number | null
    thumbnail: string
    reproductions?: number | null
    isPublic?: boolean | null
    UserLike?: UserCreateNestedOneWithoutLikeSongsInput
    Album?: AlbumCreateNestedOneWithoutSongInput
    Genre: GenreCreateNestedOneWithoutSongInput
    Playlist?: PlaylistCreateNestedOneWithoutPlaylistSongsInput
    Artist?: ArtistCreateNestedManyWithoutSongInput
  }

  export type SongUncheckedCreateWithoutUserCreatorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    url: string
    duration?: number | null
    rating?: number | null
    thumbnail: string
    reproductions?: number | null
    isPublic?: boolean | null
    likedById?: SongCreatelikedByIdInput | string[]
    albumId?: string | null
    genreId: string
    playlistId?: string | null
    artistId?: SongCreateartistIdInput | string[]
    Artist?: ArtistUncheckedCreateNestedManyWithoutSongInput
  }

  export type SongCreateOrConnectWithoutUserCreatorInput = {
    where: SongWhereUniqueInput
    create: XOR<SongCreateWithoutUserCreatorInput, SongUncheckedCreateWithoutUserCreatorInput>
  }

  export type SongCreateManyUserCreatorInputEnvelope = {
    data: SongCreateManyUserCreatorInput | SongCreateManyUserCreatorInput[]
  }

  export type AlbumCreateWithoutUserLikeInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    thumbnail: string
    totalTracks?: number | null
    isPublic?: boolean | null
    Song?: SongCreateNestedManyWithoutAlbumInput
    UserCreator?: UserCreateNestedOneWithoutUploadAlbumsInput
    Genre: GenreCreateNestedOneWithoutAlbumInput
    Artist: ArtistCreateNestedOneWithoutAlbumInput
  }

  export type AlbumUncheckedCreateWithoutUserLikeInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    thumbnail: string
    totalTracks?: number | null
    isPublic?: boolean | null
    userCreatorId?: string | null
    genreId: string
    artistId: string
    Song?: SongUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumCreateOrConnectWithoutUserLikeInput = {
    where: AlbumWhereUniqueInput
    create: XOR<AlbumCreateWithoutUserLikeInput, AlbumUncheckedCreateWithoutUserLikeInput>
  }

  export type AlbumCreateManyUserLikeInputEnvelope = {
    data: AlbumCreateManyUserLikeInput | AlbumCreateManyUserLikeInput[]
  }

  export type AlbumCreateWithoutUserCreatorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    thumbnail: string
    totalTracks?: number | null
    isPublic?: boolean | null
    Song?: SongCreateNestedManyWithoutAlbumInput
    UserLike?: UserCreateNestedOneWithoutLikeAlbumsInput
    Genre: GenreCreateNestedOneWithoutAlbumInput
    Artist: ArtistCreateNestedOneWithoutAlbumInput
  }

  export type AlbumUncheckedCreateWithoutUserCreatorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    thumbnail: string
    totalTracks?: number | null
    isPublic?: boolean | null
    likedById?: AlbumCreatelikedByIdInput | string[]
    genreId: string
    artistId: string
    Song?: SongUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumCreateOrConnectWithoutUserCreatorInput = {
    where: AlbumWhereUniqueInput
    create: XOR<AlbumCreateWithoutUserCreatorInput, AlbumUncheckedCreateWithoutUserCreatorInput>
  }

  export type AlbumCreateManyUserCreatorInputEnvelope = {
    data: AlbumCreateManyUserCreatorInput | AlbumCreateManyUserCreatorInput[]
  }

  export type PlaylistCreateWithoutUserCreatorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    playlistName: string
    thumbnail?: string | null
    playlistSongs?: SongCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistUncheckedCreateWithoutUserCreatorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    playlistName: string
    thumbnail?: string | null
    playlistSongs?: SongUncheckedCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistCreateOrConnectWithoutUserCreatorInput = {
    where: PlaylistWhereUniqueInput
    create: XOR<PlaylistCreateWithoutUserCreatorInput, PlaylistUncheckedCreateWithoutUserCreatorInput>
  }

  export type PlaylistCreateManyUserCreatorInputEnvelope = {
    data: PlaylistCreateManyUserCreatorInput | PlaylistCreateManyUserCreatorInput[]
  }

  export type ArtistCreateWithoutFollowedByInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    thumbnail?: string | null
    Song?: SongCreateNestedManyWithoutArtistInput
    Album?: AlbumCreateNestedManyWithoutArtistInput
  }

  export type ArtistUncheckedCreateWithoutFollowedByInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    thumbnail?: string | null
    songsId?: ArtistCreatesongsIdInput | string[]
    Song?: SongUncheckedCreateNestedManyWithoutArtistInput
    Album?: AlbumUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistCreateOrConnectWithoutFollowedByInput = {
    where: ArtistWhereUniqueInput
    create: XOR<ArtistCreateWithoutFollowedByInput, ArtistUncheckedCreateWithoutFollowedByInput>
  }

  export type ArtistCreateManyFollowedByInputEnvelope = {
    data: ArtistCreateManyFollowedByInput | ArtistCreateManyFollowedByInput[]
  }

  export type SongUpsertWithWhereUniqueWithoutUserLikeInput = {
    where: SongWhereUniqueInput
    update: XOR<SongUpdateWithoutUserLikeInput, SongUncheckedUpdateWithoutUserLikeInput>
    create: XOR<SongCreateWithoutUserLikeInput, SongUncheckedCreateWithoutUserLikeInput>
  }

  export type SongUpdateWithWhereUniqueWithoutUserLikeInput = {
    where: SongWhereUniqueInput
    data: XOR<SongUpdateWithoutUserLikeInput, SongUncheckedUpdateWithoutUserLikeInput>
  }

  export type SongUpdateManyWithWhereWithoutUserLikeInput = {
    where: SongScalarWhereInput
    data: XOR<SongUpdateManyMutationInput, SongUncheckedUpdateManyWithoutUserLikeInput>
  }

  export type SongScalarWhereInput = {
    AND?: SongScalarWhereInput | SongScalarWhereInput[]
    OR?: SongScalarWhereInput[]
    NOT?: SongScalarWhereInput | SongScalarWhereInput[]
    id?: StringFilter<"Song"> | string
    createdAt?: DateTimeFilter<"Song"> | Date | string
    updatedAt?: DateTimeFilter<"Song"> | Date | string
    name?: StringFilter<"Song"> | string
    url?: StringFilter<"Song"> | string
    duration?: IntNullableFilter<"Song"> | number | null
    rating?: IntNullableFilter<"Song"> | number | null
    thumbnail?: StringFilter<"Song"> | string
    reproductions?: IntNullableFilter<"Song"> | number | null
    isPublic?: BoolNullableFilter<"Song"> | boolean | null
    userCreatorId?: StringFilter<"Song"> | string
    likedById?: StringNullableListFilter<"Song">
    albumId?: StringNullableFilter<"Song"> | string | null
    genreId?: StringFilter<"Song"> | string
    playlistId?: StringNullableFilter<"Song"> | string | null
    artistId?: StringNullableListFilter<"Song">
  }

  export type SongUpsertWithWhereUniqueWithoutUserCreatorInput = {
    where: SongWhereUniqueInput
    update: XOR<SongUpdateWithoutUserCreatorInput, SongUncheckedUpdateWithoutUserCreatorInput>
    create: XOR<SongCreateWithoutUserCreatorInput, SongUncheckedCreateWithoutUserCreatorInput>
  }

  export type SongUpdateWithWhereUniqueWithoutUserCreatorInput = {
    where: SongWhereUniqueInput
    data: XOR<SongUpdateWithoutUserCreatorInput, SongUncheckedUpdateWithoutUserCreatorInput>
  }

  export type SongUpdateManyWithWhereWithoutUserCreatorInput = {
    where: SongScalarWhereInput
    data: XOR<SongUpdateManyMutationInput, SongUncheckedUpdateManyWithoutUserCreatorInput>
  }

  export type AlbumUpsertWithWhereUniqueWithoutUserLikeInput = {
    where: AlbumWhereUniqueInput
    update: XOR<AlbumUpdateWithoutUserLikeInput, AlbumUncheckedUpdateWithoutUserLikeInput>
    create: XOR<AlbumCreateWithoutUserLikeInput, AlbumUncheckedCreateWithoutUserLikeInput>
  }

  export type AlbumUpdateWithWhereUniqueWithoutUserLikeInput = {
    where: AlbumWhereUniqueInput
    data: XOR<AlbumUpdateWithoutUserLikeInput, AlbumUncheckedUpdateWithoutUserLikeInput>
  }

  export type AlbumUpdateManyWithWhereWithoutUserLikeInput = {
    where: AlbumScalarWhereInput
    data: XOR<AlbumUpdateManyMutationInput, AlbumUncheckedUpdateManyWithoutUserLikeInput>
  }

  export type AlbumScalarWhereInput = {
    AND?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
    OR?: AlbumScalarWhereInput[]
    NOT?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
    id?: StringFilter<"Album"> | string
    createdAt?: DateTimeFilter<"Album"> | Date | string
    updatedAt?: DateTimeFilter<"Album"> | Date | string
    name?: StringFilter<"Album"> | string
    thumbnail?: StringFilter<"Album"> | string
    totalTracks?: IntNullableFilter<"Album"> | number | null
    isPublic?: BoolNullableFilter<"Album"> | boolean | null
    userCreatorId?: StringNullableFilter<"Album"> | string | null
    likedById?: StringNullableListFilter<"Album">
    genreId?: StringFilter<"Album"> | string
    artistId?: StringFilter<"Album"> | string
  }

  export type AlbumUpsertWithWhereUniqueWithoutUserCreatorInput = {
    where: AlbumWhereUniqueInput
    update: XOR<AlbumUpdateWithoutUserCreatorInput, AlbumUncheckedUpdateWithoutUserCreatorInput>
    create: XOR<AlbumCreateWithoutUserCreatorInput, AlbumUncheckedCreateWithoutUserCreatorInput>
  }

  export type AlbumUpdateWithWhereUniqueWithoutUserCreatorInput = {
    where: AlbumWhereUniqueInput
    data: XOR<AlbumUpdateWithoutUserCreatorInput, AlbumUncheckedUpdateWithoutUserCreatorInput>
  }

  export type AlbumUpdateManyWithWhereWithoutUserCreatorInput = {
    where: AlbumScalarWhereInput
    data: XOR<AlbumUpdateManyMutationInput, AlbumUncheckedUpdateManyWithoutUserCreatorInput>
  }

  export type PlaylistUpsertWithWhereUniqueWithoutUserCreatorInput = {
    where: PlaylistWhereUniqueInput
    update: XOR<PlaylistUpdateWithoutUserCreatorInput, PlaylistUncheckedUpdateWithoutUserCreatorInput>
    create: XOR<PlaylistCreateWithoutUserCreatorInput, PlaylistUncheckedCreateWithoutUserCreatorInput>
  }

  export type PlaylistUpdateWithWhereUniqueWithoutUserCreatorInput = {
    where: PlaylistWhereUniqueInput
    data: XOR<PlaylistUpdateWithoutUserCreatorInput, PlaylistUncheckedUpdateWithoutUserCreatorInput>
  }

  export type PlaylistUpdateManyWithWhereWithoutUserCreatorInput = {
    where: PlaylistScalarWhereInput
    data: XOR<PlaylistUpdateManyMutationInput, PlaylistUncheckedUpdateManyWithoutUserCreatorInput>
  }

  export type PlaylistScalarWhereInput = {
    AND?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
    OR?: PlaylistScalarWhereInput[]
    NOT?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
    id?: StringFilter<"Playlist"> | string
    createdAt?: DateTimeFilter<"Playlist"> | Date | string
    updatedAt?: DateTimeFilter<"Playlist"> | Date | string
    playlistName?: StringFilter<"Playlist"> | string
    thumbnail?: StringNullableFilter<"Playlist"> | string | null
    userCreatorId?: StringFilter<"Playlist"> | string
  }

  export type ArtistUpsertWithWhereUniqueWithoutFollowedByInput = {
    where: ArtistWhereUniqueInput
    update: XOR<ArtistUpdateWithoutFollowedByInput, ArtistUncheckedUpdateWithoutFollowedByInput>
    create: XOR<ArtistCreateWithoutFollowedByInput, ArtistUncheckedCreateWithoutFollowedByInput>
  }

  export type ArtistUpdateWithWhereUniqueWithoutFollowedByInput = {
    where: ArtistWhereUniqueInput
    data: XOR<ArtistUpdateWithoutFollowedByInput, ArtistUncheckedUpdateWithoutFollowedByInput>
  }

  export type ArtistUpdateManyWithWhereWithoutFollowedByInput = {
    where: ArtistScalarWhereInput
    data: XOR<ArtistUpdateManyMutationInput, ArtistUncheckedUpdateManyWithoutFollowedByInput>
  }

  export type ArtistScalarWhereInput = {
    AND?: ArtistScalarWhereInput | ArtistScalarWhereInput[]
    OR?: ArtistScalarWhereInput[]
    NOT?: ArtistScalarWhereInput | ArtistScalarWhereInput[]
    id?: StringFilter<"Artist"> | string
    createdAt?: DateTimeFilter<"Artist"> | Date | string
    updatedAt?: DateTimeFilter<"Artist"> | Date | string
    name?: StringFilter<"Artist"> | string
    thumbnail?: StringNullableFilter<"Artist"> | string | null
    songsId?: StringNullableListFilter<"Artist">
    likedBy?: StringNullableFilter<"Artist"> | string | null
  }

  export type UserCreateWithoutUploadSongsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name: string
    likeSongs?: SongCreateNestedManyWithoutUserLikeInput
    likeAlbums?: AlbumCreateNestedManyWithoutUserLikeInput
    uploadAlbums?: AlbumCreateNestedManyWithoutUserCreatorInput
    playlist?: PlaylistCreateNestedManyWithoutUserCreatorInput
    favouritesArtist?: ArtistCreateNestedManyWithoutFollowedByInput
  }

  export type UserUncheckedCreateWithoutUploadSongsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name: string
    likeSongs?: SongUncheckedCreateNestedManyWithoutUserLikeInput
    likeAlbums?: AlbumUncheckedCreateNestedManyWithoutUserLikeInput
    uploadAlbums?: AlbumUncheckedCreateNestedManyWithoutUserCreatorInput
    playlist?: PlaylistUncheckedCreateNestedManyWithoutUserCreatorInput
    favouritesArtist?: ArtistUncheckedCreateNestedManyWithoutFollowedByInput
  }

  export type UserCreateOrConnectWithoutUploadSongsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUploadSongsInput, UserUncheckedCreateWithoutUploadSongsInput>
  }

  export type UserCreateWithoutLikeSongsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name: string
    uploadSongs?: SongCreateNestedManyWithoutUserCreatorInput
    likeAlbums?: AlbumCreateNestedManyWithoutUserLikeInput
    uploadAlbums?: AlbumCreateNestedManyWithoutUserCreatorInput
    playlist?: PlaylistCreateNestedManyWithoutUserCreatorInput
    favouritesArtist?: ArtistCreateNestedManyWithoutFollowedByInput
  }

  export type UserUncheckedCreateWithoutLikeSongsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name: string
    uploadSongs?: SongUncheckedCreateNestedManyWithoutUserCreatorInput
    likeAlbums?: AlbumUncheckedCreateNestedManyWithoutUserLikeInput
    uploadAlbums?: AlbumUncheckedCreateNestedManyWithoutUserCreatorInput
    playlist?: PlaylistUncheckedCreateNestedManyWithoutUserCreatorInput
    favouritesArtist?: ArtistUncheckedCreateNestedManyWithoutFollowedByInput
  }

  export type UserCreateOrConnectWithoutLikeSongsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikeSongsInput, UserUncheckedCreateWithoutLikeSongsInput>
  }

  export type AlbumCreateWithoutSongInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    thumbnail: string
    totalTracks?: number | null
    isPublic?: boolean | null
    UserCreator?: UserCreateNestedOneWithoutUploadAlbumsInput
    UserLike?: UserCreateNestedOneWithoutLikeAlbumsInput
    Genre: GenreCreateNestedOneWithoutAlbumInput
    Artist: ArtistCreateNestedOneWithoutAlbumInput
  }

  export type AlbumUncheckedCreateWithoutSongInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    thumbnail: string
    totalTracks?: number | null
    isPublic?: boolean | null
    userCreatorId?: string | null
    likedById?: AlbumCreatelikedByIdInput | string[]
    genreId: string
    artistId: string
  }

  export type AlbumCreateOrConnectWithoutSongInput = {
    where: AlbumWhereUniqueInput
    create: XOR<AlbumCreateWithoutSongInput, AlbumUncheckedCreateWithoutSongInput>
  }

  export type GenreCreateWithoutSongInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    Album?: AlbumCreateNestedManyWithoutGenreInput
  }

  export type GenreUncheckedCreateWithoutSongInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    Album?: AlbumUncheckedCreateNestedManyWithoutGenreInput
  }

  export type GenreCreateOrConnectWithoutSongInput = {
    where: GenreWhereUniqueInput
    create: XOR<GenreCreateWithoutSongInput, GenreUncheckedCreateWithoutSongInput>
  }

  export type PlaylistCreateWithoutPlaylistSongsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    playlistName: string
    thumbnail?: string | null
    UserCreator?: UserCreateNestedOneWithoutPlaylistInput
  }

  export type PlaylistUncheckedCreateWithoutPlaylistSongsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    playlistName: string
    thumbnail?: string | null
    userCreatorId: string
  }

  export type PlaylistCreateOrConnectWithoutPlaylistSongsInput = {
    where: PlaylistWhereUniqueInput
    create: XOR<PlaylistCreateWithoutPlaylistSongsInput, PlaylistUncheckedCreateWithoutPlaylistSongsInput>
  }

  export type ArtistCreateWithoutSongInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    thumbnail?: string | null
    Album?: AlbumCreateNestedManyWithoutArtistInput
    followedBy?: UserCreateNestedOneWithoutFavouritesArtistInput
  }

  export type ArtistUncheckedCreateWithoutSongInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    thumbnail?: string | null
    songsId?: ArtistCreatesongsIdInput | string[]
    likedBy?: string | null
    Album?: AlbumUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistCreateOrConnectWithoutSongInput = {
    where: ArtistWhereUniqueInput
    create: XOR<ArtistCreateWithoutSongInput, ArtistUncheckedCreateWithoutSongInput>
  }

  export type UserUpsertWithoutUploadSongsInput = {
    update: XOR<UserUpdateWithoutUploadSongsInput, UserUncheckedUpdateWithoutUploadSongsInput>
    create: XOR<UserCreateWithoutUploadSongsInput, UserUncheckedCreateWithoutUploadSongsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUploadSongsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUploadSongsInput, UserUncheckedUpdateWithoutUploadSongsInput>
  }

  export type UserUpdateWithoutUploadSongsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    likeSongs?: SongUpdateManyWithoutUserLikeNestedInput
    likeAlbums?: AlbumUpdateManyWithoutUserLikeNestedInput
    uploadAlbums?: AlbumUpdateManyWithoutUserCreatorNestedInput
    playlist?: PlaylistUpdateManyWithoutUserCreatorNestedInput
    favouritesArtist?: ArtistUpdateManyWithoutFollowedByNestedInput
  }

  export type UserUncheckedUpdateWithoutUploadSongsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    likeSongs?: SongUncheckedUpdateManyWithoutUserLikeNestedInput
    likeAlbums?: AlbumUncheckedUpdateManyWithoutUserLikeNestedInput
    uploadAlbums?: AlbumUncheckedUpdateManyWithoutUserCreatorNestedInput
    playlist?: PlaylistUncheckedUpdateManyWithoutUserCreatorNestedInput
    favouritesArtist?: ArtistUncheckedUpdateManyWithoutFollowedByNestedInput
  }

  export type UserUpsertWithoutLikeSongsInput = {
    update: XOR<UserUpdateWithoutLikeSongsInput, UserUncheckedUpdateWithoutLikeSongsInput>
    create: XOR<UserCreateWithoutLikeSongsInput, UserUncheckedCreateWithoutLikeSongsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLikeSongsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLikeSongsInput, UserUncheckedUpdateWithoutLikeSongsInput>
  }

  export type UserUpdateWithoutLikeSongsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    uploadSongs?: SongUpdateManyWithoutUserCreatorNestedInput
    likeAlbums?: AlbumUpdateManyWithoutUserLikeNestedInput
    uploadAlbums?: AlbumUpdateManyWithoutUserCreatorNestedInput
    playlist?: PlaylistUpdateManyWithoutUserCreatorNestedInput
    favouritesArtist?: ArtistUpdateManyWithoutFollowedByNestedInput
  }

  export type UserUncheckedUpdateWithoutLikeSongsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    uploadSongs?: SongUncheckedUpdateManyWithoutUserCreatorNestedInput
    likeAlbums?: AlbumUncheckedUpdateManyWithoutUserLikeNestedInput
    uploadAlbums?: AlbumUncheckedUpdateManyWithoutUserCreatorNestedInput
    playlist?: PlaylistUncheckedUpdateManyWithoutUserCreatorNestedInput
    favouritesArtist?: ArtistUncheckedUpdateManyWithoutFollowedByNestedInput
  }

  export type AlbumUpsertWithoutSongInput = {
    update: XOR<AlbumUpdateWithoutSongInput, AlbumUncheckedUpdateWithoutSongInput>
    create: XOR<AlbumCreateWithoutSongInput, AlbumUncheckedCreateWithoutSongInput>
    where?: AlbumWhereInput
  }

  export type AlbumUpdateToOneWithWhereWithoutSongInput = {
    where?: AlbumWhereInput
    data: XOR<AlbumUpdateWithoutSongInput, AlbumUncheckedUpdateWithoutSongInput>
  }

  export type AlbumUpdateWithoutSongInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    totalTracks?: NullableIntFieldUpdateOperationsInput | number | null
    isPublic?: NullableBoolFieldUpdateOperationsInput | boolean | null
    UserCreator?: UserUpdateOneWithoutUploadAlbumsNestedInput
    UserLike?: UserUpdateOneWithoutLikeAlbumsNestedInput
    Genre?: GenreUpdateOneRequiredWithoutAlbumNestedInput
    Artist?: ArtistUpdateOneRequiredWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateWithoutSongInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    totalTracks?: NullableIntFieldUpdateOperationsInput | number | null
    isPublic?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userCreatorId?: NullableStringFieldUpdateOperationsInput | string | null
    likedById?: AlbumUpdatelikedByIdInput | string[]
    genreId?: StringFieldUpdateOperationsInput | string
    artistId?: StringFieldUpdateOperationsInput | string
  }

  export type GenreUpsertWithoutSongInput = {
    update: XOR<GenreUpdateWithoutSongInput, GenreUncheckedUpdateWithoutSongInput>
    create: XOR<GenreCreateWithoutSongInput, GenreUncheckedCreateWithoutSongInput>
    where?: GenreWhereInput
  }

  export type GenreUpdateToOneWithWhereWithoutSongInput = {
    where?: GenreWhereInput
    data: XOR<GenreUpdateWithoutSongInput, GenreUncheckedUpdateWithoutSongInput>
  }

  export type GenreUpdateWithoutSongInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    Album?: AlbumUpdateManyWithoutGenreNestedInput
  }

  export type GenreUncheckedUpdateWithoutSongInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    Album?: AlbumUncheckedUpdateManyWithoutGenreNestedInput
  }

  export type PlaylistUpsertWithoutPlaylistSongsInput = {
    update: XOR<PlaylistUpdateWithoutPlaylistSongsInput, PlaylistUncheckedUpdateWithoutPlaylistSongsInput>
    create: XOR<PlaylistCreateWithoutPlaylistSongsInput, PlaylistUncheckedCreateWithoutPlaylistSongsInput>
    where?: PlaylistWhereInput
  }

  export type PlaylistUpdateToOneWithWhereWithoutPlaylistSongsInput = {
    where?: PlaylistWhereInput
    data: XOR<PlaylistUpdateWithoutPlaylistSongsInput, PlaylistUncheckedUpdateWithoutPlaylistSongsInput>
  }

  export type PlaylistUpdateWithoutPlaylistSongsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlistName?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    UserCreator?: UserUpdateOneWithoutPlaylistNestedInput
  }

  export type PlaylistUncheckedUpdateWithoutPlaylistSongsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlistName?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    userCreatorId?: StringFieldUpdateOperationsInput | string
  }

  export type ArtistUpsertWithWhereUniqueWithoutSongInput = {
    where: ArtistWhereUniqueInput
    update: XOR<ArtistUpdateWithoutSongInput, ArtistUncheckedUpdateWithoutSongInput>
    create: XOR<ArtistCreateWithoutSongInput, ArtistUncheckedCreateWithoutSongInput>
  }

  export type ArtistUpdateWithWhereUniqueWithoutSongInput = {
    where: ArtistWhereUniqueInput
    data: XOR<ArtistUpdateWithoutSongInput, ArtistUncheckedUpdateWithoutSongInput>
  }

  export type ArtistUpdateManyWithWhereWithoutSongInput = {
    where: ArtistScalarWhereInput
    data: XOR<ArtistUpdateManyMutationInput, ArtistUncheckedUpdateManyWithoutSongInput>
  }

  export type SongCreateWithoutAlbumInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    url: string
    duration?: number | null
    rating?: number | null
    thumbnail: string
    reproductions?: number | null
    isPublic?: boolean | null
    UserCreator: UserCreateNestedOneWithoutUploadSongsInput
    UserLike?: UserCreateNestedOneWithoutLikeSongsInput
    Genre: GenreCreateNestedOneWithoutSongInput
    Playlist?: PlaylistCreateNestedOneWithoutPlaylistSongsInput
    Artist?: ArtistCreateNestedManyWithoutSongInput
  }

  export type SongUncheckedCreateWithoutAlbumInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    url: string
    duration?: number | null
    rating?: number | null
    thumbnail: string
    reproductions?: number | null
    isPublic?: boolean | null
    userCreatorId: string
    likedById?: SongCreatelikedByIdInput | string[]
    genreId: string
    playlistId?: string | null
    artistId?: SongCreateartistIdInput | string[]
    Artist?: ArtistUncheckedCreateNestedManyWithoutSongInput
  }

  export type SongCreateOrConnectWithoutAlbumInput = {
    where: SongWhereUniqueInput
    create: XOR<SongCreateWithoutAlbumInput, SongUncheckedCreateWithoutAlbumInput>
  }

  export type SongCreateManyAlbumInputEnvelope = {
    data: SongCreateManyAlbumInput | SongCreateManyAlbumInput[]
  }

  export type UserCreateWithoutUploadAlbumsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name: string
    likeSongs?: SongCreateNestedManyWithoutUserLikeInput
    uploadSongs?: SongCreateNestedManyWithoutUserCreatorInput
    likeAlbums?: AlbumCreateNestedManyWithoutUserLikeInput
    playlist?: PlaylistCreateNestedManyWithoutUserCreatorInput
    favouritesArtist?: ArtistCreateNestedManyWithoutFollowedByInput
  }

  export type UserUncheckedCreateWithoutUploadAlbumsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name: string
    likeSongs?: SongUncheckedCreateNestedManyWithoutUserLikeInput
    uploadSongs?: SongUncheckedCreateNestedManyWithoutUserCreatorInput
    likeAlbums?: AlbumUncheckedCreateNestedManyWithoutUserLikeInput
    playlist?: PlaylistUncheckedCreateNestedManyWithoutUserCreatorInput
    favouritesArtist?: ArtistUncheckedCreateNestedManyWithoutFollowedByInput
  }

  export type UserCreateOrConnectWithoutUploadAlbumsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUploadAlbumsInput, UserUncheckedCreateWithoutUploadAlbumsInput>
  }

  export type UserCreateWithoutLikeAlbumsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name: string
    likeSongs?: SongCreateNestedManyWithoutUserLikeInput
    uploadSongs?: SongCreateNestedManyWithoutUserCreatorInput
    uploadAlbums?: AlbumCreateNestedManyWithoutUserCreatorInput
    playlist?: PlaylistCreateNestedManyWithoutUserCreatorInput
    favouritesArtist?: ArtistCreateNestedManyWithoutFollowedByInput
  }

  export type UserUncheckedCreateWithoutLikeAlbumsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name: string
    likeSongs?: SongUncheckedCreateNestedManyWithoutUserLikeInput
    uploadSongs?: SongUncheckedCreateNestedManyWithoutUserCreatorInput
    uploadAlbums?: AlbumUncheckedCreateNestedManyWithoutUserCreatorInput
    playlist?: PlaylistUncheckedCreateNestedManyWithoutUserCreatorInput
    favouritesArtist?: ArtistUncheckedCreateNestedManyWithoutFollowedByInput
  }

  export type UserCreateOrConnectWithoutLikeAlbumsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikeAlbumsInput, UserUncheckedCreateWithoutLikeAlbumsInput>
  }

  export type GenreCreateWithoutAlbumInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    Song?: SongCreateNestedManyWithoutGenreInput
  }

  export type GenreUncheckedCreateWithoutAlbumInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    Song?: SongUncheckedCreateNestedManyWithoutGenreInput
  }

  export type GenreCreateOrConnectWithoutAlbumInput = {
    where: GenreWhereUniqueInput
    create: XOR<GenreCreateWithoutAlbumInput, GenreUncheckedCreateWithoutAlbumInput>
  }

  export type ArtistCreateWithoutAlbumInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    thumbnail?: string | null
    Song?: SongCreateNestedManyWithoutArtistInput
    followedBy?: UserCreateNestedOneWithoutFavouritesArtistInput
  }

  export type ArtistUncheckedCreateWithoutAlbumInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    thumbnail?: string | null
    songsId?: ArtistCreatesongsIdInput | string[]
    likedBy?: string | null
    Song?: SongUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistCreateOrConnectWithoutAlbumInput = {
    where: ArtistWhereUniqueInput
    create: XOR<ArtistCreateWithoutAlbumInput, ArtistUncheckedCreateWithoutAlbumInput>
  }

  export type SongUpsertWithWhereUniqueWithoutAlbumInput = {
    where: SongWhereUniqueInput
    update: XOR<SongUpdateWithoutAlbumInput, SongUncheckedUpdateWithoutAlbumInput>
    create: XOR<SongCreateWithoutAlbumInput, SongUncheckedCreateWithoutAlbumInput>
  }

  export type SongUpdateWithWhereUniqueWithoutAlbumInput = {
    where: SongWhereUniqueInput
    data: XOR<SongUpdateWithoutAlbumInput, SongUncheckedUpdateWithoutAlbumInput>
  }

  export type SongUpdateManyWithWhereWithoutAlbumInput = {
    where: SongScalarWhereInput
    data: XOR<SongUpdateManyMutationInput, SongUncheckedUpdateManyWithoutAlbumInput>
  }

  export type UserUpsertWithoutUploadAlbumsInput = {
    update: XOR<UserUpdateWithoutUploadAlbumsInput, UserUncheckedUpdateWithoutUploadAlbumsInput>
    create: XOR<UserCreateWithoutUploadAlbumsInput, UserUncheckedCreateWithoutUploadAlbumsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUploadAlbumsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUploadAlbumsInput, UserUncheckedUpdateWithoutUploadAlbumsInput>
  }

  export type UserUpdateWithoutUploadAlbumsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    likeSongs?: SongUpdateManyWithoutUserLikeNestedInput
    uploadSongs?: SongUpdateManyWithoutUserCreatorNestedInput
    likeAlbums?: AlbumUpdateManyWithoutUserLikeNestedInput
    playlist?: PlaylistUpdateManyWithoutUserCreatorNestedInput
    favouritesArtist?: ArtistUpdateManyWithoutFollowedByNestedInput
  }

  export type UserUncheckedUpdateWithoutUploadAlbumsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    likeSongs?: SongUncheckedUpdateManyWithoutUserLikeNestedInput
    uploadSongs?: SongUncheckedUpdateManyWithoutUserCreatorNestedInput
    likeAlbums?: AlbumUncheckedUpdateManyWithoutUserLikeNestedInput
    playlist?: PlaylistUncheckedUpdateManyWithoutUserCreatorNestedInput
    favouritesArtist?: ArtistUncheckedUpdateManyWithoutFollowedByNestedInput
  }

  export type UserUpsertWithoutLikeAlbumsInput = {
    update: XOR<UserUpdateWithoutLikeAlbumsInput, UserUncheckedUpdateWithoutLikeAlbumsInput>
    create: XOR<UserCreateWithoutLikeAlbumsInput, UserUncheckedCreateWithoutLikeAlbumsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLikeAlbumsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLikeAlbumsInput, UserUncheckedUpdateWithoutLikeAlbumsInput>
  }

  export type UserUpdateWithoutLikeAlbumsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    likeSongs?: SongUpdateManyWithoutUserLikeNestedInput
    uploadSongs?: SongUpdateManyWithoutUserCreatorNestedInput
    uploadAlbums?: AlbumUpdateManyWithoutUserCreatorNestedInput
    playlist?: PlaylistUpdateManyWithoutUserCreatorNestedInput
    favouritesArtist?: ArtistUpdateManyWithoutFollowedByNestedInput
  }

  export type UserUncheckedUpdateWithoutLikeAlbumsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    likeSongs?: SongUncheckedUpdateManyWithoutUserLikeNestedInput
    uploadSongs?: SongUncheckedUpdateManyWithoutUserCreatorNestedInput
    uploadAlbums?: AlbumUncheckedUpdateManyWithoutUserCreatorNestedInput
    playlist?: PlaylistUncheckedUpdateManyWithoutUserCreatorNestedInput
    favouritesArtist?: ArtistUncheckedUpdateManyWithoutFollowedByNestedInput
  }

  export type GenreUpsertWithoutAlbumInput = {
    update: XOR<GenreUpdateWithoutAlbumInput, GenreUncheckedUpdateWithoutAlbumInput>
    create: XOR<GenreCreateWithoutAlbumInput, GenreUncheckedCreateWithoutAlbumInput>
    where?: GenreWhereInput
  }

  export type GenreUpdateToOneWithWhereWithoutAlbumInput = {
    where?: GenreWhereInput
    data: XOR<GenreUpdateWithoutAlbumInput, GenreUncheckedUpdateWithoutAlbumInput>
  }

  export type GenreUpdateWithoutAlbumInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    Song?: SongUpdateManyWithoutGenreNestedInput
  }

  export type GenreUncheckedUpdateWithoutAlbumInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    Song?: SongUncheckedUpdateManyWithoutGenreNestedInput
  }

  export type ArtistUpsertWithoutAlbumInput = {
    update: XOR<ArtistUpdateWithoutAlbumInput, ArtistUncheckedUpdateWithoutAlbumInput>
    create: XOR<ArtistCreateWithoutAlbumInput, ArtistUncheckedCreateWithoutAlbumInput>
    where?: ArtistWhereInput
  }

  export type ArtistUpdateToOneWithWhereWithoutAlbumInput = {
    where?: ArtistWhereInput
    data: XOR<ArtistUpdateWithoutAlbumInput, ArtistUncheckedUpdateWithoutAlbumInput>
  }

  export type ArtistUpdateWithoutAlbumInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    Song?: SongUpdateManyWithoutArtistNestedInput
    followedBy?: UserUpdateOneWithoutFavouritesArtistNestedInput
  }

  export type ArtistUncheckedUpdateWithoutAlbumInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    songsId?: ArtistUpdatesongsIdInput | string[]
    likedBy?: NullableStringFieldUpdateOperationsInput | string | null
    Song?: SongUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type SongCreateWithoutGenreInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    url: string
    duration?: number | null
    rating?: number | null
    thumbnail: string
    reproductions?: number | null
    isPublic?: boolean | null
    UserCreator: UserCreateNestedOneWithoutUploadSongsInput
    UserLike?: UserCreateNestedOneWithoutLikeSongsInput
    Album?: AlbumCreateNestedOneWithoutSongInput
    Playlist?: PlaylistCreateNestedOneWithoutPlaylistSongsInput
    Artist?: ArtistCreateNestedManyWithoutSongInput
  }

  export type SongUncheckedCreateWithoutGenreInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    url: string
    duration?: number | null
    rating?: number | null
    thumbnail: string
    reproductions?: number | null
    isPublic?: boolean | null
    userCreatorId: string
    likedById?: SongCreatelikedByIdInput | string[]
    albumId?: string | null
    playlistId?: string | null
    artistId?: SongCreateartistIdInput | string[]
    Artist?: ArtistUncheckedCreateNestedManyWithoutSongInput
  }

  export type SongCreateOrConnectWithoutGenreInput = {
    where: SongWhereUniqueInput
    create: XOR<SongCreateWithoutGenreInput, SongUncheckedCreateWithoutGenreInput>
  }

  export type SongCreateManyGenreInputEnvelope = {
    data: SongCreateManyGenreInput | SongCreateManyGenreInput[]
  }

  export type AlbumCreateWithoutGenreInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    thumbnail: string
    totalTracks?: number | null
    isPublic?: boolean | null
    Song?: SongCreateNestedManyWithoutAlbumInput
    UserCreator?: UserCreateNestedOneWithoutUploadAlbumsInput
    UserLike?: UserCreateNestedOneWithoutLikeAlbumsInput
    Artist: ArtistCreateNestedOneWithoutAlbumInput
  }

  export type AlbumUncheckedCreateWithoutGenreInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    thumbnail: string
    totalTracks?: number | null
    isPublic?: boolean | null
    userCreatorId?: string | null
    likedById?: AlbumCreatelikedByIdInput | string[]
    artistId: string
    Song?: SongUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumCreateOrConnectWithoutGenreInput = {
    where: AlbumWhereUniqueInput
    create: XOR<AlbumCreateWithoutGenreInput, AlbumUncheckedCreateWithoutGenreInput>
  }

  export type AlbumCreateManyGenreInputEnvelope = {
    data: AlbumCreateManyGenreInput | AlbumCreateManyGenreInput[]
  }

  export type SongUpsertWithWhereUniqueWithoutGenreInput = {
    where: SongWhereUniqueInput
    update: XOR<SongUpdateWithoutGenreInput, SongUncheckedUpdateWithoutGenreInput>
    create: XOR<SongCreateWithoutGenreInput, SongUncheckedCreateWithoutGenreInput>
  }

  export type SongUpdateWithWhereUniqueWithoutGenreInput = {
    where: SongWhereUniqueInput
    data: XOR<SongUpdateWithoutGenreInput, SongUncheckedUpdateWithoutGenreInput>
  }

  export type SongUpdateManyWithWhereWithoutGenreInput = {
    where: SongScalarWhereInput
    data: XOR<SongUpdateManyMutationInput, SongUncheckedUpdateManyWithoutGenreInput>
  }

  export type AlbumUpsertWithWhereUniqueWithoutGenreInput = {
    where: AlbumWhereUniqueInput
    update: XOR<AlbumUpdateWithoutGenreInput, AlbumUncheckedUpdateWithoutGenreInput>
    create: XOR<AlbumCreateWithoutGenreInput, AlbumUncheckedCreateWithoutGenreInput>
  }

  export type AlbumUpdateWithWhereUniqueWithoutGenreInput = {
    where: AlbumWhereUniqueInput
    data: XOR<AlbumUpdateWithoutGenreInput, AlbumUncheckedUpdateWithoutGenreInput>
  }

  export type AlbumUpdateManyWithWhereWithoutGenreInput = {
    where: AlbumScalarWhereInput
    data: XOR<AlbumUpdateManyMutationInput, AlbumUncheckedUpdateManyWithoutGenreInput>
  }

  export type SongCreateWithoutPlaylistInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    url: string
    duration?: number | null
    rating?: number | null
    thumbnail: string
    reproductions?: number | null
    isPublic?: boolean | null
    UserCreator: UserCreateNestedOneWithoutUploadSongsInput
    UserLike?: UserCreateNestedOneWithoutLikeSongsInput
    Album?: AlbumCreateNestedOneWithoutSongInput
    Genre: GenreCreateNestedOneWithoutSongInput
    Artist?: ArtistCreateNestedManyWithoutSongInput
  }

  export type SongUncheckedCreateWithoutPlaylistInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    url: string
    duration?: number | null
    rating?: number | null
    thumbnail: string
    reproductions?: number | null
    isPublic?: boolean | null
    userCreatorId: string
    likedById?: SongCreatelikedByIdInput | string[]
    albumId?: string | null
    genreId: string
    artistId?: SongCreateartistIdInput | string[]
    Artist?: ArtistUncheckedCreateNestedManyWithoutSongInput
  }

  export type SongCreateOrConnectWithoutPlaylistInput = {
    where: SongWhereUniqueInput
    create: XOR<SongCreateWithoutPlaylistInput, SongUncheckedCreateWithoutPlaylistInput>
  }

  export type SongCreateManyPlaylistInputEnvelope = {
    data: SongCreateManyPlaylistInput | SongCreateManyPlaylistInput[]
  }

  export type UserCreateWithoutPlaylistInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name: string
    likeSongs?: SongCreateNestedManyWithoutUserLikeInput
    uploadSongs?: SongCreateNestedManyWithoutUserCreatorInput
    likeAlbums?: AlbumCreateNestedManyWithoutUserLikeInput
    uploadAlbums?: AlbumCreateNestedManyWithoutUserCreatorInput
    favouritesArtist?: ArtistCreateNestedManyWithoutFollowedByInput
  }

  export type UserUncheckedCreateWithoutPlaylistInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name: string
    likeSongs?: SongUncheckedCreateNestedManyWithoutUserLikeInput
    uploadSongs?: SongUncheckedCreateNestedManyWithoutUserCreatorInput
    likeAlbums?: AlbumUncheckedCreateNestedManyWithoutUserLikeInput
    uploadAlbums?: AlbumUncheckedCreateNestedManyWithoutUserCreatorInput
    favouritesArtist?: ArtistUncheckedCreateNestedManyWithoutFollowedByInput
  }

  export type UserCreateOrConnectWithoutPlaylistInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPlaylistInput, UserUncheckedCreateWithoutPlaylistInput>
  }

  export type SongUpsertWithWhereUniqueWithoutPlaylistInput = {
    where: SongWhereUniqueInput
    update: XOR<SongUpdateWithoutPlaylistInput, SongUncheckedUpdateWithoutPlaylistInput>
    create: XOR<SongCreateWithoutPlaylistInput, SongUncheckedCreateWithoutPlaylistInput>
  }

  export type SongUpdateWithWhereUniqueWithoutPlaylistInput = {
    where: SongWhereUniqueInput
    data: XOR<SongUpdateWithoutPlaylistInput, SongUncheckedUpdateWithoutPlaylistInput>
  }

  export type SongUpdateManyWithWhereWithoutPlaylistInput = {
    where: SongScalarWhereInput
    data: XOR<SongUpdateManyMutationInput, SongUncheckedUpdateManyWithoutPlaylistInput>
  }

  export type UserUpsertWithoutPlaylistInput = {
    update: XOR<UserUpdateWithoutPlaylistInput, UserUncheckedUpdateWithoutPlaylistInput>
    create: XOR<UserCreateWithoutPlaylistInput, UserUncheckedCreateWithoutPlaylistInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPlaylistInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPlaylistInput, UserUncheckedUpdateWithoutPlaylistInput>
  }

  export type UserUpdateWithoutPlaylistInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    likeSongs?: SongUpdateManyWithoutUserLikeNestedInput
    uploadSongs?: SongUpdateManyWithoutUserCreatorNestedInput
    likeAlbums?: AlbumUpdateManyWithoutUserLikeNestedInput
    uploadAlbums?: AlbumUpdateManyWithoutUserCreatorNestedInput
    favouritesArtist?: ArtistUpdateManyWithoutFollowedByNestedInput
  }

  export type UserUncheckedUpdateWithoutPlaylistInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    likeSongs?: SongUncheckedUpdateManyWithoutUserLikeNestedInput
    uploadSongs?: SongUncheckedUpdateManyWithoutUserCreatorNestedInput
    likeAlbums?: AlbumUncheckedUpdateManyWithoutUserLikeNestedInput
    uploadAlbums?: AlbumUncheckedUpdateManyWithoutUserCreatorNestedInput
    favouritesArtist?: ArtistUncheckedUpdateManyWithoutFollowedByNestedInput
  }

  export type SongCreateWithoutArtistInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    url: string
    duration?: number | null
    rating?: number | null
    thumbnail: string
    reproductions?: number | null
    isPublic?: boolean | null
    UserCreator: UserCreateNestedOneWithoutUploadSongsInput
    UserLike?: UserCreateNestedOneWithoutLikeSongsInput
    Album?: AlbumCreateNestedOneWithoutSongInput
    Genre: GenreCreateNestedOneWithoutSongInput
    Playlist?: PlaylistCreateNestedOneWithoutPlaylistSongsInput
  }

  export type SongUncheckedCreateWithoutArtistInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    url: string
    duration?: number | null
    rating?: number | null
    thumbnail: string
    reproductions?: number | null
    isPublic?: boolean | null
    userCreatorId: string
    likedById?: SongCreatelikedByIdInput | string[]
    albumId?: string | null
    genreId: string
    playlistId?: string | null
    artistId?: SongCreateartistIdInput | string[]
  }

  export type SongCreateOrConnectWithoutArtistInput = {
    where: SongWhereUniqueInput
    create: XOR<SongCreateWithoutArtistInput, SongUncheckedCreateWithoutArtistInput>
  }

  export type AlbumCreateWithoutArtistInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    thumbnail: string
    totalTracks?: number | null
    isPublic?: boolean | null
    Song?: SongCreateNestedManyWithoutAlbumInput
    UserCreator?: UserCreateNestedOneWithoutUploadAlbumsInput
    UserLike?: UserCreateNestedOneWithoutLikeAlbumsInput
    Genre: GenreCreateNestedOneWithoutAlbumInput
  }

  export type AlbumUncheckedCreateWithoutArtistInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    thumbnail: string
    totalTracks?: number | null
    isPublic?: boolean | null
    userCreatorId?: string | null
    likedById?: AlbumCreatelikedByIdInput | string[]
    genreId: string
    Song?: SongUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumCreateOrConnectWithoutArtistInput = {
    where: AlbumWhereUniqueInput
    create: XOR<AlbumCreateWithoutArtistInput, AlbumUncheckedCreateWithoutArtistInput>
  }

  export type AlbumCreateManyArtistInputEnvelope = {
    data: AlbumCreateManyArtistInput | AlbumCreateManyArtistInput[]
  }

  export type UserCreateWithoutFavouritesArtistInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name: string
    likeSongs?: SongCreateNestedManyWithoutUserLikeInput
    uploadSongs?: SongCreateNestedManyWithoutUserCreatorInput
    likeAlbums?: AlbumCreateNestedManyWithoutUserLikeInput
    uploadAlbums?: AlbumCreateNestedManyWithoutUserCreatorInput
    playlist?: PlaylistCreateNestedManyWithoutUserCreatorInput
  }

  export type UserUncheckedCreateWithoutFavouritesArtistInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name: string
    likeSongs?: SongUncheckedCreateNestedManyWithoutUserLikeInput
    uploadSongs?: SongUncheckedCreateNestedManyWithoutUserCreatorInput
    likeAlbums?: AlbumUncheckedCreateNestedManyWithoutUserLikeInput
    uploadAlbums?: AlbumUncheckedCreateNestedManyWithoutUserCreatorInput
    playlist?: PlaylistUncheckedCreateNestedManyWithoutUserCreatorInput
  }

  export type UserCreateOrConnectWithoutFavouritesArtistInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavouritesArtistInput, UserUncheckedCreateWithoutFavouritesArtistInput>
  }

  export type SongUpsertWithWhereUniqueWithoutArtistInput = {
    where: SongWhereUniqueInput
    update: XOR<SongUpdateWithoutArtistInput, SongUncheckedUpdateWithoutArtistInput>
    create: XOR<SongCreateWithoutArtistInput, SongUncheckedCreateWithoutArtistInput>
  }

  export type SongUpdateWithWhereUniqueWithoutArtistInput = {
    where: SongWhereUniqueInput
    data: XOR<SongUpdateWithoutArtistInput, SongUncheckedUpdateWithoutArtistInput>
  }

  export type SongUpdateManyWithWhereWithoutArtistInput = {
    where: SongScalarWhereInput
    data: XOR<SongUpdateManyMutationInput, SongUncheckedUpdateManyWithoutArtistInput>
  }

  export type AlbumUpsertWithWhereUniqueWithoutArtistInput = {
    where: AlbumWhereUniqueInput
    update: XOR<AlbumUpdateWithoutArtistInput, AlbumUncheckedUpdateWithoutArtistInput>
    create: XOR<AlbumCreateWithoutArtistInput, AlbumUncheckedCreateWithoutArtistInput>
  }

  export type AlbumUpdateWithWhereUniqueWithoutArtistInput = {
    where: AlbumWhereUniqueInput
    data: XOR<AlbumUpdateWithoutArtistInput, AlbumUncheckedUpdateWithoutArtistInput>
  }

  export type AlbumUpdateManyWithWhereWithoutArtistInput = {
    where: AlbumScalarWhereInput
    data: XOR<AlbumUpdateManyMutationInput, AlbumUncheckedUpdateManyWithoutArtistInput>
  }

  export type UserUpsertWithoutFavouritesArtistInput = {
    update: XOR<UserUpdateWithoutFavouritesArtistInput, UserUncheckedUpdateWithoutFavouritesArtistInput>
    create: XOR<UserCreateWithoutFavouritesArtistInput, UserUncheckedCreateWithoutFavouritesArtistInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFavouritesArtistInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFavouritesArtistInput, UserUncheckedUpdateWithoutFavouritesArtistInput>
  }

  export type UserUpdateWithoutFavouritesArtistInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    likeSongs?: SongUpdateManyWithoutUserLikeNestedInput
    uploadSongs?: SongUpdateManyWithoutUserCreatorNestedInput
    likeAlbums?: AlbumUpdateManyWithoutUserLikeNestedInput
    uploadAlbums?: AlbumUpdateManyWithoutUserCreatorNestedInput
    playlist?: PlaylistUpdateManyWithoutUserCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutFavouritesArtistInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    likeSongs?: SongUncheckedUpdateManyWithoutUserLikeNestedInput
    uploadSongs?: SongUncheckedUpdateManyWithoutUserCreatorNestedInput
    likeAlbums?: AlbumUncheckedUpdateManyWithoutUserLikeNestedInput
    uploadAlbums?: AlbumUncheckedUpdateManyWithoutUserCreatorNestedInput
    playlist?: PlaylistUncheckedUpdateManyWithoutUserCreatorNestedInput
  }

  export type SongCreateManyUserLikeInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    url: string
    duration?: number | null
    rating?: number | null
    thumbnail: string
    reproductions?: number | null
    isPublic?: boolean | null
    userCreatorId: string
    albumId?: string | null
    genreId: string
    playlistId?: string | null
    artistId?: SongCreateartistIdInput | string[]
  }

  export type SongCreateManyUserCreatorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    url: string
    duration?: number | null
    rating?: number | null
    thumbnail: string
    reproductions?: number | null
    isPublic?: boolean | null
    likedById?: SongCreatelikedByIdInput | string[]
    albumId?: string | null
    genreId: string
    playlistId?: string | null
    artistId?: SongCreateartistIdInput | string[]
  }

  export type AlbumCreateManyUserLikeInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    thumbnail: string
    totalTracks?: number | null
    isPublic?: boolean | null
    userCreatorId?: string | null
    genreId: string
    artistId: string
  }

  export type AlbumCreateManyUserCreatorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    thumbnail: string
    totalTracks?: number | null
    isPublic?: boolean | null
    likedById?: AlbumCreatelikedByIdInput | string[]
    genreId: string
    artistId: string
  }

  export type PlaylistCreateManyUserCreatorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    playlistName: string
    thumbnail?: string | null
  }

  export type ArtistCreateManyFollowedByInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    thumbnail?: string | null
    songsId?: ArtistCreatesongsIdInput | string[]
  }

  export type SongUpdateWithoutUserLikeInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail?: StringFieldUpdateOperationsInput | string
    reproductions?: NullableIntFieldUpdateOperationsInput | number | null
    isPublic?: NullableBoolFieldUpdateOperationsInput | boolean | null
    UserCreator?: UserUpdateOneRequiredWithoutUploadSongsNestedInput
    Album?: AlbumUpdateOneWithoutSongNestedInput
    Genre?: GenreUpdateOneRequiredWithoutSongNestedInput
    Playlist?: PlaylistUpdateOneWithoutPlaylistSongsNestedInput
    Artist?: ArtistUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateWithoutUserLikeInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail?: StringFieldUpdateOperationsInput | string
    reproductions?: NullableIntFieldUpdateOperationsInput | number | null
    isPublic?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userCreatorId?: StringFieldUpdateOperationsInput | string
    albumId?: NullableStringFieldUpdateOperationsInput | string | null
    genreId?: StringFieldUpdateOperationsInput | string
    playlistId?: NullableStringFieldUpdateOperationsInput | string | null
    artistId?: SongUpdateartistIdInput | string[]
    Artist?: ArtistUncheckedUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateManyWithoutUserLikeInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail?: StringFieldUpdateOperationsInput | string
    reproductions?: NullableIntFieldUpdateOperationsInput | number | null
    isPublic?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userCreatorId?: StringFieldUpdateOperationsInput | string
    albumId?: NullableStringFieldUpdateOperationsInput | string | null
    genreId?: StringFieldUpdateOperationsInput | string
    playlistId?: NullableStringFieldUpdateOperationsInput | string | null
    artistId?: SongUpdateartistIdInput | string[]
  }

  export type SongUpdateWithoutUserCreatorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail?: StringFieldUpdateOperationsInput | string
    reproductions?: NullableIntFieldUpdateOperationsInput | number | null
    isPublic?: NullableBoolFieldUpdateOperationsInput | boolean | null
    UserLike?: UserUpdateOneWithoutLikeSongsNestedInput
    Album?: AlbumUpdateOneWithoutSongNestedInput
    Genre?: GenreUpdateOneRequiredWithoutSongNestedInput
    Playlist?: PlaylistUpdateOneWithoutPlaylistSongsNestedInput
    Artist?: ArtistUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateWithoutUserCreatorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail?: StringFieldUpdateOperationsInput | string
    reproductions?: NullableIntFieldUpdateOperationsInput | number | null
    isPublic?: NullableBoolFieldUpdateOperationsInput | boolean | null
    likedById?: SongUpdatelikedByIdInput | string[]
    albumId?: NullableStringFieldUpdateOperationsInput | string | null
    genreId?: StringFieldUpdateOperationsInput | string
    playlistId?: NullableStringFieldUpdateOperationsInput | string | null
    artistId?: SongUpdateartistIdInput | string[]
    Artist?: ArtistUncheckedUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateManyWithoutUserCreatorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail?: StringFieldUpdateOperationsInput | string
    reproductions?: NullableIntFieldUpdateOperationsInput | number | null
    isPublic?: NullableBoolFieldUpdateOperationsInput | boolean | null
    likedById?: SongUpdatelikedByIdInput | string[]
    albumId?: NullableStringFieldUpdateOperationsInput | string | null
    genreId?: StringFieldUpdateOperationsInput | string
    playlistId?: NullableStringFieldUpdateOperationsInput | string | null
    artistId?: SongUpdateartistIdInput | string[]
  }

  export type AlbumUpdateWithoutUserLikeInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    totalTracks?: NullableIntFieldUpdateOperationsInput | number | null
    isPublic?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Song?: SongUpdateManyWithoutAlbumNestedInput
    UserCreator?: UserUpdateOneWithoutUploadAlbumsNestedInput
    Genre?: GenreUpdateOneRequiredWithoutAlbumNestedInput
    Artist?: ArtistUpdateOneRequiredWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateWithoutUserLikeInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    totalTracks?: NullableIntFieldUpdateOperationsInput | number | null
    isPublic?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userCreatorId?: NullableStringFieldUpdateOperationsInput | string | null
    genreId?: StringFieldUpdateOperationsInput | string
    artistId?: StringFieldUpdateOperationsInput | string
    Song?: SongUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateManyWithoutUserLikeInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    totalTracks?: NullableIntFieldUpdateOperationsInput | number | null
    isPublic?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userCreatorId?: NullableStringFieldUpdateOperationsInput | string | null
    genreId?: StringFieldUpdateOperationsInput | string
    artistId?: StringFieldUpdateOperationsInput | string
  }

  export type AlbumUpdateWithoutUserCreatorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    totalTracks?: NullableIntFieldUpdateOperationsInput | number | null
    isPublic?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Song?: SongUpdateManyWithoutAlbumNestedInput
    UserLike?: UserUpdateOneWithoutLikeAlbumsNestedInput
    Genre?: GenreUpdateOneRequiredWithoutAlbumNestedInput
    Artist?: ArtistUpdateOneRequiredWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateWithoutUserCreatorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    totalTracks?: NullableIntFieldUpdateOperationsInput | number | null
    isPublic?: NullableBoolFieldUpdateOperationsInput | boolean | null
    likedById?: AlbumUpdatelikedByIdInput | string[]
    genreId?: StringFieldUpdateOperationsInput | string
    artistId?: StringFieldUpdateOperationsInput | string
    Song?: SongUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateManyWithoutUserCreatorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    totalTracks?: NullableIntFieldUpdateOperationsInput | number | null
    isPublic?: NullableBoolFieldUpdateOperationsInput | boolean | null
    likedById?: AlbumUpdatelikedByIdInput | string[]
    genreId?: StringFieldUpdateOperationsInput | string
    artistId?: StringFieldUpdateOperationsInput | string
  }

  export type PlaylistUpdateWithoutUserCreatorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlistName?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    playlistSongs?: SongUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistUncheckedUpdateWithoutUserCreatorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlistName?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    playlistSongs?: SongUncheckedUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistUncheckedUpdateManyWithoutUserCreatorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlistName?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ArtistUpdateWithoutFollowedByInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    Song?: SongUpdateManyWithoutArtistNestedInput
    Album?: AlbumUpdateManyWithoutArtistNestedInput
  }

  export type ArtistUncheckedUpdateWithoutFollowedByInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    songsId?: ArtistUpdatesongsIdInput | string[]
    Song?: SongUncheckedUpdateManyWithoutArtistNestedInput
    Album?: AlbumUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type ArtistUncheckedUpdateManyWithoutFollowedByInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    songsId?: ArtistUpdatesongsIdInput | string[]
  }

  export type ArtistUpdateWithoutSongInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    Album?: AlbumUpdateManyWithoutArtistNestedInput
    followedBy?: UserUpdateOneWithoutFavouritesArtistNestedInput
  }

  export type ArtistUncheckedUpdateWithoutSongInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    songsId?: ArtistUpdatesongsIdInput | string[]
    likedBy?: NullableStringFieldUpdateOperationsInput | string | null
    Album?: AlbumUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type ArtistUncheckedUpdateManyWithoutSongInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    songsId?: ArtistUpdatesongsIdInput | string[]
    likedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SongCreateManyAlbumInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    url: string
    duration?: number | null
    rating?: number | null
    thumbnail: string
    reproductions?: number | null
    isPublic?: boolean | null
    userCreatorId: string
    likedById?: SongCreatelikedByIdInput | string[]
    genreId: string
    playlistId?: string | null
    artistId?: SongCreateartistIdInput | string[]
  }

  export type SongUpdateWithoutAlbumInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail?: StringFieldUpdateOperationsInput | string
    reproductions?: NullableIntFieldUpdateOperationsInput | number | null
    isPublic?: NullableBoolFieldUpdateOperationsInput | boolean | null
    UserCreator?: UserUpdateOneRequiredWithoutUploadSongsNestedInput
    UserLike?: UserUpdateOneWithoutLikeSongsNestedInput
    Genre?: GenreUpdateOneRequiredWithoutSongNestedInput
    Playlist?: PlaylistUpdateOneWithoutPlaylistSongsNestedInput
    Artist?: ArtistUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateWithoutAlbumInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail?: StringFieldUpdateOperationsInput | string
    reproductions?: NullableIntFieldUpdateOperationsInput | number | null
    isPublic?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userCreatorId?: StringFieldUpdateOperationsInput | string
    likedById?: SongUpdatelikedByIdInput | string[]
    genreId?: StringFieldUpdateOperationsInput | string
    playlistId?: NullableStringFieldUpdateOperationsInput | string | null
    artistId?: SongUpdateartistIdInput | string[]
    Artist?: ArtistUncheckedUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateManyWithoutAlbumInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail?: StringFieldUpdateOperationsInput | string
    reproductions?: NullableIntFieldUpdateOperationsInput | number | null
    isPublic?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userCreatorId?: StringFieldUpdateOperationsInput | string
    likedById?: SongUpdatelikedByIdInput | string[]
    genreId?: StringFieldUpdateOperationsInput | string
    playlistId?: NullableStringFieldUpdateOperationsInput | string | null
    artistId?: SongUpdateartistIdInput | string[]
  }

  export type SongCreateManyGenreInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    url: string
    duration?: number | null
    rating?: number | null
    thumbnail: string
    reproductions?: number | null
    isPublic?: boolean | null
    userCreatorId: string
    likedById?: SongCreatelikedByIdInput | string[]
    albumId?: string | null
    playlistId?: string | null
    artistId?: SongCreateartistIdInput | string[]
  }

  export type AlbumCreateManyGenreInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    thumbnail: string
    totalTracks?: number | null
    isPublic?: boolean | null
    userCreatorId?: string | null
    likedById?: AlbumCreatelikedByIdInput | string[]
    artistId: string
  }

  export type SongUpdateWithoutGenreInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail?: StringFieldUpdateOperationsInput | string
    reproductions?: NullableIntFieldUpdateOperationsInput | number | null
    isPublic?: NullableBoolFieldUpdateOperationsInput | boolean | null
    UserCreator?: UserUpdateOneRequiredWithoutUploadSongsNestedInput
    UserLike?: UserUpdateOneWithoutLikeSongsNestedInput
    Album?: AlbumUpdateOneWithoutSongNestedInput
    Playlist?: PlaylistUpdateOneWithoutPlaylistSongsNestedInput
    Artist?: ArtistUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateWithoutGenreInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail?: StringFieldUpdateOperationsInput | string
    reproductions?: NullableIntFieldUpdateOperationsInput | number | null
    isPublic?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userCreatorId?: StringFieldUpdateOperationsInput | string
    likedById?: SongUpdatelikedByIdInput | string[]
    albumId?: NullableStringFieldUpdateOperationsInput | string | null
    playlistId?: NullableStringFieldUpdateOperationsInput | string | null
    artistId?: SongUpdateartistIdInput | string[]
    Artist?: ArtistUncheckedUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateManyWithoutGenreInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail?: StringFieldUpdateOperationsInput | string
    reproductions?: NullableIntFieldUpdateOperationsInput | number | null
    isPublic?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userCreatorId?: StringFieldUpdateOperationsInput | string
    likedById?: SongUpdatelikedByIdInput | string[]
    albumId?: NullableStringFieldUpdateOperationsInput | string | null
    playlistId?: NullableStringFieldUpdateOperationsInput | string | null
    artistId?: SongUpdateartistIdInput | string[]
  }

  export type AlbumUpdateWithoutGenreInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    totalTracks?: NullableIntFieldUpdateOperationsInput | number | null
    isPublic?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Song?: SongUpdateManyWithoutAlbumNestedInput
    UserCreator?: UserUpdateOneWithoutUploadAlbumsNestedInput
    UserLike?: UserUpdateOneWithoutLikeAlbumsNestedInput
    Artist?: ArtistUpdateOneRequiredWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateWithoutGenreInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    totalTracks?: NullableIntFieldUpdateOperationsInput | number | null
    isPublic?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userCreatorId?: NullableStringFieldUpdateOperationsInput | string | null
    likedById?: AlbumUpdatelikedByIdInput | string[]
    artistId?: StringFieldUpdateOperationsInput | string
    Song?: SongUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateManyWithoutGenreInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    totalTracks?: NullableIntFieldUpdateOperationsInput | number | null
    isPublic?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userCreatorId?: NullableStringFieldUpdateOperationsInput | string | null
    likedById?: AlbumUpdatelikedByIdInput | string[]
    artistId?: StringFieldUpdateOperationsInput | string
  }

  export type SongCreateManyPlaylistInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    url: string
    duration?: number | null
    rating?: number | null
    thumbnail: string
    reproductions?: number | null
    isPublic?: boolean | null
    userCreatorId: string
    likedById?: SongCreatelikedByIdInput | string[]
    albumId?: string | null
    genreId: string
    artistId?: SongCreateartistIdInput | string[]
  }

  export type SongUpdateWithoutPlaylistInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail?: StringFieldUpdateOperationsInput | string
    reproductions?: NullableIntFieldUpdateOperationsInput | number | null
    isPublic?: NullableBoolFieldUpdateOperationsInput | boolean | null
    UserCreator?: UserUpdateOneRequiredWithoutUploadSongsNestedInput
    UserLike?: UserUpdateOneWithoutLikeSongsNestedInput
    Album?: AlbumUpdateOneWithoutSongNestedInput
    Genre?: GenreUpdateOneRequiredWithoutSongNestedInput
    Artist?: ArtistUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateWithoutPlaylistInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail?: StringFieldUpdateOperationsInput | string
    reproductions?: NullableIntFieldUpdateOperationsInput | number | null
    isPublic?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userCreatorId?: StringFieldUpdateOperationsInput | string
    likedById?: SongUpdatelikedByIdInput | string[]
    albumId?: NullableStringFieldUpdateOperationsInput | string | null
    genreId?: StringFieldUpdateOperationsInput | string
    artistId?: SongUpdateartistIdInput | string[]
    Artist?: ArtistUncheckedUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateManyWithoutPlaylistInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail?: StringFieldUpdateOperationsInput | string
    reproductions?: NullableIntFieldUpdateOperationsInput | number | null
    isPublic?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userCreatorId?: StringFieldUpdateOperationsInput | string
    likedById?: SongUpdatelikedByIdInput | string[]
    albumId?: NullableStringFieldUpdateOperationsInput | string | null
    genreId?: StringFieldUpdateOperationsInput | string
    artistId?: SongUpdateartistIdInput | string[]
  }

  export type AlbumCreateManyArtistInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    thumbnail: string
    totalTracks?: number | null
    isPublic?: boolean | null
    userCreatorId?: string | null
    likedById?: AlbumCreatelikedByIdInput | string[]
    genreId: string
  }

  export type SongUpdateWithoutArtistInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail?: StringFieldUpdateOperationsInput | string
    reproductions?: NullableIntFieldUpdateOperationsInput | number | null
    isPublic?: NullableBoolFieldUpdateOperationsInput | boolean | null
    UserCreator?: UserUpdateOneRequiredWithoutUploadSongsNestedInput
    UserLike?: UserUpdateOneWithoutLikeSongsNestedInput
    Album?: AlbumUpdateOneWithoutSongNestedInput
    Genre?: GenreUpdateOneRequiredWithoutSongNestedInput
    Playlist?: PlaylistUpdateOneWithoutPlaylistSongsNestedInput
  }

  export type SongUncheckedUpdateWithoutArtistInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail?: StringFieldUpdateOperationsInput | string
    reproductions?: NullableIntFieldUpdateOperationsInput | number | null
    isPublic?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userCreatorId?: StringFieldUpdateOperationsInput | string
    likedById?: SongUpdatelikedByIdInput | string[]
    albumId?: NullableStringFieldUpdateOperationsInput | string | null
    genreId?: StringFieldUpdateOperationsInput | string
    playlistId?: NullableStringFieldUpdateOperationsInput | string | null
    artistId?: SongUpdateartistIdInput | string[]
  }

  export type SongUncheckedUpdateManyWithoutArtistInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail?: StringFieldUpdateOperationsInput | string
    reproductions?: NullableIntFieldUpdateOperationsInput | number | null
    isPublic?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userCreatorId?: StringFieldUpdateOperationsInput | string
    likedById?: SongUpdatelikedByIdInput | string[]
    albumId?: NullableStringFieldUpdateOperationsInput | string | null
    genreId?: StringFieldUpdateOperationsInput | string
    playlistId?: NullableStringFieldUpdateOperationsInput | string | null
    artistId?: SongUpdateartistIdInput | string[]
  }

  export type AlbumUpdateWithoutArtistInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    totalTracks?: NullableIntFieldUpdateOperationsInput | number | null
    isPublic?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Song?: SongUpdateManyWithoutAlbumNestedInput
    UserCreator?: UserUpdateOneWithoutUploadAlbumsNestedInput
    UserLike?: UserUpdateOneWithoutLikeAlbumsNestedInput
    Genre?: GenreUpdateOneRequiredWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateWithoutArtistInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    totalTracks?: NullableIntFieldUpdateOperationsInput | number | null
    isPublic?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userCreatorId?: NullableStringFieldUpdateOperationsInput | string | null
    likedById?: AlbumUpdatelikedByIdInput | string[]
    genreId?: StringFieldUpdateOperationsInput | string
    Song?: SongUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateManyWithoutArtistInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    totalTracks?: NullableIntFieldUpdateOperationsInput | number | null
    isPublic?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userCreatorId?: NullableStringFieldUpdateOperationsInput | string | null
    likedById?: AlbumUpdatelikedByIdInput | string[]
    genreId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SongCountOutputTypeDefaultArgs instead
     */
    export type SongCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SongCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AlbumCountOutputTypeDefaultArgs instead
     */
    export type AlbumCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AlbumCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GenreCountOutputTypeDefaultArgs instead
     */
    export type GenreCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GenreCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlaylistCountOutputTypeDefaultArgs instead
     */
    export type PlaylistCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlaylistCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ArtistCountOutputTypeDefaultArgs instead
     */
    export type ArtistCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ArtistCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SongDefaultArgs instead
     */
    export type SongArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SongDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AlbumDefaultArgs instead
     */
    export type AlbumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AlbumDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GenreDefaultArgs instead
     */
    export type GenreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GenreDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlaylistDefaultArgs instead
     */
    export type PlaylistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlaylistDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ArtistDefaultArgs instead
     */
    export type ArtistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ArtistDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}