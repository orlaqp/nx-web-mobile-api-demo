import { render } from '@testing-library/react';

import UiModal from './ui-modal';

describe('UiModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiModal />);
    expect(baseElement).toBeTruthy();
  });
});
