import { Stack } from 'aws-cdk-lib';
import * as assertions from 'aws-cdk-lib/assertions';
import { WgetLayer as WgetLayer } from '../src';

test('synthesized to a layer version', () => {
  //GIVEN
  const stack = new Stack();

  // WHEN
  new WgetLayer(stack, 'MyLayer');

  // THEN
  assertions.Template.fromStack(stack).hasResourceProperties('AWS::Lambda::LayerVersion', {
    Description: '/opt/wget',
  });
});