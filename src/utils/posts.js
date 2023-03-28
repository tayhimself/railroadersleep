const getNormalizedPost = async (post) => {
	const { frontmatter, Content, file } = post;
	const ID = file.split("/").pop().split(".").shift();

	return {
		id: ID,

		publishDate: frontmatter.publishDate,
		draft: frontmatter.draft,

		canonical: frontmatter.canonical,
		slug: frontmatter.slug || ID,

		title: frontmatter.title,
		description: frontmatter.description,
		image: frontmatter.image,

		Content: Content,
		// or 'body' in case you consume from API

		excerpt: frontmatter.excerpt,
		authors: frontmatter.authors,
		category: frontmatter.category,
		tags: frontmatter.tags,
		readingTime: frontmatter.readingTime,

		video_url: frontmatter.video_url,
		video_title: frontmatter.video_title,
		video_description: frontmatter.video_description,
		video_duration: frontmatter.video_duration,
		quote: frontmatter.quote,
		quote_author: frontmatter.quote_author,
		category: frontmatter.category,
		section: frontmatter.section,
		feature: frontmatter.feature,
		sort: frontmatter.sort,
	};
};

const load = async function () {
	const posts = import.meta.glob(
		["~/../data/blog/**/*.md", "~/../data/blog/**/*.mdx"],
		{
			eager: true,
		}
	);

	const normalizedPosts = Object.keys(posts).map(async (key) => {
		const post = await posts[key];
		return await getNormalizedPost(post);
	});

	const results = (await Promise.all(normalizedPosts))
		//.sort((a, b) => new Date(b.publishDate).valueOf() - new Date(a.publishDate).valueOf())
		.filter((post) => !post.draft);
	return results;
};

let _posts;

/** */
export const fetchPosts = async () => {
	_posts = _posts || load();

	return await _posts;
};

/**
 * @param {string} section name
 */
export const fetchCategories = async (section) => {
	const categories = import.meta.glob(
		["~/../data/categories/**/*.md", "~/../data/categories/**/*.mdx"],
		{
			eager: true,
		}
	);
	const normalizedCategories = Object.keys(categories).map(async (key) => {
		const category = await categories[key];
		return await getNormalizedPost(category);
	});
	// now filter out the ones that don't have a category after normalization
	const results = (await Promise.all(normalizedCategories))
		.filter((post) => post.category)
		.filter((post) => post.section === section);
	return results;
};

/** */
export const findPostsByIds = async (ids) => {
	if (!Array.isArray(ids)) return [];

	const posts = await fetchPosts();

	return ids.reduce(function (r, id) {
		posts.some(function (post) {
			return id === post.id && r.push(post);
		});
		return r;
	}, []);
};

/** */
export const fetchPostsByFeature = async (feature) => {
	let posts = await fetchPosts();
	posts = posts
		.filter((post) => post.feature === feature)
    .sort((a, b) => {
			return a.sort - b.sort;
		});
	return posts;
};
