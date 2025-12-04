'use client';

import { useState } from 'react';
import css from '@/components/CamperTabs/CampersTabs.module.css';
import Features from '../Features/Features';
import ReviewItem from '@/components/Reviews/Reviews';
import BookingForm from '../BookingForm/BookingForm'; // права колонка
import { Camper } from '@/types/campers';
import VehicleDetails from '../VehicleDetails/VehicleDetails';

export default function CamperTabs({ camper }: { camper: Camper }) {
  const [tab, setTab] = useState<'features' | 'reviews'>('features');

  return (
    <div className={css.wrapper}>
      <div>
        <div className={css.tabs}>
          <button
            className={tab === 'features' ? css.active : ''}
            onClick={() => setTab('features')}
          >
            Features
          </button>

          <button
            className={tab === 'reviews' ? css.active : ''}
            onClick={() => setTab('reviews')}
          >
            Reviews
          </button>
        </div>
        <div className={css.line}></div>
      </div>
      {/* Контент + форма */}
      <div className={css.columns}>
        <div
          className={tab === 'features' ? css.leftFeatures : css.leftReviews}
        >
          {tab === 'features' && (
            <>
              <Features camper={camper} />
              <VehicleDetails camper={camper} />
            </>
          )}

          {tab === 'reviews' && (
            <div className={css.reviewsList}>
              {camper.reviews.map((rev, idx) => (
                <ReviewItem
                  key={idx}
                  name={rev.reviewer_name}
                  rating={rev.reviewer_rating}
                  comment={rev.comment}
                />
              ))}
            </div>
          )}
        </div>

        <div className={css.right}>
          <BookingForm />
        </div>
      </div>
    </div>
  );
}
