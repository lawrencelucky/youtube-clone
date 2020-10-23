import React from 'react';

import VideoCard from './VideoCard';

import './RecommendedVIdeos.css';

function RecommendedVideos() {
  return (
    <div className='recommendedVideos'>
      <h2>Recommended</h2>
      <div className='recommendedVideos__videos'>
        <VideoCard
          title='Become a React Developer in 1 Hour'
          channel='Clever Programmer'
          views='313.5K'
          timestamp='3 days ago'
          image='https://source.unsplash.com/random/240x140'
          channelImage='https://source.unsplash.com/random/240x140'
        />
        <VideoCard
          title='Wordpress Developer in 30 Minutes'
          channel='Hritik Roshan'
          views='20k'
          timestamp='2 hours ago'
          image='https://source.unsplash.com/random/241x141'
          channelImage='https://source.unsplash.com/random/241x141'
        />
        <VideoCard
          title='You create the world you live in'
          channel='Amir Khan'
          views='2M'
          timestamp='5 days ago'
          image='https://source.unsplash.com/random/243x143'
          channelImage='https://source.unsplash.com/random/243x143'
        />
        <VideoCard
          title='Photoshop after effects'
          channel='OHS Media'
          views='228.5K'
          timestamp='3 days ago'
          image='https://source.unsplash.com/random/244x144'
          channelImage='https://source.unsplash.com/random/244x144'
        />
        <VideoCard
          title='The perfect business plan'
          channel='From D Ojos'
          views='3M'
          timestamp='2 weeks ago'
          image='https://source.unsplash.com/random/245x145'
          channelImage='https://source.unsplash.com/random/245x145'
        />
        <VideoCard
          title='The missing hardware in your PC'
          channel='Hayzed Rae'
          views='200K'
          timestamp='2 days ago'
          image='https://source.unsplash.com/random/246x146'
          channelImage='https://source.unsplash.com/random/246x146'
        />
        <VideoCard
          title='The parenting essentials'
          channel='Amarachukwu'
          views='313K'
          timestamp='1 day ago'
          image='https://source.unsplash.com/random/247x147'
          channelImage='https://source.unsplash.com/random/247x147'
        />
        <VideoCard
          title='The android development setup'
          channel='Sholar'
          views='313.5K'
          timestamp='2 hours ago'
          image='https://source.unsplash.com/random/248x148'
          channelImage='https://source.unsplash.com/random/249x149'
        />
        <VideoCard
          title='She will love you with this lines'
          channel='Chinko'
          views='3M'
          timestamp='4 days ago'
          image='https://source.unsplash.com/random/250x150'
          channelImage='https://source.unsplash.com/random/250x150'
        />
        <VideoCard
          title='Perfect way to stay protect from hackers'
          channel='Viru Aka'
          views='2M'
          timestamp='3 days ago'
          image='https://source.unsplash.com/random/251x151'
          channelImage='https://source.unsplash.com/random/251x151'
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;
