from pathlib import Path
import sys
import os
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "src" / "assets"
SOURCE_EXTENSIONS = {".png", ".jpg", ".jpeg"}
MIN_BYTES = 100_000
MAX_EDGE = 1920
ONLY = set(sys.argv[1:])
UPDATE_ONLY = os.environ.get("UPDATE_ONLY") == "1"

unused_names = {
    "portfoliocards.png",
    "mobilework.jpg",
    "sir2..png",
    "friends.png",
    "events7.jpeg",
    "events10.jpeg",
    "events6.jpeg",
    "events.jpeg",
    "seo.png",
}

mappings = {}
for source in ASSETS.rglob("*"):
    if not source.is_file() or source.suffix.lower() not in SOURCE_EXTENSIONS:
        continue
    if ONLY and source.name not in ONLY:
        continue
    if source.name in unused_names or source.stat().st_size < MIN_BYTES:
        continue

    target = source.with_suffix(".webp")
    if target.exists() and target.stat().st_size > 0:
        mappings[source.name] = target.name
        continue
    if UPDATE_ONLY:
        continue

    with Image.open(source) as opened:
        image = ImageOps.exif_transpose(opened)
        if max(image.size) > MAX_EDGE:
            scale = MAX_EDGE / max(image.size)
            image = image.resize(
                (round(image.width * scale), round(image.height * scale)),
                Image.Resampling.LANCZOS,
            )
        image.save(target, "WEBP", quality=80, method=4)

    mappings[source.name] = target.name
    print(f"{source.relative_to(ROOT)} -> {target.relative_to(ROOT)}", flush=True)

for code_file in list((ROOT / "src").rglob("*.jsx")) + list((ROOT / "src").rglob("*.js")):
    original = code_file.read_text(encoding="utf-8")
    updated = original
    for source_name, target_name in mappings.items():
        updated = updated.replace(source_name, target_name)
    if updated != original:
        code_file.write_text(updated, encoding="utf-8")
        print(f"updated {code_file.relative_to(ROOT)}", flush=True)

print(f"Optimized {len(mappings)} images.")
