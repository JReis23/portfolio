const url = 'http://localhost:1337/api/contacts';

export const post = async (req) => {
	const sendData = await fetch(url);
	const formData = JSON.parse(req.body);
	const data = formData.data;
	return {
		status: 200,
		body: { data }
	};
};
