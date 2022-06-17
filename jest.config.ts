export default {
	clearMocks: true,
	collectCoverage: true,
	coverageDirectory: 'coverage',
	resolver: 'ts-jest-resolver',
	// preset: '@shelf/jest-mongodb',
	// globalSetup: '<rootDir>/tests_setup/testSetup.ts',
	// globalTeardown: '<rootDir>/tests_setup/testTearDown.ts',
	setupFiles: [
		'<rootDir>/src/tests_setup/testSetup.ts',
		'<rootDir>/src/tests_setup/testTearDown.ts',
	],

	moduleNameMapper: {
		// '^@eucossa-web2-product-service-(.*)$': '<rootDir>/src/$1',
		'^@eucossa-web2-product-service-app': '<rootDir>/src/app',
		'^@eucossa-web2-product-service-config': '<rootDir>/src/config',
		'^@eucossa-web2-product-service-api/(.*)$': '<rootDir>/src/api/$1',
		'^@eucossa-web2-product-service-setup': '<rootDir>/src/setup',
		'^@eucossa-web2-product-service-setup/(.*)$': '<rootDir>/src/setup/$1',
		'^@eucossa-web2-product-service-features/(.*)$': '<rootDir>/src/features/$1',
		'^@eucossa-web2-product-service-models/(.*)$': '<rootDir>/src/models/$1',
		'^@eucossa-web2-product-service-common/(.*)$': '<rootDir>/src/common/$1',
		'^@eucossa-web2-product-service-services/(.*)$': '<rootDir>/src/services/$1',
		'^@eucossa-web2-product-service-helpers/(.*)$': '<rootDir>/src/helpers/$1',
		'^@eucossa-web2-product-service-utils/(.*)$': '<rootDir>/src/utils/$1',
		'^@eucossa-web2-product-service-constants/(.*)$': '<rootDir>/src/constants/$1',
		'^@eucossa-web2-product-service-uploadSDK': '<rootDir>/src/uploadSDK',
		'^@eucossa-web2-product-service-uploader': '<rootDir>/src/uploader',
		'^@eucossa-web2-product-service-db/(.*)$': '<rootDir>/src/databases/$1',
		'^@eucossa-web2-product-service-middlewares/(.*)$': '<rootDir>/src/middlewares/$1',
		'^@eucossa-web2-product-service-RedisBaseClient': '<rootDir>/src/RedisBaseClient',
	},

	coveragePathIgnorePatterns: ['/node_modules/'],
	// moduleDirectories: ["node_modules", "./", "./src", "./src/domains"],
	moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
	notify: false,
	testMatch: [
		'**/__tests__/**/*.[jt]s?(x)',
		'**/?(*.)+(spec|test).[tj]s?(x)',
	],
	testPathIgnorePatterns: ['/node_modules/', 'build/', 'dist/'],
	transformIgnorePatterns: ['/node_modules/', '\\.pnp\\.[^\\/]+$'],
};