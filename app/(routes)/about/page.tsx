import ExportedImage from "next-image-export-optimizer";

import testPictureStatic from "@/content/test.webp";

export default function About() {
  return (
    <>
      <h1>About Page</h1>
      <ExportedImage src={testPictureStatic} basePath="/next-oktech" alt="Test" width={400} />
    </>
  );
}
