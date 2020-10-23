import React from 'react';
import TunedOutlineIcon from '@material-ui/icons/TuneOutlined';

import './SearchPage.css';

import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
  return (
    <div className='searchPage'>
      <div className='searchPage__filter'>
        <TunedOutlineIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image='https://source.unsplash.com/random/240x140'
        channel='Clever Programmer'
        verified
        subs='660K'
        noOfVideos={382}
        description='You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding to the...'
      />

      <hr />

      <VideoRow
        views='1.4M'
        sub='660K'
        description='Wordpress Developer in 30 Minutes'
        timestamp='2 hours ago'
        channel='Hritik Roshan'
        title='Its wordpress guys'
        image='https://source.unsplash.com/random/241x141'
      />
      <VideoRow
        views='1.4M'
        sub='660K'
        description='Wordpress Developer in 30 Minutes'
        timestamp='2 hours ago'
        channel='Hritik Roshan'
        title='Its wordpress guys'
        image='https://source.unsplash.com/random/241x142'
      />
      <VideoRow
        views='1.4M'
        sub='660K'
        description='Wordpress Developer in 30 Minutes'
        timestamp='2 hours ago'
        channel='Hritik Roshan'
        title='Its wordpress guys'
        image='https://source.unsplash.com/random/241x143'
      />
      <VideoRow
        views='1.4M'
        sub='660K'
        description='Wordpress Developer in 30 Minutes'
        timestamp='2 hours ago'
        channel='Hritik Roshan'
        title='Its wordpress guys'
        image='https://source.unsplash.com/random/241x144'
      />
      <VideoRow
        views='1.4M'
        sub='660K'
        description='Wordpress Developer in 30 Minutes'
        timestamp='2 hours ago'
        channel='Hritik Roshan'
        title='Its wordpress guys'
        image='https://source.unsplash.com/random/241x145'
      />
      <VideoRow
        views='1.4M'
        sub='660K'
        description='Wordpress Developer in 30 Minutes'
        timestamp='2 hours ago'
        channel='Hritik Roshan'
        title='Its wordpress guys'
        image='https://source.unsplash.com/random/241x146'
      />
      <VideoRow
        views='1.4M'
        sub='660K'
        description='Wordpress Developer in 30 Minutes'
        timestamp='2 hours ago'
        channel='Hritik Roshan'
        title='Its wordpress guys'
        image='https://source.unsplash.com/random/241x147'
      />
    </div>
  );
}

export default SearchPage;
