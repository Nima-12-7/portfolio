
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/portfolio/home",
    "route": "/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/home"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/resume"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 734, hash: '8571cabe2c974d085e0e3aa6b25c620da797679b60ea06ea67cab4eb131652d9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1068, hash: '6bc52a07a9ff2f0ae74ec4337193ba5cd670842507ce16a6a37ec23967b1d5ef', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 6333, hash: '7c103e33d4d844530da352fd7bee751d4e2c5b100d6cf98e4965fbc4b39e913f', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'resume/index.html': {size: 6217, hash: '8ff9692d542e1aa410d9da664be8fd8df96d00c9bf3cb0f23573e2b8e09f76ca', text: () => import('./assets-chunks/resume_index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 5731, hash: '32a9193690138c2fd884bac0417673e74f01aa9c6bcbcfbc837900e73f526509', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 5667, hash: 'b9b4d486ddef763efa8bdc443b142c393517d560a3c7ed520c240da7e3bcb454', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-WD44KHFT.css': {size: 167, hash: 'kL4sGX4aVaE', text: () => import('./assets-chunks/styles-WD44KHFT_css.mjs').then(m => m.default)}
  },
};
