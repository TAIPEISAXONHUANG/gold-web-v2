/**
 * Batch Cover Image Generator for gold-tw.com blog articles
 * Uses SD3.5 Large via ComfyUI, uploads to Cloudinary, updates page.tsx files
 */

import fs from 'fs';
import path from 'path';
import { createHash } from 'crypto';
import FormData from 'form-data';

const CLOUDINARY_CLOUD = 'dakafmdhy';
const CLOUDINARY_API_KEY = '677846631856261';
const SECRET_FILE = path.join(
  process.env.USERPROFILE || process.env.HOME,
  '.openclaw/workspace-engineer/cloudinary-secret.txt'
);
const CLOUDINARY_API_SECRET = fs.readFileSync(SECRET_FILE, 'utf8').trim();

const COMFYUI_URL = 'http://127.0.0.1:8188';
const REPO_ROOT = path.resolve('.');
const BLOG_DIR = path.join(REPO_ROOT, 'app/blog');
const TMP_IMAGE = path.join(process.env.TEMP || process.env.TMP || 'C:\\Users\\user\\AppData\\Local\\Temp', 'comfyui-cover-temp.png');

const NEGATIVE_PROMPT = 'text, watermark, logo, blurry, low quality, nsfw, deformed, ugly, bad anatomy, extra limbs, cartoon, illustration, painting';

