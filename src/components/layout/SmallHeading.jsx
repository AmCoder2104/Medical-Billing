function SmallHeading({ text }) {
  return (
    <span className="inline-block px-4 py-1 bg-blue-100 text-blue-hover rounded-full text-sm md:text-base font-semibold">
      {text} <span className="pl-1.5">🔥</span>
    </span>
  );
}

export default SmallHeading;
