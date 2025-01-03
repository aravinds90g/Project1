import React, { useEffect, useRef, useState } from "react";
import { hightlightsSlides } from "../constants"; // Assuming you have a highlightsSlides array
import gsap from "gsap";
import { pauseImg, playImg, replayImg } from "../utils"; // Assuming these are imported images
import { useGSAP } from "@gsap/react";

export const Videocaroul = () => {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);

  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });

  const { isEnd, startPlay, videoId, isLastVideo, isPlaying } = video;
  const [loadedData, setLoadedData] = useState([]);

  // GSAP initialization for video play on scroll
  useGSAP(() => {
    
   gsap.to("#slider",{
    transform:`translateX(${-100*videoId}%)`,
    duration:2,
    ease:'power2.inOut'
   }) 

    gsap.to(videoRef.current[videoId], {
      scrollTrigger: {
        trigger: "#video",
        toggleActions: "restart none none none",
      },
      onComplete: () => {
        setVideo((prev) => ({
          ...prev,
          startPlay: true,
          isPlaying: true,
        }));
      },
    });
  }, [isEnd, videoId]);

  // Handle video playback when data is loaded
  useEffect(() => {
    if (loadedData.length > 3) {
      if (!isPlaying) {
        videoRef.current[videoId].pause();
      } else {
        startPlay && videoRef.current[videoId].play();
      }
    }
  }, [startPlay, videoId, isPlaying, loadedData]);

  // Track metadata when video loads
  const handleLoadedMetadata = (i, e) => setLoadedData((prev) => [...prev, e]);

  // Handle animation of the progress bar
  useEffect(() => {
    let currentProgress = 0;
    let span = videoSpanRef.current;
    if (span[videoId]) {
      let anim = gsap.to(span[videoId], {
        onUpdate: () => {
          const progress = Math.ceil(anim.progress() * 100);
          if (progress !== currentProgress) {
            currentProgress = progress;

            gsap.to(videoDivRef.current[videoId], {
              width:
                window.innerWidth < 760
                  ? "10vw"
                  : window.innerWidth < 1200
                  ? "10vw"
                  : "4vw",
            });

            gsap.to(span[videoId], {
              width: `${currentProgress}%`,
              backgroundColor: "white",
            });
          }
        },
        onComplete: () => {
          if (isPlaying) {
            gsap.to(videoDivRef.current[videoId], {
              width: "12px",
            });

            gsap.to(span[videoId], {
              backgroundColor: "#afafaf",
            });
          }
        },
      });
      if (videoId === 0) {
        anim.restart();
      }
      const animUpdate = () => {
        anim.progress(
          videoRef.current[videoId].currentTime /
            hightlightsSlides[videoId].videoDuration
        );
      };

      if (isPlaying) {
        gsap.ticker.add(animUpdate);
      } else {
        gsap.ticker.remove(animUpdate);
      }
    }
  }, [videoId, startPlay, isPlaying]);

  // Handle video events and state changes
  const handleProcess = (type) => {
    switch (type) {
      case "video-end":
        setVideo((prev) => ({
          ...prev,
          isEnd: true,
          videoId: videoId + 1,
        }));
        break;
      case "video-last":
        setVideo((prev) => ({ ...prev, isLastVideo: true }));
        break;
      case "video-reset":
        setVideo((prev) => ({ ...prev, isLastVideo: false, videoId: 0 }));
        break;
      case "play":
        setVideo((prev) => ({ ...prev, isPlaying: !prev.isPlaying }));
        break;
      case "pause":
        setVideo((prev) => ({ ...prev, isPlaying: false }));
        break;
      default:
        return video;
    }
  };

  // Handle video end to trigger the next video or mark the end
  const handleVideoEnd = () => {
    if (videoId + 1 < hightlightsSlides.length) {
      handleProcess("video-end");
    } else {
      handleProcess("video-last");
    }
  };

  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((list, i) => (
          <div key={list.id} id="slider" className="sm:pr-10 pr-20">
            <div className="video-carousel_container">
              <div className="h-full w-full rounded-3xl bg-black overflow-hidden flex-center">
                <video
                  id="video"
                  muted
                  playsInline={true}
                  preload="auto"
                  ref={(el) => (videoRef.current[i] = el)}
                  onPlay={() => {
                    setVideo((prevVideo) => ({
                      ...prevVideo,
                      isPlaying: true,
                    }));
                  }}
                  onEnded={handleVideoEnd} // Handle video end
                  onLoadedMetadata={(e) => handleLoadedMetadata(i, e)}
                >
                  <source src={list.video} type="video/mp4" />
                </video>
              </div>

              <div className="absolute top-12 left-[5%] z-10 pl-4">
                {list.textLists.map((text) => (
                  <p
                    key={text}
                    className="md:font-normal font-medium md:text-2xl text-xl"
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="relative flex-center mt-10">
        <div className="flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full">
          {videoRef.current.map((_, i) => (
            <span
              key={i}
              ref={(el) => (videoDivRef.current[i] = el)}
              className="mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer"
            >
              <span
                className="absolute h-full w-full rounded-full"
                ref={(el) => (videoSpanRef.current[i] = el)}
              />
            </span>
          ))}
        </div>

        <button className="control-btn">
          <img
            src={isLastVideo ? replayImg : isPlaying ? pauseImg : playImg}
            alt={isLastVideo ? "replay" : isPlaying ? "pause" : "play"}
            onClick={() =>
              isLastVideo
                ? handleProcess("video-reset")
                : !isPlaying
                ? handleProcess("play")
                : handleProcess("pause")
            }
          />
        </button>
      </div>
    </>
  );
};
