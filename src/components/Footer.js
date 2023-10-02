import React, { useState } from 'react';
import './css/Footer.css';

//Icons
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';

import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';

import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import { useDataLayerValue } from '../DataLayer';

import { Grid, Slider } from '@mui/material';

function Footer() {
  const [{ discover_weekly }] = useDataLayerValue();
  const [isShuffle, setShuffle] = useState('false');
  const [isRepeat, setRepeat] = useState('false');
  const [isPlaying, setPlaying] = useState('false');
  const [isMuted, setMuted] = useState('false');

  return (
    <div className='footer'>
      <div className='footer_left'>
        <img
          className='footer_albumLogo'
          src={discover_weekly?.images[0].url}
          alt=''
        />
        <div className='footer_songInfo'>
          {isPlaying ? <h4>No song is playing</h4> : <h4>Playing Song</h4>}
          {isPlaying ? <p>...</p> : <p>Enjoy Your Music</p>}
        </div>
      </div>

      <div className='footer_center'>
        <ShuffleIcon
          className={isShuffle ? 'footer_green' : 'footer_icon'}
          onClick={() => {
            setShuffle(!isShuffle);
          }}
        />
        <SkipPreviousIcon className='footer_icon' />
        {isPlaying ? (
          <PlayCircleOutlineOutlinedIcon
            fontSize='large'
            className='footer_icon'
            onClick={() => setPlaying(!isPlaying)}
          />
        ) : (
          <PauseCircleOutlineIcon
            fontSize='large'
            className='footer_icon'
            onClick={() => setPlaying(!isPlaying)}
          />
        )}

        <SkipNextIcon className='footer_icon' />
        <RepeatIcon
          className={isRepeat ? 'footer_green' : 'footer_icon'}
          onClick={() => {
            setRepeat(!isRepeat);
          }}
        />
      </div>

      <div className='footer_right'>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon
              className={isMuted ? 'footer_green' : 'footer_red'}
              onClick={() => setMuted(!isMuted)}
            />
          </Grid>
          <Grid item xs>
            <Slider className={isMuted ? 'footer_right' : 'slider_red'} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
