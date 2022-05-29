import { newE2EPage } from '@stencil/core/testing';

describe('sage-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<sage-input></sage-input>');
    const element = await page.find('sage-input');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<sage-input></sage-input>');
    const component = await page.find('sage-input');
    const element = await page.find('sage-input >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});
