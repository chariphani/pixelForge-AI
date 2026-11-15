import ImageCard from "./ImageCard";
import EmptyState from "./EmptyState";

export default function ImageGallery({ images, onDelete }) {
  if (!images?.length)
    return (
      <EmptyState
        title="No images yet"
        description="Your creations will appear here after you generate your first image."
      />
    );
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((image) => (
        <ImageCard key={image._id} image={image} onDelete={onDelete} />
      ))}
    </div>
  );
}