import React from 'react';
import ThemeSwitch from './ThemeSwitch';
import { shallow } from 'enzyme';

import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';

test('changes the theme to dark on first click', async () => {

    const wrapper = render(
        <Provider store={store}>
          <ThemeSwitch />
        </Provider>
    );

    const initialState = store.getState();
    // console.log(initialState.theme.theme);
    const slider = await wrapper.findByRole('button');

    slider.dispatchEvent(new MouseEvent('click', {bubbles: true}));

    const newState = store.getState();
    // console.log(newState.theme.theme);
    expect(newState.theme.theme).toEqual('dark');
});

test('changes the theme to light on second click', async () => {

    const wrapper = render(
        <Provider store={store}>
          <ThemeSwitch />
        </Provider>
    );

    const slider = await wrapper.findByRole('button');

    const firstState = store.getState();
    // console.log(firstState.theme.theme);

    slider.dispatchEvent(new MouseEvent('click', {bubbles: true}));

    const secondState = store.getState();
    // console.log(secondState.theme.theme);

    expect(secondState.theme.theme).toEqual('light');
});