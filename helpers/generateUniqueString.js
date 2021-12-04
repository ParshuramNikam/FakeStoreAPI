import { customAlphabet } from "nanoid";

const generateUniqueString = async (length = 6) => {
	const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	const nanoid = customAlphabet(alphabet, length);
	const id = await nanoid();
	return id;
}

export default generateUniqueString;