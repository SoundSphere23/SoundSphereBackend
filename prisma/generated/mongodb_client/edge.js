
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
  detectRuntime,
} = require('./runtime/edge')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.8.1
 * Query Engine version: 78caf6feeaed953168c64e15a249c3e9a033ebe2
 */
Prisma.prismaVersion = {
  client: "5.8.1",
  engine: "78caf6feeaed953168c64e15a249c3e9a033ebe2"
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
  "clientVersion": "5.8.1",
  "engineVersion": "78caf6feeaed953168c64e15a249c3e9a033ebe2",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mongodb",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "MONGO_URI_DEV",
        "value": null
      }
    }
  },
  "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwNCi8vIGxlYXJuIG1vcmUgYWJvdXQgaXQgaW4gdGhlIGRvY3M6IGh0dHBzOi8vcHJpcy5seS9kL3ByaXNtYS1zY2hlbWENCg0KZ2VuZXJhdG9yIGNsaWVudCB7DQogIHByb3ZpZGVyICAgICAgPSAicHJpc21hLWNsaWVudC1qcyINCiAgb3V0cHV0ICAgICAgICA9ICIuL2dlbmVyYXRlZC9tb25nb2RiX2NsaWVudCINCiAgYmluYXJ5VGFyZ2V0cyA9IFsibmF0aXZlIiwgImRhcndpbi1hcm02NCJdDQp9DQoNCmRhdGFzb3VyY2UgZGIgew0KICBwcm92aWRlciA9ICJtb25nb2RiIg0KICB1cmwgICAgICA9IGVudigiTU9OR09fVVJJX0RFViIpDQp9DQoNCm1vZGVsIFVzZXIgew0KICBpZCAgICAgICAgICAgICAgIFN0cmluZyAgICAgQGlkIEBkZWZhdWx0KGF1dG8oKSkgQG1hcCgiX2lkIikgQGRiLk9iamVjdElkDQogIGNyZWF0ZWRBdCAgICAgICAgRGF0ZVRpbWUgICBAZGVmYXVsdChub3coKSkNCiAgdXBkYXRlZEF0ICAgICAgICBEYXRlVGltZSAgIEB1cGRhdGVkQXQNCiAgZW1haWwgICAgICAgICAgICBTdHJpbmcgICAgIEB1bmlxdWUNCiAgbmFtZSAgICAgICAgICAgICBTdHJpbmcNCiAgbGlrZVNvbmdzICAgICAgICBTb25nW10gICAgIEByZWxhdGlvbihuYW1lOiAiTGlrZWRTb25ncyIpDQogIHVwbG9hZFNvbmdzICAgICAgU29uZ1tdICAgICBAcmVsYXRpb24obmFtZTogIlVwbG9hZGVkU29uZ3MiKQ0KICBsaWtlQWxidW1zICAgICAgIEFsYnVtW10gICAgQHJlbGF0aW9uKG5hbWU6ICJMaWtlZEFsYnVtcyIpDQogIHVwbG9hZEFsYnVtcyAgICAgQWxidW1bXSAgICBAcmVsYXRpb24obmFtZTogIlVwbG9hZGVkQWxidW1zIikNCiAgcGxheWxpc3QgICAgICAgICBQbGF5bGlzdFtdDQogIGZhdm91cml0ZXNBcnRpc3QgQXJ0aXN0W10NCn0NCg0KbW9kZWwgU29uZyB7DQogIGlkICAgICAgICAgICAgU3RyaW5nICAgQGlkIEBkZWZhdWx0KGF1dG8oKSkgQG1hcCgiX2lkIikgQGRiLk9iamVjdElkDQogIGNyZWF0ZWRBdCAgICAgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpDQogIHVwZGF0ZWRBdCAgICAgRGF0ZVRpbWUgQHVwZGF0ZWRBdA0KICBuYW1lICAgICAgICAgIFN0cmluZw0KICB1cmwgICAgICAgICAgIFN0cmluZw0KICBkdXJhdGlvbiAgICAgIEludD8NCiAgcmF0aW5nICAgICAgICBJbnQ/DQogIHRodW1ibmFpbCAgICAgU3RyaW5nDQogIHJlcHJvZHVjdGlvbnMgSW50Pw0KICBpc1B1YmxpYyAgICAgIEJvb2xlYW4/DQogIHVzZXJDcmVhdG9ySWQgU3RyaW5nICAgQGRiLk9iamVjdElkDQogIFVzZXJDcmVhdG9yICAgVXNlciAgICAgQHJlbGF0aW9uKG5hbWU6ICJVcGxvYWRlZFNvbmdzIiwgZmllbGRzOiBbdXNlckNyZWF0b3JJZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogIGxpa2VkQnlJZCAgICAgU3RyaW5nW10gQGRiLk9iamVjdElkDQogIFVzZXJMaWtlICAgICAgVXNlcj8gICAgQHJlbGF0aW9uKG5hbWU6ICJMaWtlZFNvbmdzIiwgZmllbGRzOiBbbGlrZWRCeUlkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgQWxidW0gICAgICAgICBBbGJ1bT8gICBAcmVsYXRpb24oZmllbGRzOiBbYWxidW1JZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogIGFsYnVtSWQgICAgICAgU3RyaW5nPyAgQGRiLk9iamVjdElkDQogIEdlbnJlICAgICAgICAgR2VucmUgICAgQHJlbGF0aW9uKGZpZWxkczogW2dlbnJlSWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KICBnZW5yZUlkICAgICAgIFN0cmluZyAgIEBkYi5PYmplY3RJZA0KICBwbGF5bGlzdCAgICAgIFN0cmluZ1tdIEBkYi5PYmplY3RJZA0KYXJ0aXN0SWQgICBTdHJpbmcgICBAZGIuT2JqZWN0SWQNCiBBcnRpc3QgICAgIEFydGlzdCA/ICBAcmVsYXRpb24oZmllbGRzOiBbYXJ0aXN0SWRdLCByZWZlcmVuY2VzOiBbaWRdKSAvLyBFYWNoIHNvbmcgaXMgcmVsYXRlZCB0byBvbmUgYXJ0aXN0DQp9DQoNCm1vZGVsIEFsYnVtIHsNCiAgaWQgICAgICAgICAgICBTdHJpbmcgICBAaWQgQGRlZmF1bHQoYXV0bygpKSBAbWFwKCJfaWQiKSBAZGIuT2JqZWN0SWQNCiAgY3JlYXRlZEF0ICAgICBEYXRlVGltZSBAZGVmYXVsdChub3coKSkNCiAgdXBkYXRlZEF0ICAgICBEYXRlVGltZSBAdXBkYXRlZEF0DQogIG5hbWUgICAgICAgICAgU3RyaW5nDQogIHRodW1ibmFpbCAgICAgU3RyaW5nDQogIHRvdGFsVHJhY2tzICAgSW50Pw0KICBTb25nICAgICAgICAgIFNvbmdbXQ0KICBpc1B1YmxpYyAgICAgIEJvb2xlYW4/DQogIHVzZXJDcmVhdG9ySWQgU3RyaW5nICBAZGIuT2JqZWN0SWQNCiAgVXNlckNyZWF0b3IgICBVc2VyICAgIEByZWxhdGlvbihuYW1lOiAiVXBsb2FkZWRBbGJ1bXMiLCBmaWVsZHM6IFt1c2VyQ3JlYXRvcklkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgbGlrZWRCeUlkICAgICBTdHJpbmdbXSBAZGIuT2JqZWN0SWQNCiAgVXNlckxpa2UgICAgICBVc2VyPyAgICBAcmVsYXRpb24obmFtZTogIkxpa2VkQWxidW1zIiwgZmllbGRzOiBbbGlrZWRCeUlkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgR2VucmUgICAgICAgICBHZW5yZSAgICBAcmVsYXRpb24oZmllbGRzOiBbZ2VucmVJZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogIGdlbnJlSWQgICAgICAgU3RyaW5nICAgQGRiLk9iamVjdElkDQogIEFydGlzdCAgICAgICAgQXJ0aXN0PyAgQHJlbGF0aW9uKGZpZWxkczogW2FydGlzdElkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgYXJ0aXN0SWQgICAgICBTdHJpbmc/ICBAZGIuT2JqZWN0SWQNCn0NCg0KbW9kZWwgR2VucmUgew0KICBpZCAgICAgICAgU3RyaW5nICAgQGlkIEBkZWZhdWx0KGF1dG8oKSkgQG1hcCgiX2lkIikgQGRiLk9iamVjdElkDQogIGNyZWF0ZWRBdCBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpDQogIHRodW1ibmFpbCBTdHJpbmc/DQogIHVwZGF0ZWRBdCBEYXRlVGltZT8gQHVwZGF0ZWRBdA0KICBuYW1lICAgICAgU3RyaW5nDQogIFNvbmcgICAgICBTb25nW10NCiAgQWxidW0gICAgIEFsYnVtW10NCn0NCg0KbW9kZWwgUGxheWxpc3Qgew0KICBpZCAgICAgICAgICAgIFN0cmluZyAgIEBpZCBAZGVmYXVsdChhdXRvKCkpIEBtYXAoIl9pZCIpIEBkYi5PYmplY3RJZA0KICBjcmVhdGVkQXQgICAgIERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKQ0KICB1cGRhdGVkQXQgICAgIERhdGVUaW1lIEB1cGRhdGVkQXQNCiAgcGxheWxpc3ROYW1lICBTdHJpbmcgICBAdW5pcXVlDQogIHRodW1ibmFpbCAgICAgU3RyaW5nPw0KICBwbGF5bGlzdFNvbmdzIFN0cmluZ1tdIEBkYi5PYmplY3RJZA0KICB1c2VyQ3JlYXRvcklkIFN0cmluZyAgIEBkYi5PYmplY3RJZA0KICBVc2VyQ3JlYXRvciAgIFVzZXI/ICAgIEByZWxhdGlvbihmaWVsZHM6IFt1c2VyQ3JlYXRvcklkXSwgcmVmZXJlbmNlczogW2lkXSkNCn0NCg0KbW9kZWwgQXJ0aXN0IHsNCiAgaWQgICAgICAgICBTdHJpbmcgICBAaWQgQGRlZmF1bHQoYXV0bygpKSBAbWFwKCJfaWQiKSBAZGIuT2JqZWN0SWQNCiAgY3JlYXRlZEF0ICBEYXRlVGltZSBAZGVmYXVsdChub3coKSkNCiAgdXBkYXRlZEF0ICBEYXRlVGltZSBAdXBkYXRlZEF0DQogIG5hbWUgICAgICAgU3RyaW5nDQogIHRodW1ibmFpbCAgU3RyaW5nPw0KICBTb25nICAgICAgIFNvbmdbXSAgDQogIEFsYnVtICAgICAgQWxidW1bXQ0KICBmb2xsb3dlZEJ5IFVzZXI/ICAgIEByZWxhdGlvbihmaWVsZHM6IFtsaWtlZEJ5XSwgcmVmZXJlbmNlczogW2lkXSkNCiAgbGlrZWRCeSAgICBTdHJpbmc/ICBAZGIuT2JqZWN0SWQNCn0NCg==",
  "inlineSchemaHash": "679874d17ec2ac6147b9563337a64ecaa2e150f9940c0e142f41f0a128ffc113"
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"likeSongs\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Song\",\"relationName\":\"LikedSongs\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uploadSongs\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Song\",\"relationName\":\"UploadedSongs\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"likeAlbums\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Album\",\"relationName\":\"LikedAlbums\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uploadAlbums\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Album\",\"relationName\":\"UploadedAlbums\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"playlist\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Playlist\",\"relationName\":\"PlaylistToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"favouritesArtist\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Artist\",\"relationName\":\"ArtistToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Song\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"duration\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rating\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"thumbnail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reproductions\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isPublic\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userCreatorId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UserCreator\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"UploadedSongs\",\"relationFromFields\":[\"userCreatorId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"likedById\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UserLike\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"LikedSongs\",\"relationFromFields\":[\"likedById\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Album\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Album\",\"relationName\":\"AlbumToSong\",\"relationFromFields\":[\"albumId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"albumId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Genre\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Genre\",\"relationName\":\"GenreToSong\",\"relationFromFields\":[\"genreId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"genreId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"playlist\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"artistId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Artist\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Artist\",\"relationName\":\"ArtistToSong\",\"relationFromFields\":[\"artistId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Album\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"thumbnail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalTracks\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Song\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Song\",\"relationName\":\"AlbumToSong\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isPublic\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userCreatorId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UserCreator\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"UploadedAlbums\",\"relationFromFields\":[\"userCreatorId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"likedById\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UserLike\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"LikedAlbums\",\"relationFromFields\":[\"likedById\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Genre\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Genre\",\"relationName\":\"AlbumToGenre\",\"relationFromFields\":[\"genreId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"genreId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Artist\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Artist\",\"relationName\":\"AlbumToArtist\",\"relationFromFields\":[\"artistId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"artistId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Genre\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"thumbnail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Song\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Song\",\"relationName\":\"GenreToSong\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Album\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Album\",\"relationName\":\"AlbumToGenre\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Playlist\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"playlistName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"thumbnail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"playlistSongs\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userCreatorId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UserCreator\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"PlaylistToUser\",\"relationFromFields\":[\"userCreatorId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Artist\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"thumbnail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Song\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Song\",\"relationName\":\"ArtistToSong\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Album\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Album\",\"relationName\":\"AlbumToArtist\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"followedBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"ArtistToUser\",\"relationFromFields\":[\"likedBy\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"likedBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
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

