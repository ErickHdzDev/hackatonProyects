import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <div className="container flex flex-col items-center justify-center gap-8 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Bienvenido
        </h1>
        <div className="rounded-lg bg-white/10 p-8 backdrop-blur-sm">
          Link para iniciar sesión: <Link href="/sign-in">Iniciar sesión</Link>
          <br />
          Link para registrarse: <Link href="/sign-up">Registrarse</Link>
        </div>
      </div>
    </main>
  );
}