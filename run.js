  // -----------------------
    // Demo data + state
    // -----------------------
    const state = {
      isAuthed: true,
      user: {
        name: "John Doe",
        email: "demo@example.com",
        pronouns: "He/Him",
        phone: "",
        followers: 12,
        skills: ["React", "TypeScript", "UI Design"],
        avatarDataUrl: null,
      },
      resources: [
        {
          id: "r1",
          category: "Design",
          title: "Web Design Principles",
          desc: "Fundamental principles of web design including layout, spacing, and hierarchy.",
          author: "Alice Smith",
          img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
          rating: 4.8,
          likes: 124,
          saves: 52,
          tags: ["Design", "UI", "Beginner"],
          link: "https://developer.mozilla.org/",
        },
        {
          id: "r2",
          category: "AI",
          title: "Machine Learning Intro",
          desc: "Start your journey into AI and Machine Learning with beginner-friendly steps.",
          author: "Elena Ray",
          img: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=800",
          rating: 5.0,
          likes: 89,
          saves: 31,
          tags: ["AI", "ML", "Starter"],
          link: "https://www.kaggle.com/learn",
        },
        {
          id: "r3",
          category: "Code",
          title: "HTML & CSS Validation Checklist",
          desc: "Practical checklist to keep markup clean, accessible, and standards-friendly.",
          author: "Sarah Green",
          img: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=800",
          rating: 4.7,
          likes: 203,
          saves: 77,
          tags: ["Code", "HTML", "Accessibility"],
          link: "https://validator.w3.org/",
        },
        {
          id: "r4",
          category: "Tutorial",
          title: "Responsive Layouts: A Quick Guide",
          desc: "Learn breakpoints, flexible grids, and mobile-first layouts with practical examples.",
          author: "Mike Tech",
          img: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=800",
          rating: 4.6,
          likes: 58,
          saves: 19,
          tags: ["Tutorial", "CSS", "Responsive"],
          link: "https://web.dev/responsive-web-design-basics/",
        },
        {
  id: "r5",
  category: "Game Dev",
  title: "Game Development Basics",
  desc: "Learn core game development concepts including engines, mechanics, and level design.",
  author: "Chris Nolan",
  img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
  rating: 4.6,
  likes: 42,
  saves: 17,
  tags: ["Game Dev", "Unity", "Game Design"],
  link: "https://unity.com/learn/game-development",
},
{
  id: "r6",
  category: "Software Eng",
  title: "Software Engineering Fundamentals",
  desc: "Learn clean code principles, system design basics, and software engineering best practices.",
  author: "Priya Patel",
  img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=80",
  rating: 4.9,
  likes: 64,
  saves: 28,
  tags: ["Software Engineering", "Clean Code", "System Design"],
  link: "https://roadmap.sh/software-engineer",
},
{
  id: "r7",
  category: "Marketing",
  title: "Marketing Campaign Strategy",
  desc: "Learn how to plan, launch, and optimize marketing campaigns using real-world digital strategies.",
  author: "Sophia Lee",
  img: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=800",
  rating: 4.7,
  likes: 51,
  saves: 23,
  tags: ["Marketing", "Campaigns", "Digital Strategy"],
  link: "https://blog.hubspot.com/marketing/marketing-campaign",
},

      ],
      saved: new Set(["r1"]),
      liked: new Set(),
      comments: {
        r1: [{ by: "Sam", text: "Super helpful breakdown — the spacing tips are gold." }],
        r2: [],
        r3: [],
        r4: [],
      },
      contributions: [
        // starts empty; submit adds Published demo entries
      ],
      contribTab: "All",
      savedView: "grid",
      savedFilter: "All",
      browseFilter: "All",
      browseQuery: "",
      searchQuery: "Web Design",
      activeResourceId: null,
      browseBackView: "browse",
    };

    // -----------------------
    // DOM helpers
    // -----------------------
    const $ = (sel, root=document) => root.querySelector(sel);
    const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

    function show(el) { el.classList.remove("hidden"); }
    function hide(el) { el.classList.add("hidden"); }

    function setActiveNav(viewId) {
      $$(".sidebar .nav-item, .bottom-nav .nav-item").forEach(b => b.classList.remove("active"));
      $(`#nav-${viewId}`)?.classList.add("active");
      $(`#mobile-nav-${viewId}`)?.classList.add("active");
    }

    function navigate(viewId) {
      // Auth screen is separate
      if (viewId === "auth") {
        $$(".view").forEach(v => v.classList.remove("active"));
        $("#auth-screen").classList.add("active");
        $("#app-shell").classList.add("hidden");
        lucide.createIcons();
        return;
      }

      $("#auth-screen").classList.remove("active");
      $("#app-shell").classList.remove("hidden");

      $$(".main .view").forEach(v => { v.classList.remove("active"); v.classList.add("hidden"); });
      const target = $(`#view-${viewId}`);
      if (target) {
        target.classList.remove("hidden");
        target.classList.add("active");
        $(".main")?.scrollTo({ top: 0, behavior: "smooth" });
      }
      setActiveNav(viewId);
      lucide.createIcons();
    }

    // -----------------------
    // Validation helpers
    // -----------------------
    function setFieldError(key, msg) {
      const el = document.querySelector(`[data-error="${key}"]`);
      if (!el) return;
      el.textContent = msg;
      el.classList.toggle("hidden", !msg);
    }

    function clearErrors(keys) {
      keys.forEach(k => setFieldError(k, ""));
    }

    // -----------------------
    // Renderers
    // -----------------------
    function resourceCardHTML(r, { showActions=false, isBookmarked=false } = {}) {
      return `
        <article class="card" data-resource="${r.id}">
          <div class="card-media">
            <img src="${r.img}" alt="${escapeHtml(r.title)}">
            <span class="badge">${escapeHtml(r.category)}</span>
          </div>
          <div class="card-body">
            <h3 class="card-title">${escapeHtml(r.title)}</h3>
            <p class="card-desc">${escapeHtml(r.desc)}</p>

            <div class="card-meta">
              <div class="author">
                <img src="assets/avatar.png" alt="" onerror="this.remove();">
                <span>${escapeHtml(r.author)}</span>
              </div>

              <div class="stats">
                <span class="stat"><i data-lucide="star" class="icon-xs"></i>${r.rating.toFixed(1)}</span>
                <button class="icon-btn" data-like="${r.id}" aria-label="Like">
                  <i data-lucide="heart" class="icon-sm"></i>
                </button>
                <button class="icon-btn ${isBookmarked ? "favorite active" : ""}" data-save="${r.id}" aria-label="Save">
                  <i data-lucide="${isBookmarked ? "bookmark-check" : "bookmark"}" class="icon-sm"></i>
                </button>
              </div>
            </div>

            ${showActions ? `
              <div class="quick-actions">
                <button class="btn btn-outline" data-open="${r.id}"><i data-lucide="eye"></i> Preview</button>
                <a class="btn btn-primary" href="${r.link}" target="_blank" rel="noreferrer"><i data-lucide="external-link"></i> Open</a>
              </div>
            ` : ``}
          </div>
        </article>
      `;
    }

    function renderHome() {
  $("#home-greeting").textContent =
    `Welcome back, ${state.user.name.split(" ")[0] || "User"}`;

  const home = $("#home-cards");

  home.innerHTML = state.resources.map(r =>
    resourceCardHTML(r, {
      showActions: true,
      isBookmarked: state.saved.has(r.id),
    })
  ).join("");

  lucide.createIcons();
}



    function matchesFilter(r, cat, q) {
      const okCat = cat === "All" || r.category === cat;
      const query = (q || "").trim().toLowerCase();
      const okQ = !query || (r.title + " " + r.desc + " " + r.tags.join(" ")).toLowerCase().includes(query);
      return okCat && okQ;
    }

    function renderBrowse() {
      const grid = $("#browse-grid");
      const list = state.resources.filter(r => matchesFilter(r, state.browseFilter, state.browseQuery));
      grid.innerHTML = list.map(r => resourceCardHTML(r, { showActions:true, isBookmarked: state.saved.has(r.id) })).join("");
      lucide.createIcons();
    }

    function renderSearch() {
      const q = ($("#search-input").value || "").trim();
      state.searchQuery = q;
      const list = state.resources.filter(r => matchesFilter(r, "All", q));
      $("#result-count").textContent = `${list.length} results for: ${q || "All"}`;

      const wrap = $("#search-results");
      wrap.innerHTML = list.map(r => `
        <article class="result-card" data-resource="${r.id}">
          <div class="row" style="justify-content:space-between;align-items:flex-start;">
            <div style="flex:1;">
              <div class="muted" style="font-size:12px;font-weight:700;">${escapeHtml(r.category)}</div>
              <div class="card-title" style="font-size:16px;">${escapeHtml(r.title)}</div>
              <div class="card-desc" style="margin-top:.25rem;">${escapeHtml(r.desc)}</div>
              <div class="tags">
                ${r.tags.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join("")}
              </div>
            </div>
            <button class="icon-btn ${state.saved.has(r.id) ? "favorite active" : ""}" data-save="${r.id}" aria-label="Save">
              <i data-lucide="${state.saved.has(r.id) ? "bookmark-check" : "bookmark"}"></i>
            </button>
          </div>

          <div class="result-footer">
            <div class="author">
              <img src="assets/avatar.png" alt="" onerror="this.remove();">
              <span>${escapeHtml(r.author)}</span>
            </div>
            <div class="stats">
              <span class="stat"><i data-lucide="star" class="icon-xs"></i>${r.rating.toFixed(1)}</span>
              <span class="stat"><i data-lucide="heart" class="icon-xs"></i>${r.likes}</span>
              <span class="stat"><i data-lucide="repeat-2" class="icon-xs"></i>${r.saves}</span>
              <button class="btn btn-outline" data-open="${r.id}"><i data-lucide="eye"></i> Open</button>
            </div>
          </div>
        </article>
      `).join("");

      if (list.length === 0) show($("#search-empty"));
      else hide($("#search-empty"));

      lucide.createIcons();
    }

    function renderSaved() {
      const container = $("#saved-container");
      let list = state.resources.filter(r => state.saved.has(r.id));
      if (state.savedFilter !== "All") list = list.filter(r => r.category === state.savedFilter);

      if ($("#bookmark-sort").value === "az") {
        list.sort((a,b) => a.title.localeCompare(b.title));
      } else if ($("#bookmark-sort").value === "pop") {
        list.sort((a,b) => (b.likes + b.saves) - (a.likes + a.saves));
      }

      if (list.length === 0) {
        hide(container);
        show($("#saved-empty"));
        return;
      }
      show(container);
      hide($("#saved-empty"));

      container.classList.toggle("list-view", state.savedView === "list");
      container.classList.toggle("card-grid", state.savedView !== "list");

      container.innerHTML = list.map(r => {
        const isBookmarked = true;
        const extra = state.savedView === "list" ? `
          <div class="quick-actions">
            <button class="btn btn-outline" data-share="${r.id}"><i data-lucide="share-2"></i> Share</button>
            <button class="btn btn-outline" data-remove-bookmark="${r.id}"><i data-lucide="trash-2"></i> Remove</button>
          </div>
        ` : ``;

        return `
          <article class="card bookmark-card" data-resource="${r.id}" data-bookmark>
            <div class="card-media">
              <img src="${r.img}" alt="${escapeHtml(r.title)}">
              <span class="badge">${escapeHtml(r.category)}</span>
            </div>
            <div class="card-body">
              <div class="bookmark-top">
                <h3 class="card-title">${escapeHtml(r.title)}</h3>
                <button class="icon-btn favorite active" data-remove-bookmark="${r.id}" aria-label="Remove bookmark">
                  <i data-lucide="bookmark-check"></i>
                </button>
              </div>
              <p class="card-desc">${escapeHtml(r.desc)}</p>

              <div class="card-meta">
                <div class="author">
                  <img src="assets/avatar.png" alt="" onerror="this.remove();">
                  <span>${escapeHtml(r.author)}</span>
                </div>
                <button class="btn btn-primary" data-open="${r.id}"><i data-lucide="eye"></i> Open</button>
              </div>

              ${extra}
            </div>
          </article>
        `;
      }).join("");

      lucide.createIcons();
    }

    function renderProfile() {
      $("#pf-name").value = state.user.name;
      $("#pf-email").value = state.user.email;
      $("#pf-pronouns").value = state.user.pronouns || "";
      $("#pf-phone").value = state.user.phone || "";

      $("#profile-name-title").textContent = state.user.name || "User";
      $("#profile-pronouns-title").textContent = state.user.pronouns || "";

      $("#stat-followers").textContent = state.user.followers;
      $("#stat-contrib").textContent = state.contributions.length;

      $("#contrib-user-name").textContent = state.user.name;
      $("#contrib-followers").textContent = state.user.followers;
      $("#contrib-count").textContent = state.contributions.length;

      // Avatar preview if uploaded
      if (state.user.avatarDataUrl) {
        $("#profile-avatar-img")?.setAttribute("src", state.user.avatarDataUrl);
      }

      renderSkills();
    }

    function renderSkills() {
      const list = $("#skill-list");
      list.innerHTML = state.user.skills.map((s, idx) => `
        <span class="chip">
          ${escapeHtml(s)}
          <button type="button" data-remove-skill="${idx}" aria-label="Remove ${escapeHtml(s)}">
            <i data-lucide="x" class="icon-xs"></i>
          </button>
        </span>
      `).join("");
      lucide.createIcons();
    }

    function renderContributions() {
      $("#contrib-count").textContent = state.contributions.length;
      $("#stat-contrib").textContent = state.contributions.length;

      let list = [...state.contributions];
      const tab = state.contribTab;

      if (tab === "Published") list = list.filter(x => x.status === "Published");
      if (tab === "Draft") list = list.filter(x => x.status === "Draft");
      if (tab === "Archived") list = list.filter(x => x.status === "Archived");

      const grid = $("#contrib-grid");
      if (list.length === 0) {
        hide(grid);
        show($("#contrib-empty"));
      } else {
        show(grid);
        hide($("#contrib-empty"));
        grid.innerHTML = list.map(item => {
          const statusClass = item.status.toLowerCase();
          return `
            <article class="card" data-contrib="${item.id}">
              <div class="card-body">
                <div class="row" style="justify-content:space-between;align-items:flex-start;">
                  <div>
                    <div class="row" style="gap:.5rem;flex-wrap:wrap;">
                      <span class="badge" style="position:static;display:inline-flex;">${escapeHtml(item.category)}</span>
                      <span class="status ${statusClass}">
                        <i data-lucide="circle-dot" class="icon-xs"></i> ${escapeHtml(item.status)}
                      </span>
                    </div>
                    <div class="card-title" style="margin-top:.6rem;">${escapeHtml(item.title)}</div>
                    <div class="muted" style="font-size:13px;margin-top:.25rem;">
                      ${escapeHtml(item.date)}
                    </div>
                  </div>

                  <div class="mini-actions">
                    <button class="icon-btn" data-preview-link="${item.id}" aria-label="Preview link">
                      <i data-lucide="external-link"></i>
                    </button>

                    <button class="btn btn-outline" data-edit="${item.id}"><i data-lucide="pencil"></i> Edit</button>
                    <button class="btn btn-outline" data-archive="${item.id}"><i data-lucide="archive"></i> Archive</button>

                    <div class="dropdown">
                      <button class="icon-btn" data-menu="${item.id}" aria-label="More">
                        <i data-lucide="more-vertical"></i>
                      </button>
                      <div class="menu" id="menu-${item.id}">
                        <button type="button" data-delete="${item.id}" class="danger">
                          <i data-lucide="trash-2"></i> Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          `;
        }).join("");
      }
      lucide.createIcons();
    }

    function renderResourceDetail(resourceId) {
      const r = state.resources.find(x => x.id === resourceId);
      if (!r) return;

      state.activeResourceId = r.id;
      $("#detail-category").textContent = r.category;
      $("#detail-title").textContent = r.title;
      $("#detail-desc").textContent = r.desc;
      $("#detail-author").textContent = r.author;
      $("#detail-link").href = r.link;

      $("#detail-like-count").textContent = r.likes + (state.liked.has(r.id) ? 1 : 0);

      $("#detail-tags").innerHTML = r.tags.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join("");

      // Button states
      $("#detail-save").classList.toggle("btn-primary", state.saved.has(r.id));
      $("#detail-save").classList.toggle("btn-outline", !state.saved.has(r.id));

      $("#detail-like").classList.toggle("btn-primary", state.liked.has(r.id));
      $("#detail-like").classList.toggle("btn-outline", !state.liked.has(r.id));

      renderComments(r.id);
      lucide.createIcons();
    }

    function renderComments(resourceId) {
      const list = $("#comment-list");
      const comments = state.comments[resourceId] || [];
      if (comments.length === 0) {
        list.innerHTML = `<p class="body muted">No comments yet. Be the first!</p>`;
        return;
      }
      list.innerHTML = comments.map(c => `
        <div class="panel" style="background:var(--bg-main);">
          <div class="row" style="justify-content:space-between;">
            <div class="row">
              <div class="avatar"><i data-lucide="user" class="icon-sm"></i></div>
              <strong style="font-size:14px;">${escapeHtml(c.by)}</strong>
            </div>
          </div>
          <p class="body muted" style="margin-top:.5rem;">${escapeHtml(c.text)}</p>
        </div>
      `).join("");
      lucide.createIcons();
    }

    // -----------------------
    // Events
    // -----------------------
    function bindNav() {
      // nav buttons
      document.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-view]");
        if (btn) {
          e.preventDefault();
          const view = btn.getAttribute("data-view");
          if (!view) return;
          navigate(view);

          if (view === "browse") renderBrowse();
          if (view === "saved") renderSaved();
          if (view === "profile") { renderProfile(); }
          if (view === "contributions") { renderProfile(); renderContributions(); }
          if (view === "home") renderHome();
          if (view === "search") renderSearch();
        }
      });

    ("#logout-btn").addEventListener("click", () => {
  alert("Logout disabled in static demo.");
});



      // landing buttons
      $("#landing-login-btn").addEventListener("click", () => { navigate("auth"); showLogin(); });
      $("#landing-signup-btn").addEventListener("click", () => { navigate("auth"); showSignup(); });

      $("#open-landing").addEventListener("click", (e) => {
        e.preventDefault();
        // show app shell without auth (preview)
        $("#auth-screen").classList.remove("active");
        $("#app-shell").classList.remove("hidden");
        navigate("landing");
      });

      // back button from resource detail
      $("#back-to-browse").addEventListener("click", () => {
        navigate(state.browseBackView || "browse");
      });
    }

    document.addEventListener("click", (e) => {
  const btn = e.target.closest('[data-view="search"]');
  if (!btn) return;

  state.browseBackView = "browse";
});

