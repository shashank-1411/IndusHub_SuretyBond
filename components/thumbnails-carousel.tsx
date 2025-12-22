'use client';

import { Carousel } from "@ark-ui/react/carousel";

const localImages = [
  "/pexels-ashokjkshetri-12964295.jpg",
  "/pexels-ashokjkshetri-14416888.jpg",
  "/pexels-haberdoedas-33287267.jpg",
  "/pexels-josh-hild-1270765-2422255.jpg",
  "/pexels-rakin-raihan-480830755-15861341.jpg",
];

export function ThumbnailsCarousel() {
  const images = localImages.map((src) => ({
    full: src,
    thumb: src,
  }));

  return (
    <Carousel.Root
      defaultPage={0}
      slideCount={images.length}
      className="mx-auto max-w-4xl"
    >
      <Carousel.ItemGroup className="mb-4 overflow-hidden rounded-lg shadow-lg">
        {images.map((image, index) => (
          <Carousel.Item key={index} index={index}>
            <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
              <img
                src={image.full}
                alt={`Slide ${index + 1}`}
                className="h-full w-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>

      <div className="flex items-center gap-3">
        <Carousel.PrevTrigger className="shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 p-2 text-slate-700 transition-colors hover:bg-slate-200">
          <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            className="h-4 w-4"
          >
            <path
              d="M11 3 5 9l6 4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Carousel.PrevTrigger>

        <div className="flex flex-1 gap-2 overflow-x-auto px-2 pb-1 scrollbar-hide">
          {images.map((image, index) => (
            <Carousel.Indicator
              key={index}
              index={index}
              className="shrink-0 cursor-pointer overflow-hidden rounded-md border-2 border-transparent transition-all data-[current]:border-[#cf6734] hover:border-slate-300"
            >
              <img
                src={image.thumb}
                alt={`Thumbnail ${index + 1}`}
                className="h-14 w-20 object-cover"
                loading="lazy"
              />
            </Carousel.Indicator>
          ))}
        </div>

        <Carousel.NextTrigger className="shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 p-2 text-slate-700 transition-colors hover:bg-slate-200">
          <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            className="h-4 w-4"
          >
            <path
              d="M5 3 11 9 5 13"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Carousel.NextTrigger>
      </div>
    </Carousel.Root>
  );
}