// Prompt mapping based on slug keywords
function getPrompt(slug) {
  const s = slug.toLowerCase();

  if (s.includes('platinum') || s.includes('palladium') || s.includes('rhodium')) {
    return 'Close-up of polished platinum bars and white gold jewelry arranged on dark velvet in a professional Taiwan jewelry shop. Museum spotlights create cool reflections on the metal surface. No text, no logos. Commercial product photography quality, 8k resolution.';
  }
  if (s.includes('silver')) {
    return 'Elegant silver jewelry pieces and silver bars arranged on white marble surface in a professional jewelry studio. Clean studio lighting creates metallic reflections. No text, no logos. Taiwan commercial photography quality.';
  }
  if (s.includes('diamond') || s.includes('gia')) {
    return 'A professional gemologist using a jeweler\'s loupe to examine brilliant-cut diamonds on black velvet in a Taiwan jewelry shop. XRF equipment visible in the background. Museum-quality lighting. No text, no logos. Commercial photography.';
  }
  if (s.includes('jade') || s.includes('jadeite')) {
    return 'Lustrous green jade bangles and pendants displayed on ivory silk fabric, traditional Taiwanese jewelry style. Warm studio spotlights illuminate the translucent jade. No text, no logos. Professional product photography.';
  }
  if (s.includes('wedding')) {
    return 'Traditional Taiwan wedding gold jewelry set including dragon and phoenix bangles on red silk fabric. Warm studio lighting emphasizes the 24K gold luster. Elegant ceremonial presentation. No text, no logos. Commercial photography.';
  }
  if (s.includes('k-gold') || s.includes('karat') || s.includes('18k') || s.includes('14k') || s.includes('10k') || s.includes('k gold')) {
    return 'A collection of 18K gold jewelry pieces — rings, necklaces and bracelets — arranged on white marble with a dark background. Stamps and hallmarks visible. Museum spotlights create warm golden reflections. No text, no logos. Taiwan jewelry shop commercial photography.';
  }
  if (s.includes('coin') || s.includes('medal') || s.includes('temple')) {
    return 'Shiny gold coins and commemorative gold medals arranged on dark velvet in a collector\'s display. Warm studio lighting creates brilliant highlights on the polished surfaces. No text, no logos. Professional product photography.';
  }
  if (s.includes('bar') || s.includes('9999') || s.includes('liquid')) {
    return 'Stack of 9999 pure gold bars with hallmarks clearly visible on dark reflective surface. Warm studio spotlights create golden reflections. Financial investment concept. No text, no logos. Professional commercial photography.';
  }
  if (s.includes('watch')) {
    return 'Luxury gold watches and timepieces displayed on dark velvet in a premium showcase. Dramatic side lighting creates beautiful reflections on the gold cases. No text, no logos. Taiwan jewelry store commercial photography.';
  }
  if (s.includes('antique') || s.includes('old') || s.includes('second-hand') || s.includes('inheritance') || s.includes('lion')) {
    return 'Antique gold jewelry pieces including vintage bangles and ornaments arranged on aged rosewood surface. Warm ambient lighting reveals the historical craftsmanship. No text, no logos. Professional Taiwanese jewelry photography.';
  }
  if (s.includes('bracelet')) {
    return 'Close-up of a lustrous 24K gold bracelet on a model\'s wrist, with additional gold bracelets displayed on dark velvet background. Taiwan jewelry shop setting. Museum spotlights. No text, no logos. Commercial photography.';
  }
  if (s.includes('ring')) {
    return 'Selection of gold rings — wedding bands, signet rings and fashion rings — displayed on white marble. Warm studio lighting creates sparkle. Taiwan jewelry shop. No text, no logos. Commercial product photography.';
  }
  if (s.includes('necklace') || s.includes('pendant')) {
    return 'Elegant gold necklace and pendant collection draped on white velvet jewelry display. Warm studio spotlights emphasize the gold\'s warm luster. Taiwan jewelry shop. No text, no logos. Commercial photography.';
  }
  if (s.includes('earring')) {
    return 'Gold earring collection displayed on white velvet jewelry stand, including hoops, studs and drop earrings. Warm studio lighting. Taiwan jewelry shop. No text, no logos. Professional product photography.';
  }
  if (s.includes('recovery') || s.includes('recycl') || s.includes('recycle') || s.includes('sell-gold') || s.includes('sell gold')) {
    return 'Professional gold appraisal scene: gold jewelry pieces being weighed on a precision jeweler\'s scale in a Taiwan silver shop. XRF analyzer visible. Warm professional lighting. No text, no logos. Commercial photography.';
  }
  if (s.includes('price') && (s.includes('forecast') || s.includes('outlook') || s.includes('factor') || s.includes('changes') || s.includes('key'))) {
    return 'Gold price chart on a financial screen with gold bars and coins in the foreground. Business investment concept. Professional studio lighting. Taiwan financial market. No text, no logos. Commercial photography.';
  }
  if (s.includes('price') || s.includes('per-qian') || s.includes('per-liang') || s.includes('per-gram') || s.includes('daily') || s.includes('today') || s.includes('realtime') || s.includes('real-time')) {
    return 'Gold price display board with stacked gold bars at a Taiwan jewelry shop counter. Professional interior lighting shows the warm golden luster. No text, no logos. Commercial photography.';
  }
  if (s.includes('etf') || s.includes('invest') || s.includes('savings') || s.includes('financial')) {
    return 'Gold bars and investment portfolio documents on a professional desk. Business investment concept with gold coins. Taiwan financial setting. No text, no logos. Professional commercial photography.';
  }
  if (s.includes('purity') || s.includes('testing') || s.includes('identification') || s.includes('appraise') || s.includes('quality') || s.includes('report')) {
    return 'Professional jeweler using XRF gold purity analyzer in a modern Taiwan jewelry lab. Gold testing equipment with jewelry samples. Clean professional lighting. No text, no logos. Commercial photography.';
  }
  if (s.includes('calculator') || s.includes('converter') || s.includes('weight') || s.includes('measurement') || s.includes('qian-to') || s.includes('liang')) {
    return 'Precision jeweler\'s scale with gold pieces being weighed, measurement reference chart nearby on white marble surface. Professional jewelry shop setting. No text, no logos. Commercial photography.';
  }
  if (s.includes('scam') || s.includes('trap') || s.includes('safety') || s.includes('prevent') || s.includes('warning')) {
    return 'Trustworthy jewelry expert carefully examining gold with professional tools while explaining to a customer in a reputable Taiwan silver shop. Professional consultation setting. No text, no logos. Commercial photography.';
  }
  if (s.includes('checklist') || s.includes('tips') || s.includes('guide') || s.includes('how-to') || s.includes('what-to')) {
    return 'Professional jewelry consultant presenting gold items to a customer at a bright Taiwan jewelry shop counter. Helpful expert consultation scene. No text, no logos. Commercial photography.';
  }
  if (s.includes('gift') || s.includes('birthday')) {
    return 'Elegant gold jewelry in a premium gift box with ribbon, surrounded by soft petals on white surface. Taiwan jewelry gift presentation. Warm studio lighting. No text, no logos. Professional product photography.';
  }
  if (s.includes('family') || s.includes('culture') || s.includes('tradition')) {
    return 'Traditional Taiwanese family gold jewelry collection including bangles and necklaces on red lacquered tray. Cultural heritage and family heirloom concept. Warm ambient lighting. No text, no logos. Professional photography.';
  }
  if (s.includes('pawn') || s.includes('auction')) {
    return 'Professional jewelry auction display with gold pieces on velvet-lined cases, price tags and certificates. Elegant auction house setting. No text, no logos. Commercial photography.';
  }
  if (s.includes('tax') || s.includes('insurance') || s.includes('legal') || s.includes('register') || s.includes('id') || s.includes('why-')) {
    return 'Professional Taiwan jewelry shop transaction scene with gold certificate and documentation on clean counter. Trust and legitimacy concept. Professional interior lighting. No text, no logos. Commercial photography.';
  }
  if (s.includes('shop') || s.includes('taipei') || s.includes('taiwan') || s.includes('taichung') || s.includes('recommend') || s.includes('new-taipei')) {
    return 'Interior of a professional Taiwan jewelry shop with illuminated display cases showcasing gold jewelry. Elegant professional atmosphere. No text, no logos. Commercial interior photography.';
  }

  // Default: professional gold display
  return 'Assorted gold jewelry pieces and gold bars elegantly displayed on dark velvet in a professional Taiwan silver shop. Warm museum spotlights create beautiful golden reflections. No text, no logos. High-quality commercial photography.';
}

