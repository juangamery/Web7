# Design Specification: Navigation and Brand Alignment (WEB7 & ON7)

We are aligning the navigation bars and branding across the main WEB7 Studio pages and the ON7 product landing page to clearly communicate that ON7 is a product of the studio.

## Design Changes

### 1. Logo Integration in ON7 (`on7.html`)
*   **Action**: Replaced the text brand header (`ON7 by WEB7`) with the official WEB7 green logo SVG.
*   **Link**: The logo links to the studio's home page (`index.html`).
*   **Markup**:
    ```html
    <div class="logo-outer">
      <a href="index.html" class="logo" aria-label="WEB7">
        <img src="assets/Logoweb7-verde.svg" alt="WEB7" style="height: 52px;">
      </a>
    </div>
    ```

### 2. Navigation Link Adjustments
*   **Main Studio Pages (`index.html`, `proyectos.html`, `contacto.html`)**:
    *   Add **ON7** as a text link in the main navigation menu.
    *   **Position**: Between "Proyectos" and "Lab7".
    *   **Markup (index.html)**:
        ```html
        <li><a href="on7.html" data-cursor-hover>ON7</a></li>
        ```
    *   **Markup (proyectos.html / contacto.html)**:
        ```html
        <li><a href="on7.html">ON7</a></li>
        ```
*   **ON7 Product Page (`on7.html`)**:
    *   Add **WEB7** as a text link to return to the studio home.
    *   **Position**: First item in the navigation links.
    *   **Markup**:
        ```html
        <li><a href="index.html">WEB7</a></li>
        ```

## Verification Plan

### Manual Verification
1.  Verify the navigation bar of `index.html`, `proyectos.html`, and `contacto.html` contains the text link "ON7" between "Proyectos" and "Lab7".
2.  Verify the navigation bar of `on7.html` features the WEB7 logo image on the left, linking back to `index.html`.
3.  Verify the navigation bar of `on7.html` contains the text link "WEB7" pointing to `index.html`.
4.  Verify all pages load cleanly without broken tags or alignment issues.
