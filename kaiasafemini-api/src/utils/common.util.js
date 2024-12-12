function isDevelopment() {
  return process.env.APP_ENV === "DEV";
}

module.exports = { isDevelopment };
