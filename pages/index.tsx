import Link from 'next/link'

export const HomePage: React.FC = () => {
  return (
    <>
        homepage will go here!<br />
        <h1 className="title">
          Links: {' '}
          <Link href="/posts">
            <a>Admin</a>
          </Link>
          {' | '}
          <Link href="/profile">
            <a>Profile page</a>
          </Link>
        </h1>
    </>
);
};

export default HomePage;