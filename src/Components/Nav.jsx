import React from 'react';
import {Link } from 'react-router-dom'

const Nav = () => {
    
	return (
		<div className="flex nav-container  text-xs md:text-sm  text-gray_c">
            <svg width="53" height="53" viewBox="0 0 46 47"xmlns="http://www.w3.org/2000/svg">
                <path d="M45 1H1v38.077c9.527-.764 14.45.723 22.431 6.923 5.062-5.912 9.47-7.561 20.706-6.923L45 1z" fill="#fff" stroke="#000"/><path d="M23.454 42L18 36h12l-6.546 6z" fill="silver" stroke="#000"/><path d="M16.06 18h-3.24v-5.13h-4.5V18H5.08V5.4h3.24v4.95h4.5V5.4h3.24V18zm12.068-3.78l1.62-5.76h3.42L30.198 18h-3.33l-1.8-5.76-1.8 5.76h-3.33l-2.97-9.54h3.42l1.62 5.76 1.62-5.76h2.88l1.62 5.76zm8.908 0V18h-3.15V5.4h3.15v6.39h1.44l1.98-3.33h3.33l-2.7 4.59 2.7 4.95h-3.33l-2.07-3.78h-1.35zM11.26 29.835a44.794 44.794 0 0 1-4.73.275c-.719 0-1.247-.169-1.584-.506-.337-.337-.506-.865-.506-1.584V24.5c0-.77.172-1.327.517-1.672.352-.352.913-.528 1.683-.528h3.96v1.54H7.08c-.44 0-.66.22-.66.66v3.52c0 .169.048.304.143.407a.574.574 0 0 0 .407.143c.843 0 1.613-.018 2.31-.055V26.92H7.85V25.6h3.41v4.235zm3.302-1.265c.389 0 .829-.073 1.32-.22v-.66h-1.595a.373.373 0 0 0-.385.385v.11a.373.373 0 0 0 .385.385h.275zm-2.035-4.29a33.71 33.71 0 0 1 3.63-.22c.499 0 .898.15 1.2.451.3.3.45.7.45 1.199V30h-1.705l-.11-.55c-.345.227-.7.396-1.067.506-.36.103-.664.154-.913.154h-.385c-.498 0-.898-.15-1.199-.451-.3-.3-.45-.7-.45-1.199v-.495c0-.499.15-.898.45-1.199.3-.3.7-.451 1.2-.451h2.254v-.44a.373.373 0 0 0-.385-.385c-.476 0-1.005.022-1.584.066-.572.044-1.034.077-1.386.099V24.28zm10.172-.22c.594 0 1.052.22 1.375.66.337-.227.7-.392 1.09-.495.395-.11.747-.165 1.055-.165h.11c.499 0 .898.15 1.2.451.3.3.45.7.45 1.199V30h-1.925v-3.96a.373.373 0 0 0-.385-.385h-.055c-.33 0-.752.073-1.265.22V30h-1.925v-3.96a.373.373 0 0 0-.385-.385h-.055c-.33 0-.752.073-1.265.22V30h-1.925v-5.83H20.5l.11.55a3.83 3.83 0 0 1 1.056-.495c.367-.11.675-.165.924-.165h.11zm8.523 1.375c-.293 0-.44.147-.44.44v.605h1.87v-.605c0-.293-.147-.44-.44-.44h-.99zm3.135 4.455c-1.415.147-2.699.22-3.85.22-.499 0-.898-.15-1.199-.451-.3-.3-.451-.7-.451-1.199v-2.64c0-.55.154-.979.462-1.287.315-.315.748-.473 1.298-.473h2.2c.55 0 .979.158 1.287.473.315.308.473.737.473 1.287v2.035h-3.795v.44a.373.373 0 0 0 .385.385c.726 0 1.79-.055 3.19-.165v1.375zm.986-1.43c1.488.11 2.662.165 3.52.165a.373.373 0 0 0 .385-.385v-.385h-2.365c-.499 0-.899-.15-1.2-.451-.3-.3-.45-.7-.45-1.199v-.385c0-.499.15-.898.45-1.199.301-.3.701-.451 1.2-.451h3.74v1.43h-3.08a.373.373 0 0 0-.385.385.373.373 0 0 0 .385.385h1.98c.498 0 .898.15 1.199.451.3.3.45.7.45 1.199v.44c0 .499-.15.898-.45 1.199-.301.3-.7.451-1.2.451-1.297 0-2.69-.073-4.18-.22v-1.43z" fill="#000"/>
            </svg>
	        <Link  to="/" className="tab flex">Store</Link>
			<div className="mx-16 lg:mx-64"></div>
			<div className="mx-0 lg:mx-32"></div>
			<div className="mx-0 lg:mx-16"></div>
			<div className="mx-0 lg:mx-16"></div>
			<Link to="/" className="tab flex">
                <svg width="17" height="19" style={{marginRight:"4%"}} fill="none"><g clipPath="url(#clip0)">
                    <path d="M3.19 13.69h1.06a2.13 2.13 0 0 0 2.13-2.13v-.68a5.37 5.37 0 0 1-1.02-1.92c-.02-.12-.14-.17-.21-.26-.4-.4-.49-1.09-.18-1.58.04-.07.11-.14.1-.23V5.02c.03-.75.24-1.53.77-2.09a2.96 2.96 0 0 1 1.61-.83 5.35 5.35 0 0 1 2.31.05 2.8 2.8 0 0 1 1.65 1.12c.34.5.48 1.1.5 1.68.02.64.01 1.27.01 1.9-.01.13.1.22.15.33.28.52.16 1.23-.3 1.6-.12.09-.14.24-.19.36-.2.63-.53 1.21-.95 1.72v.7a2.13 2.13 0 0 0 2.12 2.13h1.06s1.93.53 3.19 3.18v1.07A1.06 1.06 0 0 1 15.94 19H1.06A1.06 1.06 0 0 1 0 17.94v-1.07c1.26-2.65 3.19-3.18 3.19-3.18z" fill="#B8B8B8"/></g><circle cx="14" cy="2" r="2" fill="#7DDF4E"/><defs><clipPath id="clip0"><path fill="#fff" transform="matrix(-1 0 0 1 17 2)" d="M0 0h17v17H0z"/></clipPath></defs>
                </svg>
                <span>RawHawk01</span>
            </Link>
			<div className="hidden md:flex tab bg-primary text-white" >
                <Link to="/" >Get HWK Games</Link>
            </div>
		</div>
	);
};

export default Nav;
