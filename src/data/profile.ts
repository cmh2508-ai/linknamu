export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  // public/ 아래 경로 또는 외부 URL. 없으면 이름 첫 글자로 대체
  image?: string;
  links: LinkItem[];
};

// 보여 주기용 더미 데이터. 실제 내용으로 바꿔서 사용
export const profile: Profile = {
  name: "취향저장소",
  bio: "핫템플레이스 | 편리하고 신기한 아이템들 집합소",
  image: "/profile.jpg.png",
  links: [
    { id: "github", title: "GitHub", url: "https://github.com" },
    { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com" },
    { id: "blog", title: "Blog", url: "https://blog.naver.com" },
  ],
};
