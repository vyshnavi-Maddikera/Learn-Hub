"use client"
import Accordion from '@/components/course/Accordion';
import VideoPlayer from '@/components/course/VideoPlayer';
import axios from '@/utils/axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Video = ({ params }) => {

    const router = useRouter();
    const { isLoggedIn } = useSelector((state) => state.auth);

    useEffect(() => {
        if (!isLoggedIn) {
            router.push("/auth/login");
            return;
        }
    }, [isLoggedIn])


    const [chapters, setChapters] = useState([]);


    useEffect(() => {
        const getSingleCourse = async () => {
            const res = await axios.get(`/api/courses/${params.id}`)
            const courseData = res.data
            setChapters(courseData.chapters)
            console.log(courseData.chapters)
        }
        getSingleCourse()
    }, [])

    const [selectedChapter, setSelectedChapter] = useState(null);
    const [selectedSubTopic, setSelectedSubTopic] = useState(null);

    const handleChapterClick = (chapterId) => {
        // console.log(chapterId)    
        setSelectedChapter(chapterId);
        setSelectedSubTopic(null);
    };

    const handleSubTopicClick = (subTopicId, videoUrl) => {
        setSelectedSubTopic(subTopicId);
    };

    const currentChapter = chapters.find((chapter) => chapter._id === selectedChapter);
    console.log(selectedChapter)
    return (

        <div className="flex w-full">
            <Accordion
                chapters={chapters}
                onChapterClick={handleChapterClick}
                onSubTopicClick={handleSubTopicClick}
                selectedChapter={selectedChapter}
                selectedSubTopic={selectedSubTopic}
            />
            {currentChapter && console.log(selectedChapter)}

            {currentChapter && currentChapter.subTopics && (
                <VideoPlayer
                    videoUrl={
                        currentChapter.subTopics.find(
                            (subTopic) => subTopic._id === selectedSubTopic
                        )?.videoUrl
                    }
                />
            )}
        </div>
    );
};

export default Video;
