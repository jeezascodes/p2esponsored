import React, { useEffect, useState } from 'react';
import OfferItemList from '../../components/offerItemList/offerItemList';
import styles from './offers.module.css';
import MainView from '../../components/mainView/mainView';
import Heading from '../../components/heading/heading';
import PrimaryButton from '../../components/button/button';
import { useHistory } from 'react-router-dom';
import { getOffers, getAllGames } from '../../data/apiCalls';

export default function Offers() {
  const [offers, setOffers] = useState([]);
  const [gameList, setGameList] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function fetchOffers() {
      try {
        const response = await getOffers(100, 0);
        setOffers(response.results);
        const games = await getAllGames();
        setGameList(games.results);
      } catch (err) {
        console.log(`err`, err);
      }
    }
    fetchOffers();
  }, []);

  const mapGamesToOffers = () => {
    return offers?.map((item) => {
      let game = gameList?.filter((game) => game.pk === item.game);
      let offerGameData = { ...item };
      offerGameData.thumbnail = game[0]?.thumbnail;
      offerGameData.game_name = game[0]?.name;
      return offerGameData;
    });
  };

  return (
    <MainView>
      <div className={styles.listContainer}>
        <div className={styles.header}>
          <Heading text='Scholarships' herarchy='h3' />
          <div>
            <PrimaryButton
              title='Offer a Scholarship'
              onClick={() => history.push('/create')}
            />
          </div>
        </div>

        <div className={styles.relative}>
          {mapGamesToOffers()?.map((item) => {
            return <OfferItemList item={item} />;
          })}
        </div>
      </div>
    </MainView>
  );
}
