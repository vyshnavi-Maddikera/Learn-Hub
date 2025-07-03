import React from 'react';

const VideoPlayer = ({ videoUrl }) => {
    console.log(videoUrl)

    return (

        <div className="aspect-w-16 aspect-h-9 flex flex-col justify-center items-center w-full pt-28">
            <iframe width="853" height="480" src={videoUrl} title="UML use case diagrams" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className=""></iframe>            
        </div>

    );
};

export default VideoPlayer;