document.addEventListener("click", (e) => {
  const backBtn = e.target.closest("[data-detail-back]");
  if (!backBtn) return;

  navigate(state.browseBackView || "browse");
});

function openResource(id) {
  const activeView = document.querySelector(".view.active");
  if (activeView?.id) {
    state.browseBackView = activeView.id.replace("view-", "");
  }

  navigate("detail");
  renderResourceDetail(id);
}

if (openBtn) {
  const id = openBtn.getAttribute("data-open");
  openResource(id);
  return;
}

$("#copy-link-btn").addEventListener("click", () => {
  const input = $("#res-link");
  if (!input.value) return;

  navigator.clipboard.writeText(input.value).then(() => {
    // Optional feedback
    const btn = $("#copy-link-btn");
    btn.innerHTML = '<i data-lucide="check"></i>';
    lucide.createIcons();

    setTimeout(() => {
      btn.innerHTML = '<i data-lucide="copy"></i>';
      lucide.createIcons();
    }, 1200);
  });
});

$("#copy-link-btn").addEventListener("click", () => {
  const link = $("#res-link").value.trim();
  if (!link) return;

  navigator.clipboard.writeText(link);
});



     function bindAuth() {
      const toggleLink = $("#auth-toggle-link");
      toggleLink.addEventListener("click", (e) => {
        e.preventDefault();
        const signupVisible = !$("#signup-form").classList.contains("hidden");
        signupVisible ? showLogin() : showSignup();
      });

      $("#login-form").addEventListener("submit", (e) => {
        e.preventDefault();
        clearErrors(["login-email","login-password"]);

        const email = $("#login-email").value.trim();
        const pw = $("#login-password").value;

        let ok = true;
        if (!email) { setFieldError("login-email", "Email is required."); ok = false; }
        if (!pw || pw.length < 6) { setFieldError("login-password", "Password must be at least 6 characters."); ok = false; }
        if (!ok) return;

        // demo: set user email
        state.user.email = email;
        state.isAuthed = false;
     // Start on auth
      navigate("auth");
      showLogin();
      });

      $("#signup-form").addEventListener("submit", (e) => {
        e.preventDefault();
        clearErrors(["signup-name","signup-email","signup-password"]);

        const name = $("#signup-name").value.trim();
        const email = $("#signup-email").value.trim();
        const pw = $("#signup-password").value;

        let ok = true;
        if (!name) { setFieldError("signup-name", "Full name is required."); ok = false; }
        if (!email) { setFieldError("signup-email", "Email is required."); ok = false; }
        if (!pw || pw.length < 6) { setFieldError("signup-password", "Password must be at least 6 characters."); ok = false; }
        if (!ok) return;

        state.user.name = name;
        state.user.email = email;
        $("#logout-btn").addEventListener("click", () => {
  state.isAuthed = false;
  navigate("auth");
  showLogin();
});


        navigate("home");
        renderHome();
        renderProfile();
      });
    }

    function showLogin() {
      $("#auth-title").textContent = "Welcome Back";
      $("#auth-subtitle").textContent = "Sign in with your email and password";
      $("#auth-toggle-text").textContent = "Don’t have an account?";
      $("#auth-toggle-link").textContent = "Sign up";
      show($("#login-form"));
      hide($("#signup-form"));
    }

    function showSignup() {
      $("#auth-title").textContent = "Create your account";
      $("#auth-subtitle").textContent = "Sign up to start sharing and saving resources";
      $("#auth-toggle-text").textContent = "Already have an account?";
      $("#auth-toggle-link").textContent = "Log in";
      hide($("#login-form"));
      show($("#signup-form"));
    } 

    function bindBrowseSearch() {
      $("#global-search").addEventListener("input", (e) => {
        state.browseQuery = e.target.value;
        renderBrowse();
      });

      // Browse category pills
      $$("#view-browse .pill[data-cat]").forEach(p => {
        p.addEventListener("click", () => {
          $$("#view-browse .pill[data-cat]").forEach(x => x.classList.remove("active"));
          p.classList.add("active");
          state.browseFilter = p.getAttribute("data-cat");
          renderBrowse();
        });
      });

      // Search input
      $("#search-input").addEventListener("input", () => renderSearch());
    }

    function bindResourceActions() {
      // like / save / open detail
      document.addEventListener("click", (e) => {
        const likeBtn = e.target.closest("[data-like]");
        const saveBtn = e.target.closest("[data-save]");
        const openBtn = e.target.closest("[data-open]");
        const card = e.target.closest("[data-resource]");

        if (likeBtn) {
          const id = likeBtn.getAttribute("data-like");
          if (!id) return;
          state.liked.has(id) ? state.liked.delete(id) : state.liked.add(id);
          // re-render visible views quickly
          renderHome(); renderBrowse(); renderSearch(); renderSaved();
          return;
        }

        if (saveBtn) {
          const id = saveBtn.getAttribute("data-save");
          if (!id) return;
          state.saved.has(id) ? state.saved.delete(id) : state.saved.add(id);
          renderHome(); renderBrowse(); renderSearch(); renderSaved();
          return;
        }

        if (openBtn) {
          const id = openBtn.getAttribute("data-open");
          openResource(id);
          return;
        }

        // Clicking card opens detail (but avoid if clicking a button inside)
        if (card && !e.target.closest("button") && !e.target.closest("a")) {
          const id = card.getAttribute("data-resource");
          if (id) openResource(id);
        }
      });

      // Detail actions
      $("#detail-like").addEventListener("click", () => {
        const id = state.activeResourceId;
        if (!id) return;
        state.liked.has(id) ? state.liked.delete(id) : state.liked.add(id);
        renderResourceDetail(id);
        renderHome(); renderBrowse(); renderSearch(); renderSaved();
      });

      $("#detail-save").addEventListener("click", () => {
        const id = state.activeResourceId;
        if (!id) return;
        state.saved.has(id) ? state.saved.delete(id) : state.saved.add(id);
        renderResourceDetail(id);
        renderHome(); renderBrowse(); renderSearch(); renderSaved();
      });

      $("#comment-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const id = state.activeResourceId;
        if (!id) return;
        const text = $("#comment-text").value.trim();
        if (!text) return;
        (state.comments[id] ||= []).unshift({ by: state.user.name.split(" ")[0] || "User", text });
        $("#comment-text").value = "";
        renderComments(id);
      });
    }

    function openResource(id) {
      state.browseBackView = document.querySelector(".main .view.active")?.id?.replace("view-","") || "browse";
      renderResourceDetail(id);
      navigate("resource");
    }

    function bindBookmarks() {
      // grid/list toggle
      $("#toggle-view").addEventListener("click", () => {
        state.savedView = state.savedView === "grid" ? "list" : "grid";
        $("#toggle-label").textContent = state.savedView === "grid" ? "Grid" : "List";
        $("#toggle-view i")?.setAttribute("data-lucide", state.savedView === "grid" ? "layout-grid" : "list");
        lucide.createIcons();
        renderSaved();
      });

      // saved filter pills
      $$("#view-saved .pill[data-saved-cat]").forEach(p => {
        p.addEventListener("click", () => {
          $$("#view-saved .pill[data-saved-cat]").forEach(x => x.classList.remove("active"));
          p.classList.add("active");
          state.savedFilter = p.getAttribute("data-saved-cat");
          renderSaved();
        });
      });

      // remove bookmark animation
      document.addEventListener("click", (e) => {
        const rm = e.target.closest("[data-remove-bookmark]");
        if (!rm) return;
        const id = rm.getAttribute("data-remove-bookmark");
        if (!id) return;

        state.saved.delete(id);

        const card = rm.closest("[data-bookmark]");
        if (card) {
          card.classList.add("removing");
          card.addEventListener("transitionend", () => renderSaved(), { once: true });
        } else {
          renderSaved();
        }
      });

      // share (demo)
      document.addEventListener("click", (e) => {
        const share = e.target.closest("[data-share]");
        if (!share) return;
        const id = share.getAttribute("data-share");
        const r = state.resources.find(x => x.id === id);
        if (!r) return;
        navigator.clipboard?.writeText(r.link).catch(() => {});
        alert("Link copied (demo): " + r.link);
      });

      $("#bookmark-sort").addEventListener("change", () => renderSaved());
    }

    const coverInput = document.getElementById("cover-input");
