import dotenv from "dotenv";

type TCONFIG = {
  [key: string]: EnvironmentConfig;
};

type EnvironmentConfig = {
  app: AppConfig;
  auth0: Auth0Config;
};

type Auth0Config = {
  client_origin: string;
  audience: string;
  issuer: string;
};

type AppConfig = {
  PORT: string | number;
};

if (process.env.NODE_ENV === "production") {
  dotenv.config({ path: ".env.production" });
} else {
  dotenv.config({ path: ".env.development" });
}

const ENV = process.env.NODE_ENV ?? "development";

const CONFIG: TCONFIG = {
  development: {
    app: {
      PORT: process.env.PORT || 4001,
    },
    auth0: {
      client_origin: process.env.APP_ORIGIN || "http://localhost:5173",
      audience: process.env.AUTH0_AUDIENCE || "http://localhost:8080",
      issuer: process.env.AUTH0_ISSUER || "",
    },
  },
  production: {
    app: {
      PORT: process.env.PORT || 4002,
    },
    auth0: {
      client_origin: process.env.APP_ORIGIN || "http://localhost:5173",
      audience: process.env.AUTH0_AUDIENCE || "http://localhost:8080",
      issuer: process.env.AUTH0_ISSUER || "",
    },
  },
};

export default CONFIG[ENV];
