import './App.css';
import React, { useEffect, useState } from 'react';
import { ReactDOM } from 'react';
import { TVShowAPI } from './api/TV-Show';
import { BACKDROPBADE_URL } from './api/Config';
import TVShowDetail from './components/TVShowDetail';
import { LockFill } from 'react-bootstrap-icons';
import { Logo } from './components/Logo';
import TVShowListItem from './components/TVShowListItem';
import TVShowList from './components/TVShowList';
import SearchBar from './components/SearchBar';

function App() {
  const [currentTVShow, setCurrentTVShow] = useState("")
  const [recommendationList, setRecommendationList] = useState([])

  async function fetchPopulars() {
    try {
      const popularTVShowList = await TVShowAPI.fetchPopulars()
      if (popularTVShowList.length > 0) {
        setCurrentTVShow(popularTVShowList[0])
      }
    } catch (error) {
      alert('Something went wrong fetching popular tv shows')
    }
  }

  async function fetchRecommendations(tvShowID) {
    try {
      const recommendedTVShowList = await TVShowAPI.fetchRecommendations(tvShowID)
      if (recommendedTVShowList.length > 0) {
        setRecommendationList(recommendedTVShowList)
      } else {
        setRecommendationList([])
      }
    } catch (error) {
      alert('Something went wrong fetching rec tv shows')
    }
  }

  async function fetchByTitle(title) {
    try {
      const searchResp = await TVShowAPI.fetchByTitle(title)
      if (searchResp.length > 0) {
        setCurrentTVShow(searchResp[0])
      }
    } catch (error) {
      alert('Something went wrong searching for a tv show')
    }
  }

  useEffect(() => {
    fetchPopulars();
  }, [])

  useEffect(() => {
    if (currentTVShow && currentTVShow.id) {
      fetchRecommendations(currentTVShow.id)
    }

  }, [currentTVShow])

  console.log(recommendationList)

  /**tvshow will be rendered only if currenttvshow is defined */

  function updateCurrentTVShow(tvShow) {
    setCurrentTVShow(tvShow)
  }

  return (
    <div className='mainContainer'
      style={{
        //since its async func make sure, the currenttvshow is defined, otherwise error
        background: currentTVShow ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROPBADE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : "black"
      }}>
      <div className='header'>
        <div className='row'>
          <div className='col-4'>
            <Logo image={'https://upload.wikimedia.org/wikipedia/commons/2/24/LEGO_logo.svg'} title="Tanjawatch" subtitle="Find a show you may like" />
          </div>
          <div className='col-md-12 col-lg-4'>
            <SearchBar onSubmit={fetchByTitle} />
          </div>
        </div>
      </div>
      <div className='tv-show-detail'>
        {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
      </div>
      <div className='recommendations'>
        {currentTVShow && <TVShowList
          onClickItem={updateCurrentTVShow}
          tvShowList={recommendationList} />}
      </div>
    </div>
  )
}

export default App;
