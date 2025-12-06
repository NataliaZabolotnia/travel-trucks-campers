'use client';

// import { getCampers } from '../../lib/api';
import css from '@/app/catalog/page.module.css';
import Button from '@/components/Button/Button';
import CamperCard from '@/components/CamperCard/CamperCard';
import { useEffect } from 'react';
import { useCampersStore } from '@/lib/store/useCampersStore';
import { Camper } from '@/types/campers';
const Catalog = () => {
  const {
    campers,
    total,
    filters,
    setLocation,
    setType,
    toggleEquipment,
    fetchCampers,
    loadFavorites,
    loadMore,
  } = useCampersStore();
  useEffect(() => {
    loadFavorites();
    fetchCampers();
  }, []);
  const camperList = Array.isArray(campers) ? campers : [];
  // const campers = await getCampers();
  // console.log(campers);

  return (
    <section className={css.catalog}>
      <h1 className={css.hidden}>Title</h1>
      <div className={css.filter}>
        <label className={css.label}>Location</label>

        <div className={css.inputWrapper}>
          <svg className={css.icon} height={20} width={20}>
            <use href="/images/icons.svg#icon-vector"></use>
          </svg>

          <input
            className={css.input}
            placeholder="Kyiv,Ukraine"
            //
            value={filters.location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <p className={css.filterTitle}>Filters</p>
        <p className={css.filterEquip}>Vehicle equipment</p>
        <div className={css.line}></div>
        <ul className={css.eqList}>
          <li className={css.eqItem} onClick={() => toggleEquipment('AC')}>
            <svg className={css.filterIcon} width={32} height={32}>
              <use href="/images/icons.svg#icon-AC"></use>
            </svg>
            AC
          </li>
          <li
            className={css.eqItem}
            onClick={() => toggleEquipment('automatic')}
          >
            <svg className={css.filterIcon} width={32} height={32}>
              <use href="/images/icons.svg#icon-automatic"></use>
            </svg>
            Automatic
          </li>
          <li className={css.eqItem} onClick={() => toggleEquipment('kitchen')}>
            <svg className={css.filterIcon} width={32} height={32}>
              <use href="/images/icons.svg#icon-kitchen"></use>
            </svg>
            Kitchen
          </li>
          <li className={css.eqItem} onClick={() => toggleEquipment('TV')}>
            <svg className={css.filterIcon} width={32} height={32}>
              <use href="/images/icons.svg#icon-tv"></use>
            </svg>
            TV
          </li>
          <li
            className={css.eqItem}
            onClick={() => toggleEquipment('bathroom')}
          >
            <svg className={css.filterIcon} width={32} height={32}>
              <use href="/images/icons.svg#icon-bathroom"></use>
            </svg>
            Bathroom
          </li>
        </ul>
        <p className={css.filterEquip}>Vehicle type</p>
        <div className={css.line}></div>
        <ul className={css.eqList}>
          <li className={css.eqItem} onClick={() => setType('van')}>
            <svg className={css.filterIcon} width={32} height={32}>
              <use href="/images/icons.svg#icon-three"></use>
            </svg>
            Van
          </li>
          <li
            className={`${css.eqItem} ${css.eqItemBig}`}
            onClick={() => setType('integrated')}
          >
            <svg className={css.filterIcon} width={32} height={32}>
              <use href="/images/icons.svg#icon-four"></use>
            </svg>
            Fully Integrated
          </li>
          <li className={css.eqItem} onClick={() => setType('alcove')}>
            <svg className={css.filterIcon} width={32} height={32}>
              <use href="/images/icons.svg#icon-nine"></use>
            </svg>
            Alcove
          </li>
        </ul>
        <Button size="m" onClick={() => fetchCampers()}>
          Search
        </Button>
      </div>
      <div className={css.wrapList}>
        <div className={css.CampersList}>
          {Array.isArray(campers) && campers.length === 0 ? (
            <p>Loading...</p>
          ) : (
            camperList.map((camper: Camper) => (
              <CamperCard key={camper.id} camper={camper} />
            ))
          )}
        </div>

        {camperList.length < total && (
          <button
            type="button"
            className={css.btnLoadMore}
            onClick={() => loadMore()}
          >
            Load More
          </button>
        )}
      </div>
    </section>
  );
};
export default Catalog;
