# AWS Lambda Layer with wget

[![NPM version](https://badge.fury.io/js/cdk-lambda-layer-wget.svg)](https://badge.fury.io/js/cdk-lambda-layer-wget)
[![PyPI version](https://badge.fury.io/py/cdk-lambda-layer-wget.svg)](https://badge.fury.io/py/cdk-lambda-layer-wget)
![Release](https://github.com/clarencetw/cdk-lambda-layer-wget/workflows/release/badge.svg)
[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/clarencetw/cdk-lambda-layer-wget)

Usage:

```ts
// WgetLayer bundles the wget in a lambda layer
import { WgetLayer } from 'cdk-lambda-layer-wget';

declare const fn: lambda.Function;
fn.addLayers(new WgetLayer(this, 'WgetLayer'));
```

```ts
import { WgetLayer } from 'cdk-lambda-layer-wget'
import * as lambda from 'aws-cdk-lib/aws-lambda'

new lambda.Function(this, 'MyLambda', {
  code: lambda.Code.fromAsset(path.join(__dirname, 'my-lambda-handler')),
  handler: 'index.main',
  runtime: lambda.Runtime.PYTHON_3_9,
  layers: [new WgetLayer(this, 'WgetLayer')]
});
```