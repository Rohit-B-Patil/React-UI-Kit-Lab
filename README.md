# ⚛️ React UI Kit Lab (Phase 1 + Phase 2)

A lightweight, modular React project that includes essential UI components like **Dropdown**, **Accordion**, **Button**, and now a **fully sortable Table**, all styled using **TailwindCSS**. This UI kit is built to be reusable and extendable for real-world frontend projects.

Phase 2 introduces more advanced patterns like **custom navigation**, **modals with React Portals**, and a sortable **Table** with clean UX.

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

- Simple page switching without `react-router-dom`.
- Built using custom `Link` and `Route` components.
- Matches the URL path to show the correct page.

### ✅ Sortable Table (NEW in Phase 2)

- Displays tabular data with dynamic headers.
- Sorts columns in ascending/descending order or resets.
- Custom sorting logic using `sortValue` per column.
- Visual sort indicators with up/down arrows (`react-icons`).

---

## 🛠️ Tech Stack

- **React** (Vite)
- **TailwindCSS**
- **JavaScript (ES6)**

---

## 📦 Libraries Used

| Package       | Purpose                              |
| ------------- | ------------------------------------ |
| `classnames`  | Conditionally apply Tailwind classes |
| `react-icons` | Scalable, customizable icons         |
| `prop-types`  | Runtime props validation             |
