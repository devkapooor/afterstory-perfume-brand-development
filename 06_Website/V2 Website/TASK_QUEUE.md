# AFTERSTORY V2 Website Task Queue

Status values: `Queued`, `In progress`, `Blocked`, `Ready for review`, `Done`.

Work through these tasks in order. Do not start a dependent task until its prerequisite is complete.

## Phase 1 — Business inputs and content

### 1. Provide and record the GST certificate
- **Status:** Done
- **Owner:** Brand owner
- **Dependency:** None
- **Completion criteria:** The legal name, GSTIN, registered address, state code, and GST rate have been confirmed by the brand owner. The certificate file should still be retained with the production records if required for deployment or accounting.

### 2. Approve final product photography
- **Status:** Done
- **Owner:** Brand owner
- **Dependency:** None
- **Completion criteria:** Final images are approved for FIRST LIGHT, TOBACCO BLOOM, and WHITE MUSK, with the approved mapping recorded in the project handoff.

### 3. Confirm final product content
- **Status:** Done
- **Owner:** Brand owner
- **Dependency:** None
- **Completion criteria:** Product names, approved descriptions, profiles, stories, usage instructions, size, concentration, price, MRP, category architecture, and stock display copy are approved.

## Phase 2 — Catalog and storefront

### 4. Verify launch inventory
- **Status:** Done
- **Owner:** Website team
- **Dependency:** Tasks 1–3
- **Completion criteria:** Founder physically confirmed the 2026-09-23 launch allocation: FIRST LIGHT: 1, TOBACCO BLOOM: 2, WHITE MUSK: 1. Recheck against the inventory source immediately before production launch; zero stock displays **Under Preparation**.

### 5. Complete storefront content and policy pages
- **Status:** Done
- **Owner:** Website team
- **Dependency:** Tasks 1–3
- **Completion criteria:** Approved policy copy is implemented locally at `/v2/policies`, including shipping, privacy, terms, returns/refunds, GST, business, support, and contact information. Revalidate final provider details before production deployment.

### 6. Complete product detail pages
- **Status:** Done
- **Owner:** Website team
- **Dependency:** Tasks 2–3
- **Completion criteria:** Each launch product has an accurate detail page with approved imagery, content, price, stock state, delivery information, and add-to-cart flow.

## Phase 3 — Commerce and operations

### 7. Configure Razorpay in a test environment
- **Status:** In progress
- **Owner:** Website team / Razorpay account owner
- **Dependency:** Tasks 1, 4, and 5
- **Completion criteria:** Test payments can be created, verified server-side, and safely marked successful or failed without exposing secret keys.

### 8. Implement payment and stock rules
- **Status:** Queued
- **Owner:** Website team
- **Dependency:** Task 7
- **Completion criteria:** Stock is reserved only after verified payment success; failed, cancelled, duplicate, and replayed callbacks do not reserve stock twice.

### 9. Implement fulfillment statuses
- **Status:** Queued
- **Owner:** Website team
- **Dependency:** Task 8
- **Completion criteria:** Paid orders can move through ready-to-make, dispatched, and delivered states, with the confirmed 2–3 day dispatch and 2–3 day delivery estimates.

### 10. Implement GST invoices
- **Status:** Queued
- **Owner:** Website team
- **Dependency:** Tasks 1 and 7
- **Completion criteria:** Successful orders generate GST invoices using the verified Amelia Enterprises details and the GST-inclusive ₹599 pricing.

### 11. Build the owner dashboard
- **Status:** Queued
- **Owner:** Website team
- **Dependency:** Tasks 4, 8, and 9
- **Completion criteria:** Only `devkapoor.1917@gmail.com` can access order and inventory management, including order status changes, stock updates, and an auditable stock history.

### 12. Configure customer notifications
- **Status:** Queued
- **Owner:** Website team / service account owner
- **Dependency:** Tasks 8–10
- **Completion criteria:** Customers receive accurate payment, order, ready-to-make, dispatch, and delivery updates through the approved email or WhatsApp channel.

## Phase 4 — Preview and verification

### 13. Deploy a private preview
- **Status:** Queued
- **Owner:** Website team
- **Dependency:** Tasks 5–12
- **Completion criteria:** V2 is available at a preview URL while `www.afterstory.in` remains unchanged.

### 14. Run end-to-end commerce testing
- **Status:** Queued
- **Owner:** Website team / brand owner
- **Dependency:** Task 13
- **Completion criteria:** Verify the ₹599 single-product order, the above-₹999 free-delivery threshold, guest checkout, payment success/failure, stock reservation, zero-stock state, invoice generation, and order-status updates.

### 15. Run responsive and accessibility verification
- **Status:** Queued
- **Owner:** Website team
- **Dependency:** Task 13
- **Completion criteria:** Verify mobile, tablet, laptop, and wide desktop layouts, keyboard navigation, validation, loading, empty, error, permission-denied, and overflow states.

### 16. Preview approval
- **Status:** Queued
- **Owner:** Brand owner
- **Dependency:** Tasks 14–15
- **Completion criteria:** Brand owner approves the preview experience and confirms that the storefront content and checkout behavior are ready for production.

## Phase 5 — Production launch

### 17. Configure production services
- **Status:** Queued
- **Owner:** Website team / service account owner
- **Dependency:** Task 16
- **Completion criteria:** Production Razorpay keys, authentication, database, invoice generation, notifications, backups, and monitoring are configured and verified.

### 18. Final launch audit
- **Status:** Queued
- **Owner:** Website team / brand owner
- **Dependency:** Task 17
- **Completion criteria:** Final stock snapshot, policy review, business-detail review, security review, and live payment smoke test are complete.

### 19. Replace the live website
- **Status:** Queued
- **Owner:** Brand owner / website team
- **Dependency:** Task 18
- **Completion criteria:** V2 replaces `www.afterstory.in` only after launch approval, with a rollback plan and the existing live site preserved until the cutover is confirmed.
