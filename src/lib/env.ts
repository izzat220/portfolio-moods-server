import "dotenv/config";

interface ENV {
	MONGO_URL: string | undefined;
}

interface Config {
	MONGO_URL: string;
}

// Loading process.env as ENV interface

const getConfig = (): ENV => {
	return {
		MONGO_URL: process.env.MONGO_URL,
	};
};

const getSanitizedConfig = (config: ENV): Config => {
	for (const [key, value] of Object.entries(config)) {
		if (value === undefined) {
			throw new Error(`Missing key ${key} in .env`);
		}
	}
	return config as Config;
};

const config = getConfig();

const sanitizedConfig = getSanitizedConfig(config);

export default sanitizedConfig;
