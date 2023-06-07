export const SITE = {
	name: 'RailroaderSleep Beta',

	origin: 'https://railroadersleep.netlify.app/',
	basePathname: '',

	title: 'Railroader Sleep Beta',
	description: 'The Railroaders’ Guide to Healthy Sleep is an educational initiative for railroad workers about the importance of sleep health.',

  googleAnalyticsId: false, // or "G-XXXXXXXXXX",
	googleSiteVerificationId: 'orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M',

  noindex: true,
};

export const BLOG = {
	disabled: false,
	postsPerPage: 8,

	blog: {
		disabled: false,
		pathname: 'articles', // blog main path, you can change this to "articles" (/articles)
	},

	post: {
		disabled: false,
		pathname: '', // empty for /some-post, value for /pathname/some-post
	},

  video: {
    disabled: false,
    pathname: 'videos',
  },

	category: {
		disabled: false,
		pathname: 'category', // set empty to change from /category/some-category to /some-category
	},

	tag: {
		disabled: false,
		pathname: 'tag', // set empty to change from /tag/some-tag to /some-tag
	},
};
