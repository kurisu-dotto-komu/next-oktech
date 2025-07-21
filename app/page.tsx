import ExportedImage from "next-image-export-optimizer";

import testPictureStatic from "@/content/test.webp";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1>Hello World</h1>
      <ExportedImage
        src={testPictureStatic}
        basePath="/next-oktech"
        alt="Test"
      />
      <ExportedImage
        src={testPictureStatic}
        basePath="/next-oktech"
        alt="Test"
        width={600}
      />
    </div>
  );
}
