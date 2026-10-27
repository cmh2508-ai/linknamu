import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import { profile } from "@/data/profile";

// wireframe.png 레이아웃: 상단 원형 프로필 사진 → 이름 → 한 줄 소개 → 링크 카드 세로 목록
export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col px-6 py-14 sm:py-20">
      <ProfileHeader name={profile.name} bio={profile.bio} image={profile.image} />
      <nav aria-label="링크 목록" className="mt-10">
        <ul className="flex flex-col gap-6">
          {profile.links.map((link) => (
            <li key={link.id}>
              <LinkCard id={link.id} title={link.title} url={link.url} />
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
