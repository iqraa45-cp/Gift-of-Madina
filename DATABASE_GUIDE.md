Email: Giftofmadina@gmail.com
password: admin123



Prompt for frontant and backened:
I want to add admin cms or backend on website that i have design from antigravity so i can add or delete or update the stock or add new catagoeries or products through this create a supabase database with api and admin private cms with make sure all database api and frontend and private admin cms are attach to each other

make the admin panel private don't show it publically change the whatsapp number 03278715873 don't make seperate folders create all things in one folder make sure database API Admin CMS frontend backend all attach with each other and also give me way to access the database and how i can access to data base



I already have an ecommerce website built in this project. I want you to convert the existing frontend into a complete, production-ready ecommerce system with a real backend, database, API/data layer, secure private admin CMS, product management, inventory management, customer management, and complete order management.

IMPORTANT:

- First inspect the entire existing project.
- Understand the current framework, routes, components, product structure, cart, checkout and existing data flow.
- Do NOT redesign the existing customer-facing website unnecessarily.
- Do NOT create a separate demo application.
- Implement everything inside the existing project.
- Reuse the existing UI/components wherever possible.
- Do NOT use mock data after the real backend is connected.
- All products, categories, customers, orders, prices and stock must be connected to the real database.
- Use Supabase for PostgreSQL database, authentication and storage unless the existing project already has a suitable backend.
- Keep all admin functionality private and protected.

==================================================

1. DATABASE ARCHITECTURE
   ==================================================

Create a proper relational PostgreSQL database in Supabase.

Create at minimum:

categories

- id
- name
- slug
- description
- image
- is_active
- created_at
- updated_at

products

- id
- name
- slug
- description
- price
- sale_price
- stock
- sku
- category_id
- images
- is_active
- featured
- created_at
- updated_at

customers

- id
- customer_id
- name
- email
- phone
- address
- city
- area
- postal_code
- created_at
- updated_at

orders

- id
- order_id
- customer_id
- status
- subtotal
- shipping_fee
- discount
- total
- payment_method
- payment_status
- shipping_address
- customer_notes
- admin_notes
- created_at
- updated_at

order_items

- id
- order_id
- product_id
- product_name_snapshot
- sku_snapshot
- quantity
- unit_price
- total_price
- created_at

IMPORTANT:
Store product name, SKU and price snapshots inside order_items so historical orders do not change if a product is later edited.

Create proper foreign-key relationships and indexes.

If the existing website supports product variants such as size/color, design the schema to support variants properly.

==================================================
2. ORDER ID SYSTEM

Create a unique human-readable Order ID for every order.

Example:

ORD-2026-000001

or another professional format.

The Order ID must be:

- unique
- easy to search
- visible to admin
- visible to the customer where appropriate
- stored permanently
- never changed after the order is created

Also maintain the internal database UUID separately from the human-readable order ID.

==================================================
3. CUSTOMER INFORMATION

When a customer places an order, store all necessary order/customer information.

Admin should be able to see:

- Order ID
- Customer name
- Phone number
- Email
- Complete delivery address
- City
- Area
- Postal code if provided
- Products ordered
- Product quantities
- Product prices
- Subtotal
- Shipping fee
- Discount
- Final total
- Payment method
- Payment status
- Order date/time
- Order status
- Customer notes
- Admin notes

Do not expose private customer information publicly.

==================================================
4. COMPLETE ORDER MANAGEMENT

Create a dedicated Orders section inside the Admin Dashboard.

Admin should be able to:

- View all orders
- Search by Order ID
- Search by customer name
- Search by phone number
- Filter by order status
- Filter by payment status
- Filter by date
- Open complete order details
- Print order details/invoice if appropriate
- Add admin notes
- Update order status
- Update payment status

Create an order workflow such as:

NEW
↓
CONFIRMED
↓
PREPARING
↓
READY
↓
SHIPPED
↓
DELIVERED

Also support:

CANCELLED
RETURNED
REFUNDED

