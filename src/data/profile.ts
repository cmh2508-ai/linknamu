export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  // public/ 아래 이미지 경로. 없으면 이름 첫 글자로 대체
  image?: string;
  links: LinkItem[];
};

// 보여 주기용 더미 데이터. 실제 내용으로 바꿔서 사용
export const profile: Profile = {
  name: "취향집합소",
  bio: "트렌디한 물품 소개",
  image: "/profile-dummy.svg",
  links: [
    { id: "github", title: "GitHub", url: "https://github.com" },
    { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com" },
    { id: "blog", title: "Blog", url: "https://blog.naver.com" },
  ],
};
