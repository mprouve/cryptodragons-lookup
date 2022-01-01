let env

if (
  process.env.REACT_APP_NODE_ENV === "local" ||
  process.env.REACT_APP_NODE_ENV === "development" ||
  process.env.REACT_APP_NODE_ENV === "undefined" ||
  typeof process.env.REACT_APP_NODE_ENV === "undefined"
) {
  env = "local"
} else if (process.env.REACT_APP_NODE_ENV === "staging") {
  env = "staging"
} else {
  env = "production"
}

const GLOBAL_CONFIG = {}

// ****************************************
// PRODUCTION *****************************
// ****************************************
const production = {
  ...GLOBAL_CONFIG,
  debug: false,
  api: "https://api.cryptodragons.com/api-service/v1",
}

// ****************************************
// STAGING ********************************
// ****************************************
const staging = {
  ...GLOBAL_CONFIG,
  debug: true,
  api: "https://api.cryptodragons.com/api-service/v1",
}

// ****************************************
// LOCAL **********************************
// ****************************************
const local = {
  ...GLOBAL_CONFIG,
  debug: true,
  api: "https://api.cryptodragons.com/api-service/v1",
}

const config = {
  production,
  staging,
  local,
}

export default config[env]