Do not automatically mark an order as delivered unless the business logic explicitly requires it.

==================================================
5. ORDER PREPARATION

Create an order preparation interface.

When I open an order, show a clear checklist:

Product | SKU | Quantity | Price | Preparation status

Allow admin to mark individual order items as prepared if useful.

Show an overall order status such as:

Preparing
Partially Prepared
Ready

Make it easy to understand which orders still need preparation.

==================================================
6. AUTOMATIC STOCK MANAGEMENT

Connect orders with inventory.

When an order is successfully created:

- Validate stock availability.
- Reserve/decrease stock according to the chosen inventory strategy.
- Prevent stock from becoming negative.
- Clearly handle cancelled orders and stock restoration.

IMPORTANT:
Do not blindly decrease stock multiple times if an order is updated or processed more than once.

Implement idempotent stock/order operations.

Admin must still be able to manually adjust stock.

==================================================
7. ADMIN DASHBOARD

Create a protected:

/admin

dashboard.

Dashboard should display:

- Total orders
- New orders
- Orders awaiting preparation
- Orders being prepared
- Ready orders
- Shipped orders
- Delivered orders
- Cancelled orders
- Total products
- Low-stock products
- Out-of-stock products
- Total customers

Allow the dashboard statistics to be calculated from the real database.

==================================================
8. PRODUCTS MANAGEMENT

Create complete CRUD functionality.

Admin can:

- Add product
- Edit product
- Delete product
- Activate/deactivate product
- Change price
- Change sale price
- Change stock
- Change SKU
- Change description
- Change category
- Upload product images
- Remove product images
- Mark product as featured
- Search products
- Filter products
- Sort products

==================================================
9. CATEGORY MANAGEMENT

Admin can:

- Add category
- Edit category
- Delete category
- Activate/deactivate category
- Upload category image
- View products inside a category

Do not allow unsafe deletion of categories containing products.

Provide a safe reassignment option where necessary.

==================================================
10. INVENTORY MANAGEMENT

Create a dedicated Inventory page.

Show:

- Product
- SKU
- Current stock
- Low-stock indicator
- Out-of-stock indicator
- Last updated

Allow:

- Increase stock
- Decrease stock
- Set exact stock
- Bulk stock update if appropriate

Never allow stock below zero.

Add a configurable low-stock threshold.

==================================================
11. CUSTOMER MANAGEMENT

Create a Customers section.

Admin can:

- View customers
- Search by name
- Search by phone
- Search by email
- Open customer profile
- See customer's order history
- See total orders
- See total amount spent
- See latest order
- View customer contact details

Do not expose customer information to unauthenticated users.

==================================================
12. SUPABASE AUTHENTICATION

Use Supabase Auth for admin authentication.

Create:

/admin/login

and protected admin routes.

Implement:

- Login
- Logout
- Session persistence
- Protected routes
- Unauthorized access handling
- Password reset/change mechanism

Do NOT hardcode admin credentials.

==================================================
13. ADMIN USERS & CREDENTIAL MANAGEMENT

Create an Admin Settings section.

I need the ability to securely manage admin authentication credentials.

Include:

- Change admin password
- Password reset
- Admin email/account management where supported
- Session logout
- View current admin account information

Do NOT store plain-text passwords anywhere.

Do NOT create a frontend form that directly changes privileged database credentials.

Use Supabase Auth for authentication.

==================================================
14. DATABASE ACCESS / MANAGEMENT

I want a clear way to access and inspect my database.

Use Supabase as the database platform.

Provide documentation inside the project explaining:

1. Where the database is located.
2. How I can open the Supabase project.
3. How I can open the Table Editor.
4. How I can inspect products.
5. How I can inspect customers.
6. How I can inspect orders.
7. How I can run SQL queries safely.
8. How I can view database logs.
9. How I can create backups/export data where supported.

Do NOT create an insecure public "database access" page.

Database access should remain through the Supabase dashboard or secure backend tooling.

==================================================
15. SUPABASE CREDENTIAL / PROJECT CONFIGURATION

