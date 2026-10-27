"use client";

type Props = {
  id: string;
  title: string;
  url: string;
};

export default function LinkCard({ id, title, url }: Props) {
  function recordClick() {
    const body = JSON.stringify({ id });
    // 페이지를 떠나는 중에도 요청이 전송되도록 sendBeacon 우선 사용
    const sent = navigator.sendBeacon?.(
      "/api/click",
      new Blob([body], { type: "application/json" }),
    );
    if (!sent) {
      fetch("/api/click", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
        keepalive: true,
      }).catch(() => {});
    }
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={recordClick}
      className="block w-full rounded-2xl border border-neutral-300 bg-white px-5 py-4 text-center font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 dark:border-neutral-700 dark:bg-neutral-900"
    >
      {title}
    </a>
  );
}
