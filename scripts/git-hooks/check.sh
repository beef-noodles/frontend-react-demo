#!/bin/bash
set -euo pipefail

display_help() {
  echo "Usage: $0 {px|rgba|hex}" >&2
  echo
  echo "   px                       run css px check for the frontend"
  echo "   rgba                     run css rgba check to deny it"
  echo "   hex                      run css hex check to deny it, except in the some files, e.g. theme.ts"
  echo
  exit 1
}

px_check() {
  local result
  result=$(grep -rin \
    --exclude='*.svg' \
    --exclude='*.png' \
    --exclude='*.yaml' \
    --exclude='*.kmz' \
    --exclude='theme.ts' \
    --exclude-dir='.git' \
    --exclude-dir='build' \
    --exclude-dir='.idea' \
    --exclude-dir='coverage' \
    --exclude-dir='dist' \
    --exclude-dir='node_modules' \
    --exclude-dir='playwright-report' \
    --exclude-dir='test-results' \
    --exclude-dir='.pnpm-store' \
    --exclude-dir='storybook-static' \
    '[0-9]\+px' \
    ./ || true)
  if [ -n "$result" ]; then
    echo "Error: Found files with [0-9]+px pattern:"
    echo "$result"
    exit 1
  else
    echo "No matching files found."
  fi
}

rgba_check() {
  local result
  result=$(grep -rinE \
    --exclude='*.html' \
    --exclude='*.svg' \
    --exclude='*.xml' \
    --exclude='*.spec.tsx' \
    --exclude='*.kmz' \
    --exclude='theme.ts' \
    --exclude-dir='.git' \
    --exclude-dir='build' \
    --exclude-dir='.idea' \
    --exclude-dir='coverage' \
    --exclude-dir='dist' \
    --exclude-dir='node_modules' \
    --exclude-dir='playwright-report' \
    --exclude-dir='test-results' \
    --exclude-dir='.pnpm-store' \
    --exclude-dir='storybook-static' \
    'rgb[a]?\(' \
    ./ || true)
  if [ -n "$result" ]; then
    echo "Error: Found files with Hex color:"
    echo "$result"
    exit 1
  else
    echo "No matching files found."
  fi
}


hex_check() {
  local result
  result=$(grep -rinE \
    --exclude='*.html' \
    --exclude='*.svg' \
    --exclude='*.xml' \
    --exclude='*.spec.tsx' \
    --exclude='*.jpg' \
    --exclude='*.png' \
    --exclude='*.kmz' \
    --exclude='theme.ts' \
    --exclude='fixtures.ts' \
    --exclude='vite.config.ts' \
    --exclude-dir='.git' \
    --exclude-dir='build' \
    --exclude-dir='.idea' \
    --exclude-dir='coverage' \
    --exclude-dir='dist' \
    --exclude-dir='node_modules' \
    --exclude-dir='playwright-report' \
    --exclude-dir='test-results' \
    --exclude-dir='.pnpm-store' \
    --exclude-dir='storybook-static' \
    '#[0-9a-fA-F]{2,8}' \
    ./ || true)
  if [ -n "$result" ]; then
    echo "Error: Found files with Hex color:"
    echo "$result"
    exit 1
  else
    echo "No matching files found."
  fi
}


if [[ "$#" -le 0 ]]; then
  display_help
fi

while [[ "$#" -gt 0 ]]; do
  case $1 in
  -h | --help) display_help ;;
  px) px_check ;;
  rgba) rgba_check ;;
  hex) hex_check ;;

  *) echo "Unknown parameter passed: $1" ;;
  esac
  shift
done
