import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const visionMappings = [
  { file: 'Vision2.jsx', route: '/web-development' },
  { file: 'Vision3.jsx', route: '/mobile-app-development-services' },
  { file: 'Vision4.jsx', route: '/uiux-design' },
  { file: 'Vision5.jsx', route: '/artificial-intelligence' },
  { file: 'Vision6.jsx', route: '/devops-and-cloud' },
  { file: 'Vision7.jsx', route: '/custom-software' },
  { file: 'Vision8.jsx', route: '/third-party-integration' },
  { file: 'Vision9.jsx', route: '/full-stack-development' },
  { file: 'Vision10.jsx', route: '/qa-and-testing' },
  { file: 'Vision11.jsx', route: '/data-analytics' },
  { file: 'Vision12.jsx', route: '/crm-customization' },
  { file: 'Vision13.jsx', route: '/seo-smo' },
  { file: 'Vision14.jsx', route: '/it-staff-augmentation-services' },
  { file: 'Vision15.jsx', route: '/data-engineering-services' },
];

const visionDir = path.join(rootDir, 'src', 'pages', 'Our Services', 'components');

visionMappings.forEach(({ file, route }) => {
  const filePath = path.join(visionDir, file);
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf-8');

  // 1. Ensure Link import exists
  if (!content.includes('import { Link } from "react-router-dom"') && !content.includes("from 'react-router-dom'")) {
    content = content.replace(
      /import\s+\{\s*useEffect,\s*useRef\s*\}\s*from\s+["']react["'];/,
      'import { useEffect, useRef } from "react";\nimport { Link } from "react-router-dom";'
    );
  }

  // 2. Add Read More button if not present
  if (!content.includes('Read More</span>')) {
    const dividerRegex = /<div className="flex items-center justify-center gap-2 mb-8">[\s\S]*?<\/div>\s*<\/div>/;

    const replacement = `<div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-12 h-px bg-white/20"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
            <span className="w-12 h-px bg-white/20"></span>
          </div>

          {/* Read More button */}
          <div className="flex justify-end max-w-[700px] lg:max-w-[920px] mx-auto mb-3 md:mb-4 px-1">
            <Link
              to="${route}"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-sky-400 to-blue-600 hover:from-sky-300 hover:to-blue-500 text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-1.5 sm:py-2 rounded-full transition-all duration-300 shadow-md shadow-sky-500/20 hover:shadow-sky-500/40 hover:-translate-y-0.5 no-underline"
            >
              <span>Read More</span>
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>`;

    if (dividerRegex.test(content)) {
      content = content.replace(dividerRegex, replacement);
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Successfully updated ${file} with Read More -> ${route}`);
    } else {
      console.warn(`Could not match dividerRegex in ${file}`);
    }
  } else {
    console.log(`${file} already has Read More`);
  }
});
