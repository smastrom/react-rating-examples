import { MinimalConfiguration, MinimalConfigurationCode } from './1.MinimalConfiguration';
import {
  MinimalConfigurationRO,
  MinimalConfigurationROCode,
} from './2.MinimalConfigurationRO';

const toSnakeCase = (string) =>
  string.split(' ').join('_').replace('-', '').replace('__', '_').toLowerCase();

class Example {
  constructor(title, jsx, code) {
    this.title = title;
    this.id = toSnakeCase(this.title);
    this.jsx = <div style={{ maxWidth: 250, width: '100%' }}>{jsx}</div>;
    this.code = code.trimStart();
  }
}

export const examples = [
  new Example(
    'Minimal Configuration - RadioGroup',
    <MinimalConfiguration />,
    MinimalConfigurationCode
  ),
  new Example(
    'Minimal Configuration - Image',
    <MinimalConfigurationRO />,
    MinimalConfigurationROCode
  ),
  new Example(
    'Minimal Configuration - Image - 3',
    <MinimalConfigurationRO />,
    MinimalConfigurationROCode
  ),
  new Example(
    'Minimal Configuration - Image - 4',
    <MinimalConfigurationRO />,
    MinimalConfigurationROCode
  ),
  new Example(
    'Minimal Configuration - Image - 5',
    <MinimalConfigurationRO />,
    MinimalConfigurationCode
  ),
  new Example(
    'Minimal Configuration - Image - 6',
    <MinimalConfigurationRO />,
    MinimalConfigurationROCode
  ),
  new Example(
    'Minimal Configuration - Image - 7',
    <MinimalConfigurationRO />,
    MinimalConfigurationCode
  ),
  new Example(
    'Minimal Configuration - Image - 8',
    <MinimalConfigurationRO />,
    MinimalConfigurationROCode
  ),
  new Example(
    'Minimal Configuration - Image - 9',
    <MinimalConfigurationRO />,
    MinimalConfigurationROCode
  ),
  new Example(
    'Minimal Configuration - Image - 10',
    <MinimalConfigurationRO />,
    MinimalConfigurationROCode
  ),
  new Example(
    'Minimal Configuration - Image - 11',
    <MinimalConfigurationRO />,
    MinimalConfigurationCode
  ),
  new Example(
    'Minimal Configuration - Image - 12',
    <MinimalConfigurationRO />,
    MinimalConfigurationROCode
  ),
  new Example(
    'Minimal Configuration - Image - 13',
    <MinimalConfigurationRO />,
    MinimalConfigurationROCode
  ),
];
