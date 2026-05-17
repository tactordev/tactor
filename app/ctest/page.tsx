import Image from "next/image";

/*
:root {
  --background: #F6F4F3;
  --background-secondary: #ECE7E5;
  --background-tertiary: #DDD4D2;

  --foreground: #FFFFFF;
  --foreground-secondary: #F1EEEE;

  --text-primary: #1F1F1F;
  --text-secondary: #5C5C5C;
  --text-tertiary: #8A8A8A;

  --primary: #D64933;
  --secondary: #C98986;
  --tertiary: #AFBFC0;

  --border: #D7D2D0;

  --success: #5E9C76;
  --warning: #D9A441;
  --danger: #D64933;
  --info: #6B8CA3;
  --neutral: #8B9297;
}
*/
export default function ColourTest() {
  return (
    <main>
      <div><p>Colour Testing</p></div>
      <div className="flex flex-wrap gap-4 mt-4 mx-4 justify-center items-center border-[var(--border)] border-2 rounded-lg p-4">
        <div className="w-32 h-32 bg-[var(--background)]" title="Background" />
        <div className="w-32 h-32 bg-[var(--background-secondary)]" title="Background Secondary" />
        <div className="w-32 h-32 bg-[var(--background-tertiary)]" title="Background Tertiary" />
        <div className="w-32 h-32 bg-[var(--foreground)]" title="Foreground" />
        <div className="w-32 h-32 bg-[var(--foreground-secondary)]" title="Foreground Secondary" />
        <div className="w-32 h-32 bg-[var(--text-primary)]" title="Text Primary" />
        <div className="w-32 h-32 bg-[var(--text-secondary)]" title="Text Secondary" />
        <div className="w-32 h-32 bg-[var(--text-tertiary)]" title="Text Tertiary" />
        <div className="w-32 h-32 bg-[var(--primary)]" title="Primary" />
        <div className="w-32 h-32 bg-[var(--secondary)]" title="Secondary" />
        <div className="w-32 h-32 bg-[var(--tertiary)]" title="Tertiary" />
        <div className="w-32 h-32 bg-[var(--border)]" title="Border" />
        <div className="w-32 h-32 bg-[var(--success)]" title="Success" />
        <div className="w-32 h-32 bg-[var(--warning)]" title="Warning" />
        <div className="w-32 h-32 bg-[var(--danger)]" title="Danger" />
        <div className="w-32 h-32 bg-[var(--info)]" title="Info" />
        <div className="w-32 h-32 bg-[var(--neutral)]" title="Neutral" />
      </div>
    </main>
  );
}
