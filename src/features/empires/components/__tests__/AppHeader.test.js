import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import RouterWrapper from '../test_helpers/RouterWrapper';
import AppHeader from '../AppHeader';

it('matches snapshot', () => {
  const tree = renderer
    .create(<RouterWrapper component={AppHeader} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

describe('AppHeader', () => {
  beforeEach(() => {
    render(<RouterWrapper component={AppHeader} />);
  });

  it('displays the heading', () => {
    expect(screen.getByText('Age Of Empires II')).toBeInTheDocument();
  });

  it('displays the home link', () => {
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});