Create a clear setup configuration.

Use environment variables for public client configuration.

For example, use the framework's correct environment variable convention for:

SUPABASE_URL
SUPABASE_ANON_KEY

If server-side privileged operations are required, keep the service-role key strictly server-side.

NEVER expose the Supabase service-role key in frontend/browser code.

Add a clear .env.example file containing variable names but NOT real secrets.

==================================================
16. API / DATA ACCESS LAYER

Create a clean and maintainable backend/data-access architecture.

Support operations such as:

GET products
GET product by slug
GET categories
GET category products

CREATE product
UPDATE product
DELETE product

CREATE category
UPDATE category
DELETE category

CREATE order
GET order
GET orders
UPDATE order status
UPDATE payment status

GET customers
GET customer order history

UPDATE inventory

Use appropriate authentication and authorization.

Validate every write operation.

==================================================
17. CHECKOUT → ORDER → ADMIN FLOW

Make sure the entire flow is connected:

Customer browses products
↓
Customer adds products to cart
↓
Customer enters customer/contact information
↓
Customer enters delivery information
↓
Customer selects payment method
↓
Customer places order
↓
Backend validates order
↓
Order is created in database
↓
Unique Order ID is generated
↓
Customer/order data is stored
↓
Order items are stored
↓
Stock is updated safely
↓
Order appears automatically in Admin Dashboard
↓
Admin prepares order
↓
Admin changes status
↓
Admin ships order
↓
Admin marks delivered

Everything should use the same database and data relationships.

Do NOT create disconnected systems.

==================================================
18. PAYMENT STATUS

Create a payment status system that can support:

PENDING
PAID
FAILED
REFUNDED
COD_PENDING

Keep payment status separate from order status.

If the existing website already has a payment gateway, inspect and integrate with it rather than replacing it.

==================================================
19. SEARCH AND FILTERING

Admin Orders page should support:

- Order ID search
- Customer name search
- Phone search
- Status filter
- Payment status filter
- Date range filter

Products page:

- Product name search
- SKU search
- Category filter
- Stock filter
- Active/inactive filter

Customers page:

- Name
- Phone
- Email

==================================================
20. EXPORT / REPORTING

If practical, provide admin options to export:

- Orders
- Customers
- Products
- Inventory

Use CSV export or another appropriate format.

Provide date filtering before exporting orders.

==================================================
21. SECURITY

Implement proper Row Level Security (RLS).

Public users should only access intentionally public product/category information.

Only authorized admins can:

- Create products
- Update products
- Delete products
- Manage categories
- Modify stock
- View customer information
- View orders
- Update orders
- View admin information

Protect against:

- unauthorized admin access
- unauthorized database writes
- SQL injection
- XSS
- insecure file uploads
- negative stock
- duplicate order processing
- ID manipulation
- privilege escalation

Never expose:

- database password
- Supabase service-role key
- private API keys
- admin credentials

==================================================
22. STORAGE

Use Supabase Storage for:

- Product images
- Category images

Implement secure upload policies.

Admin should be able to:

- Upload
- Preview
- Replace
- Delete

Do not store large image files directly in PostgreSQL.

==================================================
23. ADMIN SETTINGS

Create:

/admin/settings

with sections for:

Account

- Email
- Password change
- Session/logout

Store Settings

- Store name
- Store phone
- Store email
- Store address
- Currency
- Low-stock threshold

Order Settings

- Available order statuses
- Default shipping fee if applicable
- Order ID configuration if appropriate

System

- Backend/database connection status
- Storage status
- Environment/configuration information that is safe to display

Never display secret keys.

==================================================
24. ERROR HANDLING

Implement proper:

- Loading states
- Empty states
- Success messages
- Error messages
- Form validation
- Confirmation dialogs
- Network error handling
- Database error handling

For destructive actions such as deleting a product/category/order-related data, require confirmation.

==================================================
25. RESPONSIVE ADMIN PANEL

The admin dashboard must work properly on:

