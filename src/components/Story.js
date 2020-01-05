import React, {useState, useEffect} from 'react';
import {getStory} from '../services/hnApi';

export const Story = ({storyId}) => {
    useEffect(() => {
        getStory(storyId).then(data => console.log(data));
    }, []);

    return <p>I am a story! {storyId}</p>;
};
