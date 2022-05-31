import { Component, h, Host, Listen, Prop, State } from '@stencil/core';
import { getClassnames } from 'src/sage/utils/getClassnames';

/** @internal **/
@Component({
  tag: 'docs-exmaple',
  styleUrl: 'docs-example.css',
  shadow: false,
})
export class DocsExample {
  /** Centers examples */
  @Prop() centered = false;

  /** Web Component markup encoded as URI component */
  @Prop() code!: string;

  /** CSS component markup encoded as URI component. */
  @Prop() codeCssComponent: string;

  /** Opens code view on initial load. */
  @Prop() opened = false;

  /** Custom show-container styles. */
  @Prop() styles = '{}';

  /** Is code toggled to be visible */
  @State() isCodeVisible = this.opened;

  /** Is Web Component visible (as opposed to the css component version) */
  @State() isWebComponent = true;

  @Listen('toggleCode')
  handleToggleCode(event: CustomEvent<boolean>) {
    this.isCodeVisible = event.detail;
  }

  render() {
    const cl = [
      'docs-example',
      this.isCodeVisible && 'docs-example--code-visible',
      // this.hasBorder && 'docs-example--has-border',
      // this.hasPadding && 'docs-example--has-padding',
      this.isWebComponent ? 'docs-example--web-component' : ' docs-example--css-component',
    ];

    let clShow = 'docs-example__show';
    if (this.centered) clShow += ' docs-example__show--centered';

    return (
      <Host class={getClassnames(cl)}>
        <div class={clShow} style={JSON.parse(this.styles)}>
          <slot name="show"></slot>
        </div>
        <div class="docs-example__tools-scroll-container">
          <div class="docs-example__tools">
            {this.codeCssComponent && <docs-switch-web-css></docs-switch-web-css>}
            <div class="docs-example__tool-buttons">
              {/* <docs-copy-to-cb textToCopy={decodeURIComponent(this.isWebComponent ? this.code : this.codeCssComponent)} /> */}
              {/* <docs-toggle-code isOn={this.isCodeVisible} /> */}
            </div>
          </div>
        </div>
        <div class="docs-example__code">
          <slot name="code"></slot>
          <slot name="codeCssComponent"></slot>
        </div>
      </Host>
    );
  }
}
