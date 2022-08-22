const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      user_name: "root",
      user_password: "19202122",
      gitlab_access_token: "_NyV7MWBrHciGDHvcrMy",
      setupNodeEvents(on, config) {
      }
    },
  },
});
