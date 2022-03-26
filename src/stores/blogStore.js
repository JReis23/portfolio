import supabase from '../lib/db';

export const addPost = async (title, description, content, profile_id) => {
	const { data, error } = await supabase.from('posts').insert([
		{
			title,
			description,
			content,
			profile_id
		}
	]);
};

export const getPosts = async () => {
	let { data, error } = await supabase.from('posts').select('*, profiles(username)');

	return { data, error };
};

export const getPost = async (match) => {
	let { data, error } = await supabase.from('posts').select('*, profiles(username)').match(match);

	return { data, error };
};

export const updatePost = async (title, description, content) => {
	const { data, error } = await supabase.from('posts').update({ title, description, content });

	return { data, error };
};
