export default function Card({ title, text, description }) {
  return (
    <div className="flip-card h-64 w-full">
      <div className="flip-card-inner">
        <div className="flip-card-face flip-card-front flex flex-col justify-center p-6">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="mt-3 text-gray-600">{text}</p>
        </div>
        <div className="flip-card-face flip-card-back flex flex-col justify-center p-6 text-white">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-200">{description}</p>
        </div>
      </div>
    </div>
  );
}