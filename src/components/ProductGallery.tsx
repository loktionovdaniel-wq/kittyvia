import Image from 'next/image';

export function ProductGallery({ images, name }: { images: string[]; name: string }) {
  return (
    <div className="product-gallery">
      {images.map((image, index) => (
        <figure key={image} className={index === 0 ? 'product-gallery__item product-gallery__item--main' : 'product-gallery__item'}>
          <Image src={image} alt={`${name} product reference ${index + 1}`} fill priority={index === 0} sizes={index === 0 ? '(max-width: 900px) 100vw, 55vw' : '(max-width: 900px) 50vw, 27vw'} />
        </figure>
      ))}
    </div>
  );
}
