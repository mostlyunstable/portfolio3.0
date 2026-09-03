import { profile } from '@/data/profile';

export default function Footer() {
  return (
    <footer className="w-full px-6 py-12 md:px-12 lg:px-24 border-t border-stone-200 mt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold uppercase">{profile.name}</h3>
          <p className="text-stone-500 text-sm mt-2">{profile.location}</p>
        </div>
        <div className="flex flex-col gap-2">
          <a href={`mailto:${profile.email}`} className="text-sm hover:underline">EMAIL</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">GITHUB</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">LINKEDIN</a>
        </div>
      </div>
      <div className="mt-16 text-xs text-stone-400">
        &copy; {new Date().getFullYear()} {profile.name.toUpperCase()}
      </div>
    </footer>
  );
}
