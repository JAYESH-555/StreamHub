import { useEffect, useRef } from "react";
import VideoPlayerProps from "../Types/VideoPlayerProps";
import FlvJs from "flv.js";

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {

    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (FlvJs.isSupported()) {
            let flvPlayer = FlvJs.createPlayer({
                type: 'flv',
                url: src
            });
            flvPlayer.attachMediaElement(videoRef.current!);
            flvPlayer.load();
            flvPlayer.play();
        }
    }, [src]);

    return (
        <>
            <video 
                ref={videoRef} 
                controls 
                style={{
                    width: '70%',        // Full width of the container
                    height: '100%',       // Full height of the container
                    maxHeight: '450px',   // Set a maximum height for responsive resizing
                    borderRadius: '8px',
                    objectFit: 'cover'    // Ensures video fits container without distortion
                }}
            />
        
        </>
    );
}

export default VideoPlayer;