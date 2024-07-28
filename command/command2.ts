namespace Command2 {
  interface BlogPost {
    execute(params: any): any;
  }

  class BlogService {
    titleToSlug() {}
    dateToHumanize() {}
    getMonetizedPosts() {}
    update() {}
  }

  class SaveBlogPost implements BlogPost {
    execute() {
      const blog = new BlogService();
      blog.titleToSlug();
      blog.update();
    }
  }

  // how to use :
  new SaveBlogPost().execute();
}
