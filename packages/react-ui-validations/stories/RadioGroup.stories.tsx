import React from 'react';
import { Button } from '@skbkontur/react-ui/components/Button';
import { RadioGroup } from '@skbkontur/react-ui/components/RadioGroup';
import { Radio } from '@skbkontur/react-ui/components/Radio';
import { CSFStory } from 'creevey';

import { ValidationContainer, ValidationInfo, ValidationWrapper } from '../src';
import { Nullable } from '../typings/Types';

export default { title: `RadioGroup` };

type Sex = 'male' | 'female';

const validateSex = (sex: Nullable<Sex>): Nullable<ValidationInfo> => {
  if (sex == null) {
    return { message: 'Должно быть не пусто', type: 'submit' };
  }
  return null;
};

export const RadioGroupStory: CSFStory<JSX.Element> = () => {
  const [sex, setSex] = React.useState<Nullable<Sex>>(null);
  const [container, refContainer] = React.useState<ValidationContainer | null>(null);
  return (
    <div style={{ padding: '20px 20px' }}>
      <ValidationContainer ref={refContainer}>
        <ValidationWrapper validationInfo={validateSex(sex)}>
          <RadioGroup<Nullable<Sex>>
            value={sex}
            items={['male', 'female'] as Sex[]}
            renderItem={(x) => <span>{x}</span>}
            onValueChange={setSex}
          />
        </ValidationWrapper>
        <div style={{ padding: '100px 0' }}>
          <Button onClick={() => container && container.validate()}>Check</Button>
        </div>
      </ValidationContainer>
    </div>
  );
};

export const RadioGroupChildrenStory: CSFStory<JSX.Element> = () => {
  const [sex, setSex] = React.useState<Nullable<Sex>>(null);
  const [container, refContainer] = React.useState<ValidationContainer | null>(null);
  return (
    <div style={{ padding: '20px 20px' }}>
      <ValidationContainer ref={refContainer}>
        <ValidationWrapper validationInfo={validateSex(sex)}>
          <RadioGroup<Nullable<Sex>> value={sex} onValueChange={setSex}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Radio value={'male'}>male</Radio>
              <Radio value={'female'}>female</Radio>
            </div>
          </RadioGroup>
        </ValidationWrapper>
        <div style={{ padding: '100px 0' }}>
          <Button onClick={() => container && container.validate()}>Check</Button>
        </div>
      </ValidationContainer>
    </div>
  );
};
