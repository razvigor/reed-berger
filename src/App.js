import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PostList from './components/PostList';
import Post from './components/Post';
import CreatePost from './components/CreatePost';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import postReducer from './components/reducer';

export const UserContext = React.createContext();
export const PostContext = React.createContext({
	posts: [],
});

function App() {
	const initialPost = React.useContext(PostContext);
	const [state, dispatch] = React.useReducer(postReducer, initialPost);
	const [user, setUser] = React.useState('');
	return (
		<PostContext.Provider value={[state, dispatch]}>
			<UserContext.Provider value={[user, setUser]}>
				<div className='App'>
					<Navbar />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/post-list' element={<PostList />} />
						<Route path='/post:id' element={<Post />} />
						<Route path='/create-post' element={<CreatePost />} />
					</Routes>
					<Footer />
				</div>
			</UserContext.Provider>
		</PostContext.Provider>
	);
}

export default App;
