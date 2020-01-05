// hnApi stands for Hacker News Api
import axios from 'axios';

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const storyUrl = `${baseUrl}item/`;

export const getStory = async (storyId) => {
    // Or you can do ${storyUrl+storyId}.json
    const result = await axios.get(`${storyUrl}${storyId}.json`).then(({data}) => data);
    return result;
};

export const getStoryIds = async () => {
    const result = await axios.get(newStoriesUrl).then(({data}) => data);
    return result;
};
