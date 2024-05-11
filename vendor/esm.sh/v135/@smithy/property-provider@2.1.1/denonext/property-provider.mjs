/* esm.sh - esbuild bundle(@smithy/property-provider@2.1.1) denonext production */
var s=class o extends Error{constructor(r,e=!0){super(r),this.tryNextLink=e,this.name="ProviderError",Object.setPrototypeOf(this,o.prototype)}static from(r,e=!0){return Object.assign(new this(r.message,e),r)}};var p=class o extends s{constructor(r,e=!0){super(r,e),this.tryNextLink=e,this.name="CredentialsProviderError",Object.setPrototypeOf(this,o.prototype)}};var u=class o extends s{constructor(r,e=!0){super(r,e),this.tryNextLink=e,this.name="TokenProviderError",Object.setPrototypeOf(this,o.prototype)}};var w=(...o)=>async()=>{if(o.length===0)throw new s("No providers in chain");let r;for(let e of o)try{return await e()}catch(t){if(r=t,t?.tryNextLink)continue;throw t}throw r};var v=o=>()=>Promise.resolve(o);var b=(o,r,e)=>{let t,n,i,a=!1,c=async()=>{n||(n=o());try{t=await n,i=!0,a=!1}finally{n=void 0}return t};return r===void 0?async f=>((!i||f?.forceRefresh)&&(t=await c()),t):async f=>((!i||f?.forceRefresh)&&(t=await c()),a?t:e&&!e(t)?(a=!0,t):(r(t)&&await c(),t))};export{p as CredentialsProviderError,s as ProviderError,u as TokenProviderError,w as chain,v as fromStatic,b as memoize};
//# sourceMappingURL=property-provider.mjs.map