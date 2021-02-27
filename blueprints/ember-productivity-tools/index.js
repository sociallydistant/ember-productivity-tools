'use strict';

module.exports = {
  normalizeEntityName() {}, // no-op since we're just adding dependencies

  afterInstall() {
    // Add addons to package.json and run defaultBlueprint
    return this.addAddonsToProject({
      // a packages array defines the addons to install
      packages: [
        // name is the addon name, and target (optional) is the version
        { name: '@fortawesome/ember-fontawesome', target: '^0.2.3' } //,
        // { name: 'ember-cli-sass' }
      ]
    }).then(() => {
      // Add npm packages to package.json
      return this.addPackagesToProject([
        { name: '@fortawesome/free-regular-svg-icons', target: '^5.15.2' },
        { name: '@fortawesome/free-solid-svg-icons', target: '^5.15.2' }
      ]);
    });
  }
};
