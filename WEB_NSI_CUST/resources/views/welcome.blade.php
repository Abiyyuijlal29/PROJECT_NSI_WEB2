<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NSI Wifi – Carilah Pengalaman Terbaikmu dengan menggunakan NSI dan rasakan kecepatan internet terbaikmu
    </title>
    <meta name="description"
        content="AG WiFi offers ultra-high speed internet with seamless home connectivity, blazing fast downloads, and top-tier security.">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet">
    <style>
        *,
        *::before,
        *::after {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        :root {
            --blue: #1a73e8;
            --blue-dark: #1557b0;
            --blue-light: #e8f0fe;
            --orange: #f97316;
            --text: #1e293b;
            --muted: #64748b;
            --light: #f8fafc;
            --white: #ffffff;
            --border: #e2e8f0;
            --radius: 14px;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            font-family: 'Inter', sans-serif;
            color: var(--text);
            background: var(--white);
            overflow-x: hidden;
        }

        a {
            text-decoration: none;
            color: inherit;
        }

        img {
            max-width: 100%;
            display: block;
        }

        /* ── NAV ── */
        nav {
            position: sticky;
            top: 0;
            z-index: 100;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 60px;
            height: 68px;
            background: rgba(255, 255, 255, 0.92);
            backdrop-filter: blur(12px);
            border-bottom: 1px solid var(--border);
            box-shadow: 0 2px 16px rgba(0, 0, 0, .06);
        }

        .nav-logo {
            font-size: 1.4rem;
            font-weight: 900;
            color: var(--blue);
            letter-spacing: -0.5px;
        }

        .nav-logo span {
            color: var(--orange);
        }

        .nav-links {
            display: flex;
            gap: 32px;
            font-size: .88rem;
            font-weight: 500;
            color: var(--muted);
        }

        .nav-links a:hover {
            color: var(--blue);
        }

        .nav-btn {
            background: var(--blue);
            color: var(--white);
            padding: 10px 24px;
            border-radius: 8px;
            font-size: .88rem;
            font-weight: 600;
            transition: background .2s, transform .15s;
        }

        .nav-btn:hover {
            background: var(--blue-dark);
            transform: translateY(-1px);
        }

        /* ── HERO ── */
        .hero {
            min-height: 88vh;
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: center;
            padding: 80px 60px;
            background: linear-gradient(135deg, #0a1628 0%, #1a3a6e 55%, #0d2a55 100%);
            position: relative;
            overflow: hidden;
        }

        .hero::after {
            content: '';
            position: absolute;
            inset: 0;
            background: radial-gradient(circle at 70% 50%, rgba(26, 115, 232, .22) 0%, transparent 65%);
            pointer-events: none;
        }

        .hero-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: rgba(249, 115, 22, .15);
            border: 1px solid rgba(249, 115, 22, .35);
            color: #fb923c;
            font-size: .78rem;
            font-weight: 600;
            padding: 5px 14px;
            border-radius: 99px;
            margin-bottom: 20px;
        }

        .hero-badge::before {
            content: '';
            width: 7px;
            height: 7px;
            background: #fb923c;
            border-radius: 50%;
            animation: pulse 1.6s infinite;
        }

        @keyframes pulse {

            0%,
            100% {
                opacity: 1
            }

            50% {
                opacity: .4
            }
        }

        .hero-title {
            font-size: clamp(2.2rem, 4.5vw, 3.8rem);
            font-weight: 900;
            line-height: 1.1;
            color: var(--white);
            letter-spacing: -1.5px;
            margin-bottom: 20px;
        }

        .hero-title span {
            color: #60a5fa;
        }

        .hero-sub {
            font-size: 1rem;
            line-height: 1.7;
            color: #94a3b8;
            margin-bottom: 36px;
            max-width: 480px;
        }

        .hero-btns {
            display: flex;
            gap: 14px;
            flex-wrap: wrap;
            margin-bottom: 40px;
        }

        .btn-primary {
            background: var(--blue);
            color: var(--white);
            padding: 14px 32px;
            border-radius: 10px;
            font-weight: 700;
            font-size: .95rem;
            transition: all .2s;
            box-shadow: 0 6px 20px rgba(26, 115, 232, .4);
        }

        .btn-primary:hover {
            background: var(--blue-dark);
            transform: translateY(-2px);
        }

        .btn-outline {
            border: 1.5px solid rgba(255, 255, 255, .3);
            color: var(--white);
            padding: 14px 32px;
            border-radius: 10px;
            font-weight: 600;
            font-size: .95rem;
            transition: all .2s;
            background: rgba(255, 255, 255, .05);
        }

        .btn-outline:hover {
            background: rgba(255, 255, 255, .12);
        }

        .hero-avatars {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .avatar-stack {
            display: flex;
        }

        .avatar-stack img {
            width: 34px;
            height: 34px;
            border-radius: 50%;
            border: 2px solid #1a3a6e;
            margin-left: -8px;
        }

        .avatar-stack img:first-child {
            margin-left: 0;
        }

        .hero-avatar-text {
            font-size: .82rem;
            color: #94a3b8;
        }

        .hero-avatar-text strong {
            color: var(--white);
            display: block;
            font-size: .9rem;
        }

        /* hero right */
        /* hero slider */
        .hero-right {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            width: 100%;
        }

        .hero-slider {
            width: 100%;
            max-width: 640px;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 30px 80px rgba(0, 0, 0, .5);
            position: relative;
            display: flex;
        }

        .hero-slides {
            display: flex;
            width: 100%;
            transition: transform 0.5s ease-in-out;
        }

        .hero-slide {
            width: 100%;
            flex-shrink: 0;
        }

        .hero-slide img {
            width: 100%;
            height: 460px;
            object-fit: cover;
        }

        .slider-btn {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(255, 255, 255, 0.7);
            border: none;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.2s;
            color: var(--text);
            opacity: 0;
            z-index: 10;
        }

        .hero-slider:hover .slider-btn {
            opacity: 1;
        }

        .slider-btn:hover {
            background: rgba(255, 255, 255, 1);
            transform: translateY(-50%) scale(1.1);
        }

        .slider-btn svg {
            width: 22px;
            height: 22px;
        }

        .slider-prev {
            left: 16px;
        }

        .slider-next {
            right: 16px;
        }

        .slider-dots {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 8px;
            z-index: 10;
        }

        .slider-dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            cursor: pointer;
            transition: all 0.2s;
            border: none;
            padding: 0;
        }

        .slider-dot.active {
            background: var(--white);
            transform: scale(1.2);
        }

        /* ── SECTION COMMON ── */
        section {
            padding: 90px 60px;
        }

        .section-tag {
            font-size: .75rem;
            font-weight: 700;
            letter-spacing: 2px;
            color: var(--blue);
            text-transform: uppercase;
            margin-bottom: 12px;
        }

        .section-title {
            font-size: clamp(1.6rem, 3vw, 2.4rem);
            font-weight: 800;
            letter-spacing: -0.5px;
            margin-bottom: 14px;
        }

        .section-sub {
            font-size: .95rem;
            color: var(--muted);
            max-width: 540px;
            line-height: 1.7;
        }

        .text-center {
            text-align: center;
        }

        .text-center .section-sub {
            margin: 0 auto;
        }

        /* ── FEATURES ── */
        .features {
            background: var(--white);
            position: relative;
            overflow: hidden;
        }

        .features::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle at 10% 20%, rgba(26, 115, 232, .04) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(249, 115, 22, .03) 0%, transparent 40%);
            pointer-events: none;
        }

        .features-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 28px;
            margin-top: 52px;
        }

        .feature-card {
            background: var(--light);
            border: 1px solid var(--border);
            border-radius: var(--radius);
            padding: 32px 28px;
            transition: transform .2s, box-shadow .2s;
        }

        .feature-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 16px 40px rgba(0, 0, 0, .1);
        }

        .feature-icon {
            width: 52px;
            height: 52px;
            border-radius: 12px;
            background: var(--blue-light);
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 18px;
        }

        .feature-icon svg {
            width: 26px;
            height: 26px;
            color: var(--blue);
        }

        .feature-card h3 {
            font-size: 1rem;
            font-weight: 700;
            margin-bottom: 10px;
        }

        .feature-card p {
            font-size: .88rem;
            color: var(--muted);
            line-height: 1.65;
        }

        /* ── SPEED TEST ── */
        .speedtest {
            background: linear-gradient(180deg, var(--light) 0%, #f0f4f8 100%);
            position: relative;
            overflow: hidden;
        }

        .speedtest::before {
            content: '';
            position: absolute;
            top: -100px;
            right: -50px;
            width: 400px;
            height: 400px;
            background: rgba(26, 115, 232, .05);
            border-radius: 50%;
            filter: blur(60px);
            pointer-events: none;
        }

        .speedtest-inner {
            max-width: 700px;
            margin: 0 auto;
            background: var(--white);
            border-radius: 20px;
            padding: 48px;
            margin-top: 48px;
            box-shadow: 0 8px 40px rgba(0, 0, 0, .08);
            border: 1px solid var(--border);
        }

        .speedtest-gauge {
            width: 180px;
            height: 180px;
            margin: 0 auto 28px;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .gauge-svg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transform: rotate(-135deg);
        }

        .gauge-bg {
            fill: none;
            stroke: #e2e8f0;
            stroke-width: 10;
            stroke-linecap: round;
            stroke-dasharray: 283;
        }

        .gauge-fill {
            fill: none;
            stroke: var(--blue);
            stroke-width: 10;
            stroke-linecap: round;
            stroke-dasharray: 0 283;
            transition: stroke-dasharray 1.2s ease;
        }

        .gauge-val {
            font-size: 2.4rem;
            font-weight: 900;
            color: var(--text);
            position: relative;
            z-index: 1;
        }

        .gauge-unit {
            font-size: .8rem;
            color: var(--muted);
            font-weight: 600;
            position: relative;
            z-index: 1;
        }

        .speed-stats {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 16px;
            margin-bottom: 28px;
        }

        .stat-box {
            background: var(--light);
            border-radius: 10px;
            padding: 16px;
            text-align: center;
        }

        .stat-box .label {
            font-size: .72rem;
            color: var(--muted);
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 4px;
        }

        .stat-box .val {
            font-size: 1.1rem;
            font-weight: 800;
            color: var(--text);
        }

        .stat-box .val span {
            font-size: .72rem;
            font-weight: 500;
            color: var(--muted);
        }

        .test-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            width: 100%;
            padding: 15px;
            border-radius: 10px;
            background: var(--blue);
            color: var(--white);
            font-size: 1rem;
            font-weight: 700;
            border: none;
            cursor: pointer;
            transition: all .2s;
            box-shadow: 0 6px 20px rgba(26, 115, 232, .3);
        }

        .test-btn:hover {
            background: var(--blue-dark);
            transform: translateY(-1px);
        }

        .test-btn svg {
            width: 18px;
            height: 18px;
        }

        /* ── LOCATION / MAPS ── */
        .location-section {
            background: var(--white);
            padding: 0 !important;
            display: flex;
            min-height: 100vh;
            position: relative;
        }

        .location-left {
            width: 42%;
            flex-shrink: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 80px 60px;
            background: linear-gradient(160deg, #0a1628 0%, #1a3a6e 60%, #1a73e8 100%);
            position: relative;
            z-index: 1;
        }

        .location-left::after {
            content: '';
            position: absolute;
            inset: 0;
            background: radial-gradient(circle at 80% 80%, rgba(26, 115, 232, .3) 0%, transparent 60%);
            pointer-events: none;
        }

        .location-tag {
            font-size: .72rem;
            font-weight: 700;
            letter-spacing: 2.5px;
            color: #fb923c;
            text-transform: uppercase;
            margin-bottom: 14px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .location-tag::before {
            content: '';
            width: 7px;
            height: 7px;
            background: #fb923c;
            border-radius: 50%;
            animation: pulse 1.6s infinite;
        }

        .location-title {
            font-size: clamp(1.8rem, 2.5vw, 2.8rem);
            font-weight: 900;
            color: var(--white);
            letter-spacing: -1px;
            line-height: 1.1;
            margin-bottom: 20px;
        }

        .location-title span {
            color: #60a5fa;
        }

        .location-desc {
            font-size: .93rem;
            color: rgba(255, 255, 255, .7);
            line-height: 1.75;
            margin-bottom: 36px;
        }

        .location-details {
            display: flex;
            flex-direction: column;
            gap: 18px;
            margin-bottom: 36px;
        }

        .loc-item {
            display: flex;
            align-items: flex-start;
            gap: 14px;
        }

        .loc-icon {
            width: 40px;
            height: 40px;
            border-radius: 10px;
            background: rgba(255, 255, 255, .1);
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(255, 255, 255, .15);
        }

        .loc-icon svg {
            width: 20px;
            height: 20px;
            color: #60a5fa;
        }

        .loc-text strong {
            display: block;
            font-size: .9rem;
            font-weight: 700;
            color: var(--white);
            margin-bottom: 2px;
        }

        .loc-text span {
            font-size: .82rem;
            color: rgba(255, 255, 255, .6);
            line-height: 1.5;
        }

        .map-open-btn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            background: var(--white);
            color: var(--blue);
            padding: 14px 28px;
            border-radius: 12px;
            font-size: .93rem;
            font-weight: 800;
            transition: all .2s;
            box-shadow: 0 8px 28px rgba(0, 0, 0, .25);
            align-self: flex-start;
            position: relative;
            z-index: 2;
        }

        .map-open-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 14px 36px rgba(0, 0, 0, .3);
        }

        .map-open-btn svg {
            width: 18px;
            height: 18px;
        }

        .location-right {
            flex: 1;
            position: relative;
        }

        .map-embed {
            width: 100%;
            height: 100%;
            min-height: 100vh;
            border: none;
            display: block;
        }

        @media (max-width: 900px) {
            .location-section {
                flex-direction: column;
                min-height: auto;
            }

            .location-left {
                width: 100%;
                padding: 60px 24px;
            }

            .location-right {
                height: 380px;
            }

            .map-embed {
                min-height: 380px;
            }
        }

        /* ── PAKET WIFI ── */
        .packages-section {
            background: linear-gradient(135deg, #f8fafc 0%, #eef2f6 100%);
            padding: 90px 60px;
            position: relative;
            overflow: hidden;
        }

        .packages-section::after {
            content: '';
            position: absolute;
            top: -50px;
            right: -50px;
            width: 300px;
            height: 300px;
            background: rgba(26, 115, 232, .06);
            border-radius: 50%;
            filter: blur(40px);
            pointer-events: none;
        }

        .packages-section::before {
            content: '';
            position: absolute;
            bottom: -50px;
            left: -50px;
            width: 300px;
            height: 300px;
            background: rgba(249, 115, 22, .05);
            border-radius: 50%;
            filter: blur(40px);
            pointer-events: none;
        }

        .packages-grid {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 24px;
            margin-top: 48px;
        }

        .package-card {
            background: var(--white);
            border: 2px solid var(--border);
            border-radius: var(--radius);
            padding: 32px 24px;
            width: calc(20% - 20px);
            min-width: 240px;
            transition: all .2s;
            display: flex;
            flex-direction: column;
            position: relative;
        }

        .package-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 35px rgba(0, 0, 0, .08);
            border-color: var(--blue);
        }

        .pkg-header {
            text-align: center;
            margin-bottom: 24px;
            padding-bottom: 20px;
            border-bottom: 1px dashed var(--border);
        }

        .pkg-badge {
            position: absolute;
            top: -14px;
            left: 50%;
            transform: translateX(-50%);
            background: var(--orange);
            color: var(--white);
            font-size: 0.75rem;
            font-weight: 800;
            padding: 6px 16px;
            border-radius: 20px;
            text-transform: uppercase;
            letter-spacing: 1px;
            white-space: nowrap;
        }

        .package-card h3 {
            font-size: 1.25rem;
            font-weight: 800;
            color: var(--text);
            margin-bottom: 12px;
        }

        .pkg-price {
            font-size: 1.45rem;
            font-weight: 900;
            color: var(--blue);
        }

        .pkg-price span {
            font-size: 0.85rem;
            color: var(--muted);
            font-weight: 600;
        }

        .pkg-features {
            list-style: none;
            margin-bottom: 30px;
            flex-grow: 1;
            text-align: left;
        }

        .pkg-features li {
            padding: 10px 0;
            font-size: 0.88rem;
            color: var(--text);
            font-weight: 500;
            display: flex;
            align-items: flex-start;
            gap: 10px;
            border-bottom: 1px solid var(--border);
        }

        .pkg-features li:last-child {
            border-bottom: none;
        }

        .pkg-features li::before {
            content: '✓';
            color: #22c55e;
            font-weight: 900;
            font-size: 1rem;
        }

        /* ── APP DOWNLOAD ── */
        .app-download {
            background: var(--white);
            padding: 90px 60px;
            overflow: hidden;
        }

        .app-download-inner {
            max-width: 1000px;
            margin: 0 auto;
            background: var(--light);
            border: 1px solid var(--border);
            border-radius: 30px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 60px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, .04);
        }

        .app-text {
            max-width: 50%;
        }

        .app-buttons {
            display: flex;
            gap: 16px;
            margin-top: 24px;
        }

        .store-btn {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            background: #000;
            color: #fff;
            padding: 12px 24px;
            border-radius: 14px;
            text-decoration: none;
            transition: transform 0.2s;
            box-shadow: 0 8px 20px rgba(0, 0, 0, .15);
        }

        .store-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 25px rgba(0, 0, 0, .25);
        }

        .store-btn span {
            font-size: 0.7rem;
            display: block;
            opacity: 0.8;
            line-height: 1;
            margin-bottom: 2px;
        }

        .store-btn strong {
            font-size: 1.1rem;
            display: block;
            letter-spacing: -0.5px;
            line-height: 1.2;
            font-weight: 700;
        }

        .app-image {
            max-width: 40%;
            transform: rotate(5deg) translateY(20px);
            filter: drop-shadow(-10px 20px 30px rgba(0, 0, 0, 0.1));
        }

        @media (max-width: 900px) {
            .app-download-inner {
                flex-direction: column;
                text-align: center;
                padding: 50px 24px;
            }

            .app-text {
                max-width: 100%;
                margin-bottom: 50px;
            }

            .app-text .section-sub {
                margin: 0 auto 30px;
            }

            .app-buttons {
                justify-content: center;
                flex-wrap: wrap;
            }

            .app-image {
                max-width: 80%;
                transform: none;
            }

            .packages-grid {
                flex-direction: column;
            }

            .package-card {
                width: 100%;
            }
        }

        /* ANIMATIONS */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }

            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .fade-in {
            animation: fadeInUp .7s ease both;
        }

        .fade-in-2 {
            animation: fadeInUp .7s .15s ease both;
        }

        .fade-in-3 {
            animation: fadeInUp .7s .3s ease both;
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
            nav {
                padding: 0 24px;
            }

            .nav-links {
                display: none;
            }

            section {
                padding: 60px 24px;
            }

            .hero {
                grid-template-columns: 1fr;
                padding: 60px 24px;
                min-height: auto;
                gap: 40px;
            }

            .hero-right {
                display: none;
            }

            .features-grid {
                grid-template-columns: 1fr;
            }

            .home-conn-inner {
                grid-template-columns: 1fr;
            }

            .promo-grid {
                grid-template-columns: 1fr;
            }

            .footer-grid {
                grid-template-columns: 1fr 1fr;
            }

            .cta-section {
                padding: 60px 24px;
            }

            footer {
                padding: 48px 24px 28px;
            }

            .speed-stats {
                grid-template-columns: repeat(2, 1fr);
            }
        }
    </style>
