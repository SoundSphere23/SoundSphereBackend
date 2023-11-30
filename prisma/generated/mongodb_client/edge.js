
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/edge')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.6.0
 * Query Engine version: e95e739751f42d8ca026f6b910f5a2dc5adeaeee
 */
Prisma.prismaVersion = {
  client: "5.6.0",
  engine: "e95e739751f42d8ca026f6b910f5a2dc5adeaeee"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  email: 'email',
  name: 'name'
};

exports.Prisma.SongScalarFieldEnum = {
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
  playlist: 'playlist',
  artistId: 'artistId'
};

exports.Prisma.AlbumScalarFieldEnum = {
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

exports.Prisma.GenreScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  thumbnail: 'thumbnail',
  updatedAt: 'updatedAt',
  name: 'name'
};

exports.Prisma.PlaylistScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  playlistName: 'playlistName',
  thumbnail: 'thumbnail',
  playlistSongs: 'playlistSongs',
  userCreatorId: 'userCreatorId'
};

exports.Prisma.ArtistScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  name: 'name',
  thumbnail: 'thumbnail',
  songsId: 'songsId',
  likedBy: 'likedBy'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};


exports.Prisma.ModelName = {
  User: 'User',
  Song: 'Song',
  Album: 'Album',
  Genre: 'Genre',
  Playlist: 'Playlist',
  Artist: 'Artist'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\pinmi\\OneDrive\\Documents\\GitHub\\SoundSphereBackend\\prisma\\generated\\mongodb_client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      },
      {
        "fromEnvVar": null,
        "value": "darwin-arm64"
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.6.0",
  "engineVersion": "e95e739751f42d8ca026f6b910f5a2dc5adeaeee",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mongodb",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "MONGO_URI_DEV",
        "value": null
      }
    }
  },
  "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwNCi8vIGxlYXJuIG1vcmUgYWJvdXQgaXQgaW4gdGhlIGRvY3M6IGh0dHBzOi8vcHJpcy5seS9kL3ByaXNtYS1zY2hlbWENCg0KZ2VuZXJhdG9yIGNsaWVudCB7DQogIHByb3ZpZGVyICAgICAgPSAicHJpc21hLWNsaWVudC1qcyINCiAgb3V0cHV0ICAgICAgICA9ICIuL2dlbmVyYXRlZC9tb25nb2RiX2NsaWVudCINCiAgYmluYXJ5VGFyZ2V0cyA9IFsibmF0aXZlIiwgImRhcndpbi1hcm02NCJdDQp9DQoNCmRhdGFzb3VyY2UgZGIgew0KICBwcm92aWRlciA9ICJtb25nb2RiIg0KICB1cmwgICAgICA9IGVudigiTU9OR09fVVJJX0RFViIpDQp9DQoNCm1vZGVsIFVzZXIgew0KICBpZCAgICAgICAgICAgICAgIFN0cmluZyAgICAgQGlkIEBkZWZhdWx0KGF1dG8oKSkgQG1hcCgiX2lkIikgQGRiLk9iamVjdElkDQogIGNyZWF0ZWRBdCAgICAgICAgRGF0ZVRpbWUgICBAZGVmYXVsdChub3coKSkNCiAgdXBkYXRlZEF0ICAgICAgICBEYXRlVGltZSAgIEB1cGRhdGVkQXQNCiAgZW1haWwgICAgICAgICAgICBTdHJpbmcgICAgIEB1bmlxdWUNCiAgbmFtZSAgICAgICAgICAgICBTdHJpbmcNCiAgbGlrZVNvbmdzICAgICAgICBTb25nW10gICAgIEByZWxhdGlvbihuYW1lOiAiTGlrZWRTb25ncyIpDQogIHVwbG9hZFNvbmdzICAgICAgU29uZ1tdICAgICBAcmVsYXRpb24obmFtZTogIlVwbG9hZGVkU29uZ3MiKQ0KICBsaWtlQWxidW1zICAgICAgIEFsYnVtW10gICAgQHJlbGF0aW9uKG5hbWU6ICJMaWtlZEFsYnVtcyIpDQogIHVwbG9hZEFsYnVtcyAgICAgQWxidW1bXSAgICBAcmVsYXRpb24obmFtZTogIlVwbG9hZGVkQWxidW1zIikNCiAgcGxheWxpc3QgICAgICAgICBQbGF5bGlzdFtdDQogIGZhdm91cml0ZXNBcnRpc3QgQXJ0aXN0W10NCn0NCg0KLy9UbyBkbyByZXZpc2FyIGNhbXBvcyBvcGNpb25hbGVzDQptb2RlbCBTb25nIHsNCiAgaWQgICAgICAgICAgICBTdHJpbmcgICBAaWQgQGRlZmF1bHQoYXV0bygpKSBAbWFwKCJfaWQiKSBAZGIuT2JqZWN0SWQNCiAgY3JlYXRlZEF0ICAgICBEYXRlVGltZSBAZGVmYXVsdChub3coKSkNCiAgdXBkYXRlZEF0ICAgICBEYXRlVGltZSBAdXBkYXRlZEF0DQogIG5hbWUgICAgICAgICAgU3RyaW5nDQogIHVybCAgICAgICAgICAgU3RyaW5nDQogIGR1cmF0aW9uICAgICAgSW50Pw0KICByYXRpbmcgICAgICAgIEludD8NCiAgdGh1bWJuYWlsICAgICBTdHJpbmcNCiAgLy8gcG9wdWxhcml0eSAgICBCb29sZWFuDQogIHJlcHJvZHVjdGlvbnMgSW50Pw0KICBpc1B1YmxpYyAgICAgIEJvb2xlYW4/DQogIHVzZXJDcmVhdG9ySWQgU3RyaW5nICAgQGRiLk9iamVjdElkDQogIFVzZXJDcmVhdG9yICAgVXNlciAgICAgQHJlbGF0aW9uKG5hbWU6ICJVcGxvYWRlZFNvbmdzIiwgZmllbGRzOiBbdXNlckNyZWF0b3JJZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogIGxpa2VkQnlJZCAgICAgU3RyaW5nW10gQGRiLk9iamVjdElkDQogIFVzZXJMaWtlICAgICAgVXNlcj8gICAgQHJlbGF0aW9uKG5hbWU6ICJMaWtlZFNvbmdzIiwgZmllbGRzOiBbbGlrZWRCeUlkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgQWxidW0gICAgICAgICBBbGJ1bT8gICBAcmVsYXRpb24oZmllbGRzOiBbYWxidW1JZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogIGFsYnVtSWQgICAgICAgU3RyaW5nPyAgQGRiLk9iamVjdElkDQogIEdlbnJlICAgICAgICAgR2VucmUgICAgQHJlbGF0aW9uKGZpZWxkczogW2dlbnJlSWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KICBnZW5yZUlkICAgICAgIFN0cmluZyAgIEBkYi5PYmplY3RJZA0KICBwbGF5bGlzdCAgICAgIFN0cmluZ1tdIEBkYi5PYmplY3RJZA0KICBBcnRpc3QgICAgICAgIEFydGlzdFtdIEByZWxhdGlvbihmaWVsZHM6IFthcnRpc3RJZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogIGFydGlzdElkICAgICAgU3RyaW5nW10gQGRiLk9iamVjdElkDQp9DQoNCm1vZGVsIEFsYnVtIHsNCiAgaWQgICAgICAgICAgICBTdHJpbmcgICBAaWQgQGRlZmF1bHQoYXV0bygpKSBAbWFwKCJfaWQiKSBAZGIuT2JqZWN0SWQNCiAgY3JlYXRlZEF0ICAgICBEYXRlVGltZSBAZGVmYXVsdChub3coKSkNCiAgdXBkYXRlZEF0ICAgICBEYXRlVGltZSBAdXBkYXRlZEF0DQogIG5hbWUgICAgICAgICAgU3RyaW5nDQogIHRodW1ibmFpbCAgICAgU3RyaW5nDQogIHRvdGFsVHJhY2tzICAgSW50Pw0KICBTb25nICAgICAgICAgIFNvbmdbXQ0KICBpc1B1YmxpYyAgICAgIEJvb2xlYW4/DQogIHVzZXJDcmVhdG9ySWQgU3RyaW5nPyAgQGRiLk9iamVjdElkDQogIFVzZXJDcmVhdG9yICAgVXNlcj8gICAgQHJlbGF0aW9uKG5hbWU6ICJVcGxvYWRlZEFsYnVtcyIsIGZpZWxkczogW3VzZXJDcmVhdG9ySWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KICBsaWtlZEJ5SWQgICAgIFN0cmluZ1tdIEBkYi5PYmplY3RJZA0KICBVc2VyTGlrZSAgICAgIFVzZXI/ICAgIEByZWxhdGlvbihuYW1lOiAiTGlrZWRBbGJ1bXMiLCBmaWVsZHM6IFtsaWtlZEJ5SWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KICBHZW5yZSAgICAgICAgIEdlbnJlICAgIEByZWxhdGlvbihmaWVsZHM6IFtnZW5yZUlkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgZ2VucmVJZCAgICAgICBTdHJpbmcgICBAZGIuT2JqZWN0SWQNCiAgQXJ0aXN0ICAgICAgICBBcnRpc3Q/ICBAcmVsYXRpb24oZmllbGRzOiBbYXJ0aXN0SWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KICBhcnRpc3RJZCAgICAgIFN0cmluZz8gIEBkYi5PYmplY3RJZA0KfQ0KDQptb2RlbCBHZW5yZSB7DQogIGlkICAgICAgICBTdHJpbmcgICBAaWQgQGRlZmF1bHQoYXV0bygpKSBAbWFwKCJfaWQiKSBAZGIuT2JqZWN0SWQNCiAgY3JlYXRlZEF0IERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKQ0KICB0aHVtYm5haWwgU3RyaW5nPw0KICB1cGRhdGVkQXQgRGF0ZVRpbWUgQHVwZGF0ZWRBdA0KICBuYW1lICAgICAgU3RyaW5nDQogIFNvbmcgICAgICBTb25nW10NCiAgQWxidW0gICAgIEFsYnVtW10NCn0NCg0KbW9kZWwgUGxheWxpc3Qgew0KICBpZCAgICAgICAgICAgIFN0cmluZyAgIEBpZCBAZGVmYXVsdChhdXRvKCkpIEBtYXAoIl9pZCIpIEBkYi5PYmplY3RJZA0KICBjcmVhdGVkQXQgICAgIERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKQ0KICB1cGRhdGVkQXQgICAgIERhdGVUaW1lIEB1cGRhdGVkQXQNCiBwbGF5bGlzdE5hbWUgICAgICAgICAgU3RyaW5nIEB1bmlxdWUNCiAgdGh1bWJuYWlsICAgICBTdHJpbmc/DQogIHBsYXlsaXN0U29uZ3MgU3RyaW5nW10gQGRiLk9iamVjdElkDQogIHVzZXJDcmVhdG9ySWQgU3RyaW5nICAgQGRiLk9iamVjdElkDQogIFVzZXJDcmVhdG9yICAgVXNlcj8gICAgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJDcmVhdG9ySWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KfQ0KDQptb2RlbCBBcnRpc3Qgew0KICBpZCAgICAgICAgIFN0cmluZyAgIEBpZCBAZGVmYXVsdChhdXRvKCkpIEBtYXAoIl9pZCIpIEBkYi5PYmplY3RJZA0KICBjcmVhdGVkQXQgIERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKQ0KICB1cGRhdGVkQXQgIERhdGVUaW1lIEB1cGRhdGVkQXQNCiAgbmFtZSAgICAgICBTdHJpbmcNCiAgdGh1bWJuYWlsICBTdHJpbmc/DQogIFNvbmcgICAgICAgU29uZ1tdICAgQHJlbGF0aW9uKGZpZWxkczogW3NvbmdzSWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KICBzb25nc0lkICAgIFN0cmluZ1tdIEBkYi5PYmplY3RJZA0KICBBbGJ1bSAgICAgIEFsYnVtW10NCiAgZm9sbG93ZWRCeSBVc2VyPyAgICBAcmVsYXRpb24oZmllbGRzOiBbbGlrZWRCeV0sIHJlZmVyZW5jZXM6IFtpZF0pDQogIGxpa2VkQnkgICAgU3RyaW5nPyAgQGRiLk9iamVjdElkDQp9DQo=",
  "inlineSchemaHash": "348dc2a212a0da87414d873c94aa2a0dc4b7448398bdcb542a09ce2b655877ae",
  "noEngine": false
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"likeSongs\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Song\",\"relationName\":\"LikedSongs\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uploadSongs\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Song\",\"relationName\":\"UploadedSongs\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"likeAlbums\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Album\",\"relationName\":\"LikedAlbums\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uploadAlbums\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Album\",\"relationName\":\"UploadedAlbums\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"playlist\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Playlist\",\"relationName\":\"PlaylistToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"favouritesArtist\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Artist\",\"relationName\":\"ArtistToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Song\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"duration\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rating\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"thumbnail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reproductions\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isPublic\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userCreatorId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UserCreator\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"UploadedSongs\",\"relationFromFields\":[\"userCreatorId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"likedById\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UserLike\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"LikedSongs\",\"relationFromFields\":[\"likedById\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Album\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Album\",\"relationName\":\"AlbumToSong\",\"relationFromFields\":[\"albumId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"albumId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Genre\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Genre\",\"relationName\":\"GenreToSong\",\"relationFromFields\":[\"genreId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"genreId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"playlist\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Artist\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Artist\",\"relationName\":\"ArtistToSong\",\"relationFromFields\":[\"artistId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"artistId\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Album\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"thumbnail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalTracks\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Song\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Song\",\"relationName\":\"AlbumToSong\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isPublic\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userCreatorId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UserCreator\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"UploadedAlbums\",\"relationFromFields\":[\"userCreatorId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"likedById\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UserLike\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"LikedAlbums\",\"relationFromFields\":[\"likedById\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Genre\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Genre\",\"relationName\":\"AlbumToGenre\",\"relationFromFields\":[\"genreId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"genreId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Artist\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Artist\",\"relationName\":\"AlbumToArtist\",\"relationFromFields\":[\"artistId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"artistId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Genre\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"thumbnail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Song\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Song\",\"relationName\":\"GenreToSong\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Album\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Album\",\"relationName\":\"AlbumToGenre\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Playlist\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"playlistName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"thumbnail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"playlistSongs\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userCreatorId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UserCreator\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"PlaylistToUser\",\"relationFromFields\":[\"userCreatorId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Artist\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"thumbnail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Song\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Song\",\"relationName\":\"ArtistToSong\",\"relationFromFields\":[\"songsId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"songsId\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Album\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Album\",\"relationName\":\"AlbumToArtist\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"followedBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"ArtistToUser\",\"relationFromFields\":[\"likedBy\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"likedBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    MONGO_URI_DEV: typeof globalThis !== 'undefined' && globalThis['MONGO_URI_DEV'] || typeof process !== 'undefined' && process.env && process.env.MONGO_URI_DEV || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

