/* eslint-disable @next/next/no-img-element */
export default function ResponsiveImageSection() {
  return (
    <section className="relative w-full flex justify-center py-10">
      {/* Wrapper to control size */}
      <div className="w-full max-w-6xl">
        <img
          src="/images/Workflow-Desktop.png" // your image
          alt="Process Visualization"
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
}
