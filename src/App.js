import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PostList from './components/PostList';
import Post from './components/Post';
import CreatePost from './components/CreatePost';
import Navbar from './components/Navbar';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/post-list' element={<PostList />} />
				<Route path='/post:id' element={<Post />} />
				<Route path='/create-post' element={<CreatePost />} />
			</Routes>
		</div>
	);
}

export default App;
