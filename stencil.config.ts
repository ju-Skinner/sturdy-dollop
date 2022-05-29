import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';

import postcssConfig from './postcss.config';

export const config: Config = {
  buildEs5: false,
  extras: {
    appendChildSlotFix: false,
    cloneNodeFix: false,
    cssVarsShim: false,
    dynamicImportShim: false,
    safari10: false,
    shadowDomShim: false,
    slotChildNodesFix: false,
  },
  namespace: 'sage-future',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      autoDefineCustomElements: true,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'docs-vscode',
      file: 'tmp/web-components.html-data.json',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [postcss(postcssConfig)],
  srcDir: 'src/sage',
  testing: {
    allowableMismatchedPixels: 0,
    setupFiles: ['./jest.setup.js'],
    moduleDirectories: ['node_modules', './'],
    timers: 'legacy',
  },
};
