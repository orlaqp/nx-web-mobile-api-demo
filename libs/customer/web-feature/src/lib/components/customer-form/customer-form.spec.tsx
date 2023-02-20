import { render } from '@testing-library/react';

import CustomerForm from './customer-form';

describe('CustomerForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CustomerForm />);
    expect(baseElement).toBeTruthy();
  });
});
