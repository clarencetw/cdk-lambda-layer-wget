# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WgetLayer <a name="WgetLayer" id="cdk-lambda-layer-wget.WgetLayer"></a>

An AWS Lambda layer that includes the wget.

#### Initializers <a name="Initializers" id="cdk-lambda-layer-wget.WgetLayer.Initializer"></a>

```typescript
import { WgetLayer } from 'cdk-lambda-layer-wget'

new WgetLayer(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-lambda-layer-wget.WgetLayer.Initializer.parameter.scope">scope</a></code> | <code>@aws-cdk/core.Construct</code> | *No description.* |
| <code><a href="#cdk-lambda-layer-wget.WgetLayer.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-lambda-layer-wget.WgetLayer.Initializer.parameter.scope"></a>

- *Type:* @aws-cdk/core.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-lambda-layer-wget.WgetLayer.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-lambda-layer-wget.WgetLayer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-lambda-layer-wget.WgetLayer.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#cdk-lambda-layer-wget.WgetLayer.addPermission">addPermission</a></code> | Add permission for this layer version to specific entities. |

---

##### `toString` <a name="toString" id="cdk-lambda-layer-wget.WgetLayer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-lambda-layer-wget.WgetLayer.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-lambda-layer-wget.WgetLayer.applyRemovalPolicy.parameter.policy"></a>

- *Type:* @aws-cdk/core.RemovalPolicy

---

##### `addPermission` <a name="addPermission" id="cdk-lambda-layer-wget.WgetLayer.addPermission"></a>

```typescript
public addPermission(id: string, permission: LayerVersionPermission): void
```

Add permission for this layer version to specific entities.

Usage within
the same account where the layer is defined is always allowed and does not
require calling this method. Note that the principal that creates the
Lambda function using the layer (for example, a CloudFormation changeset
execution role) also needs to have the ``lambda:GetLayerVersion``
permission on the layer version.

###### `id`<sup>Required</sup> <a name="id" id="cdk-lambda-layer-wget.WgetLayer.addPermission.parameter.id"></a>

- *Type:* string

---

###### `permission`<sup>Required</sup> <a name="permission" id="cdk-lambda-layer-wget.WgetLayer.addPermission.parameter.permission"></a>

- *Type:* @aws-cdk/aws-lambda.LayerVersionPermission

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-lambda-layer-wget.WgetLayer.isConstruct">isConstruct</a></code> | Return whether the given object is a Construct. |
| <code><a href="#cdk-lambda-layer-wget.WgetLayer.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#cdk-lambda-layer-wget.WgetLayer.fromLayerVersionArn">fromLayerVersionArn</a></code> | Imports a layer version by ARN. |
| <code><a href="#cdk-lambda-layer-wget.WgetLayer.fromLayerVersionAttributes">fromLayerVersionAttributes</a></code> | Imports a Layer that has been defined externally. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-lambda-layer-wget.WgetLayer.isConstruct"></a>

```typescript
import { WgetLayer } from 'cdk-lambda-layer-wget'

WgetLayer.isConstruct(x: any)
```

Return whether the given object is a Construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-lambda-layer-wget.WgetLayer.isConstruct.parameter.x"></a>

- *Type:* any

---

##### `isResource` <a name="isResource" id="cdk-lambda-layer-wget.WgetLayer.isResource"></a>

```typescript
import { WgetLayer } from 'cdk-lambda-layer-wget'

WgetLayer.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-lambda-layer-wget.WgetLayer.isResource.parameter.construct"></a>

- *Type:* @aws-cdk/core.IConstruct

---

##### `fromLayerVersionArn` <a name="fromLayerVersionArn" id="cdk-lambda-layer-wget.WgetLayer.fromLayerVersionArn"></a>

```typescript
import { WgetLayer } from 'cdk-lambda-layer-wget'

WgetLayer.fromLayerVersionArn(scope: Construct, id: string, layerVersionArn: string)
```

Imports a layer version by ARN.

Assumes it is compatible with all Lambda runtimes.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-lambda-layer-wget.WgetLayer.fromLayerVersionArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="cdk-lambda-layer-wget.WgetLayer.fromLayerVersionArn.parameter.id"></a>

- *Type:* string

---

###### `layerVersionArn`<sup>Required</sup> <a name="layerVersionArn" id="cdk-lambda-layer-wget.WgetLayer.fromLayerVersionArn.parameter.layerVersionArn"></a>

- *Type:* string

---

##### `fromLayerVersionAttributes` <a name="fromLayerVersionAttributes" id="cdk-lambda-layer-wget.WgetLayer.fromLayerVersionAttributes"></a>

```typescript
import { WgetLayer } from 'cdk-lambda-layer-wget'

WgetLayer.fromLayerVersionAttributes(scope: Construct, id: string, attrs: LayerVersionAttributes)
```

Imports a Layer that has been defined externally.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-lambda-layer-wget.WgetLayer.fromLayerVersionAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

the parent Construct that will use the imported layer.

---

###### `id`<sup>Required</sup> <a name="id" id="cdk-lambda-layer-wget.WgetLayer.fromLayerVersionAttributes.parameter.id"></a>

- *Type:* string

the id of the imported layer in the construct tree.

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="cdk-lambda-layer-wget.WgetLayer.fromLayerVersionAttributes.parameter.attrs"></a>

- *Type:* @aws-cdk/aws-lambda.LayerVersionAttributes

the properties of the imported layer.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-lambda-layer-wget.WgetLayer.property.node">node</a></code> | <code>@aws-cdk/core.ConstructNode</code> | The construct tree node associated with this construct. |
| <code><a href="#cdk-lambda-layer-wget.WgetLayer.property.env">env</a></code> | <code>@aws-cdk/core.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-lambda-layer-wget.WgetLayer.property.stack">stack</a></code> | <code>@aws-cdk/core.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-lambda-layer-wget.WgetLayer.property.layerVersionArn">layerVersionArn</a></code> | <code>string</code> | The ARN of the Lambda Layer version that this Layer defines. |
| <code><a href="#cdk-lambda-layer-wget.WgetLayer.property.compatibleRuntimes">compatibleRuntimes</a></code> | <code>@aws-cdk/aws-lambda.Runtime[]</code> | The runtimes compatible with this Layer. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-lambda-layer-wget.WgetLayer.property.node"></a>

```typescript
public readonly node: ConstructNode;
```

- *Type:* @aws-cdk/core.ConstructNode

The construct tree node associated with this construct.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-lambda-layer-wget.WgetLayer.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* @aws-cdk/core.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-lambda-layer-wget.WgetLayer.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* @aws-cdk/core.Stack

The stack in which this resource is defined.

---

##### `layerVersionArn`<sup>Required</sup> <a name="layerVersionArn" id="cdk-lambda-layer-wget.WgetLayer.property.layerVersionArn"></a>

```typescript
public readonly layerVersionArn: string;
```

- *Type:* string

The ARN of the Lambda Layer version that this Layer defines.

---

##### `compatibleRuntimes`<sup>Optional</sup> <a name="compatibleRuntimes" id="cdk-lambda-layer-wget.WgetLayer.property.compatibleRuntimes"></a>

```typescript
public readonly compatibleRuntimes: Runtime[];
```

- *Type:* @aws-cdk/aws-lambda.Runtime[]

The runtimes compatible with this Layer.

---





