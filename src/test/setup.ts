import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { afterEach } from '@jest/globals';
import { TextDecoder, TextEncoder } from 'util';

Object.defineProperty(window, 'TextEncoder', {
  writable: true,
  value: TextEncoder,
});

Object.defineProperty(window, 'TextDecoder', {
  writable: true,
  value: TextDecoder,
});

afterEach(() => {
  cleanup();
});
