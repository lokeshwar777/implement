// jest.config.js
module.exports = {
	testEnvironment: "node",
	setupFiles: ["<rootDir>/jest.setup.js"], // Load environment variables before tests
	transform: {
		"^.+\\.(ts|tsx)$": "ts-jest", // Use ts-jest for transforming TypeScript files
	},
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/src/$1", // Resolve path aliases for tests
	},
};