// Get alt text based on slug
function getAltText(slug) {
  const s = slug.toLowerCase();
  if (s.includes('recycl') || s.includes('recovery')) return '黃金回收鑑定：專業磅秤與金飾鑑定估價過程';
  if (s.includes('price') && s.includes('forecast')) return '黃金價格走勢預測與市場分析圖表';
  if (s.includes('price') || s.includes('per-qian') || s.includes('today') || s.includes('daily')) return '台灣今日黃金牌價：金條與報價展示';
  if (s.includes('k-gold') || s.includes('karat')) return 'K金首飾展示：18K、14K金戒指與項鍊';
  if (s.includes('platinum')) return '鉑金製品：鉑金條與鉑金首飾專業展示';
  if (s.includes('diamond') || s.includes('gia')) return '鑽石鑑定：GIA鑽石與專業放大鏡鑑定';
  if (s.includes('wedding')) return '婚嫁金飾套組：龍鳳鐲與傳統嫁妝金飾';
  if (s.includes('shop') || s.includes('taipei') || s.includes('taiwan')) return '台灣專業珠寶銀樓：黃金首飾展示間';
  if (s.includes('invest') || s.includes('etf') || s.includes('savings')) return '黃金投資理財：金條與投資組合規劃';
  if (s.includes('purity') || s.includes('testing') || s.includes('appraise')) return '黃金純度鑑定：XRF檢測儀器與專業鑑定';
  if (s.includes('coin') || s.includes('medal')) return '黃金金幣與紀念金章：收藏展示';
  if (s.includes('bracelet')) return '黃金手鍊展示：24K純金手鍊與手環';
  if (s.includes('necklace') || s.includes('pendant')) return '黃金項鍊展示：純金項鍊與吊墜系列';
  if (s.includes('ring')) return '黃金戒指展示：婚戒與黃金戒指系列';
  if (s.includes('gift') || s.includes('birthday')) return '黃金禮品：精緻禮盒包裝的黃金飾品';
  return '專業黃金珠寶展示：巧品珠寶高純度金飾鑑定';
}

