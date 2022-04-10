import React from 'react';
import Container from './Container';
import './Home.scss';
import { FaGithubAlt } from 'react-icons/fa';

const url = 'https://api.github.com/users/razvigor';

const Home = () => {
	const [user, setUser] = React.useState(null);
	React.useEffect(() => {
		async function getUser() {
			try {
				const res = await fetch(url);
				const data = await res.json();
				setUser(data);
				console.log(data);
			} catch (err) {
				console.log(err);
			}
		}
		getUser();
	}, []);
	return (
		<Container>
			{user ? (
				<div className='home'>
					<div className='home__bio'>
						<h1>{user.login.toUpperCase()}</h1>
						<p>{user.bio}</p>
						<p>{user.location}</p>
					</div>
					<div className='home__image'>
						<img src={user.avatar_url} alt='avatar' style={{ height: 150 }} />
						<a href={user.html_url} target='_blank' rel='noreferrer'>
							<FaGithubAlt />
						</a>
					</div>
				</div>
			) : (
				<div className='loading'>Loading...</div>
			)}
		</Container>
	);
};

export default Home;
