import React from 'react';
import {render, cleanup, waitForElement} from "@testing-library/react";
import { singularStory} from "../fixtures";
import {getStory} from "../services/hnApi";
import {Story} from "../components/Story";

beforeEach(() => {
    cleanup();
    jest.resetAllMocks();
});

jest.mock('../services/hnApi', () => ({
    getStory: jest.fn(),
}));

test('renders the story component with content', async () => {
    getStory.mockImplementation(() => Promise.resolve(singularStory));
    // console.log('getStory', getStory);

    const {getByText, getByTestId}  = render(<Story storyId="1" />);
    // getByTestId: it will throw an error if it returns false, so you don't need expect to surround it.
    // queryByTestId: you need the expect to surround it.

    await waitForElement(() => [
        expect(getByTestId('story')).toBeTruthy(),
        expect(getByText('Tarnished: Google Responds')).toBeTruthy(),
        expect(getByTestId('story-by').textContent).toEqual('By: Karl Hadwen')
    ]);
});
