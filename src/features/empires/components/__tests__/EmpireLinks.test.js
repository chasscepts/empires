import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import sample from '../test_helpers/sampleEmpires';
import RouterWrapper from '../test_helpers/RouterWrapper';
import EmpireLinks from '../EmpireLinks';

jest.mock('axios');

function Links () {
  return <EmpireLinks empires={sample.civilizations} />;
}

describe('EmpireLinks', () => {
  it('matches snapshot', () => {
    const tree = renderer
      .create(<RouterWrapper component={Links} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('displays all empire links', () => {
    render(<RouterWrapper component={Links} />);
    expect(screen.getByText(sample.civilizations[0].name)).toBeInTheDocument();
    expect(screen.getByText(sample.civilizations[1].name)).toBeInTheDocument();
  });
});
