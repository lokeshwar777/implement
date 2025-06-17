# Frontent Notes (only theory)

1. **Build Tool**
   - Bundler (Webpack, Rollup, Parcel)
     - Combines multiple files into optimized bundles
     - Supports features like tree-shaking and code splitting
   - Transpiler (Babel, TypeScript)
     - Converts code to a different version or language (ES6 → ES5, TS → JS)
   - Minifier (Terser, CSSNano)
     - Removes whitespace, comments, and shortens code
     - mangle = rename variables/functions to shorter names (`lokiThor` ->`l`)
   - Dev Server (Vite, Webpack Dev Server)
     - Serves files locally with live reloading
   - Linter/Formatter (ESLint, Prettier)
     - Maintains code quality and consistent styling
   - Asset Optimizer
     - Compresses images, inlines fonts/assets, etc.
   - Code Splitter
     - Splits code into smaller chunks for lazy loading

## Tool Descriptions

- **Babel** = JS compiler/transpiler (ES6+ → ES5)
- **Vite** = Build tool + dev server + uses Rollup for production bundling
- **Webpack** = Build tool + bundler + asset pipeline (highly configurable)
- **Parcel** = Zero-config build tool + bundler (auto detects setup)
- **Rollup** = Bundler for libraries with tree-shaking (used in Vite prod)

## UI Components

- **Layout**
  - Navigation Bar
  - Sidebar
  - Footer
  - Content Area
  - Grid / Flex Layouts
  - Breadcrumbs
  - Tabs

- **Display**
  - Card
  - Hero Section
  - Featured Section
  - Carousel / Slider
  - Accordion
  - Badge
  - Avatar
  - Tooltip
  - Toast / Snackbar
  - Alert
  - Banner

- **Forms & Input**
  - Input Field
  - Textarea
  - Select / Dropdown
  - Checkbox
  - Radio Button
  - Toggle / Switch
  - Range Slider
  - File Upload
  - Search Bar
  - Date Picker
  - Stepper

- **Interaction**
  - Modal / Dialog
  - Popover
  - Drawer (slide-in sidebar)
  - Dropdown Menu
  - Pagination
  - Tabs (also used in layout)
  - Command Palette
  - Floating Action Button (FAB)

- **Feedback**
  - Loader / Spinner
  - Progress Bar / Circular Progress
  - Toast / Snackbar
  - Alert (Success, Error, Info)
  - Skeleton Loader

- **Communication**
  - Newsletter Form
  - Contact Form
  - Chat Widget
  - Comment Box

- **Misc**
  - Icon
  - Divider
  - Rating
  - Calendar
  - Timeline

## Implementation Checklist

- [ ] Meme generator
- [ ] E-Commerce Website
- [ ] Clones (Amazon, LeetCode, Netflix, ...)
- [ ] Toast Pop-up
- [ ] Responsive Navigation Bar
- [ ] React Project with no inbuilt hooks (if possible vanillajs)
