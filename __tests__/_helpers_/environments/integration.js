import NodeEnvironment from 'jest-environment-node';

export default class IntegrationEnvironment extends NodeEnvironment {
  async setup() {
    await super.setup();
  }

  async teardown() {
    await super.teardown();
  }

  runScript(script) {
    return super.runScript(script);
  }
}
