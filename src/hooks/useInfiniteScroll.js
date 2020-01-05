import {useState, useEffect} from 'react';
import {STORY_INCREMENT} from "../constants";

export const useInfiniteScroll = () => {
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(STORY_INCREMENT);

    const handleScroll = () => {
        console.log('window==============', window);
    };

    handleScroll();
};
