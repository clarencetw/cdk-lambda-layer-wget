const { awscdk, Gitpod } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'clarencetw',
  authorAddress: 'mr.lin.clarence@gmail.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'cdk-lambda-layer-wget',
  repositoryUrl: 'https://github.com/clarencetw/cdk-lambda-layer-wget.git',
  keywords: ['aws', 'cdk', 'wget'],

  projenUpgradeSecret: 'PROJEN_GITHUB_TOKEN',
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['clarencetw'],
  },
  autoApproveUpgrades: true,

  catalog: {
    twitter: 'Clarence_Lin',
    announce: false,
  },

  publishToPypi: {
    distName: 'cdk-lambda-layer-wget',
    module: 'cdk_lambda_layer_wget',
  },
});

new Gitpod(project, {
  prebuilds: {
    addCheck: true,
    addBadge: true,
    addLabel: true,
    branches: true,
    pullRequests: true,
    pullRequestsFromForks: true,
  },
});

const common_exclude = ['cdk.out', 'cdk.context.json', 'yarn-error.log'];
project.gitignore.exclude(...common_exclude);

project.synth();