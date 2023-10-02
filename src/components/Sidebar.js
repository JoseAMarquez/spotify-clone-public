import React from 'react';
import './css/Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

import AddBoxIcon from '@mui/icons-material/AddBox';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkIcon from '@mui/icons-material/Bookmark';

import { useDataLayerValue } from '../DataLayer';

const Sidebar = () => {
  const [{ playlists }] = useDataLayerValue();

  return (
    <div className='sidebar'>
      <img
        className='sidebar__logo'
        src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
        alt='logo'
      />
      <SidebarOption title='Home' Icon={HomeIcon} />
      <SidebarOption title='Search' Icon={SearchIcon} />
      <SidebarOption title='Your Library' Icon={LibraryMusicIcon} />
      <br />
      <SidebarOption title='Create Playlist' Icon={AddBoxIcon} />
      <SidebarOption title='Liked Songs' Icon={FavoriteIcon} />
      <SidebarOption title='Your Episode' Icon={BookmarkIcon} />
      <br />

      <strong className='sidebar_title'>PLAYLISTS</strong>
      <hr />

      {playlists?.items?.map((playlists) => {
        return <SidebarOption title={playlists.name} />;
      })}
    </div>
  );
};

export default Sidebar;
