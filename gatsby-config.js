module.exports = {
	siteMetadata: {
		title: `Sophoun - Blog`,
		author: `Sophoun`,
		siteUrl: `https://sophoun.com`,
	},
	plugins: [
		"gatsby-plugin-image",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sitemap",
		{
			resolve: "gatsby-plugin-firebase",
			options: {
				features: {
					auth: false,
					database: false,
					firestore: false,
					storage: false,
					messaging: false,
					functions: false,
					performance: false,
					analytics: true,
				},
				credentials: {
					apiKey: "AIzaSyCw0FGy40wXkWimd1QA5aYVA31ydqHw5Ps",
					authDomain: "easyteam-bdef0.firebaseapp.com",
					databaseURL: "https://easyteam-bdef0.firebaseio.com",
					projectId: "easyteam-bdef0",
					storageBucket: "easyteam-bdef0.appspot.com",
					messagingSenderId: "216627285135",
					appId: "1:216627285135:web:3c40c33c7a6c846c83f4fa",
					measurementId: "G-EMWXNCJ7KG",
				},
			},
		},
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				icon: "src/images/icon.png",
			},
		},
		"gatsby-transformer-remark",
		"gatsby-plugin-mdx",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images",
			},
			__key: "images",
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "pages",
				path: "./src/pages",
			},
			__key: "pages",
		},
		{
			resolve: `gatsby-plugin-catch-links`,
			options: {
				excludePattern: /(excluded-link|external)/,
			},
		},
		{
			resolve: "gatsby-plugin-web-font-loader",
		},
		"gatsby-plugin-cname",
		{
			resolve: `gatsby-plugin-typescript`,
			options: {
				isTSX: true,
				jsxPragma: `jsx`,
				allExtensions: true,
			},
		},
	],
};
