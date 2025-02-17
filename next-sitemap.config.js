/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://neubrutalism-temp.vercel.app/',
    
    // Generate a robots.txt file alongside the sitemap(s)
    generateRobotsTxt: true,

    // Additional options for customizing robots.txt
    robotsTxtOptions: {
        policies: [
            {
            userAgent: '*',
            allow: '/',
            },
        ],
      // If you have other sitemaps (like a custom server or separate API), you can add them here:
      // additionalSitemaps: [
      //   'https://yourdomain.com/my-custom-sitemap-1.xml',
      //   'https://yourdomain.com/my-custom-sitemap-2.xml',
      // ],
    },
};
