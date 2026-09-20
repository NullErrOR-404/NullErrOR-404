# Quick Setup Guide: Launching Your GitHub Profile Landing Page

This step-by-step guide walks you through activating your new Apple-inspired minimalist profile on **[github.com/NullErrOR-404](https://github.com/NullErrOR-404)** in under 3 minutes.

---

## Step 1: Update Your Left Sidebar Profile Information

Visit **[github.com/settings/profile](https://github.com/settings/profile)** and set:

| Field | Recommended Value |
| :--- | :--- |
| **Name** | `Mohamed Sameen S` |
| **Bio** | `Full-Stack AI & Software Engineer · Crafting intelligent systems & scalable web architectures · Chennai, IN` |
| **Location** | `Chennai, India` |
| **Social Accounts** | Add your LinkedIn, Instagram, and Portfolio URLs |

---

## Step 2: Create Your Special Profile Repository

GitHub has a built-in feature: **a public repository with the exact same name as your GitHub username (`NullErrOR-404`) automatically displays its README at the top of your profile landing page.**

1. Go to **[github.com/new](https://github.com/new)**.
2. In the **Repository name** box, type exactly: `NullErrOR-404`.
   *(GitHub will show a green banner: "You found a secret! NullErrOR-404/NullErrOR-404 is a ✨special✨ repository that you can use to add a README.md to your GitHub profile.")*
3. Select **Public**.
4. Check **Add a README file**.
5. Click **Create repository**.

---

## Step 3: Add Your Profile Files (`README.md` & `header.svg`)

You can either upload them via GitHub's web interface or push them with git:

### Option A: Using the GitHub Web Interface (Easiest)
1. Open your new repository: `https://github.com/NullErrOR-404/NullErrOR-404`.
2. Click **Add file** -> **Upload files**.
3. Drag and drop:
   - `c:\HealthAssist-AI\github-profile\header.svg`
   - `c:\HealthAssist-AI\github-profile\README.md`
4. Click **Commit changes**.

### Option B: Using Git Terminal
```bash
cd c:\HealthAssist-AI\github-profile
git init
git add README.md header.svg
git commit -m "feat: Apple-inspired minimalist profile landing page"
git branch -M main
git remote add origin https://github.com/NullErrOR-404/NullErrOR-404.git
git push -u origin main --force
```

---

## Step 4: Add Descriptions & Topics to Your Repositories

Currently, your repos have no descriptions, which leaves cards looking blank. Adding these quick descriptions makes your landing page look like an engineer's portfolio:

### 1. [HealthAssist-AI](https://github.com/NullErrOR-404/HealthAssist-AI)
- Click the ⚙️ gear icon next to "About" on the repository page.
- **Description**: `Intelligent healthcare assistant and clinical workflow automation platform`
- **Topics**: `healthcare-ai`, `typescript`, `nextjs`, `llm`, `ai-assistant`

### 2. [Pearl_International](https://github.com/NullErrOR-404/Pearl_International)
- **Description**: `Global B2B commodity export platform, supply chain logistics & CRM system`
- **Topics**: `b2b-ecommerce`, `supply-chain`, `export-business`, `crm`, `typescript`

### 3. [WeatherGPT-068](https://github.com/NullErrOR-404/WeatherGPT-068)
- **Description**: `Conversational weather intelligence and contextual forecasting engine`
- **Topics**: `weather-ai`, `python`, `nlp`, `api-integration`, `fastapi`

### 4. [awesome-claude-skills](https://github.com/NullErrOR-404/awesome-claude-skills)
- **Description**: `Curated registry of production-ready skills, agent workflows, and developer tools`
- **Topics**: `claude-skills`, `ai-agents`, `developer-tools`, `curated-list`

---

## Step 5: Pin Your Repositories

1. Go to your public profile: **[github.com/NullErrOR-404](https://github.com/NullErrOR-404)**.
2. Scroll to the **Pinned** section and click **Customize your pins** (or click **Pin repositories**).
3. Select:
   - ☑️ `HealthAssist-AI`
   - ☑️ `Pearl_International`
   - ☑️ `WeatherGPT-068`
   - ☑️ `awesome-claude-skills`
4. Click **Save pins**.

Your profile landing page is now completely organized in a high-craft, Apple-inspired minimalist aesthetic!
