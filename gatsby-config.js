module.exports = {
	siteMetadata: {
		title: `Sophoun - Blog`,
		author: `Sophoun`,
		titleTemplate: "%s · The Programmer",
		description: "Flutter & Android developer also confident doing backend development.",
		siteUrl: "https://sophoun.com",
		image: "/Logo@2x.png", // Path to the image placed in the 'static' folder, in the project's root directory.
		twitterUsername: "@sophoun__",
	},
	plugins: [
		"gatsby-plugin-image",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sitemap",
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
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					`gatsby-remark-reading-time`,
				],
			},
		},
		{
			resolve: `gatsby-remark-highlight-code`,
			options: {
				terminal: "carbon",
				theme: "blackboard",
				lineNumbers: true,
			},
		},
		{
			resolve: "gatsby-plugin-firebase-v9.0",
			options: {
				credentials: {
					apiKey: "AIzaSyDzveiaBNmYa8n1pGYZCFirWip1gdpKwok",
					authDomain: "sophoun-project.firebaseapp.com",
					projectId: "sophoun-project",
					storageBucket: "sophoun-project.appspot.com",
					messagingSenderId: "457109583638",
					appId: "1:457109583638:web:0fd680d5a31a6c728c0237",
					measurementId: "G-9LWDE07TL5"
				}
			}

		},
		{
			resolve: `gatsby-plugin-purgecss`,
			options: {
				printRejected: true, // Print removed selectors and processed file names
				// develop: true, // Enable while using `gatsby develop`
				// tailwind: true, // Enable tailwindcss support
				// ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
				// purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
				purgeCSSOptions: {
					// https://purgecss.com/configuration.html#options
					// safelist: ['safelist'], // Don't remove this selector
				},
				// More options defined here https://purgecss.com/configuration.html#options
			},
		},
	],
};