const coverPreview = document.getElementById("cover-preview");
const coverPlaceholder = document.querySelector(".cover-placeholder");

coverInput.addEventListener("change", () => {
  const file = coverInput.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    coverPreview.src = reader.result;
    coverPreview.style.display = "block";
    coverPlaceholder.style.display = "none";
  };
  reader.readAsDataURL(file);
});

document.addEventListener("click", (e) => {
  const exitBtn = e.target.closest(".exit-btn");
  if (!exitBtn) return;

  navigate("home");
  renderHome(); // refresh home content
});

function bindExitButton() {
  const exitBtn = document.querySelector(".exit-btn");
  if (!exitBtn) return;

  exitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    navigate("home");
    renderHome();
  });
}

if (view === "submit") {
  navigate("submit");
  bindExitButton();
}


const themeToggle = document.getElementById("toggle-theme");

if (themeToggle) {
  themeToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark", themeToggle.checked);
  });
}



    function bindSubmit() {
      $("#submit-form").addEventListener("submit", (e) => {
        e.preventDefault();
        clearErrors(["res-title","res-desc","res-cat"]);
        hide($("#submit-success"));

        const title = $("#res-title").value.trim();
        const desc = $("#res-desc").value.trim();
        const cat = $("#res-cat").value;
        const link = $("#res-link").value.trim() || "https://example.com";

        let ok = true;
        if (!title) { setFieldError("res-title","Title is required."); ok = false; }
        if (!desc) { setFieldError("res-desc","Description is required."); ok = false; }
        if (!cat) { setFieldError("res-cat","Category is required."); ok = false; }
        if (!ok) return;

        // Add as a "Published" contribution (demo)
        const id = "c" + Math.random().toString(16).slice(2);
        const date = new Date().toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
        state.contributions.unshift({
          id,
          title,
          category: cat,
          date,
          status: "Published",
          link,
        });

        show($("#submit-success"));
        $("#res-title").value = "";
        $("#res-desc").value = "";
        $("#res-cat").value = "";
        $("#res-link").value = "";

        renderProfile();
        renderContributions();
      });
    }

    function bindContributions() {
      // tabs
      $$("#view-contributions .pill[data-contrib-tab]").forEach(p => {
        p.addEventListener("click", () => {
          $$("#view-contributions .pill[data-contrib-tab]").forEach(x => x.classList.remove("active"));
          p.classList.add("active");
          state.contribTab = p.getAttribute("data-contrib-tab");
          renderContributions();
        });
      });

      // dropdown menus
      document.addEventListener("click", (e) => {
        // close menus if click outside
        if (!e.target.closest(".dropdown")) {
          $$(".menu").forEach(m => m.style.display = "none");
        }
        const menuBtn = e.target.closest("[data-menu]");
        if (menuBtn) {
          const id = menuBtn.getAttribute("data-menu");
          const menu = $(`#menu-${id}`);
          if (!menu) return;
          // toggle
          const open = menu.style.display === "block";
          $$(".menu").forEach(m => m.style.display = "none");
          menu.style.display = open ? "none" : "block";
        }

        const delBtn = e.target.closest("[data-delete]");
        if (delBtn) {
          const id = delBtn.getAttribute("data-delete");
          state.contributions = state.contributions.filter(x => x.id !== id);
          renderProfile();
          renderContributions();
          return;
        }

        const archBtn = e.target.closest("[data-archive]");
        if (archBtn) {
          const id = archBtn.getAttribute("data-archive");
          const item = state.contributions.find(x => x.id === id);
          if (item) item.status = "Archived";
          renderContributions();
          return;
        }

        const editBtn = e.target.closest("[data-edit]");
        if (editBtn) {
          alert("Edit (demo): wire this to a modal later.");
        }

        const prev = e.target.closest("[data-preview-link]");
        if (prev) {
          const id = prev.getAttribute("data-preview-link");
          const item = state.contributions.find(x => x.id === id);
          if (item?.link) window.open(item.link, "_blank");
        }
      });

      // load more (demo)
      $("#load-more").addEventListener("click", () => {
        alert("Load more (demo): connect to pagination later.");
      });
    }

    function bindProfile() {
      $("#profile-form").addEventListener("submit", (e) => {
        e.preventDefault();
        hide($("#profile-saved"));

        state.user.name = $("#pf-name").value.trim() || state.user.name;
        state.user.email = $("#pf-email").value.trim() || state.user.email;
        state.user.pronouns = $("#pf-pronouns").value.trim();
        state.user.phone = $("#pf-phone").value.trim();

        $("#profile-name-title").textContent = state.user.name;
        $("#profile-pronouns-title").textContent = state.user.pronouns;

        show($("#profile-saved"));
        setTimeout(() => hide($("#profile-saved")), 1200);
      });

      // photo preview
      $("#pf-photo").addEventListener("change", (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
          state.user.avatarDataUrl = reader.result;
          $("#profile-avatar-img")?.setAttribute("src", state.user.avatarDataUrl);
        };
        reader.readAsDataURL(file);
      });

      // add skill
      $("#add-skill").addEventListener("click", () => {
        const val = $("#skill-input").value.trim();
        if (!val) return;
        state.user.skills.unshift(val);
        $("#skill-input").value = "";
        renderSkills();
      });

      // remove skill
      document.addEventListener("click", (e) => {
        const rm = e.target.closest("[data-remove-skill]");
        if (!rm) return;
        const idx = Number(rm.getAttribute("data-remove-skill"));
        if (Number.isNaN(idx)) return;
        state.user.skills.splice(idx, 1);
        renderSkills();
      });
    }

    function bindContact() {
      $("#contact-form").addEventListener("submit", (e) => {
        e.preventDefault();
        $("#contact-success").style.display = "block";
        setTimeout(() => $("#contact-success").style.display = "none", 1400);
        e.target.reset();
      });
    }

    // -----------------------
    // Safe text helper
    // -----------------------
    function escapeHtml(str) {
      return String(str)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
    }

    // -----------------------
    // Init
    // -----------------------
    document.addEventListener("DOMContentLoaded", () => {
      lucide.createIcons();

      bindNav();
      bindAuth();
      bindBrowseSearch();
      bindResourceActions();
      bindBookmarks();
      bindSubmit();
      bindContributions();
      bindProfile();
      bindContact();

      // Prefill profile form
      renderProfile();

      // Default renders
      renderHome();
      renderBrowse();
      renderSearch();
      renderSaved();
      renderContributions();

      // Start on auth
      navigate("auth");
      showLogin();

  // -----------------------
// Settings Modal Logic
// -----------------------
const settingsPanel = document.getElementById("settingsPanel");
const closeSettingsBtn = document.getElementById("closeSettings");

function openSettings() {
  settingsPanel.classList.remove("hidden");
}

function closeSettings() {
  settingsPanel.classList.add("hidden");
}

// Open settings (icon click)
document.addEventListener("click", (e) => {
  const openBtn = e.target.closest("[data-open-settings]");
  if (openBtn) {
    e.preventDefault();
    openSettings();
  }
});

// Close button
closeSettingsBtn?.addEventListener("click", closeSettings);

// Click outside modal to close
settingsPanel?.addEventListener("click", (e) => {
  if (e.target === settingsPanel) {
    closeSettings();
  }
});

// ESC key closes modal
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !settingsPanel.classList.contains("hidden")) {
    closeSettings();
  }
});



    });