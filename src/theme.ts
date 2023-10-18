export type ThemeColors = {
	bg: string;
	"bg-syntax": string;
	border: string;
	text: string;
	input: string;
	icon: string;
};

export const lightTheme: ThemeColors = {
	bg: "#fff",
	"bg-syntax": "#000",
	border: "#000",
	text: "#264653",
	input: "#FCA311",
	icon: "#2A9D8F",
};

// export const darkTheme: ThemeColors = {
// 	bg: "#264653",
// 	"bg-syntax": "#000",
// 	border: "#000",
// 	text: "#fff",
// 	input: "#FCA311",
// 	icon: "#2A9D8F",
// };

export const darkTheme: ThemeColors = {
  bg: "#011627",            // Background color
  "bg-syntax": "#000",   // Background color for syntax
  border: "#fdfffc",        // Border color
  text: "#fdfffc",     // Text color
  input: "#011627",      // Input color (you can change this if needed)
  icon: "#FCA311",       // Icon color (you can change this if needed)
};
