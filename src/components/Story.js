import React, {useState, useEffect, memo} from 'react';
import {getStory} from '../services/hnApi';
import {StoryMeta, StoryMetaElement, StoryTitle, StoryWrapper} from "../styles/StoryStyles";
import {mapTime} from "../mappers/mapTime";

// export const Story = ({storyId}) => {
export const Story = memo(function Story({storyId}) {
    const [story, setStory] = useState({});

    useEffect(() => {
        // console.log('storyId', storyId);
        getStory(storyId).then(data => data && data.url && setStory(data));
    }, []);

    return story && story.url ? (
        <StoryWrapper data-testid="story">
            <StoryTitle>
                <a href={story.url}>{story.title}</a>
            </StoryTitle>
            <StoryMeta>
                <span data-testid="story-by">
                    <StoryMetaElement color="#000">By:</StoryMetaElement> {story.by}
                </span>
                <span data-testid="story-time">
                    <StoryMetaElement color="#000">Posted:</StoryMetaElement> {mapTime(story.time)}
                </span>
            </StoryMeta>
        </StoryWrapper>
    ) : null
});
