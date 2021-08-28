import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import ErrorPage from '../ErrorPage';

const message = 'Test Error';

it('matches snapshot', () => {
  const tree = renderer
    .create(<ErrorPage message={message} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

describe('AppHeader', () => {
  beforeEach(() => {
    render(<ErrorPage message={message} />);
  });

  it('displays the heading', () => {
    expect(screen.getByText('Error')).toBeInTheDocument();
  });

  it('displays the message', () => {
    expect(screen.getByText(message)).toBeInTheDocument();
  });
});
