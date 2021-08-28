import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import store from '../app/store';
import sample from '../features/empires/components/test_helpers/sampleEmpires';
import App from '../App';

jest.mock('axios');

function Wrapper() {
  return (
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  );
}

describe('App', () => {
  beforeEach(() => {
    axios.get.mockImplementation(() => Promise.resolve({ data: sample }));
  });

  it('displays the heading', () => {
    render(<Wrapper />);
    expect(screen.getByText('Age Of Empires II')).toBeInTheDocument();
  });

  it('displays 2 empire links', async () => {
    render(<Wrapper />);
    expect(await screen.findByText(sample.civilizations[0].name)).toBeInTheDocument();
    expect(screen.getByText(sample.civilizations[1].name)).toBeInTheDocument();
  });

  it('navigates to details page when link clicked', async () => {
    render(<Wrapper />);
    await screen.findByText(sample.civilizations[0].name);
    await userEvent.click(screen.getByText(sample.civilizations[0].name));
    expect(await screen.findByText(sample.civilizations[0].name)).toBeInTheDocument();
    expect(screen.getByText(sample.civilizations[0].expansion)).toBeInTheDocument();
  });
});