- Desktop
- Tablet
- Mobile

Use a professional admin layout with:

Sidebar
Header
Dashboard cards
Tables
Search
Filters
Forms
Modals/drawers where appropriate

==================================================
26. DO NOT BREAK THE EXISTING WEBSITE

Before implementation:

1. Inspect all existing files.
2. Identify the framework.
3. Identify the existing routes.
4. Identify product components.
5. Identify cart functionality.
6. Identify checkout functionality.
7. Identify existing API/backend functionality.
8. Identify existing authentication if any.
9. Identify existing payment integration if any.

Then integrate the backend into the existing architecture.

Do not rewrite functioning parts unnecessarily.

==================================================
27. REAL IMPLEMENTATION — NO MOCKS

This is extremely important.

Do NOT only create UI screens.

Do NOT use fake JSON data.

Do NOT use localStorage as the primary database.

Do NOT create fake API responses.

Actually implement:

- Supabase database
- SQL schema/migrations
- Relationships
- RLS policies
- Authentication
- Storage
- Real product CRUD
- Real category CRUD
- Real inventory
- Real customers
- Real orders
- Real order status workflow
- Real admin authentication
- Real customer/order connections

==================================================
28. FINAL VERIFICATION

After implementation, test the complete system.

Test:

ADMIN:

- Login
- Logout
- Protected routes
- Product creation
- Product editing
- Product deletion
- Category creation
- Category editing
- Category deletion
- Stock update
- Image upload
- Customer viewing
- Order viewing
- Order searching
- Order filtering
- Order status update
- Payment status update
- Order preparation
- Admin settings
- Password change

CUSTOMER:

- Product listing
- Category listing
- Product details
- Cart
- Checkout
- Order creation
- Order ID generation
- Stock validation

DATABASE:

- Relationships
- RLS
- Duplicate order prevention
- Negative stock prevention
- Correct order totals
- Correct inventory updates

Fix all errors found during testing.

==================================================
29. FINAL DOCUMENTATION

At the end, give me a clear setup guide containing:

1. What framework the existing project uses.
2. What backend was implemented.
3. Supabase project setup steps.
4. Database tables created.
5. Storage buckets created.
6. Authentication setup.
7. Required environment variables.
8. How to create the first admin account.
9. How to change admin credentials.
10. How to open/access the database.
11. How to view orders directly in Supabase.
12. How to view customers.
13. How to view products.
14. How to access the admin dashboard.
15. How to deploy the application.
16. How to safely update environment variables.
17. How to backup/export important data.

Most importantly:

DO NOT STOP AT THE FRONTEND.

I need a real, connected, working ecommerce backend and private admin CMS where I can manage products, categories, inventory, customers and orders from one place, and every change must automatically reflect on the existing customer-facing website.
YOUR WEBSITE
│
├── /admin
│   ├── Products
│   ├── Categories
│   ├── Stock
│   ├── Orders
│   ├── Customers
│   └── Settings
│
└── Customer Website


SUPABASE
│
├── Database / Tables
├── SQL Editor
├── Authentication
├── Storage
├── RLS / Security
└── Project Settings





# 🗄️ Database & Backend Management Guide — Gift of Madina

Welcome to the **Gift of Madina** (هدية المدينة) Database & Backend Architecture Guide.

This project is powered by **PostgreSQL on Supabase**, providing real-time data persistence, authentication, automatic stock management, relational order history, and a private Admin CMS.

---

## 📌 1. Where is the Database Located?

Your database is hosted on **Supabase** (Managed PostgreSQL Cloud).

