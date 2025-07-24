# ⚛️ React UI Kit Lab (Phase 1 + Phase 2 + Phase 3)

A lightweight, modular React project that includes essential UI components like **Dropdown**, **Accordion**, **Button**, and a fully **sortable Table**, all styled using **TailwindCSS**. This UI kit is designed to be reusable and extendable for real-world frontend projects.

---

## 📌 Features

### 🔹 Phase 1

#### ✅ Dropdown

- Toggle menu with selectable options.
- Closes on outside click using `useRef` + `useEffect`.

#### ✅ Accordion

- Expandable/collapsible panels for structured content.
- Only one section can be open at a time.

#### ✅ Button

- Reusable button with variant styling.
- Icon support using `react-icons`.
- Clean styling with Tailwind.

---

### 🔸 Phase 2

#### ✅ Modal with React Portal

- Reusable popup window that appears in the center of the screen.
- Rendered using **React Portal** to keep it outside the main DOM structure.
- Stays on top of other UI elements and supports backdrop click to close.

#### ✅ Custom Navigation

- Simple page switching without `react-router-dom`.
- Built using custom `Link` and `Route` components.
- Matches the URL path to show the correct page.

#### ✅ Sortable Table

- Displays tabular data with dynamic headers.
- Sorts columns in ascending/descending order or resets.
- Custom sorting logic using `sortValue` per column.
- Visual sort indicators with up/down arrows (`react-icons`).

---

### 🧠 Phase 3

#### ✅ Custom Hook for Sorting

- Extracted reusable logic for table column sorting.
- Improves separation of concerns and reusability.

#### ✅ Sidebar Counter (State Management)

- A new **sidebar counter** component.
- Built using `useReducer` for predictable state transitions.
- Enhanced with `immer.js` for immutable state handling with simpler syntax.

---

## 🛠️ Tech Stack

- **React** (Vite)
- **TailwindCSS**
- **JavaScript (ES6)**

---

## 📦 Libraries Used

| Package       | Purpose                                   |
| ------------- | ----------------------------------------- |
| `classnames`  | Conditionally apply Tailwind classes      |
| `react-icons` | Scalable, customizable icons              |
| `prop-types`  | Runtime props validation                  |
| `immer`       | Immutable state updates with `useReducer` |
