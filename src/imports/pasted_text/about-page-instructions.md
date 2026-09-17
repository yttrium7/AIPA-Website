

Implement the About Us page based strictly on the provided Figma design.

Figma design reference:
About Us — https://www.figma.com/design/SQ89IbDhaRuMu3hdBdhhQr/AIPA-website?node-id=93-1973&t=NeAFkOuOoJU0DkqC-4

This is an additional page inside the EXISTING multi-page website.
It is NOT a new standalone website.

The Home page is already completed and approved.
The project architecture and routing have already been prepared.

Current relevant architecture includes:

src/
├── components/
│   ├── InteractiveNav.tsx
│   ├── MobileNav.tsx
│   ├── MobileLayout.tsx
│   └── ScrollAnimations.tsx
├── layouts/
│   └── RootLayout.tsx
├── pages/
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── ProductsPage.tsx
│   ├── ServicesPage.tsx
│   └── CataloguesPage.tsx
├── App.tsx
└── routes.tsx

IMPORTANT:
Do NOT redesign or refactor the existing Home page.
Do NOT perform general code cleanup.
Do NOT rebuild the website architecture.
Do NOT duplicate existing global components.

==================================================
1. IMPLEMENT ABOUTPAGE.TSX
==================================================

Implement the About Us design inside the existing:

src/pages/AboutPage.tsx

Use the Figma design as the single source of truth.

Reproduce the Desktop design as accurately as possible.

Preserve:

- section structure
- section dimensions
- layout
- content width
- alignment
- spacing
- typography
- font sizes
- font weights
- line heights
- colors
- borders
- background treatments
- image dimensions
- image cropping
- visual hierarchy

Use the original assets from the Figma design whenever available.

Do not use placeholders when the actual Figma asset exists.

Do not reinterpret or redesign the page.

==================================================
2. PRESERVE THE EXISTING WEBSITE
==================================================

The Home page is already visually and functionally approved.

Do not modify its page-specific implementation.

Reuse the existing website architecture including:

- RootLayout
- InteractiveNav
- global navigation behavior
- routing
- global styles
- shared animation utilities where appropriate

If About Us uses the same Header, Navigation or Footer structure as Home,
reuse the existing implementation rather than creating duplicate versions.

Do NOT create:

AboutHeader
AboutNavigation
AboutFooter

if equivalent shared components already exist.

==================================================
3. ABOUT PAGE COMPONENT STRUCTURE
==================================================

Keep About-specific content associated with AboutPage.

If the About design contains several clearly independent sections,
they may be extracted into About-specific components when doing so
improves readability and maintainability.

For example:

components/about/

However, avoid unnecessary abstraction.

Do not create separate components for trivial one-off text or decorative elements.

The component structure should reflect meaningful UI sections,
not individual Figma layers.

==================================================
4. LAYOUT IMPLEMENTATION
==================================================

Prefer normal web layout techniques where appropriate:

- document flow
- flexbox
- CSS grid
- reusable containers

Avoid translating every Figma element directly into absolute coordinates.

Use absolute positioning only where the design genuinely requires
layering, overlapping or decorative positioning.

However:

VISUAL FIDELITY HAS PRIORITY.

Do not change the approved visual design merely to make the code look cleaner.

==================================================
5. NAVIGATION AND ROUTING
==================================================

Connect the ABOUT US navigation item to the existing About page route.

The route should navigate to:

/about

When the user is on the About page:

ABOUT US should display the appropriate active navigation state.

When the user returns to Home:

HOME should display its correct active state.

Verify:

Home → About Us
About Us → Home

Navigation must work through the existing routing architecture.

Do not implement page switching by simply hiding and showing page content.

==================================================
6. INTERACTIONS
==================================================

Implement interactions clearly represented by the About Us design.

Maintain the interaction language already established on the Home page.

Where appropriate, preserve consistent:

- hover behavior
- transitions
- button interactions
- navigation behavior
- scroll behavior

If the About design includes section-specific interactions,
implement them according to the design.

Do not invent unnecessary interactions.

==================================================
7. ANIMATION
==================================================

If appropriate, reuse the existing ScrollAnimations architecture
rather than creating a separate animation system for About Us.

Animations should support the existing visual design.

Do not add excessive animation.

Do not alter Home page animations.

==================================================
8. CURRENT SCOPE: DESKTOP FIRST
==================================================

For this implementation pass, focus on the Desktop About Us page.

Primary reference viewport:

1440px

Do NOT perform a full Tablet or Mobile adaptation yet.

Tablet and Mobile responsive behavior will be implemented
after the Desktop page has been visually reviewed.

Do not modify the existing responsive behavior of Home.

==================================================
9. REGRESSION SAFETY
==================================================

After implementing About Us, verify that:

- Home remains visually unchanged
- Home interactions still work
- Home responsive behavior remains unchanged
- Home animations remain unchanged
- navigation still works
- /about loads correctly
- About Us active navigation state works correctly
- shared Header / Navigation remains consistent
- Footer remains consistent where applicable
- no global component has been unnecessarily duplicated
- no existing route has been removed
- no existing functionality has been broken

==================================================
10. GOAL
==================================================

The goal of this task is NOT to refactor the website.

The goal is to add the Desktop About Us page to the existing website
with high visual fidelity to the provided Figma design,
while preserving the completed Home page and existing architecture.