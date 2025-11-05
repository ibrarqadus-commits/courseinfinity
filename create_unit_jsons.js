const fs = require('fs');
const path = require('path');

const modules = {
  1: ['1.1','1.2','1.3','1.4','1.5','1.6'],
  2: ['2.1','2.2','2.3','2.4','2.5','2.6','2.7','2.8','2.9'],
  3: ['3.1','3.2','3.3','3.4','3.5','3.6','3.7'],
  4: ['4.1','4.2','4.3','4.4','4.5','4.6','4.7','4.8'],
  5: ['5.1','5.2','5.3','5.4','5.5','5.6','5.7','5.8','5.9','5.10'],
  6: ['6.1','6.2','6.3','6.4','6.5','6.6','6.7','6.8'],
  7: ['7.1','7.2','7.3','7.4','7.5','7.6','7.7','7.8']
};

const root = __dirname;
const unitsRoot = path.join(root, 'json', 'units');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function writeIfMissing(filePath, content) {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }
  return false;
}

function main() {
  ensureDir(unitsRoot);
  let created = 0;
  for (const [mod, unitIds] of Object.entries(modules)) {
    const modDir = path.join(unitsRoot, String(mod));
    ensureDir(modDir);
    for (const uid of unitIds) {
      const file = path.join(modDir, `${uid}.json`);
      const data = {
        title: `Module ${mod} • Unit ${uid}`,
        videoUrl: "",
        content: ""
      };
      const ok = writeIfMissing(file, JSON.stringify(data, null, 2) + "\n");
      if (ok) created++;
    }
  }
  console.log(`Ensured JSON templates for all units. Newly created: ${created}`);
}

main();


