import supabase from '../lib/db';
import { writable } from 'svelte/store';

/* ==================== POSTS ======================*/

export const blog = writable([]);

export const addPost = async (title, description, content, profile_id, image_url) => {
	const { data, error } = await supabase.from('posts').insert([
		{
			title,
			description,
			content,
			profile_id,
			image_url
		}
	]);
};

export const getProfiles = async () => {
	let { data: profiles, error } = await supabase.from('profiles').select('*');

	return { profiles, error };
};

export const getPosts = async () => {
	let { data: posts, error } = await supabase.from('posts').select('*, profile_id(*)');
	// const mySubscription = supabase
	// 	.from('posts')
	// 	.on('INSERT', (payload) => {
	// 		blog.set([...data, payload.new]);
	// 		console.log(blog);
	// 	})
	// 	.subscribe();
	// mySubscription.unsubscribe();
	// console.log(mySubscription);
	return { posts, error };
};

export const getPost = async (match) => {
	let { data, error } = await supabase
		.from('posts')
		.select('*, comments(*, profile_id(*), post_id(*))')
		.match(match);

	return { data, error };
};

export const updatePost = async (title, description, content) => {
	const { data, error } = await supabase.from('posts').update({ title, description, content });

	return { data, error };
};

/* ==================== COMMENTS ======================*/

export const addComments = async (comment, profile_id, post_id) => {
	const { data, error } = await supabase
		.from('comments')
		.insert([{ comment, profile_id, post_id }]);
};
