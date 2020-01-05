import React, {useEffect, useState} from 'react';
import {getStoryIds, getStory} from '../services/hnApi';
import {Story} from "../components/Story";
import {StoryWrapper} from "../styles/StoryStyles";

export const StoriesContainer = () => {
    const [storyIds, setStoryIds] = useState([]);

    useEffect(() => {
        getStoryIds().then(data => setStoryIds(data));
    }, []);

    return (
        <StoryWrapper data-testid="story">
            <h1>Hacker News Stories</h1>
            {storyIds.map(storyId => (
                <Story key={storyId} storyId={storyId}/>
            ))}
        </StoryWrapper>
    );

};
