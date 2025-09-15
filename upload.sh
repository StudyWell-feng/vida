#!/bin/bash
#aws s3 sync dist  "s3://www.vidagames.club/" --delete --exclude '.cache/*' --exclude '.git/*' --exclude 'node_modules/*' --exclude '*.DS_Store'

# 第一步：先处理所有 JS 文件
aws s3 sync dist/ s3://www.vidagames.club/ \
  --exclude "*" \
  --include "*.js" \
  --content-type "application/javascript" \
  --cache-control "public,max-age=31536000,immutable"

# 第二步：处理其他文件并清理旧内容
aws s3 sync dist/ s3://www.vidagames.club/ \
  --delete \
  --exclude '.cache/*' \
  --exclude '.git/*' \
  --exclude 'node_modules/*' \
  --exclude '*.DS_Store' \
  --exclude '*.js' \
  --cache-control "public,max-age=3600"

# 第三步：单独处理 HTML 文件，防止缓存问题
aws s3 sync dist/ s3://www.vidagames.club/ \
  --exclude "*" \
  --include "*.html" \
  --cache-control "no-cache, no-store, must-revalidate"