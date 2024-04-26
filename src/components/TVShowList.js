import React from 'react'
import TVShowListItem from './TVShowListItem'
import './ComponentsStyle.css'

export default function TVShowList({ tvShowList, onClickItem }) {
    return (
        <div>
            <div className='recList_title'>You may like as well</div>
            <div className='rec-list'>
                {tvShowList.map((tvShow) => {
                    return (
                        <span className='tv_show_item' key={tvShow.id}>
                            <TVShowListItem
                                tvShow={tvShow}
                                onClick={onClickItem} />
                        </span>
                    )
                })}
            </div>
        </div>
    )
}


