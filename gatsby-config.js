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
		}
	],
};
