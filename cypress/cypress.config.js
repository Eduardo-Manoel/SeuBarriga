const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'mswjpr',
  viewportHeight: 880,
  viewportWidth: 1280,
  CYPRESS_RECORD_KEY:'a72a2449-b6f1-40d2-a04c-839d991db88f',
  e2e: {
    baseUrl:'https://seubarriga.wcaquino.me/login',
      //slowTestThreshold: 1000,
    env: {
      user_name: "user4@user.com",
      user_password: "123",
      gitlab_access_token: "_NyV7MWBrHciGDHvcrMy",
      setupNodeEvents(on, config) {
      }
    },
  },
});

