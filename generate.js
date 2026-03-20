const fs = require("fs");

const channels = [
  { name: "beIN 1", url: "http://t77ert.top/live/d8:e0:e1:6b:af:93/5Qw87kD9keEO7gd/7756.m3u8" },
  { name: "beIN 2", url: "http://t77ert.top/live/d8:e0:e1:6b:af:93/5Qw87kD9keEO7gd/7755.m3u8" },
  { name: "beIN 3", url: "http://t77ert.top/live/d8:e0:e1:6b:af:93/5Qw87kD9keEO7gd/7749.m3u8" },
  { name: "beIN 4", url: "http://t77ert.top/live/d8:e0:e1:6b:af:93/5Qw87kD9keEO7gd/7754.m3u8" },
  { name: "beIN 5", url: "http://t77ert.top/live/d8:e0:e1:6b:af:93/5Qw87kD9keEO7gd/7753.m3u8" },
  { name: "beIN 6", url: "http://t77ert.top/live/d8:e0:e1:6b:af:93/5Qw87kD9keEO7gd/7752.m3u8" },
  { name: "beIN 7", url: "http://t77ert.top/live/d8:e0:e1:6b:af:93/5Qw87kD9keEO7gd/7748.m3u8" },
  { name: "beIN 8", url: "http://t77ert.top/live/d8:e0:e1:6b:af:93/5Qw87kD9keEO7gd/7750.m3u8" },
  { name: "beIN 9", url: "http://t77ert.top/live/d8:e0:e1:6b:af:93/5Qw87kD9keEO7gd/7747.m3u8" }
];

// إنشاء ملف M3U
let content = "#EXTM3U\n\n";

channels.forEach(ch => {
  content += `#EXTINF:-1,${ch.name}\n${ch.url}\n\n`;
});

// حفظ الملف
fs.writeFileSync("playlist.m3u", content);

console.log("✅ تم إنشاء playlist.m3u");
