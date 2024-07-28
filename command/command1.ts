namespace Command {
  interface BlogPost {
    execute(params: any): any;
  }

  class BlogUtility {
    static titleToSlug() {}
    static dateToHumanize() {}
    static getMonetizedPosts() {}
  }

  class SaveBlogPost implements BlogPost {
    execute() {
      BlogUtility.titleToSlug();
      this.save();
    }

    protected save() {
      // menyimpan ke DB
    }
  }

  class UpdateBlogPost implements BlogPost {
    execute() {
      BlogUtility.titleToSlug();
      this.update();
    }

    protected update() {
      // update ke DB
    }
  }

  class GetBlogPost implements BlogPost {
    execute(singlePost: boolean) {
      BlogUtility.dateToHumanize();

      if (singlePost) {
        this.getPost();
      } else {
        this.getPosts();
      }
    }

    protected getPost() {
      // get post dari DB
    }

    protected getPosts() {
      // get all post dari DB
    }
  }

  // how to use :
  new SaveBlogPost().execute();
}