</head>

<body>

    <!-- NAV -->
    <nav>
        <div class="nav-logo">Net Satu Internews<span></div>
        <div class="nav-links">
            <a href="#">Beranda</a>
            <a href="#features">Fitur</a>
            <a href="#speedtest">Speed Test</a>
            <a href="#plans">Paket Promo</a>
            <a href="#download">Aplikasi</a>
            <a href="#location">Lokasi</a>
        </div>
        <a href="#download" class="nav-btn"
            onclick="alert('Belum memiliki akun ? Silahkan download aplikasi terlebih dahulu');">Berlangganan</a>
    </nav>

    <!-- HERO -->
    <section class="hero">
        <div class="hero-content">
            <div class="hero-badge fade-in">Live Availability Check</div>
            <h1 class="hero-title fade-in-2">Rasakan<br><span>Kecepatan<br>Internet<br></span>Terbaikmu</h1>
            <p class="hero-sub fade-in-3">Net Satu Internews delivers fiber-optic speeds for your home and business,
                with 99.9% uptime, zero throttling, and flexible plans for every budget.</p>
            <div class="hero-btns fade-in-3">
                <a href="#download" class="btn-primary"
                    onclick="alert('Belum memiliki akun ? Silahkan download aplikasi terlebih dahulu');">Lihat Paket
                    Promo</a>
                <a href="#speedtest" class="btn-outline">Test Kecepatan</a>
            </div>
        </div>
        <div class="hero-right fade-in-2">
            <div class="hero-slider" id="heroSlider">
                <div class="hero-slides" id="heroSlides">
                    <div class="hero-slide"><img
                            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format"
                            alt="Promo 1"></div>
                    <div class="hero-slide"><img
                            src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format"
                            alt="Promo 2"></div>
                    <div class="hero-slide"><img
                            src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&auto=format"
                            alt="Promo 3"></div>
                </div>

                <button class="slider-btn slider-prev" id="sliderPrev" aria-label="Previous image">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button class="slider-btn slider-next" id="sliderNext" aria-label="Next image">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                <div class="slider-dots" id="sliderDots">
                    <!-- Dots generated automatically by JS -->
                </div>
            </div>
        </div>
    </section>

    <!-- FEATURES -->
    <section class="features" id="features">
        <div class="text-center">
            <div class="section-tag">Kenapa Harus Net Satu Internews?</div>
            <h2 class="section-title">Fitur Premium Kami</h2>
            <p class="section-sub">Everything you need for a seamless online experience, from gaming to remote work.</p>
        </div>
        <div class="features-grid">
            <div class="feature-card">
                <div class="feature-icon">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                </div>
                <h3>Kecepatan Tinggi</h3>
                <p>Experience symmetrical speeds starting from 100 Mbps all the way up to 10 Gbps for heavy users and
                    businesses.</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                </div>
                <h3>Jaringan Stabil</h3>
                <p>No throttling, no data caps. Our network maintains 99.9% uptime SLA, keeping you connected when it
                    matters most.</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                </div>
                <h3>Pengelolaan data efisien dan aman</h3>
                <p>Built-in firewall, DDoS protection, and end-to-end encryption keep your home network and data safe at
                    all times.</p>
            </div>
        </div>
    </section>

    <!-- SPEED TEST -->
    <section class="speedtest" id="speedtest">
        <div class="text-center">
            <div class="section-tag">Test Your Connection</div>
            <h2 class="section-title">Test Kecepatan Internetmu?</h2>
        </div>
        <div class="speedtest-inner">
            <div class="speedtest-gauge">
                <svg class="gauge-svg" viewBox="0 0 100 100">
                    <circle class="gauge-bg" cx="50" cy="50" r="45" />
                    <circle class="gauge-fill" id="gaugeFill" cx="50" cy="50" r="45" />
                </svg>
                <div class="gauge-val" id="gaugeVal">0.00</div>
                <div class="gauge-unit">Mbps</div>
            </div>
            <div class="speed-stats">
                <div class="stat-box">
                    <div class="label">Download</div>
                    <div class="val" id="dlVal">– <span>Mbps</span></div>
                </div>
                <div class="stat-box">
                    <div class="label">Upload</div>
                    <div class="val" id="ulVal">– <span>Mbps</span></div>
                </div>
                <div class="stat-box">
                    <div class="label">Ping</div>
                    <div class="val" id="pingVal">– <span>ms</span></div>
                </div>
                <div class="stat-box">
                    <div class="label">Jitter</div>
                    <div class="val" id="jitterVal">– <span>ms</span></div>
                </div>
            </div>
            <button class="test-btn" id="startTest" onclick="runSpeedTest()">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                </svg>
                Start Test
            </button>
        </div>
    </section>





    <!-- PAKET WIFI -->
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
                <a href="#download" class="btn-primary" style="width:100%; text-align:center;"
                    onclick="alert('Belum memiliki akun ? Silahkan download aplikasi terlebih dahulu');">Pilih Paket</a>
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
                <a href="#download" class="btn-primary" style="width:100%; text-align:center;"
                    onclick="alert('Belum memiliki akun ? Silahkan download aplikasi terlebih dahulu');">Pilih Paket</a>
            </div>
            <!-- Card 3 -->
            <div class="package-card fade-in-3"
                style="border-color: var(--blue); box-shadow: 0 10px 30px rgba(26,115,232,.15);">
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
                <a href="#download" class="btn-primary" style="width:100%; text-align:center;"
                    onclick="alert('Belum memiliki akun ? Silahkan download aplikasi terlebih dahulu');">Pilih Paket</a>
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
                <a href="#download" class="btn-primary" style="width:100%; text-align:center;"
                    onclick="alert('Belum memiliki akun ? Silahkan download aplikasi terlebih dahulu');">Pilih Paket</a>
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
                <a href="#download" class="btn-primary" style="width:100%; text-align:center;"
                    onclick="alert('Belum memiliki akun ? Silahkan download aplikasi terlebih dahulu');">Pilih Paket</a>
            </div>
        </div>
    </section>

    <!-- APP DOWNLOAD -->
    <section class="app-download" id="download">
        <div class="app-download-inner">
            <div class="app-text">
                <div class="section-tag" style="color: var(--blue);">Aplikasi Mobile</div>
                <h2 class="section-title" style="color: var(--text);">Download NSI App</h2>
                <p class="section-sub"
                    style="margin-bottom:30px; color: var(--muted); max-width:400px; line-height:1.7;">Pantau penggunaan
                    kuota, bayar tagihan dengan mudah, dan dapatkan dukungan teknis lebih cepat langsung dari genggaman
                    Anda.</p>
                <div class="app-buttons">
                    <a href="#" class="store-btn">
                        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                            <path
                                d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.05-.46-2.09-.48-3.15 0-1.01.45-2.04.58-2.99-.4-1.84-1.89-3.41-5.32-2.93-8.08.3-1.74 1.34-2.85 2.89-3.23 1.15-.28 2.14.39 2.76.62.59.22 1.58.74 2.87.5 1.48-.27 2.45-1.12 2.5-1.16-1.55-1-2.05-2.61-1.72-3.87.27-1.04 1.09-1.88 1.95-2.34-.14-1.42 1.06-2.65 2.21-2.93-.05 1.58 1.16 2.88 2.15 3.33-1.05 1.11-2.3 2.1-1.42 3.6 0 .01 1.6 1.43 3.4 1.15-.02.48-.19.95-.53 1.35-.45.54-1.14.86-1.81.9-1.17.06-2.2-.42-2.85-.71-.62-.28-1.53-.74-2.58-.55-1.07.19-2.02.8-2.62 1.34-1.74 1.55-.91 4.54.49 6.27.91 1.12 1.87 2.03 2.85 2.05.98.02 1.42-.56 2.55-.56s1.64.58 2.58.56c1.04-.03 2.02-.91 2.91-2.05.61-.79 1.05-1.63 1.36-2.43-.88-.41-1.51-1.1-1.59-1.92-.1-1.11.45-2.05 1.06-2.5-1.63 1.08-3.87.65-4.8-.93zM15.1 4.41c-.48-.99-1.55-1.64-2.68-1.52-.08 1.2.64 2.37 1.59 2.98.53.33 1.14.53 1.77.53.07-1.34-.64-2.54-1.41-3.26-.06-.05-.12-.1-.17-.16-.03-.03-.07-.06-.1-.1z" />
                        </svg>
                        <div>
                            <span>Download on the</span>
                            <strong>App Store</strong>
                        </div>
                    </a>
                    <a href="#" class="store-btn">
                        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                            <path
                                d="M3.12 21.08a1.32 1.32 0 01-.12-1.93L13.1 8.87a.7.7 0 011 0l7.56 7.56c.55.55.16 1.5-.62 1.5H3.74a.8.8 0 01-.62-.85zM12.98 7.37c-.36-.45-1-.53-1.46-.22L2.73 13h10.25V7.37zM4.09 3.53a.85.85 0 00-1.2 0L1.44 4.97A3.2 3.2 0 00.5 7.23v8.83L11.5 5.06 4.09 3.53zM15.54.49a2.3 2.3 0 011.63.67l6.34 6.34a2.3 2.3 0 01.67 1.63v4.61l-8.64-8.64z" />
                        </svg>
                        <div>
                            <span>GET IT ON</span>
                            <strong>Google Play</strong>
                        </div>
                    </a>
                </div>
            </div>
            <div class="app-image fade-in-2">
                <svg class="phone-mockup" viewBox="0 0 200 400" width="240" fill="none"
                    style="margin: 0 auto; display: block;">
                    <rect x="5" y="5" width="190" height="390" rx="30" fill="#fff" stroke="#e2e8f0" stroke-width="10" />
                    <path d="M70 5h60a0 0 0 0 1 0 0v10a10 10 0 0 1-10 10H80a10 10 0 0 1-10-10V5a0 0 0 0 1 0 0z"
                        fill="#e2e8f0" />
                    <circle cx="100" cy="190" r="40" fill="#e8f0fe" />
                    <circle cx="100" cy="190" r="25" fill="#1a73e8" />
                    <rect x="30" y="250" width="140" height="20" rx="4" fill="#f8fafc" />
                    <rect x="30" y="280" width="100" height="10" rx="4" fill="#f8fafc" />
                    <rect x="30" y="310" width="140" height="10" rx="4" fill="#f8fafc" />
                    <rect x="30" y="330" width="80" height="10" rx="4" fill="#f8fafc" />
                </svg>
            </div>
        </div>
    </section>



    <!-- LOCATION / MAPS -->
    <section class="location-section" id="location">
        <!-- Left info panel -->
        <div class="location-left">
            <div class="location-tag">Temukan Kami</div>
            <h2 class="location-title">Kantor<br><span>Net Satu <br>Internews</span><br>Jember</h2>
            <p class="location-desc">Kunjungi kantor kami langsung atau hubungi tim kami. Kami siap melayani pemasangan
                dan konsultasi internet untuk rumah dan kantor Anda.</p>
            <div class="location-details">
                <div class="loc-item">
                    <a href="https://www.google.com/maps/search/?api=1&query=Jl.+Let%27+Jen%27+Suprapto+XI+GG+GUGUK+No.59,+RT.001%2FRW.030,+Lingkungan+Sumber+Pak,+Kebonsari,+Kec.+Sumbersari,+Kabupaten+Jember,+Jawa+Timur+68122"
                        target="_blank" class="loc-icon">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                    </a>
                    <div class="loc-text">
                        <strong>Alamat</strong>
                        <span>Jl. LetJend Suprapto XI GG GUGUK No.59, Kebonsari, Kec. Sumbersari<br> Jember, Jawa Timur
                            68122, Indonesia</span>
                    </div>
                </div>
                <div class="loc-item">
                    <a href="https://wa.me/6281235313199" target="_blank" class="loc-icon">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                    </a>
                    <div class="loc-text">
                        <strong>Telepon</strong>
                        <span>0812-3531-3199</span>
                    </div>
                </div>
                <div class="loc-item">
                    <div class="loc-icon">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div class="loc-text">
                        <strong>Jam Operasional</strong>
                        <span>Senin – Minggu, 24 Jam</span>
                    </div>
                </div>
                <div class="loc-item">
                    <a href="mailto:net1internews@gmail.com" class="loc-icon">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                    </a>
                    <div class="loc-text">
                        <strong>Email</strong>
                        <span>net1internews@gmail.com</span>
                    </div>
                </div>
            </div>
            <a href="https://www.google.com/maps/search/?api=1&query=Jl. Let' Jen' Suprapto XI GG GUGUK No.59, RT.001/RW.030, Lingkungan Sumber Pak, Kebonsari, Kec. Sumbersari, Kabupaten Jember, Jawa Timur 68122"
                target="_blank" rel="noopener noreferrer" class="map-open-btn" id="openMapsBtn">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Buka di Maps
            </a>
        </div>
        <!-- Right map panel -->
        <div class="location-right">
            <iframe class="map-embed"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.6644218841753!2d113.72265007482346!3d-8.169123681577977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd69566ba727dfd%3A0xeabde18d6e3bf8e2!2sJl.%20Letjen%20Suprapto%20XI%20Gg.%20Guguk%20No.59%2C%20RT.001%2FRW.030%2C%20Lingkungan%20Sumber%20Pak%2C%20Kebonsari%2C%20Kec.%20Sumbersari%2C%20Kabupaten%20Jember%2C%20Jawa%20Timur%2068122!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                title="Lokasi Kantor NSI WiFi">
            </iframe>
        </div>
    </section>

    <script>
        function runSpeedTest() {
            const btn = document.getElementById('startTest');
            const gaugeVal = document.getElementById('gaugeVal');
            const gaugeFill = document.getElementById('gaugeFill');
            const dl = document.getElementById('dlVal');
            const ul = document.getElementById('ulVal');
            const ping = document.getElementById('pingVal');
            const jitter = document.getElementById('jitterVal');

            btn.disabled = true;
            btn.innerHTML = '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" style="animation:spin 1s linear infinite;"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"/></svg> Testing...';

            let current = 0;
            const target = (Math.random() * 400 + 100).toFixed(1);
            const maxDash = 283;
            const interval = setInterval(() => {
                current += target / 60;
                if (current >= target) { current = target; clearInterval(interval); }
                const pct = Math.min(current / 1000, 1);
                gaugeFill.style.strokeDasharray = (pct * maxDash) + ' ' + maxDash;
                gaugeVal.textContent = parseFloat(current).toFixed(2);
            }, 30);

            setTimeout(() => {
                const dlSpeed = (Math.random() * 400 + 80).toFixed(1);
                const ulSpeed = (Math.random() * 100 + 20).toFixed(1);
                const pingMs = Math.floor(Math.random() * 20 + 3);
                const jitterMs = (Math.random() * 2 + 0.5).toFixed(1);
                dl.innerHTML = dlSpeed + ' <span>Mbps</span>';
                ul.innerHTML = ulSpeed + ' <span>Mbps</span>';
                ping.innerHTML = pingMs + ' <span>ms</span>';
                jitter.innerHTML = jitterMs + ' <span>ms</span>';
                btn.disabled = false;
                btn.innerHTML = '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"/></svg> Test Again';
            }, 3800);
        }


        // Hero Slider
        const slides = document.getElementById('heroSlides');
        if (slides) {
            let index = 0;
            const count = slides.children.length;
            const dotsContainer = document.getElementById('sliderDots');
            const prevBtn = document.getElementById('sliderPrev');
            const nextBtn = document.getElementById('sliderNext');
            let sliderTimer;

            // Create dots
            for (let i = 0; i < count; i++) {
                const dot = document.createElement('button');
                dot.className = `slider-dot ${i === 0 ? 'active' : ''}`;
                dot.onclick = () => { goToSlide(i); };
                dotsContainer.appendChild(dot);
            }

            function updateDots() {
                Array.from(dotsContainer.children).forEach((dot, i) => {
                    dot.className = `slider-dot ${i === index ? 'active' : ''}`;
                });
            }

            function goToSlide(idx) {
                index = idx;
                slides.style.transform = `translateX(-${index * 100}%)`;
                updateDots();
                resetTimer();
            }

            function nextSlide() {
                index = (index + 1) % count;
                goToSlide(index);
            }

            function prevSlide() {
                index = (index - 1 + count) % count;
                goToSlide(index);
            }

            function startTimer() {
                sliderTimer = setInterval(nextSlide, 4000);
            }

            function resetTimer() {
                clearInterval(sliderTimer);
                startTimer();
            }

            prevBtn.addEventListener('click', prevSlide);
            nextBtn.addEventListener('click', nextSlide);

            startTimer();
        }

        // Add spinner animation
        const style = document.createElement('style');
        style.textContent = '@keyframes spin { to { transform: rotate(360deg); } }';
        document.head.appendChild(style);

        // Simple scroll fade-in observer
        const obs = new IntersectionObserver((entries) => {
            entries.forEach(e => { if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'none'; } });
        }, { threshold: 0.1 });
        document.querySelectorAll('.feature-card, .promo-card, .conn-item, .speedtest-inner, .location-wrapper').forEach(el => {
            el.style.opacity = '0'; el.style.transform = 'translateY(24px)';
            el.style.transition = 'all 0.6s ease'; obs.observe(el);
        });
    </script>
</body>

</html>