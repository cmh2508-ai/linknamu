import Image from "next/image";

type Props = {
  name: string;
  bio: string;
  image?: string;
};

export default function ProfileHeader({ name, bio, image }: Props) {
  return (
    <header className="flex flex-col items-center text-center">
      {image ? (
        <Image
          src={image}
          alt={`${name} 프로필 사진`}
          width={192}
          height={192}
          priority
          // SVG와 외부 이미지(placehold.co는 SVG 응답)는 최적화 없이 그대로 사용
          unoptimized={image.endsWith(".svg") || image.startsWith("http")}
          className="size-44 rounded-full border-2 border-neutral-800 object-cover sm:size-48 dark:border-neutral-200"
        />
      ) : (
        <div
          aria-hidden
          className="flex size-44 items-center justify-center rounded-full bg-emerald-100 text-5xl font-bold text-emerald-700 sm:size-48 dark:bg-emerald-900 dark:text-emerald-200"
        >
          {name.slice(0, 1)}
        </div>
      )}
      <h1 className="mt-5 text-xl font-bold sm:text-2xl">{name}</h1>
      <p className="mt-1 text-sm text-neutral-600 sm:text-base dark:text-neutral-400">
        {bio}
      </p>
    </header>
  );
}