// Build SD3.5 workflow
function buildWorkflow(prompt) {
  return {
    "1": {
      "class_type": "CheckpointLoaderSimple",
      "inputs": { "ckpt_name": "sd3.5_large.safetensors" }
    },
    "2": {
      "class_type": "TripleCLIPLoader",
      "inputs": {
        "clip_name1": "clip_l.safetensors",
        "clip_name2": "clip_g.safetensors",
        "clip_name3": "t5xxl_fp16.safetensors"
      }
    },
    "3": {
      "class_type": "CLIPTextEncodeSD3",
      "inputs": {
        "clip": ["2", 0],
        "clip_l": prompt,
        "clip_g": prompt,
        "t5xxl": prompt,
        "empty_padding": "none"
      }
    },
    "4": {
      "class_type": "CLIPTextEncodeSD3",
      "inputs": {
        "clip": ["2", 0],
        "clip_l": NEGATIVE_PROMPT,
        "clip_g": NEGATIVE_PROMPT,
        "t5xxl": NEGATIVE_PROMPT,
        "empty_padding": "none"
      }
    },
    "5": {
      "class_type": "EmptySD3LatentImage",
      "inputs": { "width": 1200, "height": 630, "batch_size": 1 }
    },
    "6": {
      "class_type": "KSampler",
      "inputs": {
        "seed": Math.floor(Math.random() * 999999999999),
        "steps": 28,
        "cfg": 4.5,
        "sampler_name": "euler",
        "scheduler": "sgm_uniform",
        "denoise": 1,
        "model": ["1", 0],
        "positive": ["3", 0],
        "negative": ["4", 0],
        "latent_image": ["5", 0]
      }
    },
    "7": {
      "class_type": "VAEDecode",
      "inputs": { "samples": ["6", 0], "vae": ["1", 2] }
    },
    "8": {
      "class_type": "SaveImage",
      "inputs": { "filename_prefix": "cover", "images": ["7", 0] }
    }
  };
}

// Call ComfyUI to generate image
async function generateImage(prompt) {
  const workflow = buildWorkflow(prompt);

  const queueRes = await fetch(`${COMFYUI_URL}/prompt`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt: workflow })
  });

  if (!queueRes.ok) throw new Error(`ComfyUI queue failed: ${queueRes.status}`);
  const { prompt_id } = await queueRes.json();

  // Poll for completion (SD3.5 takes ~30-60s per image)
  for (let i = 0; i < 90; i++) {
    await new Promise(r => setTimeout(r, 4000));
    const histRes = await fetch(`${COMFYUI_URL}/history/${prompt_id}`);
    const hist = await histRes.json();
    const item = hist[prompt_id];
    if (!item) continue;
    if (item.status?.status_str === 'error') {
      const errMsg = item.status.messages?.find(m => m[0] === 'execution_error');
      throw new Error(`ComfyUI error: ${errMsg?.[1]?.exception_message || 'unknown'}`);
    }
    if (item.outputs?.['8']?.images?.[0]) {
      const imageFilename = item.outputs['8'].images[0].filename;
      const imgRes = await fetch(`${COMFYUI_URL}/view?filename=${imageFilename}&type=output`);
      const imgBuf = Buffer.from(await imgRes.arrayBuffer());
      fs.writeFileSync(TMP_IMAGE, imgBuf);
      return TMP_IMAGE;
    }
  }
  throw new Error('ComfyUI timeout after 360s');
}

// Upload to Cloudinary
async function uploadToCloudinary(imagePath, publicId) {
  const timestamp = Math.floor(Date.now() / 1000);
  const folder = 'gold-tw';
  const sigStr = `folder=${folder}&public_id=${publicId}&timestamp=${timestamp}${CLOUDINARY_API_SECRET}`;
  const signature = createHash('sha1').update(sigStr).digest('hex');

  const form = new FormData();
  form.append('file', fs.createReadStream(imagePath));
  form.append('api_key', CLOUDINARY_API_KEY);
  form.append('timestamp', timestamp.toString());
  form.append('public_id', publicId);
  form.append('folder', folder);
  form.append('signature', signature);

  const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD}/image/upload`, {
    method: 'POST',
    body: form,
    headers: form.getHeaders()
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Cloudinary upload failed: ${err}`);
  }

  const data = await res.json();
  return data.secure_url;
}

