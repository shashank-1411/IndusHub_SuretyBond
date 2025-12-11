'use client';

import { Carousel } from "@ark-ui/react/carousel";

const localImages = [
  "/Frame 31.png",
  "/Frame 34.png",
  "/Frame 35.png",
  "/Frame 37.png",
  "/Rectangle 23085.png",
  "/Rectangle 23088.png",
  "/Mask group.png",
  "/flag_2.png",
  "/1111 1.png",
  "/constantinos-kollias-yqBvJJ8jGBQ-unsplash 1.png",
  "/8140d9ae-0fe7-4ed4-b0b6-d16c14747555 1.png",
  "/saara-sanamo-SgQJoLH1PU8-unsplash 1.png",
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
      className="mx-auto max-w-3xl p-2"
    >
      <Carousel.ItemGroup className="mb-4 overflow-hidden rounded-lg shadow-lg">
        {images.map((image, index) => (
          <Carousel.Item key={index} index={index}>
            <img
              src={image.full}
              alt={`Slide ${index + 1}`}
              className="h-80 w-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>

      <div className="flex items-center gap-4">
        <Carousel.PrevTrigger className="shrink-0 rounded-lg bg-gray-100 p-2 transition-colors hover:bg-gray-200">
          ←
        </Carousel.PrevTrigger>

        <div className="flex flex-1 gap-2 overflow-x-auto px-2">
          {images.map((image, index) => (
            <Carousel.Indicator
              key={index}
              index={index}
              className="shrink-0 cursor-pointer overflow-hidden rounded-md border-2 border-transparent transition-all data-[current]:border-blue-500 hover:border-gray-300"
            >
              <img
                src={image.thumb}
                alt={`Thumbnail ${index + 1}`}
                className="h-12 w-16 object-cover"
                loading="lazy"
              />
            </Carousel.Indicator>
          ))}
        </div>

        <Carousel.NextTrigger className="shrink-0 rounded-lg bg-gray-100 p-2 transition-colors hover:bg-gray-200">
          →
        </Carousel.NextTrigger>
      </div>
    </Carousel.Root>
  );
}

