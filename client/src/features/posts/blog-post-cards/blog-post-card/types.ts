interface BlogPostCardDataInterface {
  id: number;
  title: string;
  desc: string;
  img: string;
}

interface BlogPostCardInterface {
  data: BlogPostCardDataInterface;
  vertical: boolean;
}

export { BlogPostCardInterface };
