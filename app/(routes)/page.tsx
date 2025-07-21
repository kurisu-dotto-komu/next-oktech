import ExportedImage from "next-image-export-optimizer";

import testPictureStatic from "@/content/test.webp";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <ExportedImage src={testPictureStatic} basePath="/next-oktech" alt="Test" />
      <ExportedImage src={testPictureStatic} basePath="/next-oktech" alt="Test" width={600} />
    </>
  );
}
