// https://www.npmjs.com/package/typescript-plugin-css-modules
// https://apoorv.blog/typed-css-modules-reactjs/
// https://spin.atomicobject.com/2020/06/22/css-module-typescript/#comment-680455
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.sass' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.less' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.styl' {
  const classes: { [key: string]: string };
  export default classes;
}
