import { Component, Prop, h } from '@stencil/core';
import { format } from '../../../utils/utils';

@Component({
  tag: 'sage-input',
  styleUrl: 'input.css',
  shadow: true,
})
export class Input {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div>Hello, World! I'm {this.getText()}</div>;
  }
}
