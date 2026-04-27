import type { SVGAttributes } from 'react';

export default function AppLogoIcon(props: SVGAttributes<SVGElement>) {
    return (
        <svg {...props} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="8" fill="currentColor" />
            <path d="M10 10H14L22 22H18L10 10Z" fill="white" />
            <path d="M22 10H18L10 22H14L22 10Z" fill="white" />
        </svg>
    );
}
