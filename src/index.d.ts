declare module '*.css';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module "*.json";

declare module '*.scss' {
    const content: {[className: string]: string};
    export default content;
}