* **Dashboard URL:** [https://supabase.com/dashboard](https://supabase.com/dashboard)
* **SQL Schema File:** Located in this project directory at [`schema.sql`](file:///c:/Users/user/Desktop/Gift%20of%20madina/schema.sql).
* **Environment Variables:** [`config.js`](file:///c:/Users/user/Desktop/Gift%20of%20madina/config.js) or [`.env.example`](file:///c:/Users/user/Desktop/Gift%20of%20madina/.env.example).

---

## 🚀 2. How to Set Up & Open Your Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a free account or sign in.
2. Click **New Project** and name it `Gift-of-Madina`.
3. Choose your database password and select a region (e.g. `Middle East / Frankfurt / Singapore`).
4. Once the project is created:
   * Go to **Project Settings** (gear icon in sidebar) → **API**.
   * Copy the **Project URL** (`https://your-id.supabase.co`).
   * Copy the **anon public key** (`eyJhbG...`).
5. Open [`config.js`](file:///c:/Users/user/Desktop/Gift%20of%20madina/config.js) or configure via the Admin Settings in `index.html`.

---

## ⚡ 3. How to Run the SQL Schema (One-Click Setup)

1. In your Supabase Dashboard, click **SQL Editor** on the left menu.
2. Click **New Query**.
3. Open [`schema.sql`](file:///c:/Users/user/Desktop/Gift%20of%20madina/schema.sql) in this directory, copy the entire SQL code, and paste it into the Supabase SQL Editor.
4. Click **Run** (or `Ctrl + Enter`).
5. All tables (`categories`, `products`, `customers`, `orders`, `order_items`, `vip_subscribers`, `admin_settings`), sequences, automatic stock triggers, and RLS policies are now created and seeded!

---

## 📊 4. How to Inspect & Edit Database Tables

Click **Table Editor** on the left menu in Supabase to inspect and modify any table:

### 🛍️ `products`
* View, edit, or add products, prices, bundle discounts, stock, SKUs, and image URLs.
* Every change in Supabase or the Admin CMS automatically updates the customer website.

### 📦 `orders` & `order_items`
* View all customer orders, delivery addresses, and payment statuses (`COD_PENDING`, `PAID`, etc.).
* **`order_items`** stores historical product snapshots (name, SKU, unit price) so past receipts remain accurate even if products change.

### 👥 `customers`
* View customer contact info (Phone, Email, City, Address, Total Spent).

### 🏷️ `categories`
* Manage active categories (Tumblers, Rolex Watches, Water Bottles, Oud Burners).

### 🔔 `vip_subscribers`
* View all customer signups waiting for the Arabian Oud Burner launch.

---

## 🔒 5. How to Create & Manage Admin Users

1. In Supabase Dashboard, click **Authentication** → **Users**.
2. Click **Add User** → **Create User**.
3. Enter your Admin Email (e.g. `admin@giftofmadina.com`) and Password.
4. Set **Auto Confirm User** to `ON`.
5. Access the **Private Admin CMS** on your site by navigating to `#admin` or opening the Admin modal.
6. Enter your credentials to log into the private dashboard.

---

## 🔐 6. How to Run Custom SQL Queries Safely

Go to **SQL Editor** in Supabase and run queries such as:

```sql
-- View top selling products
SELECT p.name, SUM(oi.quantity) as total_sold, SUM(oi.total_price) as revenue
FROM public.order_items oi
JOIN public.products p ON p.id = oi.product_id
GROUP BY p.name
ORDER BY total_sold DESC;

-- View all pending orders needing preparation
SELECT order_id, status, payment_status, total, created_at
FROM public.orders
WHERE status IN ('NEW', 'CONFIRMED', 'PREPARING')
ORDER BY created_at ASC;

-- Check low stock items
SELECT name, sku, stock, low_stock_threshold
FROM public.products
WHERE stock <= low_stock_threshold;
```

---

## 💾 7. Backups & Data Export

1. **Via Supabase Dashboard:** Go to **Database** → **Backups** to schedule daily backups.
2. **Via Admin Panel:** Go to **Admin CMS** → **Settings** to export Orders, Customers, Products, or Inventory directly to CSV with one click.

---

## 📞 8. Contact & Configuration Defaults
* **Store WhatsApp:** `03278715873` (Link: `https://wa.me/923278715873`)
* **Store Email:** `Giftofmadina@gmail.com`
* **Currency:** `SAR` (ر.س)
