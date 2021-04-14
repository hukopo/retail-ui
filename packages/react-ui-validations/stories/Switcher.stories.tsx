import { storiesOf } from '@storybook/react';
import React from 'react';
import { Button } from '@skbkontur/react-ui/components/Button';
import { Switcher } from '@skbkontur/react-ui/components/Switcher/Switcher';

import { ValidationContainer, ValidationInfo, ValidationWrapper, text } from '../src';
import { Nullable } from '../typings/Types';

storiesOf('Switcher', module).add('required', () => <SwitcherStory />);

interface SwitcherStoryState {
  value: string;
}

class SwitcherStory extends React.Component<{}, SwitcherStoryState> {
  public state: SwitcherStoryState = {
    value: '',
  };

  private container: ValidationContainer | null = null;

  public validateValue(): Nullable<ValidationInfo> {
    const { value } = this.state;
    if (value !== 'string1') {
      return { message: 'Поле обязательно', type: 'submit' };
    }
    return null;
  }

  public render() {
    return (
      <div style={{ padding: '20px 20px' }}>
        <ValidationContainer ref={this.refContainer}>
          <ValidationWrapper validationInfo={this.validateValue()}>
            <Switcher items={['string1', 'string2']} onValueChange={value => this.setState({ value })} />
          </ValidationWrapper>
          <div style={{ padding: '20px 0' }}>
            <Button onClick={() => this.container && this.container.validate()}>Check</Button>
          </div>
        </ValidationContainer>
      </div>
    );
  }

  private refContainer = (el: ValidationContainer | null) => (this.container = el);
}
