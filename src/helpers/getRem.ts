export const getRem = (px: number): string => {
	return `${(px / 16).toPrecision(1)}rem`;
};
