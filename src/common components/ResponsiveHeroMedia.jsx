import { useEffect, useState } from 'react';

/**
 * Shows a lightweight poster image on mobile and mounts the background video
 * only on tablet and desktop screens. This prevents mobile browsers from
 * downloading or decoding decorative hero videos.
 */
export default function ResponsiveHeroMedia({
  video,
  poster,
  mobilePoster = poster,
  desktopFallback,
  prioritizeVideo = false,
  className,
  style,
}) {
  const [showVideo, setShowVideo] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const updateMedia = () => setShowVideo(mediaQuery.matches);

    updateMedia();
    mediaQuery.addEventListener('change', updateMedia);
    return () => mediaQuery.removeEventListener('change', updateMedia);
  }, []);

  if (!showVideo) {
    return (
      <img
        src={mobilePoster}
        alt=""
        aria-hidden="true"
        className={className}
        style={{ objectPosition: '35% 50%', ...style }}
      />
    );
  }

  if (videoFailed && desktopFallback) {
    return (
      <img
        src={desktopFallback}
        alt=""
        aria-hidden="true"
        className={className}
        style={style}
      />
    );
  }

  return (
    <video
      className={className}
      src={video}
      poster={desktopFallback}
      autoPlay
      muted
      loop
      playsInline
      preload={prioritizeVideo ? 'auto' : 'metadata'}
      onError={desktopFallback ? () => setVideoFailed(true) : undefined}
      onCanPlay={desktopFallback ? (event) => {
        const playback = event.currentTarget.play();
        playback?.catch(() => setVideoFailed(true));
      } : undefined}
      style={style}
    />
  );
}
