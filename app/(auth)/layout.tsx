export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-center items-center bg-gradient-to-br from-[#d9f1ff] to-[#a1c4fd] font-inter">
      <div className="w-full max-w-5xl p-8 bg-white/70 backdrop-blur-lg shadow-xl rounded-2xl">
        {children}
      </div>
    </main>
  );
}
