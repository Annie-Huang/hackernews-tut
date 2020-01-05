import React, {useState, useEffect} from 'react';
import {getStory} from '../services/hnApi';

export const Story = () => {
    useEffect(() => {
        getStory(20970623).then(data => console.log(data));
    }, []);

    return <p>I am a story!</p>;
};
