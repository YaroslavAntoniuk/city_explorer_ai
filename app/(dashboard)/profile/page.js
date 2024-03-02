import { UserProfile } from '@clerk/nextjs';

const Profile = () => {
  return (
    <div className="p-8">
      <UserProfile />
    </div>
  );
};

export default Profile;
