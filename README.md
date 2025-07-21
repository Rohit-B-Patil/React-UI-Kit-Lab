# ⚛️ React UI Kit Lab (Phase 1 + Phase 2)

A lightweight, modular React project that includes essential UI components like **Dropdown**, **Accordion**, and **Button**, styled using **TailwindCSS**. Now extended with **custom navigation**, **modal support**, and **React Portals** to improve how modals are displayed.

This is a multi-phase component system aimed at building reusable elements for real-world frontend applications.

---

## 📌 Features

### ✅ Dropdown

- Toggle menu with selectable options.
- Closes on outside click using `useRef` + `useEffect`.

### ✅ Accordion

- Expandable/collapsible panels for structured content.
- Only one section can be open at a time.

### ✅ Button

- Reusable button with variant styling.
- Icon support using `react-icons`.
- Clean styling with Tailwind.

### ✅ Modal (NEW in Phase 2)

- Reusable popup window that appears in the center of the screen.
- Can be opened and closed from anywhere in the app.

### ✅ React Portal (NEW in Phase 2)

- Used to display modals in a better place in the DOM.
- Helps keep modals on top and separate from the main layout.

### ✅ Custom Navigation (NEW in Phase 2)

- Simple page switching without using `react-router-dom`.
- Built using custom `Link` and `Route` components.
- Matches the URL path to show the correct page.

---

## 🛠️ Tech Stack

- **React** (Vite)
- **TailwindCSS**
- **JavaScript (ES6)**

### 📦 Libraries Used

| Package       | Purpose                              |
| ------------- | ------------------------------------ |
| `classnames`  | Conditionally apply Tailwind classes |
| `react-icons` | Scalable, customizable icons         |
| `prop-types`  | Runtime props validation             |
