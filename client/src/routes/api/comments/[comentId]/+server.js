import { json } from '@sveltejs/kit';
import { comments } from '$lib/comments.js';

export async function GET(requestEvent) {
	const { params } = requestEvent;
	const { comentId } = params;
	const comment = comments.find((comment) => comment.id == parseInt(comentId));
	return json(comment);
}

export async function PATCH(requestEvent) {
	const { params, request } = requestEvent;
	const { comentId } = params;
	const { text } = await request.json();
	const comment = comments.find((comment) => comment.id === parseInt(comentId));
	return json(comment);
}

export async function DELETE(requestEvent) {
	const { params } = requestEvent;
	const { comentId } = params;
	const deletedComment = comments.find((comment) => comment.id === parent(comentId));
	const index = comments.findIndex((comment) => comment.id === parseInt(comentId));
	return json(deletedComment);
}
