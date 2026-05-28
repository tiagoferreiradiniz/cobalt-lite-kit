# Changelog

## [0.2.2] - 2026-05-28

### Changed
- Renamed package scope from `@teamviewer` to `@cobalt-kits` — package is now `@cobalt-kits/cobalt-lite-kit`
- Externalized `@base-ui/react`, `sonner`, `lucide-react`, and `date-fns` to fix Dynamic require errors in Figma Make

## [0.2.1] - 2026-05-28

### Changed
- Excluded stories and internal files from published TypeScript types

## [0.2.0] - 2026-05-28

### Added
- Initial release to Figma private npm registry
- Configured package for Figma Make compatibility (ESM + CJS builds, CSS bundled, externalized peer deps)
