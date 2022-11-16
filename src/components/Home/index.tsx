import React, { useState } from 'react';
import { TOTAL_NUMBERS } from '../../constants';
import { isMultiple } from '../../utils';
import NumberButton from '../NumberButton';
import { Container, Heading, MultiplierWrapper, SubHeading } from './styles';

type HomeProps = { numberOfButtons?: number };

const Home: React.FC<HomeProps> = ({ numberOfButtons = TOTAL_NUMBERS }) => {
  const [selectedNumber, setSelectedNumber] = useState<number>(0);

  const clickHandler = (value: number) => {
    setSelectedNumber(value);
  };

  return (
    <Container>
      <Heading>Math Fun!</Heading>
      <SubHeading>Click on a number to see its multiples.</SubHeading>

      <MultiplierWrapper>
        {[...new Array(numberOfButtons)].map((_, idx) => (
          <NumberButton
            key={idx}
            isHighlighted={isMultiple(idx + 1, selectedNumber)}
            onClick={() => clickHandler(idx + 1)}
          >
            {idx + 1}
          </NumberButton>
        ))}
      </MultiplierWrapper>
    </Container>
  );
};

export default Home;
