import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { TemplateNameLayout } from './TemplateName';

describe('<TemplateNameLayout />', () => {
  test('it should mount', () => {
    render(<TemplateNameLayout />);

    const templateNameLayout = screen.getByTestId('templateNameLayout');

    expect(templateNameLayout).toBeInTheDocument();
  });
});
