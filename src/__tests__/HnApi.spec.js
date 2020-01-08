import axios from 'axios';
import {getStoryIds, getStory, newStoriesUrl, storyUrl} from '../services/hnApi';
import {singularStory, storyIds, emptySingularStory} from '../fixtures';

jest.mock('axios');

describe('HackerNew Api', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    describe('getStory functionality', () => {
        it('requests and gets a story from the HackerNews Api', async () => {
            // Every time you got mockImplementation you will need to have jest.mock('XXX'); at the top
            // console.log('axios', axios);
            axios.get.mockImplementation(() =>
                Promise.resolve({data: singularStory})
            );

            const entity = await getStory(1);
            expect(axios.get).toHaveBeenCalledTimes(1);
            expect(axios.get).toHaveBeenCalledWith(`${storyUrl+1}.json`);
            expect(entity).toEqual(singularStory);
        });

        it('does not retrieve a story from the Api, but handles gracefully', async () => {
            axios.get.mockImplementation(() =>
                Promise.resolve({data: emptySingularStory})
            );

            const entity = await getStory(1);
            expect(axios.get).toHaveBeenCalledTimes(1);
            expect(axios.get).toHaveBeenCalledWith(`${storyUrl+1}.json`);
            expect(entity).toEqual(emptySingularStory);
        });
    })
});
