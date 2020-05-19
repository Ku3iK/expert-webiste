import React from 'react';
import Nav from './Nav';
import { ThemeProvider } from "styled-components";
import theme from '../../themes/theme'
import routes from '../../layouts/paths';

import { render, fireEvent } from '@testing-library/react';

describe("Navigation", () => {
    it("reders all of links with right paths", () => {
        const { getByText } = render(<ThemeProvider theme={theme}><Nav routes={routes} /></ThemeProvider>)
        routes.forEach((el) => {
            expect(getByText(new RegExp(el.name, "i"))).toHaveAttribute('href', el.path)
        })
    });
})