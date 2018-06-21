const dotenv = require('dotenv')
const Joi = require('joi')
const path = require('path')
const fs = require('fs')

/* Configure dotenv to load vars in .env file into process.env */
dotenv.config({ path: path.resolve(path.join(__dirname, '../.env')) })

/* Overwrite dotenv with the specific environment one if it exist */
if (process.env && process.env.NODE_ENV) {
  const env = dotenv.parse(fs.readFileSync(path.resolve(path.join(__dirname, `../.env.${process.env.NODE_ENV}`))))
  for (let k in env) {
    process.env[k] = env[k]
  }
}

/* Define environment validation schema allowing Joi to verify that we have all the env vars we need */
const envSchema = Joi.object({
  NODE_ENV: Joi.string().allow(['development', 'production', 'test']).required(),
  PORT: Joi.number().integer().positive().required(),
  HOST: Joi.string().required(),
  SSL_ENABLED: Joi.bool().default(false),
})
  .unknown() // Allow other variables to be in the process.env
  .required()

const { error, value } = Joi.validate(process.env, envSchema)

if (error) {
  throw new Error(`Config validation error: ${error.message}`)
}

/* Pick only the env vars that we want to use */
const config = {
  host: value.HOST,
  port: value.PORT,
  env: value.NODE_ENV,
  sslEnabled: value.SSL_ENABLED,
}

module.exports = config;
