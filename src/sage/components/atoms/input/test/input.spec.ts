import { newSpecPage } from '@stencil/core/testing';
import { Input } from '../input';

describe('sage-input', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [Input],
      html: '<sage-input></sage-input>',
    });
    expect(root).toEqualHtml(`
      <sage-input>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </sage-input>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [Input],
      html: `<sage-input first="Stencil" last="'Don't call me a framework' JS"></sage-input>`,
    });
    expect(root).toEqualHtml(`
      <sage-input first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </sage-input>
    `);
  });
});
