import Link from 'next/link'

export const ProfilePage: React.FC = () => {
    return (
      <>
          your profile! {' '}
          
          <Link href="/">
            <a>back</a>
          </Link>
      </>
  );
};

export default ProfilePage;