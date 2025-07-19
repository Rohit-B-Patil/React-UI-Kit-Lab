# ⚛️ React UI Kit Lab (Phase 1)

A lightweight, modular React project that includes essential UI components like **Dropdown**, **Accordion**, and **Button**, styled using **TailwindCSS**. This is Phase 1 of a multi-phase component system aimed at building reusable elements for any frontend project.

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

---

## 🧱 Folder Structure

```bash
react-ui-kit-lab/
├── public/             # Static assets
├── src/
│   ├── components/     # UI components (Dropdown, Accordion, Button)
│   ├── App.js          # Root component
│   ├── index.js        # Entry point
│   └── main.jsx        # Vite main file
├── tailwind.config.js  # Tailwind config
├── postcss.config.js   # PostCSS config
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/react-ui-kit-lab.git
cd react-ui-kit-lab
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the App

```bash
npm run dev
```

---

## 🗂️ Roadmap

### Phase 1 ✅

- [x] Dropdown
- [x] Accordion
- [x] Button

### Phase 2 🚧 _(Coming Soon)_

- [ ] Modal
- [ ] Enhanced Navigation (without React Router)
- [ ] Advanced Table with Sorting
- [ ] Portal Feature
