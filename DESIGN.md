---
name: Obsidian Kinetic
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1b1b'
  surface-container: '#1f1f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#cfc4c5'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#303030'
  outline: '#988e90'
  outline-variant: '#4c4546'
  surface-tint: '#c6c6c6'
  primary: '#c6c6c6'
  on-primary: '#303030'
  primary-container: '#000000'
  on-primary-container: '#757575'
  inverse-primary: '#5e5e5e'
  secondary: '#c9c6c5'
  on-secondary: '#313030'
  secondary-container: '#4a4949'
  on-secondary-container: '#bab8b7'
  tertiary: '#c6c6c6'
  on-tertiary: '#303030'
  tertiary-container: '#000000'
  on-tertiary-container: '#757575'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c6'
  on-primary-fixed: '#1b1b1b'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c9c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c6'
  on-tertiary-fixed: '#1b1b1b'
  on-tertiary-fixed-variant: '#474747'
  background: '#131313'
  on-background: '#e2e2e2'
  surface-variant: '#353535'
typography:
  display-2xl:
    fontFamily: Bebas Neue
    fontSize: 120px
    fontWeight: '400'
    lineHeight: 110px
    letterSpacing: -0.04em
  display-lg:
    fontFamily: Bebas Neue
    fontSize: 80px
    fontWeight: '400'
    lineHeight: 76px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Bebas Neue
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Bebas Neue
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 40px
    letterSpacing: 0.01em
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '300'
    lineHeight: 28px
    letterSpacing: 0.01em
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: '0'
  label-bold:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: '0'
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  container-max: 1440px
  gutter: 32px
  margin-desktop: 80px
  margin-mobile: 24px
  section-gap: 160px
---

## Brand & Style

The design system is engineered for an elite, high-performance fitness audience where luxury meets athletic precision. The brand personality is "Quiet Authority"—it does not scream for attention through clutter, but commands it through scale, contrast, and refined material effects. 

The visual style is a hybrid of **High-Contrast Minimalism** and **Glassmorphism**. It leverages a deep, cinematic "Dark Mode" foundation to create a sense of infinite depth. High-end "Apple-meets-Awwwards" aesthetics are achieved through massive typography, expansive whitespace, and ultra-smooth tactile surfaces. The emotional response should be one of focus, prestige, and high-energy motivation.

## Colors

This design system utilizes a "Deep Onyx" palette to emphasize premium hardware-like quality. 

- **Primary Background (#000000):** Used for the main canvas to create true black depth, ideal for OLED displays.
- **Secondary Surface (#090909):** Used for elevated containers, cards, and section subtle differentiations.
- **Vibrant Lime (#76FF03):** The "Kinetic Spark." This is used with surgical precision—reserved exclusively for primary calls-to-action, active progress indicators, and critical highlights.
- **Neutral/Text:** Pure white (#FFFFFF) for high-contrast headings and a muted silver-grey (#A1A1A1) for secondary metadata to maintain visual hierarchy.

## Typography

Typography is the primary driver of the "expensive" feel. 

**Bebas Neue** is the voice of the brand. It must be used in all-caps for headlines. It should be set with tight tracking (letter-spacing) to create a dense, architectural block of text that feels powerful and modern.

**Manrope** provides the functional balance. Its geometric but humanistic curves offer high readability against dark backgrounds. Use the Light (300) weight for long-form body copy to maintain a sophisticated editorial look, and Bold (700) sparingly for UI labels and navigation.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** approach with extreme generous margins to evoke a luxury gallery feel. 

- **Desktop:** 12-column grid with 32px gutters. Content should be centered with 80px side margins to allow the "Deep Onyx" background to frame the interface.
- **Section Spacing:** Use large vertical gaps (120px to 200px) between major content blocks to give the design "room to breathe."
- **Mobile:** 4-column grid with 24px margins. Headlines should scale aggressively but maintain their tight leading.
- **Alignment:** Strictly align text to the grid. Use asymmetrical layouts (e.g., text spanning columns 1-6, imagery spanning 8-12) to create dynamic, cinematic interest.

## Elevation & Depth

Depth is created through layered transparency rather than traditional drop shadows.

1.  **The Canvas:** Base layer is pure #000000.
2.  **The Glass Layer:** Overlays (cards, modals, navigation bars) use a semi-transparent dark tint with a heavy **Backdrop Blur (24px to 40px)**.
3.  **The Stroke:** Every elevated element must have a 1px solid border at **10% Opacity White**. This creates a sharp "rim-light" effect that separates dark surfaces from the black background.
4.  **The Glow:** Use soft, large-radius radial gradients (Lime Green at 5-10% opacity) positioned behind key cards to create a subtle atmospheric "aura" without being distracting.

## Shapes

The shape language is ultra-smooth and organic. 

A base radius of **28px** (represented by `rounded-xl` in this system) is the standard for cards and containers. This "squircle-adjacent" roundness softens the aggressive nature of the high-contrast color palette. Small components like buttons should utilize a **Full Pill** shape to emphasize their interactive and athletic nature.

## Components

- **Primary Buttons:** Full-pill shape. Background: #76FF03. Text: #000000 (Manrope Bold). No shadows; instead, use a subtle "scale-up" hover effect.
- **Glass Cards:** 28px+ corner radius. Background: rgba(255, 255, 255, 0.03) with 32px backdrop blur. 1px border at 10% white.
- **Input Fields:** Bottom-border only or very subtle glass-well. Focus state should highlight the border in #76FF03.
- **Lists:** Clean, high-contrast rows separated by 10% white borders. Use large 24px padding-top/bottom to maintain luxury spacing.
- **Progress Indicators:** Linear bars or thin rings using the #76FF03 accent. These should "glow" slightly using a 2px blur of the same color.
- **Featured Motion:** Components should enter the frame using staggered "Ease-In-Out-Expo" transitions, moving slightly upward as they fade in from 0% to 100% opacity.