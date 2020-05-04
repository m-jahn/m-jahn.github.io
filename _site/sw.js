const version = '20200504140010';
const cacheName = `static::${version}`;

const buildContentBlob = () => {
  return ["/2020/04/08/covid-sweden/","/2019/11/20/directlabels/","/2019/11/09/parental-leave/","/2019/10/08/voronoi-treemaps/","/vendor/bundle/ruby/2.5.0/gems/jekyll-3.8.6/lib/site_template/404/","/CV/","/about/","/about/","/vendor/bundle/ruby/2.5.0/gems/mini_portile2-2.4.0/appveyor.yml","/vendor/bundle/ruby/2.5.0/gems/jekyll-sitemap-0.13.0/spec/fixtures/feeds/atom.xml","/vendor/bundle/ruby/2.5.0/gems/kramdown-1.17.0/doc/documentation.page","/vendor/bundle/ruby/2.5.0/gems/liquid-4.0.3/lib/liquid/locales/en.yml","/vendor/bundle/ruby/2.5.0/gems/liquid-4.0.3/test/fixtures/en_locale.yml","/vendor/bundle/ruby/2.5.0/gems/jekyll-sitemap-0.13.0/spec/fixtures/some-subfolder/exclude-this-page/","/tags/how we work/","/blog/","/vendor/bundle/ruby/2.5.0/gems/jekyll-sitemap-0.13.0/spec/fixtures/","/vendor/bundle/ruby/2.5.0/gems/jekyll-3.8.6/lib/theme_template/example/","/vendor/bundle/ruby/2.5.0/gems/jekyll-paginate-1.1.0/spec/source/contacts/","/vendor/bundle/ruby/2.5.0/gems/jekyll-paginate-1.1.0/spec/source/","/vendor/bundle/ruby/2.5.0/gems/jekyll-3.8.6/lib/site_template/","/","/vendor/bundle/ruby/2.5.0/gems/kramdown-1.17.0/doc/index.page","/vendor/bundle/ruby/2.5.0/gems/kramdown-1.17.0/doc/installation.page","/vendor/bundle/ruby/2.5.0/gems/safe_yaml-1.0.5/spec/issue48.txt","/models/","/vendor/bundle/ruby/2.5.0/gems/jekyll-redirect-from-0.16.0/spec/fixtures/multiple_redirect_froms/","/vendor/bundle/ruby/2.5.0/gems/jekyll-redirect-from-0.16.0/spec/fixtures/multiple_redirect_tos/","/vendor/bundle/ruby/2.5.0/gems/kramdown-1.17.0/doc/news.feed","/vendor/bundle/ruby/2.5.0/gems/kramdown-1.17.0/doc/news.page","/vendor/bundle/ruby/2.5.0/gems/jekyll-redirect-from-0.16.0/spec/fixtures/one_redirect_from/","/vendor/bundle/ruby/2.5.0/gems/jekyll-redirect-from-0.16.0/spec/fixtures/one_redirect_to_path/","/vendor/bundle/ruby/2.5.0/gems/jekyll-redirect-from-0.16.0/spec/fixtures/one_redirect_to_url/","/vendor/bundle/ruby/2.5.0/gems/kramdown-1.17.0/doc/options.page","/vendor/bundle/ruby/2.5.0/gems/jekyll-sitemap-0.13.0/spec/fixtures/jekyll-last-modified-at/page/","/projects/","/publications/","/vendor/bundle/ruby/2.5.0/gems/kramdown-1.17.0/doc/quickref.page","/rpackages/","/vendor/bundle/ruby/2.5.0/gems/kramdown-1.17.0/doc/sitemap.sitemap","/vendor/bundle/ruby/2.5.0/gems/jekyll-3.8.6/lib/theme_template/example/style.css","/vendor/bundle/ruby/2.5.0/gems/kramdown-1.17.0/doc/syntax.page","/vendor/bundle/ruby/2.5.0/gems/jekyll-sitemap-0.13.0/spec/fixtures/some-subfolder/test_index/","/vendor/bundle/ruby/2.5.0/gems/kramdown-1.17.0/doc/tests.page","/vendor/bundle/ruby/2.5.0/gems/jekyll-sitemap-0.13.0/spec/fixtures/some-subfolder/this-is-a-subpage/","/vendor/bundle/ruby/2.5.0/gems/rouge-3.18.0/lib/rouge/demos/yaml","/manifest.json","/assets/search.json","/assets/styles.css","/help","/contact","/let-there/be/light-he-said","/geepers/mccreepin","/some/other/path","/redirects.json","/sitemap.xml","/robots.txt","/feed.xml","", "/assets/default-offline-image.png", "/assets/scripts/fetch.js"
  ]
}

const updateStaticCache = () => {
  return caches.open(cacheName).then(cache => {
    return cache.addAll(buildContentBlob());
  });
};

const clearOldCache = () => {
  return caches.keys().then(keys => {
    // Remove caches whose name is no longer valid.
    return Promise.all(
      keys
        .filter(key => {
          return key !== cacheName;
        })
        .map(key => {
          console.log(`Service Worker: removing cache ${key}`);
          return caches.delete(key);
        })
    );
  });
};

self.addEventListener("install", event => {
  event.waitUntil(
    updateStaticCache().then(() => {
      console.log(`Service Worker: cache updated to version: ${cacheName}`);
    })
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(clearOldCache());
});

self.addEventListener("fetch", event => {
  let request = event.request;
  let url = new URL(request.url);

  // Only deal with requests from the same domain.
  if (url.origin !== location.origin) {
    return;
  }

  // Always fetch non-GET requests from the network.
  if (request.method !== "GET") {
    event.respondWith(fetch(request));
    return;
  }

  // Default url returned if page isn't cached
  let offlineAsset = "/offline/";

  if (request.url.match(/\.(jpe?g|png|gif|svg)$/)) {
    // If url requested is an image and isn't cached, return default offline image
    offlineAsset = "/assets/default-offline-image.png";
  }

  // For all urls request image from network, then fallback to cache, then fallback to offline page
  event.respondWith(
    fetch(request).catch(async () => {
      return (await caches.match(request)) || caches.match(offlineAsset);
    })
  );
  return;
});
