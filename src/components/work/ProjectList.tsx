import { Project } from '@/types';
import ProjectPreview from './ProjectPreview';

export default function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <div className="flex flex-col gap-32">
      {projects.map((project, index) => (
        <ProjectPreview key={project.id} project={project} index={index} />
      ))}
    </div>
  );
}
