import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import RouterWrapper from '../test_helpers/RouterWrapper';
import EmpireDetails from '../EmpireDetails';
import sample from '../test_helpers/sampleEmpires';

const empire = sample.civilizations[0];

function Details() {
  return <EmpireDetails empire={empire} />;
}

it('matches snapshot', () => {
  const tree = renderer
    .create(<RouterWrapper component={Details} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

describe('AppHeader', () => {
  beforeEach(() => {
    render(<RouterWrapper component={Details} />);
  });

  it('displays the name', () => {
    expect(screen.getByText(empire.name)).toBeInTheDocument();
  });

  it('displays the expansion', () => {
    expect(screen.getByText(empire.expansion)).toBeInTheDocument();
  });
});
