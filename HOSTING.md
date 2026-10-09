# Putting the page online (free) at thankyou.jaredfennteam.com

Written for non-developers. Set aside about 30 minutes, plus some waiting time while the
internet catches up on the change.

## My recommendation: GitHub Pages

The page already lives in this GitHub repository, so GitHub Pages is the simplest free option:

- **No new accounts.** It's a setting inside the GitHub repo you already have.
- **No usage limits to worry about.** Netlify's current free plan pauses your site
  ("Site not available") if you go over its monthly allowance. That's a bad surprise for a
  link you text to every client.
- **Free secure `https://` address**, set up automatically.
- **Edits go live by themselves.** Change a file on github.com and the page updates in a
  minute or two.

**The one catch:** on a free GitHub account, Pages only works if the repository is **public**.
That's fine here. The repo holds nothing except the page (which is public anyway) and these
instructions. There are no passwords or client information in it. If you'd rather keep the
repo private, see [Alternative: keep the repo private](#alternative-keep-the-repo-private)
at the end.

---

## Part 1: Get the page ready on GitHub (10 minutes)

### 1. Fill in the placeholders first
Follow the checklist in [README.md](README.md) (the remaining links; colors, logo, and preview image are already done).
You can also do this after the site is live. Every edit updates the live page.

### 2. Put the page on a branch called `main`
Right now the files are on a branch named `claude/inspection-thankyou-page-yj2w6x`.
Give the live site a simple `main` branch:

1. Open the repository on github.com.
2. Near the top left, click the **branch dropdown** (it shows the current branch name).
3. If `main` is already listed and contains `index.html`, skip to step 3 below. Otherwise,
   type `main` in the box and click **Create branch main from claude/inspection-thankyou-page-yj2w6x**.
4. Go to **Settings** (top menu of the repo) → **General**, find **Default branch**, click the
   ⇄ (switch) icon, pick `main`, and click **Update**.

You can also just ask Claude to do this step for you.

### 3. Make the repository public
1. **Settings → General**, then scroll all the way down to **Danger Zone**.
2. Click **Change visibility → Change to public** and confirm the prompts.

### 4. Turn on GitHub Pages
1. **Settings → Pages** (in the left sidebar).
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Set **Branch** to `main` and the folder to `/ (root)`, then click **Save**.
4. Wait 1–2 minutes and refresh. You'll see "Your site is live at
   `https://alexmmanansala-ctrl.github.io/Thankyou/`". Open it on your phone and check it.

### 5. Tell GitHub your custom address
1. Still on **Settings → Pages**, find **Custom domain**.
2. Type `thankyou.jaredfennteam.com` and click **Save**.
3. GitHub will show a DNS warning. **That's expected** until you finish Part 2.
   (GitHub also adds a small file named `CNAME` to the repo. Leave it there; don't delete it.)

---

## Part 2: Point thankyou.jaredfennteam.com at the new page (10 minutes)

The "DNS settings" for jaredfennteam.com control where each address goes. Right now
`thankyou` points to Constant Contact. You'll change it to point to GitHub.

### 1. Find out who manages your domain's DNS
- If you or someone in the office logs in somewhere to manage jaredfennteam.com
  (GoDaddy, Namecheap, Squarespace/Google Domains, Network Solutions, Cloudflare, Wix…),
  that's where you'll go.
- **Not sure?** Go to <https://lookup.icann.org>, enter `jaredfennteam.com`, and look at
  **Name Servers**:
  - `domaincontrol.com` → GoDaddy
  - `registrar-servers.com` → Namecheap
  - `cloudflare.com` → Cloudflare
  - `worldnic.com` → Network Solutions
  - `googledomains.com` or `squarespacedns.com` → Squarespace
- **If someone else manages it** (Pillar To Post corporate, or the company that built your
  main website), send them the message in [Message to send your web/IT person](#message-to-send-your-webit-person) below.

### 2. Edit the `thankyou` record
1. Log in and open the **DNS settings** (sometimes called "DNS records", "Manage DNS",
   or "Zone editor") for **jaredfennteam.com**.
2. Find the record whose **Name/Host** is `thankyou`.
   **Before you change anything, write down or screenshot its current Type and Value.**
   That's your undo button if something goes wrong.
3. Change it to:

   | Type | Name / Host | Value / Points to / Target | TTL |
   |---|---|---|---|
   | `CNAME` | `thankyou` | `alexmmanansala-ctrl.github.io` | Default (or 1 hour) |

   - If the existing `thankyou` record is a CNAME, just edit its Value.
   - If it's a different type (like `A`), delete it and add the CNAME above.
   - Make sure only **one** record named `thankyou` is left.
   - Type the value exactly. Don't add `https://`, `/Thankyou`, or anything else.
4. **Don't touch any other records.** Leave `@`, `www`, `MX`, and `TXT` records alone, and
   anything with `_domainkey` or `ctct` in its name. Those keep your email and Constant
   Contact email sending working.

**Don't see a `thankyou` record?** Your provider may be forwarding it instead. Look for a
**Forwarding** or **Redirects** section, remove the `thankyou` forward there, then add the
CNAME record above.

### 3. Wait, then turn on HTTPS
1. DNS changes usually take 5–60 minutes (occasionally up to 24 hours).
2. Go back to GitHub **Settings → Pages**. When it says **DNS check successful**, tick
   **Enforce HTTPS**. (If the box is grayed out, GitHub is still setting up the security
   certificate. Check back in an hour.)
3. Open **https://thankyou.jaredfennteam.com** on your phone. You should see the new page.

### 4. Recommended: verify your domain with GitHub (5 minutes)
This stops anyone else's GitHub account from ever claiming your address.
1. On GitHub, click your **profile picture → Settings → Pages** (this is the account's
   settings, not the repo's).
2. Click **Add a domain**, enter `jaredfennteam.com`, and GitHub shows you a `TXT` record.
3. Add that `TXT` record at your DNS provider, exactly as shown, then click **Verify** on GitHub.

---

## Part 3: Test it

- [ ] `https://thankyou.jaredfennteam.com` opens the new page on your phone.
- [ ] `https://thankyou.jaredfennteam.com/#agents` jumps straight to the agent section.
- [ ] Text the link to yourself and check the preview. Phones remember old previews, so if
      you still see the Constant Contact one, text yourself
      `https://thankyou.jaredfennteam.com/?v=2` to see the fresh preview.
- [ ] For Facebook/Messenger, paste the link into the **Facebook Sharing Debugger**
      (<https://developers.facebook.com/tools/debug/>) and click **Scrape Again** to refresh
      its saved preview.

Once everything looks right, you can unpublish or delete the old Constant Contact page.
If Constant Contact has `thankyou.jaredfennteam.com` saved as a custom domain, remove it
there too. **Don't** delete Constant Contact's email-related DNS records (see Part 2,
step 2.4).

**If something goes wrong:** change the `thankyou` DNS record back to the old value you
wrote down, and the old page comes back.

---

## Making changes later

1. Open the repo on github.com and click `index.html`.
2. Click the **pencil icon** (Edit), make your change, and click **Commit changes**.
3. The live page updates in about 1–2 minutes. Refresh your phone to see it.

For bigger find-and-replace edits, press **`.`** on the repo page to open the full browser
editor (see README.md). You can also ask Claude to make the change.

---

## Message to send your web/IT person

> Hi! We're moving our post-inspection page off Constant Contact. Could you please update
> the DNS for **jaredfennteam.com** as follows?
>
> - Change the record for **`thankyou`** to: **CNAME → `alexmmanansala-ctrl.github.io`**
>   (remove any other `thankyou` records or forwarding)
> - Please don't change any other records, especially MX, `www`, and the Constant
>   Contact email-authentication records.
>
> Before you change it, could you send me the current value so we can switch back if needed?
> Thank you!

---

## Alternative: keep the repo private

If you don't want the repository to be public, you have two options:

- **Upgrade the GitHub account to a paid plan (GitHub Pro).** Pages then works with private
  repos, and every step above stays the same.
- **Use Netlify's free plan** (netlify.com). Sign up with your GitHub account, choose
  **Add new project → Import an existing project → GitHub**, pick this repo, and leave the
  build settings blank. Then use **Domain management → Add a domain** to add
  `thankyou.jaredfennteam.com`. Netlify will show you a CNAME value to use in Part 2 instead
  of `alexmmanansala-ctrl.github.io`. The tradeoff: Netlify's free plan gives you a monthly
  allowance that every published change and every visit uses up. If you run out, the site is
  paused until the next month. A small page like this should stay under it, but save your
  edits up and publish them together rather than making lots of tiny changes.
