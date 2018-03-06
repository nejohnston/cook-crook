import React from 'react';

import Masonry from 'react-masonry-component';

import RecipeCard from '../../components/RecipeCard';
import Items from '../Items/Items';
import ItemsContainer from '../Items/ItemsContainer';
import ProfileContainer from './ProfileContainer';
import ProfileCard from './ProfileCard';

import '../Profile/styles.css';

const masonryOptions = {
  enableResizableChildren: true,
  transitionDuration: 2000,
};

const Profile = ({ item, user }) => (
  <div className="profile">
    <ProfileCard user={user} />
    <div>
      <Masonry options={masonryOptions}>
        {user.shareditems.map(item => <RecipeCard key={item.id} item={item} />)}
      </Masonry>
    </div>
  </div>
);

export default Profile;
