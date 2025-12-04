import css from '@/components/Reviews/Reviews.module.css';

interface ReviewItemProps {
  name: string;
  rating: number;
  comment: string;
}

export default function ReviewItem({ name, rating, comment }: ReviewItemProps) {
  const firstLetter = name.charAt(0).toUpperCase();

  return (
    <div className={css.review}>
      <div className={css.infoReviews}>
        <div className={css.avatar}>{firstLetter}</div>
        <div className="">
          <div className={css.nameStar}>
            <p className={css.name}>{name}</p>
            <div>
              <div className={css.stars}>
                {[1, 2, 3, 4, 5].map((num) => (
                  <svg
                    key={num}
                    className={num <= rating ? css.starActive : css.star}
                    width={16}
                    height={16}
                  >
                    <use href="/images/icons.svg#icon-star"></use>
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className={css.comment}>{comment}</p>
    </div>
  );
}
