import Logo from "~/components/icons/logo";

export default function Quiz() {
  return (
    <div className="min-h-screen bg-white flex flex-col text-blue">
      <header className="px-8 py-4 border-b border-gray-200 flex items-center justify-between">
        <Logo />
        <div className="exit-quiz">
          <button className="border-pink-700 text-pink-700 px-6 py-2 border rounded-lg font-normal">
            Exit Quiz
          </button>
        </div>
      </header>
    </div>
  );
}
