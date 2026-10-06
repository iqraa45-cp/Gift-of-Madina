# Gift of Madina (هدية المدينة) — Luxury Timepiece & Premium Hydration Platform

A production-grade, real-time e-commerce platform for **Gift of Madina**, showcasing luxury timepieces (Rolex Submariner, Rolex Daytona Diamond, and Seiko Prospex Divers) along with 40oz double-wall vacuum insulated travel tumblers, direct Saudi Riyal (SAR) pricing, Pakistan (+92) phone integration, real-time Supabase PostgreSQL database sync, and a private Admin CMS.

---

## 🌟 Key Features

1. **Luxury Watch Collection (12 Models):**
   - Individual cards and specifications for Rolex Submariner Date (Two-Tone, Hulk, Gold Blue, Gold Green, Gold White, Steel Black, Bluesy, Polar), Rolex Daytona 18k Solid Gold Diamond Dial, and Seiko Prospex Automatic 200m Divers.
   - High-resolution luxury photography, detailed mechanical specs, Single item purchases, and Pack of 2 discounts.

2. **40oz Insulated Tumbler Collection (6 Individual Colors):**
   - Separate product cards for Olive Green, Slate Navy Blue, Matte Black Pro Handle, Hot Pink, Bold Crimson Red, and Lilac Purple.
   - Double-wall vacuum insulation (24h Cold / 12h Hot), 18/8 food-grade stainless steel, car cup holder compatible with Pack of 2 discounts.

3. **Homepage Layout:**
   - Premium Rolex watch hero banner (`hero_luxury_watch.jpg`) with direct CTAs to explore Watches and shop Tumblers.
   - Dedicated separate showcase sections for Luxury Timepieces and 40oz Insulated Tumblers.

4. **Live Running Announcement Marquee:**
   - Dynamic animated top marquee ticker showcasing current promotions, Pack of 2 offers, and free delivery notices across Saudi Arabia.
   - Editable in real-time directly from the Admin CMS.

5. **Real-Time Supabase PostgreSQL Architecture:**
   - **Products Table:** Live inventory, model specs, pricing, and soft-delete/restore capabilities (`is_deleted = true`).
   - **Customers & Orders:** Automatic customer profiles, unique order numbers (`ORD-2026-XXXXXX`), line items breakdown, and automatic stock decrementation triggers.
   - **Traffic Events:** Real-time visitor tracking logging device types, cities, and live page views.
   - **Cross-Tab Synchronization:** Instant broadcast (<100ms) across all open tabs when products, orders, or stock are updated.

6. **Private Admin CMS (`index.html#admin`):**
   - **Credentials:** Username: `admin` | Password: `Admin2026!`
   - **Live Traffic & Analytics:** Active visitor counter, top referrers, device breakdown, and live event feed.
   - **Product Manager:** Add new timepieces or tumblers, edit pricing/specs, soft-delete to Trash, and 1-click restore.
   - **Order Dispatch & Invoicing:** Order status pipeline, preparation checklists, and printable luxury invoices.
   - **Content Editor:** Live customization of hero titles, running marquee ticker, and contact numbers.

---

## 🚀 Deployment Guide (GitHub & Vercel)

### Step 1: Upload to GitHub
1. Create a new repository on [GitHub](https://github.com/new) named `gift-of-madina`.
2. Upload all files in this directory (`index.html`, `config.js`, `schema.sql`, `vercel.json`, `README.md`, and all `.jpg` images).
3. Commit and push the files to your `main` branch.

### Step 2: Deploy to Vercel
1. Log into [Vercel](https://vercel.com).
2. Click **Add New...** $\rightarrow$ **Project**.
3. Select your `gift-of-madina` GitHub repository and click **Import**.
4. Leave settings as default:
   - Framework Preset: **Other**
   - Root Directory: `./`
5. Click **Deploy**.
6. Vercel will assign a production URL (e.g., `https://gift-of-madina.vercel.app`) with free automated SSL.

---

## 🗄️ Database Setup (Supabase)

1. Open your [Supabase Dashboard](https://supabase.com/dashboard).
2. Open your project (`chzzbrlhbbgtrqwepizv`).
3. Navigate to the **SQL Editor** on the left menu.
4. Copy the entire contents of `schema.sql` and click **Run**.
5. All tables, functions, triggers, security policies, 12 watch models, and 6 tumbler models will be created and configured immediately.

---

## 📞 Support & WhatsApp
- **WhatsApp Support:** `03278715873` ([Direct Chat](https://wa.me/923278715873))
- **Email:** `Giftofmadina@gmail.com`
- **Location:** Kingdom of Saudi Arabia & Worldwide Delivery
