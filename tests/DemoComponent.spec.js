/* eslint-disable no-undef */
import DemoComponent from '../src/components/demo/DemoComponent';

const demoComponent = new DemoComponent();

test('demoFn should return the expected value', () => {
  expect(demoComponent.demoFn()).toBe('Hello, World!');
});
