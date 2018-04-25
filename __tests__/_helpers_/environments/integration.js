import NodeEnvironment from 'jest-environment-node';

class IntegrationEnvironment extends NodeEnvironment {
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

export default IntegrationEnvironment;
