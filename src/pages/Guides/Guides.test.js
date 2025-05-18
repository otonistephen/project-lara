import React from "react";
import Guides from "./Guides";
import { render } from '@testing-library/react';



describe('Guides component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Guides>Click me!</Guides>);
    expect(getByText('Click me!')).toBeInTheDocument();
  });
});