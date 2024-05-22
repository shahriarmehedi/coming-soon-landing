import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Full screen video autoplay */}

      <video
        autoPlay
        // muted
        loop
        playsInline
        poster="/images/artisan.jpg"
        className="fixed inset-0 object-cover w-full h-full"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>
    </main>
  );
}
