export default function AuthCard({ title, children }) {
  return (
    <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md">

      <h1 className="text-3xl font-bold mb-8 text-center">
        {title}
      </h1>

      {children}

    </div>
  );
}