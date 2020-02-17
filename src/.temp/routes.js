export default [
  {
    path: "/blog/sagan-ipsum/",
    component: () => import(/* webpackChunkName: "page--src-templates-blog-post-vue" */ "C:\\Users\\Administrator\\Desktop\\tk-gridsome-v6\\src\\templates\\BlogPost.vue")
  },
  {
    path: "/blog/lorem-ipsum/",
    component: () => import(/* webpackChunkName: "page--src-templates-blog-post-vue" */ "C:\\Users\\Administrator\\Desktop\\tk-gridsome-v6\\src\\templates\\BlogPost.vue")
  },
  {
    path: "/blog/espresso-ipsum/",
    component: () => import(/* webpackChunkName: "page--src-templates-blog-post-vue" */ "C:\\Users\\Administrator\\Desktop\\tk-gridsome-v6\\src\\templates\\BlogPost.vue")
  },
  {
    path: "/blog/cupcake-ipsum/",
    component: () => import(/* webpackChunkName: "page--src-templates-blog-post-vue" */ "C:\\Users\\Administrator\\Desktop\\tk-gridsome-v6\\src\\templates\\BlogPost.vue")
  },
  {
    path: "/blog/blogcover1/",
    component: () => import(/* webpackChunkName: "page--src-templates-blog-post-vue" */ "C:\\Users\\Administrator\\Desktop\\tk-gridsome-v6\\src\\templates\\BlogPost.vue")
  },
  {
    path: "/blog/blogcover3/",
    component: () => import(/* webpackChunkName: "page--src-templates-blog-post-vue" */ "C:\\Users\\Administrator\\Desktop\\tk-gridsome-v6\\src\\templates\\BlogPost.vue")
  },
  {
    path: "/blog/blogcover2/",
    component: () => import(/* webpackChunkName: "page--src-templates-blog-post-vue" */ "C:\\Users\\Administrator\\Desktop\\tk-gridsome-v6\\src\\templates\\BlogPost.vue")
  },
  {
    path: "/success/",
    component: () => import(/* webpackChunkName: "page--src-pages-success-vue" */ "C:\\Users\\Administrator\\Desktop\\tk-gridsome-v6\\src\\pages\\success.vue")
  },
  {
    path: "/contact/",
    component: () => import(/* webpackChunkName: "page--src-pages-contact-vue" */ "C:\\Users\\Administrator\\Desktop\\tk-gridsome-v6\\src\\pages\\Contact.vue")
  },
  {
    path: "/blog/",
    component: () => import(/* webpackChunkName: "page--src-pages-blog-vue" */ "C:\\Users\\Administrator\\Desktop\\tk-gridsome-v6\\src\\pages\\Blog.vue")
  },
  {
    path: "/about/",
    component: () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "C:\\Users\\Administrator\\Desktop\\tk-gridsome-v6\\src\\pages\\About.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--src-pages-404-vue" */ "C:\\Users\\Administrator\\Desktop\\tk-gridsome-v6\\src\\pages\\404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\Users\\Administrator\\Desktop\\tk-gridsome-v6\\src\\pages\\Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--src-pages-404-vue" */ "C:\\Users\\Administrator\\Desktop\\tk-gridsome-v6\\src\\pages\\404.vue")
  }
]

