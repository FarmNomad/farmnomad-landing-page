import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const inputDir = path.join(__dirname, "../public/images");
const outputDir = path.join(__dirname, "../public/images/optimized");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(inputDir);

for (const file of files) {
  const inputPath = path.join(inputDir, file);
  const ext = path.extname(file).toLowerCase();
  const baseName = path.basename(file, ext);

  if ([".jpg", ".jpeg", ".png"].includes(ext)) {
    const outputPath = path.join(outputDir, `${baseName}.webp`);

    await sharp(inputPath)
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(outputPath);

    console.log(`Optimized: ${file} -> ${baseName}.webp`);
  }
}
