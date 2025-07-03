import { CaretDown } from '@phosphor-icons/react';
import React from 'react';

const Accordion = ({ chapters, onChapterClick, onSubTopicClick, selectedChapter, selectedSubTopic }) => {
    
    return (
        <div className="w-1/4 p-4 pt-28 overflow-y-auto h-screen">
            {chapters.map((chapter) => (
                <div key={chapter._id} className="mb-4">
                    <button
                        className={`w-full flex justify-between bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 ${chapter._id === selectedChapter ? 'mb-2' : ''}`}
                        onClick={() => onChapterClick(chapter._id)}
                    >
                        {chapter.title}
                        
                        <CaretDown size={20} className={`transition-transform transform ${chapter._id === selectedChapter ? 'rotate-180' : ''}`} />
                    </button>
                    {chapter._id === selectedChapter && (
                        <div className="p-2 bg-white text-gray-800 rounded-md">
                            {chapter.subTopics.map((subTopic) => (
                                <p
                                    key={subTopic._id}
                                    className={`w-full p-2 rounded-md hover:cursor-pointer border mb-3`}
                                    onClick={() => onSubTopicClick(subTopic._id, subTopic.videoUrl)}
                                >
                                    {subTopic.title}
                                </p>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordion;
