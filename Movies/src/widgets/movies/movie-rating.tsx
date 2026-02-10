import { IconStar, IconStarHalf, IconStarOff } from "@tabler/icons-react";

const normalizeRating = (rating: number, scale = 5) => {
  const maxRating = 500;
  const normalized = (rating / maxRating) * scale;
  return Math.min(normalized, scale);
};

export const MovieRating = ({ rating }: { rating: number }) => {
  const stars = normalizeRating(rating);
  const fullStars = Math.floor(stars);
  const hasHalf = stars - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <div className="flex items-center space-x-1">
      {Array(fullStars)
        .fill(0)
        .map((_, i) => (
          <IconStar key={`full-${i}`} className="text-yellow-500" />
        ))}
      {hasHalf && <IconStarHalf className="text-yellow-500" />}
      {Array(emptyStars)
        .fill(0)
        .map((_, i) => (
          <IconStarOff key={`empty-${i}`} className="text-yellow-500" />
        ))}
      <span className="ml-2 text-sm text-gray-500">{stars.toFixed(1)}</span>
    </div>
  );
};
