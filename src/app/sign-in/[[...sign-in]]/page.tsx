import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <div className="container flex flex-col items-center justify-center gap-8 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Bienvenido
        </h1>
        <div className="rounded-lg bg-white/10 p-8 backdrop-blur-sm">
          <SignIn 
            appearance={{
              elements: {
                formButtonPrimary: 
                  "bg-purple-500 hover:bg-purple-600 text-sm normal-case",
                card: "bg-transparent",
                headerTitle: "text-white",
                headerSubtitle: "text-gray-300",
                socialButtonsBlockButton: 
                  "bg-white/10 hover:bg-white/20 border-none text-white",
                formFieldLabel: "text-white",
                formFieldInput: 
                  "bg-white/10 border-gray-500 text-white",
                footerActionLink: 
                  "text-purple-400 hover:text-purple-300"
              },
            }}
          />
        </div>
      </div>
    </main>
  );
}