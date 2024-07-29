var posts=["2024/07/27/hello-world/","2024/07/27/吊呢了/","2024/07/27/新的文件/","2024/07/29/数组/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };