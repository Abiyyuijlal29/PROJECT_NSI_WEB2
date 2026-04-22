import re

file_path = r'd:\laragon\www\wifi-management\resources\views\welcome.blade.php'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Hero right: 
# Replace <div class="hero-right fade-in-2">...</div> with slider
hero_right_old = r'''<div class="hero-right fade-in-2">
        <div style="position:relative;">
            <div class="hero-img-wrap">
                <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format" alt="Server room with fast fiber connectivity">
            </div>
            <div class="speed-badge">
                <div class="speed-dot"></div>
                <div class="speed-text">
                    <strong>9422 Mbps</strong>
                    Live Network Speed
                </div>
            </div>
        </div>
    </div>'''

hero_right_new = '''<div class="hero-right fade-in-2">
        <div class="hero-slider" id="heroSlider">
            <div class="hero-slides" id="heroSlides">
                <div class="hero-slide"><img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format" alt="Promo 1"></div>
                <div class="hero-slide"><img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format" alt="Promo 2"></div>
                <div class="hero-slide"><img src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&auto=format" alt="Promo 3"></div>
            </div>
        </div>
    </div>'''

if hero_right_old in content:
    content = content.replace(hero_right_old, hero_right_new)

# CSS for Hero
hero_css_old = r'''        .hero-right { position: relative; display: flex; justify-content: center; align-items: center; }
        .hero-img-wrap {
            width: 100%; max-width: 480px;
            border-radius: 20px; overflow: hidden;
            box-shadow: 0 30px 80px rgba(0,0,0,.5);
            position: relative;
        }
        .hero-img-wrap img { width: 100%; height: 340px; object-fit: cover; }
        .speed-badge {
            position: absolute; bottom: -18px; left: 50%; transform: translateX(-50%);
            background: var(--white); border-radius: 12px;
            padding: 12px 22px; display: flex; align-items: center; gap: 10px;
            box-shadow: 0 8px 32px rgba(0,0,0,.18);
            white-space: nowrap;
        }
        .speed-dot { width: 10px; height: 10px; border-radius: 50%; background: #22c55e; flex-shrink: 0; }
        .speed-text { font-size: .82rem; color: var(--muted); }
        .speed-text strong { display: block; color: var(--text); font-size: 1rem; font-weight: 800; }'''

hero_css_new = '''        /* hero slider */
        .hero-right { position: relative; display: flex; justify-content: center; align-items: center; overflow: hidden; width: 100%; }
        .hero-slider {
            width: 100%; max-width: 480px;
            border-radius: 20px; overflow: hidden;
            box-shadow: 0 30px 80px rgba(0,0,0,.5);
            position: relative; display: flex;
        }
        .hero-slides {
            display: flex; width: 100%;
            transition: transform 0.5s ease-in-out;
        }
        .hero-slide { width: 100%; flex-shrink: 0; }
        .hero-slide img { width: 100%; height: 340px; object-fit: cover; }'''

if hero_css_old in content:
    content = content.replace(hero_css_old, hero_css_new)


def extract_section(nameRegex, content_str):
    pattern = re.compile(nameRegex, re.DOTALL)
    match = pattern.search(content_str)
    if match:
        return match.group(0)
    return ""

def remove_section(nameRegex, content_str):
    pattern = re.compile(nameRegex, re.DOTALL)
    return pattern.sub('', content_str)

# Remove Home Connectivity HTML
home_pattern = r'<!-- HOME CONNECTIVITY -->\s*<section class="home-conn">.*?</section>'
content = remove_section(home_pattern, content)

# Extract Location/Maps section HTML
location_pattern = r'<!-- LOCATION / MAPS -->\s*<section class="location-section" id="location">.*?</section>'
location_html = extract_section(location_pattern, content)
content = remove_section(location_pattern, content)

# Remove Home Connectivity CSS
home_css_pattern = r'/\* ── HOME CONNECTIVITY ── \*/.*?(?=/\* ── LOCATION / MAPS ── \*/)'
content = remove_section(home_css_pattern, content)


packages_html = '''<!-- PAKET WIFI -->
<section class="packages-section" id="plans">
    <div class="text-center">
        <div class="section-tag">Pilihan Paket</div>
        <h2 class="section-title">Pemilihan Paket WiFi</h2>
    </div>
    <div class="packages-grid">
        <!-- Card 1 -->
        <div class="package-card fade-in">
            <div class="pkg-header">
                <h3>Paket Basic</h3>
                <div class="pkg-price">Rp 250.000<span>/bulan</span></div>
            </div>
            <ul class="pkg-features">
                <li>Kecepatan Up to 20 Mbps</li>
                <li>Unlimited Kuota</li>
                <li>Free Peminjaman Modem</li>
                <li>Support 24/7</li>
            </ul>
            <a href="#contact" class="btn-primary" style="width:100%; text-align:center;">Pilih Paket</a>
        </div>
        <!-- Card 2 -->
        <div class="package-card fade-in-2">
            <div class="pkg-header">
                <h3>Paket Medium</h3>
                <div class="pkg-price">Rp 350.000<span>/bulan</span></div>
            </div>
            <ul class="pkg-features">
                <li>Kecepatan Up to 35 Mbps</li>
                <li>Unlimited Kuota</li>
                <li>Router Premium</li>
                <li>Free Instalasi</li>
            </ul>
            <a href="#contact" class="btn-primary" style="width:100%; text-align:center;">Pilih Paket</a>
        </div>
        <!-- Card 3 -->
        <div class="package-card fade-in-3" style="border-color: var(--blue); box-shadow: 0 10px 30px rgba(26,115,232,.15);">
            <div class="pkg-badge">Best Seller</div>
            <div class="pkg-header">
                <h3>Paket Pro</h3>
                <div class="pkg-price">Rp 450.000<span>/bulan</span></div>
            </div>
            <ul class="pkg-features">
                <li>Kecepatan Up to 50 Mbps</li>
                <li>Unlimited Kuota</li>
                <li>Router Wi-Fi 6</li>
                <li>Prioritas Support</li>
            </ul>
            <a href="#contact" class="btn-primary" style="width:100%; text-align:center;">Pilih Paket</a>
        </div>
        <!-- Card 4 -->
        <div class="package-card fade-in">
            <div class="pkg-header">
                <h3>Paket Max</h3>
                <div class="pkg-price">Rp 650.000<span>/bulan</span></div>
            </div>
            <ul class="pkg-features">
                <li>Kecepatan Up to 100 Mbps</li>
                <li>IP Publik (Opsional)</li>
                <li>Mesh Wi-Fi (1 Node)</li>
                <li>SLA 99.9%</li>
            </ul>
            <a href="#contact" class="btn-primary" style="width:100%; text-align:center;">Pilih Paket</a>
        </div>
        <!-- Card 5 -->
        <div class="package-card fade-in-2">
            <div class="pkg-header">
                <h3>Paket Ultra</h3>
                <div class="pkg-price">Rp 950.000<span>/bulan</span></div>
            </div>
            <ul class="pkg-features">
                <li>Kecepatan Up to 200 Mbps</li>
                <li>Dedicated IP / Symmetrical</li>
                <li>Mesh Wi-Fi (2 Nodes)</li>
                <li>VIP Support Engineer</li>
            </ul>
            <a href="#contact" class="btn-primary" style="width:100%; text-align:center;">Pilih Paket</a>
        </div>
    </div>
</section>'''

promo_pattern = r'<!-- PROMO -->\s*<section class="promo" id="plans">.*?</section>'
content = re.sub(promo_pattern, packages_html, content, flags=re.DOTALL)

packages_css = '''        /* ── PAKET WIFI ── */
        .packages-section { background: var(--light); padding: 90px 60px; }
        .packages-grid { display: flex; flex-wrap: wrap; justify-content: center; gap: 24px; margin-top: 48px; }
        .package-card {
            background: var(--white); border: 2px solid var(--border);
            border-radius: var(--radius); padding: 32px 24px;
            width: calc(20% - 20px); min-width: 240px;
            transition: all .2s; display: flex; flex-direction: column;
            position: relative;
        }
        .package-card:hover { transform: translateY(-5px); box-shadow: 0 15px 35px rgba(0,0,0,.08); border-color: var(--blue); }
        .pkg-header { text-align: center; margin-bottom: 24px; padding-bottom: 20px; border-bottom: 1px dashed var(--border); }
        .pkg-badge { position: absolute; top: -14px; left: 50%; transform: translateX(-50%); background: var(--orange); color: var(--white); font-size: 0.75rem; font-weight: 800; padding: 6px 16px; border-radius: 20px; text-transform: uppercase; letter-spacing: 1px; white-space: nowrap; }
        .package-card h3 { font-size: 1.25rem; font-weight: 800; color: var(--text); margin-bottom: 12px; }
        .pkg-price { font-size: 1.45rem; font-weight: 900; color: var(--blue); }
        .pkg-price span { font-size: 0.85rem; color: var(--muted); font-weight: 600; }
        .pkg-features { list-style: none; margin-bottom: 30px; flex-grow: 1; text-align: left; }
        .pkg-features li { padding: 10px 0; font-size: 0.88rem; color: var(--text); font-weight: 500; display: flex; align-items: flex-start; gap: 10px; border-bottom: 1px solid var(--border); }
        .pkg-features li:last-child { border-bottom: none; }
        .pkg-features li::before { content: '✓'; color: #22c55e; font-weight: 900; font-size: 1rem; }'''

promo_css_pattern = r'/\* ── PROMO ── \*/.*?(?=/\* ── CTA ── \*/)'
content = re.sub(promo_css_pattern, packages_css + '\n\n', content, flags=re.DOTALL)


app_download_html = '''<!-- APP DOWNLOAD -->
<section class="app-download" id="download">
    <div class="app-download-inner">
        <div class="app-text">
            <div class="section-tag" style="color: var(--blue);">Aplikasi Mobile</div>
            <h2 class="section-title" style="color: var(--text);">Download NSI App</h2>
            <p class="section-sub" style="margin-bottom:30px; color: var(--muted); max-width:400px; line-height:1.7;">Pantau penggunaan kuota, bayar tagihan dengan mudah, dan dapatkan dukungan teknis lebih cepat langsung dari genggaman Anda.</p>
            <div class="app-buttons">
                <a href="#" class="store-btn">
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.05-.46-2.09-.48-3.15 0-1.01.45-2.04.58-2.99-.4-1.84-1.89-3.41-5.32-2.93-8.08.3-1.74 1.34-2.85 2.89-3.23 1.15-.28 2.14.39 2.76.62.59.22 1.58.74 2.87.5 1.48-.27 2.45-1.12 2.5-1.16-1.55-1-2.05-2.61-1.72-3.87.27-1.04 1.09-1.88 1.95-2.34-.14-1.42 1.06-2.65 2.21-2.93-.05 1.58 1.16 2.88 2.15 3.33-1.05 1.11-2.3 2.1-1.42 3.6 0 .01 1.6 1.43 3.4 1.15-.02.48-.19.95-.53 1.35-.45.54-1.14.86-1.81.9-1.17.06-2.2-.42-2.85-.71-.62-.28-1.53-.74-2.58-.55-1.07.19-2.02.8-2.62 1.34-1.74 1.55-.91 4.54.49 6.27.91 1.12 1.87 2.03 2.85 2.05.98.02 1.42-.56 2.55-.56s1.64.58 2.58.56c1.04-.03 2.02-.91 2.91-2.05.61-.79 1.05-1.63 1.36-2.43-.88-.41-1.51-1.1-1.59-1.92-.1-1.11.45-2.05 1.06-2.5-1.63 1.08-3.87.65-4.8-.93zM15.1 4.41c-.48-.99-1.55-1.64-2.68-1.52-.08 1.2.64 2.37 1.59 2.98.53.33 1.14.53 1.77.53.07-1.34-.64-2.54-1.41-3.26-.06-.05-.12-.1-.17-.16-.03-.03-.07-.06-.1-.1z"/></svg>
                    <div>
                        <span>Download on the</span>
                        <strong>App Store</strong>
                    </div>
                </a>
                <a href="#" class="store-btn">
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M3.12 21.08a1.32 1.32 0 01-.12-1.93L13.1 8.87a.7.7 0 011 0l7.56 7.56c.55.55.16 1.5-.62 1.5H3.74a.8.8 0 01-.62-.85zM12.98 7.37c-.36-.45-1-.53-1.46-.22L2.73 13h10.25V7.37zM4.09 3.53a.85.85 0 00-1.2 0L1.44 4.97A3.2 3.2 0 00.5 7.23v8.83L11.5 5.06 4.09 3.53zM15.54.49a2.3 2.3 0 011.63.67l6.34 6.34a2.3 2.3 0 01.67 1.63v4.61l-8.64-8.64z"/></svg>
                    <div>
                        <span>GET IT ON</span>
                        <strong>Google Play</strong>
                    </div>
                </a>
            </div>
        </div>
        <div class="app-image fade-in-2">
            <svg class="phone-mockup" viewBox="0 0 200 400" width="240" fill="none" style="margin: 0 auto; display: block;">
                <rect x="5" y="5" width="190" height="390" rx="30" fill="#fff" stroke="#e2e8f0" stroke-width="10"/>
                <path d="M70 5h60a0 0 0 0 1 0 0v10a10 10 0 0 1-10 10H80a10 10 0 0 1-10-10V5a0 0 0 0 1 0 0z" fill="#e2e8f0"/>
                <circle cx="100" cy="190" r="40" fill="#e8f0fe"/>
                <circle cx="100" cy="190" r="25" fill="#1a73e8"/>
                <rect x="30" y="250" width="140" height="20" rx="4" fill="#f8fafc"/>
                <rect x="30" y="280" width="100" height="10" rx="4" fill="#f8fafc"/>
                <rect x="30" y="310" width="140" height="10" rx="4" fill="#f8fafc"/>
                <rect x="30" y="330" width="80" height="10" rx="4" fill="#f8fafc"/>
            </svg>
        </div>
    </div>
</section>'''

cta_pattern = r'<!-- CTA -->\s*<section class="cta-section">.*?</section>'
content = re.sub(cta_pattern, app_download_html, content, flags=re.DOTALL)

app_dl_css = '''        /* ── APP DOWNLOAD ── */
        .app-download { background: var(--white); padding: 90px 60px; overflow: hidden; }
        .app-download-inner { max-width: 1000px; margin: 0 auto; background: var(--light); border: 1px solid var(--border); border-radius: 30px; display: flex; align-items: center; justify-content: space-between; padding: 60px; box-shadow: 0 20px 60px rgba(0,0,0,.04); }
        .app-text { max-width: 50%; }
        .app-buttons { display: flex; gap: 16px; margin-top: 24px; }
        .store-btn { display: inline-flex; align-items: center; gap: 12px; background: #000; color: #fff; padding: 12px 24px; border-radius: 14px; text-decoration: none; transition: transform 0.2s; box-shadow: 0 8px 20px rgba(0,0,0,.15); }
        .store-btn:hover { transform: translateY(-3px); box-shadow: 0 12px 25px rgba(0,0,0,.25); }
        .store-btn span { font-size: 0.7rem; display: block; opacity: 0.8; line-height: 1; margin-bottom: 2px; }
        .store-btn strong { font-size: 1.1rem; display: block; letter-spacing: -0.5px; line-height: 1.2; font-weight: 700; }
        .app-image { max-width: 40%; transform: rotate(5deg) translateY(20px); filter: drop-shadow(-10px 20px 30px rgba(0,0,0,0.1)); }
        
        @media (max-width: 900px) {
            .app-download-inner { flex-direction: column; text-align: center; padding: 50px 24px; }
            .app-text { max-width: 100%; margin-bottom: 50px; }
            .app-text .section-sub { margin: 0 auto 30px; }
            .app-buttons { justify-content: center; flex-wrap: wrap; }
            .app-image { max-width: 80%; transform: none; }
            .packages-grid { flex-direction: column; }
            .package-card { width: 100%; }
        }'''

cta_css_pattern = r'/\* ── CTA ── \*/.*?(?=/\* ── FOOTER ── \*/)'
content = re.sub(cta_css_pattern, app_dl_css + '\n\n', content, flags=re.DOTALL)

# Remove Footer HTML
footer_pattern = r'<!-- FOOTER -->\s*<footer id="contact">.*?</footer>'
content = remove_section(footer_pattern, content)

# Remove Footer CSS
footer_css_pattern = r'/\* ── FOOTER ── \*/.*?(?=/\* ANIMATIONS \*/)'
content = remove_section(footer_css_pattern, content)

# Remove "Berlangganan" and "Login" from Nav, or just leave nav as is? Let's leave nav as is.

# Append Locations/Map section right BEFORE <script> tag.
content = content.replace("<script>", f"{location_html}\n\n<script>")

# Add JS for hero slider right BEFORE `// Add spinner animation`
js_slider = """
// Hero Slider
const slides = document.getElementById('heroSlides');
if (slides) {
    let index = 0;
    const count = slides.children.length;
    setInterval(() => {
        index = (index + 1) % count;
        slides.style.transform = `translateX(-${index * 100}%)`;
    }, 4000);
}
"""
content = content.replace("// Add spinner animation", f"{js_slider}\n// Add spinner animation")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated welcome.blade.php successfully!")
