'use client';

import { api } from "~/utils/api";

export function ProjectsList() {
  const { data: projects, isLoading } = api.project.listProjects.useQuery();

  if (isLoading) {
    return (
      <div className="rounded-lg bg-white/5 p-8 text-center">
        <p className="text-gray-400">Cargando proyectos...</p>
      </div>
    );
  }

  if (!projects?.length) {
    return (
      <div className="rounded-lg bg-white/5 p-8 text-center">
        <p className="text-gray-400">Aún no hay proyectos creados</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <div
          key={project.id}
          className="rounded-lg bg-white/5 p-4 transition-colors hover:bg-white/10"
        >
          <h2 className="text-xl font-semibold text-white">{project.name}</h2>
          {project.description && (
            <p className="mt-2 text-gray-400">{project.description}</p>
          )}
        </div>
      ))}
    </div>
  );
}
