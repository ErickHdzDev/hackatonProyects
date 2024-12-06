'use client';
import { UserButton } from "@clerk/nextjs";
import { ProjectsList } from "~/components/ProjectsList";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <nav className="flex justify-between items-center p-4 bg-white/10">
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <UserButton afterSignOutUrl="/" />
      </nav>
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <div className="bg-white/10 rounded-lg p-6 text-white">
            <h2 className="text-2xl font-bold mb-4">¡Bienvenido a tu Dashboard!</h2>
            <p>Has iniciado sesión correctamente.</p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4 text-white">Mis Proyectos</h2>
            
          </div>
        </div>
      </main>
    </div>
  );
}