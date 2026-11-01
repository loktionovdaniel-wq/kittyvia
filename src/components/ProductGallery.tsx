import Image from 'next/image';

export function ProductGallery({ images, name, alts }: { images: string[]; name: string; alts?: string[] }) {
  return (
    <div className="product-gallery">
      {images.map((image, index) => (
        <figure key={image} className={index === 0 ? 'product-gallery__item product-gallery__item--main' : 'product-gallery__item'}>
          <Image src={image} alt={alts?.[index] ?? `${name} official product photo ${index + 1}`} fill priority={index === 0} quality={85} sizes={index === 0 ? '(max-width: 900px) 100vw, 55vw' : '(max-width: 900px) 50vw, 27vw'} />
        </figure>
      ))}
    </div>
  );
}