// Update page.tsx to add image
function updatePageTsx(slug, cloudinaryUrl, altText) {
  const filePath = path.join(BLOG_DIR, slug, 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Add Image import if not present
  if (!content.includes("from 'next/image'")) {
    content = content.replace(
      /^(import \{ Metadata \} from 'next';)/m,
      `$1\nimport Image from 'next/image';`
    );
    if (!content.includes("from 'next/image'")) {
      content = `import Image from 'next/image';\n` + content;
    }
  }

  // 2. Update og:images in metadata openGraph section
  if (!content.includes('cloudinary')) {
    if (content.includes('openGraph:')) {
      if (content.includes('images: [')) {
        // Replace existing images array
        content = content.replace(
          /images:\s*\[\s*\{[^}]+\}\s*\]/,
          `images: [{ url: '${cloudinaryUrl}', width: 1200, height: 630, alt: '${altText}' }]`
        );
      } else {
        // Add images before closing of openGraph
        // Find openGraph block and add images
        content = content.replace(
          /(openGraph:\s*\{[\s\S]*?)(,?\s*\},?\s*\n(\s*)(alternates|keywords|other|robots|\}))/,
          (match, ogContent, rest) => {
            return ogContent + `,\n    images: [{ url: '${cloudinaryUrl}', width: 1200, height: 630, alt: '${altText}' }],\n  }` + rest.replace(/^,?\s*\{[\s\S]*/, '');
          }
        );
        // Simpler fallback: find the last } before keywords or other metadata
        if (!content.includes('cloudinary')) {
          // Try simple insertion before closing openGraph brace
          content = content.replace(
            /(\s*siteName:\s*'[^']*',?\s*\n)(\s*\},)/,
            `$1    images: [{ url: '${cloudinaryUrl}', width: 1200, height: 630, alt: '${altText}' }],\n$2`
          );
        }
        // Another fallback: add after type: 'article'
        if (!content.includes('cloudinary')) {
          content = content.replace(
            /(\s*type:\s*'article',?\s*\n)(\s*\},)/,
            `$1    images: [{ url: '${cloudinaryUrl}', width: 1200, height: 630, alt: '${altText}' }],\n$2`
          );
        }
      }
    }
  }

  // 3. Add <Image> component after <h1> tag if not present
  if (!content.includes('<Image') && content.includes('<h1')) {
    content = content.replace(
      /(<h1[^>]*>[\s\S]*?<\/h1>)/,
      `$1\n      <Image\n        src="${cloudinaryUrl}"\n        alt="${altText}"\n        width={1200}\n        height={630}\n        style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '1.5rem' }}\n        priority\n      />`
    );
  }

  fs.writeFileSync(filePath, content, 'utf8');
}

// Main batch processor
async function main() {
  const listFile = process.argv[2] || path.join(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1')), 'missing-images.txt');
  const slugsRaw = fs.readFileSync(listFile, 'utf8');
  const slugs = slugsRaw.split('\n')
    .map(s => s.trim())
    .filter(s => s && s !== 'layout.tsx' && s !== 'page.tsx');

  console.log(`\nBatch cover image generator`);
  console.log(`Processing ${slugs.length} articles...\n`);

  let done = 0;
  let failed = [];

  for (const slug of slugs) {
    try {
      console.log(`[${done+1}/${slugs.length}] ${slug}`);

      const prompt = getPrompt(slug);
      const altText = getAltText(slug);
      const publicId = `${slug}-cover`;

      console.log(`  Generating image...`);
      await generateImage(prompt);
      console.log(`  Uploading to Cloudinary...`);
      const url = await uploadToCloudinary(TMP_IMAGE, publicId);
      console.log(`  Updating page.tsx...`);
      updatePageTsx(slug, url, altText);

      if (fs.existsSync(TMP_IMAGE)) fs.unlinkSync(TMP_IMAGE);

      done++;
      console.log(`  ✓ OK → ${url}`);

    } catch (err) {
      console.error(`  ✗ FAILED: ${err.message}`);
      failed.push({ slug, error: err.message });
      if (fs.existsSync(TMP_IMAGE)) {
        try { fs.unlinkSync(TMP_IMAGE); } catch {}
      }
    }
  }

  // Git commit
  console.log(`\nCommitting ${done} updated articles...`);
  const { execSync } = await import('child_process');
  try {
    execSync('git add -A && git commit -m "feat: add ComfyUI cover images to all blog articles via Cloudinary"', {
      cwd: REPO_ROOT, stdio: 'inherit'
    });
    execSync('git push', { cwd: REPO_ROOT, stdio: 'inherit' });
    console.log('✓ Pushed to GitHub');
  } catch (e) {
    console.error('Git commit/push failed:', e.message);
  }

  console.log(`\n=============================`);
  console.log(`Done: ${done}/${slugs.length}`);
  if (failed.length > 0) {
    console.log(`\nFailed (${failed.length}):`);
    failed.forEach(f => console.log(`  - ${f.slug}: ${f.error}`));
    const failedFile = path.join(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1')), 'failed-covers.json');
    fs.writeFileSync(failedFile, JSON.stringify(failed, null, 2));
    console.log(`Failed list saved to ${failedFile}`);
  }
}

main().catch(console.error);
